<?php
namespace Task;

use \BaseParser;
class Parser extends BaseParser 
{
    public static function parseAllInfo($taskInfo)
    {
        return parent::parse([
            'dueBy' => 'due_by',
        ], $taskInfo);
    }
}