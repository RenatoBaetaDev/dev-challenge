app.factory('todoFactory', [
    '$http',
    'apiURL'
,function(
    $http,
    apiURL
){
    let todoFactory = {};

    todoFactory.getTodos = function() {
        return $http.get(baseUrl());
    }

    todoFactory.create = function(todo) {        
        return $http.post(baseUrl(), todo);
    }

    todoFactory.delete = function(todoID) {
        return $http.delete(baseUrl() + todoID);
    }

    todoFactory.getById = function(todoID) {
        return $http.get(baseUrl() + todoID);
    }

    todoFactory.update = function(todo) {
        return $http.put(baseUrl() + todo.id, todo);
    }

    function baseUrl() {
        return apiURL.get() + 'task/';
    }

    return todoFactory;
}
])