app.service('apiURL', ['$location', function ($location) {
    this.get = function() {
        return $location.protocol() + '://todoapp.test/';
    }
}])