<?php

namespace Rainestech\Personnel\Controllers;

use Carbon\Carbon;
use Rainestech\AdminApi\Controllers\BaseApiController;
use Rainestech\AdminApi\Utils\ErrorResponse;
use Rainestech\Personnel\Entity\Activities;
use Rainestech\Personnel\Entity\Tasks;
use Rainestech\Personnel\Requests\TasksRequest;

class TaskController extends BaseApiController 
{
    use ErrorResponse;

    public function index()
    {
        return response()->json(Tasks::with('user')->orderBy('id', 'DESC')->get());
    }

    public function myTasks()
    {
        $tasks = Tasks::where('userID', auth('api')->id())->with('user')->orderBy('id', 'DESC')->get();

        return response()->json($tasks);
    }

    public function show($id)
    {
        $task = Tasks::find($id)->load('user');

        return response()->json($task);
    }

    public function assignTask($id, $userID)
    {
        $user = auth('api')->user();
        if (!$task = Tasks::find($id))
            return $this->jsonError(404, 'Task Not Found');

        $task->userID = $userID;
        $task->assignBy = $user->id;
        $task->status = 2;
        $task->update();

        Activities::create([
            'type' => 'Assigned a task',
            'userID' => $userID
        ]);

        $task->refresh()->load('user');

        return response()->json($task);
    }

    public function update(TasksRequest $request, $id)
    {
        if (!$task = Tasks::find($id))
            return $this->jsonError(404, 'Task Not Found');

        if($request->input('title'))
            $task->title = $request->input('title');

        if($request->input('description'))
            $task->description = $request->input('description');

        if($request->input('status')){
            $task->status = $request->input('status');
            if($request->input('status') == '3'){
                $task->completedAt = Carbon::now();
                Activities::create([
                    'type' => 'Completed a task',
                    'userID' => $task->userID
                ]);
            }
        }

        if($request->input('category'))
            $task->category = $request->input('category');

        if($request->input('assignBy'))
            $task->assignBy = $request->input('assignBy');

        if($request->input('userID')) {
            $task->userID = $request->input('userID');
            if($task->status == 1)
                $task->status = 2;
        }

        $task->update();
        $task->refresh()->load('user');

        return response()->json($task);
    }

    public function markComplete($id)
    {
        if (!$task = Tasks::find($id))
            return $this->jsonError(404, 'Task Not Found');
        
        $task->status = 3;
        $task->completedAt = Carbon::now();
        $task->update();
        $task->refresh()->load('user');

        Activities::create([
            'type' => 'Completed a task',
            'userID' => $task->userID
        ]);
    
        return response()->json($task);
    }

    public function archiveTask($id)
    {
        if (!$task = Tasks::find($id))
            return $this->jsonError(404, 'Task Not Found');

        $task->delete();

        return response()->json($task);
    }
}
