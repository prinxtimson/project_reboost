<?php

use Rainestech\Personnel\Controllers\ActivityController;
use Rainestech\Personnel\Controllers\ChatController;
use Rainestech\Personnel\Controllers\NotificationController;
use Rainestech\Personnel\Controllers\ProfileController;
use Rainestech\Personnel\Controllers\RequestController;
use Rainestech\Personnel\Controllers\SearchController;
use Rainestech\Personnel\Controllers\TaskController;

Route::group(['middleware' => 'admin.api', 'prefix' => 'profile'], function () {
    Route::get('/skillset', [ProfileController::class, 'getSkillSets'])->name('skillset.index');
    Route::get('/recruiters', [ProfileController::class, 'recruiters'])->name('recruiter.index');
    Route::get('/recruiters/by-date', [ProfileController::class, 'recruitersByDate'])->name('recruiter.by-date');
    Route::get('/', [ProfileController::class, 'getMyProfile'])->middleware('access:ROLE_PROFILE')->name('profile.index');
    Route::get('/candidates', [ProfileController::class, 'candidates'])->name('candidates.index');
    Route::get('/candidates/by-date', [ProfileController::class, 'candidatesByDate'])->name('candidates.by-date');
    Route::get('/recruiters/{id}', [ProfileController::class, 'getRecruiterByUserID'])->name('recruiter.user.id');
    Route::get('/candidates/{id}', [ProfileController::class, 'getCandidateByUserID'])->name('candidate.user.id');
    Route::post('/recruiters', [ProfileController::class, 'saveRecruiter'])->middleware('access:ROLE_PROFILE,ROLE_ADMIN_RECRUITERS')->name('recruiter.save');
    Route::put('/recruiters', [ProfileController::class, 'updateRecruiter'])->middleware('access:ROLE_PROFILE,ROLE_ADMIN_RECRUITERS')->name('recruiter.update');
    Route::put('/status', [ProfileController::class, 'changeStatus'])->middleware('access:ROLE_PROFILE,ROLE_ADMIN_RECRUITERS')->name('status.update');
    Route::post('/candidates', [ProfileController::class, 'saveCandidate'])->middleware('access:ROLE_PROFILE')->name('candidate.save');
    Route::put('/candidates', [ProfileController::class, 'updateCandidate'])->middleware('access:ROLE_PROFILE')->name('candidate.update');
    Route::delete('/recruiters/remove/{id}', [ProfileController::class, 'removeRecruiter'])->middleware('access:ROLE_PROFILE,ROLE_ADMIN_RECRUITERS')->name('recruiter.delete');
    Route::delete('/candidates/remove/{id}', [ProfileController::class, 'removeCandidate'])->middleware('access:ROLE_PROFILE')->name('candidate.delete');
    Route::get('/recruiters/verify/{id}', [ProfileController::class, 'verify'])->middleware('access:ROLE_ADMIN_RECRUITERS')->name('admin.recruiter.verify');
    Route::put('/recruiters/reject/{id}', [ProfileController::class, 'reject'])->middleware('access:ROLE_ADMIN_RECRUITERS')->name('admin.recruiter.reject');
});

Route::group(['middleware' => 'admin.api'], function () {
    Route::delete('/rup', [ProfileController::class, 'deleteProfile'])->middleware('access:ROLE_PROFILE,ROLE_ADMIN_RECRUITERS')->name('profile.delete');
});

Route::group(['middleware' => 'admin.api', 'prefix' => 'chats'], function () {
    Route::get('/friends', [ChatController::class, 'friends'])->middleware('access:ROLE_CHAT')->name('chats.friends');
    Route::get('/contacts', [ChatController::class, 'contacts'])->middleware('access:ROLE_CHAT')->name('chats.contacts');
    Route::post('/friends', [ChatController::class, 'saveFriends'])->middleware('access:ROLE_CHAT')->name('chats.friends.save');
});

Route::group(['middleware' => 'admin.api', 'prefix' => 'search'], function () {
    Route::post('/', [SearchController::class, 'search'])->middleware('access:ROLE_SEARCH')->name('search.candidates');
    Route::get('/shortlist', [SearchController::class, 'myShortlist'])->middleware('access:ROLE_SEARCH,ROLE_SHORTLIST')->name('search.shortlist');
    Route::get('/shortlist/by-date', [SearchController::class, 'getShortlistByDate'])->middleware('access:ROLE_SEARCH,ROLE_SHORTLIST,ROLE_ADMIN')->name('search.shortlist.by-date');
    Route::get('/terms/{id}', [SearchController::class, 'getSearchAnalytics'])->middleware('access:ROLE_SEARCH,ROLE_SHORTLIST,ROLE_ADMIN')->name('search.analytics');
    Route::get('/shortlist/{id}', [SearchController::class, 'getShortlist'])->middleware('access:ROLE_SEARCH,ROLE_SHORTLIST,ROLE_ADMIN')->name('search.recruiter.shortlist');
    Route::post('/shortlist', [SearchController::class, 'shortList'])->middleware('access:ROLE_SEARCH,ROLE_SHORTLIST')->name('search.shortlist.actions');

    Route::get('/favourite', [SearchController::class, 'myFavourite'])->middleware('access:ROLE_SEARCH,ROLE_SHORTLIST')->name('search.favourite');
    Route::get('/favourite/{id}', [SearchController::class, 'getFavourite'])->middleware('access:ROLE_SEARCH,ROLE_SHORTLIST,ROLE_ADMIN')->name('search.candidate.favourite');
    Route::post('/favourite', [SearchController::class, 'favourite'])->middleware('access:ROLE_SEARCH,ROLE_SHORTLIST')->name('search.favourite.actions');

    Route::get('/token', [SearchController::class, 'getToken'])->middleware('access:ROLE_SEARCH')->name('search.token');
});


// Candidates Recruiter Requests
Route::group(['middleware' => 'admin.api', 'prefix' => 'request'], function () {
    Route::get('/', [RequestController::class, 'index'])->middleware('access:ROLE_ADMIN_RECRUITERS,ROLE_SEARCH')->name('request.index');
    Route::get('/list', [RequestController::class, 'indexList'])->middleware('access:ROLE_ADMIN_RECRUITERS,ROLE_SEARCH')->name('request.list');
    Route::get('/rid/{id}', [RequestController::class, 'getRecruiterRequest'])->middleware('access:ROLE_ADMIN_RECRUITERS,ROLE_SEARCH')->name('request.recruiter');
    Route::get('/list/rid/{id}', [RequestController::class, 'getRecruiterRequestList'])->middleware('access:ROLE_ADMIN_RECRUITERS,ROLE_SEARCH')->name('request.recruiter.list');
    Route::get('/list/cid/{id}', [RequestController::class, 'getCandidateRequestList'])->middleware('access:ROLE_ADMIN_RECRUITERS,ROLE_PROFILE')->name('request.candidates.list');
    Route::post('/', [RequestController::class, 'save'])->middleware('access:ROLE_ADMIN_RECRUITERS,ROLE_SEARCH')->name('request.save');
    Route::post('/all', [RequestController::class, 'saveAll'])->middleware('access:ROLE_ADMIN_RECRUITERS,ROLE_SEARCH')->name('request.save.all');
    Route::delete('/remove/{id}', [RequestController::class, 'delete'])->middleware('access:ROLE_ADMIN_RECRUITERS,ROLE_SEARCH')->name('request.delete');
    Route::get('/toggle/{id}', [RequestController::class, 'toggleRequest'])->middleware('access:ROLE_ADMIN_RECRUITERS')->name('request.toggle.approve');
});

// Snippets Requests
Route::group(['middleware' => 'admin.api', 'prefix' => 'snippets'], function () {
    Route::get('/', [SearchController::class, 'getSnippets'])->name('snippet.index');
    Route::get('/name/{name}', [SearchController::class, 'getSnippet'])->name('snippet.name');
    Route::post('/', [SearchController::class, 'saveSnippet'])->name('snippet.save');
    Route::delete('/remove/{id}', [SearchController::class, 'deleteSnippet'])->name('snippet.delete');
});

Route::group(['middleware' => 'admin.api', 'prefix' => 'notification'], function () {
    Route::get('/', [NotificationController::class, 'get'])->name('notification.index');
    Route::post('/view', [NotificationController::class, 'profileView'])->name('notification.view');
    Route::get('/mark', [NotificationController::class, 'mark'])->name('notification.mark');
});

Route::group(['middleware' => 'admin.api', 'prefix' => 'tasks'], function () {
    Route::get('/all', [TaskController::class, 'index'])->name('task.index');
    Route::get('/', [TaskController::class, 'myTasks'])->name('task.my');
    Route::get('/show/{id}', [TaskController::class, 'show'])->name('task.show');
    Route::get('assign/{id}/{userID}', [TaskController::class, 'assignTask'])->name('task.assign');
    Route::get('mark/{id}', [TaskController::class, 'markComplete'])->name('task.complete');
    Route::put('{id}', [TaskController::class, 'update'])->name('task.update');
    Route::delete('archive/{id}', [TaskController::class, 'archiveTask'])->name('task.archive');
    Route::delete('remove/{id}', [TaskController::class, 'deleteTask'])->name('task.delete');
});

Route::group(['middleware' => 'admin.api', 'prefix' => 'activities'], function () {
    Route::get('/all', [ActivityController::class, 'index'])->name('task.index');
    Route::get('/', [ActivityController::class, 'myActivities'])->name('task.my');
});