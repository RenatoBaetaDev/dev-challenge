app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('list', {
            url: "/",
            templateUrl: 'list/list.html',
            controller: 'indexCtl',
            resolve: {
                todos: function(todoFactory) {                    
                    return todoFactory.getTodos();
                }
            }
        })
        .state('create', {
            url: "/create",
            templateUrl: 'create/create.html',
            controller: 'addCtl'
        })
        .state('edit', {
            url: "/todoItems/:id",
            templateUrl: 'edit/edit.html',
            controller: 'todoItemCtl',
            resolve: {
                todo: function(todoFactory, $stateParams) {                    
                    return todoFactory.getById($stateParams.id);
                }
            }            
    });
}]);
