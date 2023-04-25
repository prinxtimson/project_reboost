<?php

namespace Rainestech\AdminApi\Utils;

use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Rainestech\AdminApi\Entity\Roles;
use Rainestech\AdminApi\Entity\Users;
use Rainestech\AdminApi\Notifications\EmailVerification;
use Rainestech\AdminApi\Requests\RegistrationRequest;
use Rainestech\AdminApi\Requests\UsersRequest;
use Rainestech\Personnel\Entity\Candidates;
use Rainestech\Personnel\Entity\Recruiters;
use Rainestech\Personnel\Entity\Tasks;

trait Register {

    /**
     * Handle a registration request for the application.
     *
     * @param UsersRequest $request
     * @return JsonResponse|Response
     */
    public function register(UsersRequest $request) {
        event(new Registered($user = $this->create($request->all(), true)));

        if ($role = Roles::where('role', $request->input('role'))->first()) {
            $user->roles()->attach($role->id);
            if ($role->role == 'CANDIDATE') {
                if ($candidate = Candidates::where("email", $user->email)->orderBy('id', 'desc')->first()) {
                    $candidate->userId = $user->id;
                    $candidate->update();

                    $user->avatar = $candidate->avatar;
                    $user->save();
                }
            }

            if ($role->role == 'RECRUITER') {
                $recruiters = new Recruiters($request->except(['logo', 'username', 'password']));
                $recruiters->userId = $user->id;
                $recruiters->save();
                Tasks::create([
                    'title' => 'Recruiter Approval',
                    'description' => $recruiters->companyName . ' is awaiting approval',
                ]);
            }
        }

        if ($request->has('status')) {
            $user->status = $request->input('status');
            $user->firstName = $request->input('firstName');
            $user->lastName = $request->input('lastName');
            $user->save();
        }

        if ($response = $this->registered($request, $user)) {
            return $response;
        }

        return new Response('', 201);
    }

    /**
     * Handle a registration request for quest registration
     *
     * @param RegistrationRequest $request
     * @return JsonResponse|Response
     */
    public function registerVerify(RegistrationRequest $request)
    {
        event(new Registered($user = $this->create($request->all(), false)));

        $role = Roles::where('defaultRole', true)->first();

        if ($role) {
            $user->roles()->attach($role->id);
        }

        $notification = new EmailVerification();
        $notification->sendVerification($user);

//        if ($response = $this->registered($request, $user)) {
//            return $response;
//        }

        $recruiters = new Recruiters($request->except(['logo', 'username', 'password']));
        $recruiters->userId = $user->id;
        $recruiters->fsId = $request->input('logo.id');
        $recruiters->editor = $user->id;
        $recruiters->save();

        $user->passportID = $request->input('logo.id');
        $user->update();

        return \response()->json($user);
    }

    /**
     * Get the guard to be used during registration.
     *
     * @return StatefulGuard
     */
    protected function guard()
    {
        return Auth::guard('api');
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param array $data
     * @param bool $status
     * @return Users
     */
    protected function create(array $data, bool $status)
    {
        $adminVerified = false;
        if($data['role'] === 'ADMIN' || $data['role'] === 'CANDIDATE'){
            $adminVerified = true;
        }
        
        return Users::create([
            'username' => $data['username'],
            'firstName' => $data['firstName'],
            'lastName' => $data['lastName'],
            'status' => $status,
            'adminVerified' => $adminVerified,
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'companyName' => $data['companyName'],
            'location' => $data['location']
        ]);
    }

    public function registered(Request $request, $user) {
        return response()->json($user);
    }
}
