app.controller('todoItemCtl',['$scope', 'todoFactory', 'todo', 'toaster', function ($scope, todoFactory, todo, toaster) {

    $scope.todoItem = todo.data.data;

    $scope.save = function() {
        $scope.todoItem.dueBy = new Date($scope.todoItem.dueBy);
        date = $scope.todoItem.dueBy;

        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();
        formattedDate = [year, month, day].join('-');

        dateRegex = /^\d{4}\-\d{1,2}\-\d{1,2}$/;
        if(!dateRegex.test(formattedDate)){
            toaster.pop('error', "Error", "Please insert a valid date!");
            return false;
        }

        $scope.todoItem.dueBy = formattedDate;

        todoFactory.update($scope.todoItem).then(function (response) {
            toaster.pop('success', "Sucess", "Saved!");
        }, function (response) {
            toaster.pop('error', "Error", "Error trying to update item. Please contact the admin!");

        })
    }

}]);