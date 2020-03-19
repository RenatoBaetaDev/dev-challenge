<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group([
    'prefix' => 'task',
    'namespace' => 'Controllers\Task'
], function ($router) {

    $router->get('/', 'MainController@get');
    $router->post('/', 'MainController@create');
    $router->get('/{taskID}', 'MainController@getById');
    $router->put('/{taskID}', 'MainController@update');
    $router->delete('/{taskID}', 'MainController@delete');


});