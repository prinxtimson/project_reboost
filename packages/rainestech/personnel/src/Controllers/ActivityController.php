<?php

namespace Rainestech\Personnel\Controllers;

use Carbon\Carbon;
use Rainestech\AdminApi\Controllers\BaseApiController;
use Rainestech\AdminApi\Utils\ErrorResponse;
use Rainestech\Personnel\Entity\Activities;

class ActivityController extends BaseApiController 
{
    use ErrorResponse;

    public function index()
    {
        return response()->json(Activities::with('user')->orderBy('id', 'DESC')->get());
    }

    public function myActivities()
    {
        $activities = Activities::where('userID', auth('api')->id())->with('user')->orderBy('id', 'DESC')->get();

        return response()->json($activities);
    }

}
