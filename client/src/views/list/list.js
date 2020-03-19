app.controller('indexCtl', ['$scope', 'todoFactory', 'todos', "toaster", function($scope, todoFactory, todos, toaster) {
    

    $scope.todoItems = todos.data.data;        
    $scope.delete = function(id){

        function getIndexById(todo) {
            return todo.id == id;
        }

        todoFactory.delete(id).then(function (response){
            let index = $scope.todoItems.findIndex(getIndexById);
            $scope.todoItems.splice(index, 1);     

            toaster.pop('success', "Sucess", "The ToDo Item was successfully deleted!");

        }, function(response) {

            toaster.pop('error', "Error", "Error trying to delete the item! Please contact the admin!");

            //error trying to delete the todo            
        });
    };


}]);