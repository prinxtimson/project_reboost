<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/register', function () {
    return view('welcome');
});

Route::get('/contact', function () {
    return view('welcome');
});

Route::get('/password/forgot', function () {
    return view('welcome');
});

Route::get('/password/reset/{token}', function () {
    return view('welcome');
});


Route::group([ "prefix" => "dashboard"], function () {
    Route::get("", function () {
        return view('welcome');
    });

    Route::group(["prefix" => "profile"], function () {
        Route::get("", function () {
            return view('welcome');
        });
        Route::get("edit", function () {
            return view('welcome');
        });
    });

    Route::get("add-user", function () {
        return view('welcome');
    });

    Route::get('change-password', function () {
        return view('welcome');
    });

    Route::group(["prefix" => 'users'], function () {
        Route::get("{path}", function () {
            return view('welcome');
        });
        Route::get("recruiter/{id}", function () {
            return view('welcome');
        });
        Route::get("candidate/{id}", function () {
            return view('welcome');
        });
    });

});

Route::get('/basecamp/login', [\App\Http\Controllers\BasecampController::class, 'login'])->name('basecamp.login');
Route::get('/basecamp', [\App\Http\Controllers\BasecampController::class, 'callback'])->name('basecamp.callback');
Route::get('/basecamp/projects', [\App\Http\Controllers\BasecampController::class, 'projects'])->name('basecamp.projects');
Route::get('/basecamp/people', [\App\Http\Controllers\BasecampController::class, 'people'])->name('basecamp.people');
Route::get('/basecamp/docs', [\App\Http\Controllers\BasecampController::class, 'docs'])->name('basecamp.docs');
Route::get('/basecamp/run', [\App\Http\Controllers\BasecampController::class, 'runJobs'])->name('basecamp.job');
Route::get('/test/mail', [\Rainestech\AdminApi\Controllers\NotificationTemplateController::class, 'testMail'])->name('test.mail');
