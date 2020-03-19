app.controller('addCtl',['$scope', 'todoFactory', '$state', 'toaster', function ($scope, $todoFactory, $state, toaster) {

    $scope.todoItem = {};
    $scope.todoItem.dueBy = new Date();

    $scope.submit = function(){

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
        
        $todoFactory.create($scope.todoItem).then(function (response) {
            toaster.pop('success', "Sucess", "The ToDo Item was successfully created!");
            $state.go('list');
        }, function (response) {
            toaster.pop('error', "Error", "Error trying to delete the item! Please contact the admin!");
        });
    };

    $scope.reset = function() {
        $scope.todoItem = null;
    }
}]);