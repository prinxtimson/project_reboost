<?php

namespace Rainestech\Personnel\Controllers;

use App\Models\User;
use App\Notifications\ProfileView;
use Illuminate\Http\Request;
use Rainestech\AdminApi\Controllers\BaseApiController;
use Rainestech\AdminApi\Entity\Users;
use Rainestech\AdminApi\Utils\ErrorResponse;
use Rainestech\AdminApi\Utils\LocalStorage;

class NotificationController extends BaseApiController {
  use ErrorResponse, LocalStorage;

  public function get()
  {
    $user = auth('api')->user();

    $response = [
      'data' => $user->notifications,
      'count' => $user->unreadNotifications->count(),
  ];

  return response()->json($response);

  }

  public function profileView($request)
  {
    $user = Users::find($request->inout('id'));
    $auth_user = auth('api')->user();

    $user->notify(new ProfileView($auth_user));

    return response()->json([]);
  }

  public function mark()
  {
      $user = auth('api')->user();

      $user->unreadNotifications->markAsRead();

      $response = [
          'data' => $user->notifications,
          'count' => $user->unreadNotifications->count(),
      ];

      return response()->json($response);
  }
}