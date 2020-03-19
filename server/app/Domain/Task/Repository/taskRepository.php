<?php 
    namespace Task;

    use Model\Task;

    class Repository
    {
        public static function get()
        {
            return Task::all();
        }

        public static function create($task)
        {
            return Task::create($task);
        }

        public static function delete($taskID)
        {
            Task::find($taskID)->delete();
        }

        public static function getById($taskID)
        {
            return Task::find($taskID);
        }

        public static function update($taskData)
        {
            return Task::find($taskData['id'])->fill($taskData)->save();
        }
    }