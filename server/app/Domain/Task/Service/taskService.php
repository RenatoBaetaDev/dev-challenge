<?php 
    namespace Task;

    class Service
    {
        public static function create($task)
        {   
            $task = Parser::parseAllInfo($task);
            return Repository::create($task);
        }

        public static function getById($taskID)
        {
            return Repository::getById($taskID);
        }

        public static function update($task)
        {
            $parsedTask = Parser::parseAllInfo($task);
            return Repository::update($parsedTask);
        }
    }