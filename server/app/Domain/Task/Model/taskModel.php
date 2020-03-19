<?php
namespace Model;

use Illuminate\Database\Eloquent\Model;

class Task extends Model 
{
    protected $table = 'tasks';

    protected $fillable = [
        'description',
        'category',
        'complete',
        'due_by',
        'costs',
        'notes'
    ];


}