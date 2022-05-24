<?php

namespace Rainestech\Personnel\Controllers;

use App\Notifications\NotShortlisted;
use App\Notifications\Shortlisted;
use Carbon\Carbon;
use Rainestech\AdminApi\Controllers\BaseApiController;
use Rainestech\Personnel\Entity\Candidates;
use Rainestech\Personnel\Entity\RecruiterCandidates;
use Rainestech\Personnel\Entity\Recruiters;
use Rainestech\Personnel\Entity\RecruiterSearchTerms;
use Rainestech\Personnel\Entity\RecruiterToken;
use Rainestech\Personnel\Entity\Snippets;
use Rainestech\Personnel\Requests\SearchRequest;
use Rainestech\Personnel\Requests\ShortListRequest;
use Rainestech\Personnel\Requests\SnippetRequest;
use Illuminate\Support\Facades\Notification;
use Ramsey\Uuid\Uuid;

class SearchController extends BaseApiController
{
    public function search(SearchRequest $request) {
        $user = auth('api')->user();
        if ($user->companyName) {
            $profile = Recruiters::where('userId', $user->id)->first();
        }

        $search = collect();
        foreach ($request->input('skills') as $term) {
            if ($profile) {
                if (!$analytics = RecruiterSearchTerms::where('rid', $profile->id)->where('term', $term)->first()) {
                    $analytics = new RecruiterSearchTerms();
                }

                $analytics->rid = $profile->id;
                $analytics->term = $term;
                $analytics->freq = $analytics->freq ? ($analytics->freq + 1) : 1;
                $analytics->save();
            }

            foreach(Candidates::where('skillSet', 'like', '%'. $term . '%')->get() as $q) {
                $search->push($q);
            }
        }

        $weight = $search->countBy('email')->all();
        $resp = [];

        foreach ($search->unique('id')->values()->all() as $val) {
            $val['weight'] = $weight[$val['email']];
            $resp[] = $val;
        }

        array_multisort(array_column($resp, 'weight'), SORT_DESC, $resp);

        return response()->json($resp);
    }

    public function myShortlist() {
        $user = auth('api')->user();
        if ($user->companyName) {
            $shortList = Recruiters::where('userId', $user->id)->first();
            return response()->json($shortList->candidates);
        } else {
            $shortList = Recruiters::with(['candidates' => function ($query) use ($user) {
                    $query->where('userId', $user->id); }])
                ->get();

            return response()->json($shortList);
        }
    }

    public function myFavourite() {
        $user = auth('api')->user();
        if ($user->companyName) {
            $fovourites = Candidates::where('userId', $user->id)->first();
            return response()->json($fovourites->candidates);
        } else {
            $fovourites = Candidates::with(['recruiters' => function ($query) use ($user) {
                    $query->where('userId', $user->id); }])
                ->get();

            return response()->json($fovourites);
        }
    }

    public function getShortlist($id) {
            $shortList = RecruiterCandidates::with(['candidate'])->where('rid', $id)->get();
            return response()->json($shortList);
    }

    public function getFavourite($id) {
        $favourite = RecruiterCandidates::with(['recruiter'])->where('cid', $id)->get();
        return response()->json($favourite);
    }

    public function shortList(ShortListRequest $request) {
        $profile = Recruiters::where('userId', auth('api')->id())->first();
        
        $candidate = Candidates::find($request->input('id'));

        if (strtolower($request->input('action')) == 'add'){
            if (!$profile->candidates()->find($request->input('id'))) {
                $profile->candidates()->attach($request->input('id'));
                Notification::send($candidate->user, new Shortlisted($profile));
            }
        }else {
            $profile->candidates()->detach($request->input('id'));
            Notification::send($candidate->user, new NotShortlisted($profile));
        }
            
        return response()->json([]);
    }

    public function favourite(ShortListRequest $request) {
        $profile = Candidates::where('userId', auth('api')->id())->first();
        
        $recruiter = Recruiters::find($request->input('id'));

        if (strtolower($request->input('action')) == 'add'){
            if (!$profile->recruiters()->find($request->input('id'))) {
                $profile->recruiters()->attach($request->input('id'));
                Notification::send($recruiter->user, new Shortlisted($profile));
            }
        }else {
            $profile->recruiters()->detach($request->input('id'));
            Notification::send($recruiter->user, new NotShortlisted($profile));
        }
            
        return response()->json([]);
    }

    public function getToken() {
        if (!$token = RecruiterToken::where('userId', auth('api')->id())->first()) {

            $token = new RecruiterToken();
            $token->userId = auth('api')->id();
            $token->token = Uuid::uuid3(Uuid::NAMESPACE_DNS, auth('api')->user()->email);
            $token->issuedDate = Carbon::now();
            $token->save();
        }

        return response()->json($token);
    }

    public function getSnippet($name) {
        $snippet = Snippets::where('name', $name)->first();

        if (!$snippet) {
            return $this->jsonError(404, "Resource not found!");
        }
        return response()->json($snippet);
    }

    public function getSnippets() {
        return response()->json(Snippets::all());
    }

    public function saveSnippet(SnippetRequest $request) {
        if ($request->has('id')) {
            $snippet = Snippets::find($request->input('id'));

            if (!$snippet) {
                return $this->jsonError(404, "Resource not found!");
            }
        } else {
            $snippet = new Snippets();
        }

        $snippet->fill($request->except('id'));
        $snippet->save();

        return response()->json($snippet);
    }

    public function deleteSnippet($id) {
        if (!$snippet = Snippets::find($id)) {
            return $this->jsonError(404, "Resource not found!");
        }

        $snippet->delete();
        return response()->json([]);
    }

    public function getSearchAnalytics($rid) {
        return response()->json(RecruiterSearchTerms::where('rid', $rid)->orderBy('updated_at', 'desc')->get());
    }
}