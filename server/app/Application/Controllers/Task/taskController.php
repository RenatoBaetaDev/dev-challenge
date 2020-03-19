<?php

namespace Controllers\Task;

use Laravel\Lumen\Routing\Controller as BaseController;
use Resources\TaskCollection;
use Illuminate\Http\Request;


class MainController extends BaseController
{
    public function get()
    {
        $tasks = \Task\Repository::get();        
        return \Resources\TaskCollection::collection($tasks);

    }

    public function getById($taskID)
    {
        $task = \Task\Service::getById($taskID);
        return new \Resources\TaskCollection($task);
    }

    public function create(Request $request)
    {
        $task = $request->all();
        $task = \Task\Service::create($task);
        return $task;
    }

    public function update(Request $request, $taskID)
    {
        $taskData = $request->all();
        $taskData['id'] = $taskID;
        \Task\Service::update($taskData);        
    }

    public function delete($taskID)
    {
        \Task\Repository::delete($taskID);
    }
}
