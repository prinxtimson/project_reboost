<?php

namespace Rainestech\Personnel\Controllers;

use App\Notifications\ProfileUpdated;
use Carbon\Carbon;
use Rainestech\AdminApi\Controllers\BaseApiController;
use Rainestech\AdminApi\Entity\Documents;
use Rainestech\AdminApi\Entity\Users;
use Rainestech\AdminApi\Utils\EmailNotifications;
use Rainestech\AdminApi\Utils\ErrorResponse;
use Rainestech\AdminApi\Utils\LocalStorage;
use Rainestech\Personnel\Entity\Candidates;
use Rainestech\Personnel\Entity\Recruiters;
use Rainestech\Personnel\Entity\SkillSet;
use Rainestech\Personnel\Requests\CandidatesRequest;
use Rainestech\Personnel\Requests\RecruiterRequest;
use Illuminate\Http\Request;
use Notification;

class ProfileController extends BaseApiController {
    use ErrorResponse, LocalStorage;
    public function recruiters() {
        return response()->json(Recruiters::whereNotNull('userId')->paginate(20));
    }

    public function recruitersByDate() {
        $recruiters = Recruiters::whereNotNull('userId')->get();
        return response()->json($recruiters->groupBy(function ($data){
            return Carbon::parse($data->created_at)->format('m-Y');
        }));
    }

    public function getSkillSets() {
        return response()->json(SkillSet::all());
    }

    public function candidates() {
        return response()->json(Candidates::whereNotNull('userId')->paginate(20));
    }

    public function candidatesByDate() {
        $candidates = Candidates::whereNotNull('userId')->get();
        return response()->json($candidates->groupBy(function ($data){
            return Carbon::parse($data->created_at)->format('m-Y');
        }));
    }

    public function getRecruiterByUserID($userID) {
        if (!$p = Recruiters::where('userId', $userID)->with("user")->first())
            return $this->jsonError(404, 'Recruiter Record Not Found!');

        return response()->json($p);
    }

    public function getCandidateByUserID($userID) {
        if (!$p = Candidates::where('userId', $userID)->with(["user", "projects"])->first())
            return $this->jsonError(404, 'Candidate Record Not Found!');

        return response()->json($p);
    }

    public function getMyProfile() {
        $user = auth('api')->user();
        if ($user->companyName) {
            if (!$p = Recruiters::with( 'logo')->where('userId', auth('api')->id())->first())
                return $this->jsonError(404, 'Recruiter Record Not Found!');

            return response()->json($p);
        }

        if (!$p = Candidates::with('projects')->where('userId', auth('api')->id())->first())
            return $this->jsonError(404, 'Candidate Record Not Found!');

        return response()->json($p);
    }

    public function saveRecruiter(RecruiterRequest $request)
    {
        if ($request->has('id')) {
            return $this->updateRecruiter($request);
        }

        $pID = $request->input('user.id');
        if (Recruiters::where('userId', $pID)->exists())
            return $this->jsonError(400, 'Record Exists for selected member. Edit Record instead.');

        $recruiters = new Recruiters($request->except(['logo', 'user']));
        $recruiters->userId = $request->input('user.id');
        $recruiters->fsId = $request->input('logo.id');
        $recruiters->save();

        $user = Users::find($recruiters->userId);
        if ($user) {
            $user->passportID = $recruiters->fsId;
            $user->update();
        }

        $recruiters->loadWith();

        return response()->json($recruiters);
    }

    public function updateRecruiter(RecruiterRequest $request) {
        $user = auth('api')->user();
        if (!$recruiters = Recruiters::find($request->input('id')))
            return $this->jsonError(404, 'Record Not Found for Update');

        $recruiters->fill($request->except(['user', 'logo', 'id']));
        $recruiters->userId = $request->input('user.id');
        $recruiters->fsId = $request->input('logo.id');
        $recruiters->update();

        $user->notify(new ProfileUpdated($user));

        return response()->json(Recruiters::where('id', $recruiters->id)
            ->first());
    }

    public function saveCandidate(CandidatesRequest $request)
    {
        if ($request->has('id')) {
            return $this->updateCandidate($request);
        }

        $pID = $request->input('user.id');
        if (Candidates::where('userId', $pID)->exists())
            return $this->jsonError(400, 'Record Exists for selected candidate. Edit Record instead.');

        $candida = new Candidates($request->except(['user']));
        $candida->userId = $request->input('user.id');
        $candida->save();

        return response()->json($candida);
    }

    public function changeStatus(Request $request) {
        $user = auth('api')->user();
        if ($user->companyName) {
            $profile = Recruiters::where('userId', $user->id)->first();
            $profile->update([
                'isRecruiting' => $request->input('status')
            ]);
            return response()->json($profile);
        } else {
            $profile = Candidates::where('userId', $user->id)->first();
            $profile->update([
                'isAvailable' => $request->input('checked')
            ]);

            return response()->json($profile);
        }
    }

    public function updateCandidate(CandidatesRequest $request) {
        $user = auth('api')->user();
        if (!$candidates = Candidates::find($request->input('id')))
            return $this->jsonError(404, 'Record Not Found for Update');

        $candidates->fill($request->except(['user', 'id', 'availability']));
        $candidates->securedJob = $request->input('availability') === 'securedJob' ? true : false;
        $candidates->isAvailable = $request->input('availability') === 'available' ? true : false;
        $candidates->userId = $request->input('user.id');
        $candidates->update();

        $user->notify(new ProfileUpdated($user));

        return response()->json(Candidates::with('user')
            ->where('id', $candidates->id)
            ->first());
    }

    public function removeRecruiter($id) {
        $recruiter = Recruiters::find($id);

        if (!$recruiter) {
            return $this->jsonError(404, 'Profile Not Found!');
        }

        foreach (Documents::where('editor', $recruiter->userId)->get() as $doc) {
            $doc->delete();
        }
        $recruiter->user()->delete();
        $recruiter->delete();
        return response()->json([]);
    }

    public function deleteProfile() {
        $user = auth('api')->user();
        $recruiter = Recruiters::where('userId', $user->id)->first();
        $candidate = Candidates::where('userId', $user->id)->first();

        if ($recruiter) {
            foreach (Documents::where('editor', $recruiter->userId)->get() as $doc) {
                $doc->delete();
            }
            $recruiter->user()->delete();
            $recruiter->delete();
        }

        if ($candidate) {
            foreach (Documents::where('editor', $candidate->userId)->get() as $doc) {
                $doc->delete();
            }
            $candidate->user()->delete();
            $candidate->delete();
        }

        return response()->json([]);
    }

    public function removeCandidate($id) {
        $candidate = Candidates::find($id);

        if (!$candidate) {
            return $this->jsonError(404, "Candidate Not Found");
        }

        foreach (Documents::where('editor', $candidate->userId)->get() as $doc) {
            $doc->delete();
        }
        $candidate->user()->delete();
        $candidate->projects()->delete();

        $candidate->delete();

        return response()->json([]);
    }

    public function verify($id) {
        if (!$recruiter = Recruiters::find($id)) {
            return $this->jsonError(422, 'Recruiter not found for verification');
        }

        $user = Users::find($recruiter->userId);
        if ($user && !$user->adminVerified) {
           
            $user->adminVerified = true;
            $user->status = true;
            $user->save();

            $recruiter->update([
                'rejectionReason' => null
            ]);
            $recruiter->refresh()->load("user");

            $mail = new EmailNotifications();
            $mail->sendVerificationApproved($user);
        }

        return response()->json($recruiter);
    }

    public function reject(Request $request, $id) {
        if (!$recruiter = Recruiters::find($id)) {
            return $this->jsonError(422, 'Recruiter not found for verification');
        }

        $recruiter->update([
            'rejectionReason' => $request->input('reason')
        ]);

        $recruiter->refresh()->load("user");

        $user = Users::find($recruiter->userId);
        if ($user && $user->adminVerified) {
            $user->adminVerified = false;
            $user->status = false;
            $user->save();
        }

        return response()->json($recruiter);
    }
}