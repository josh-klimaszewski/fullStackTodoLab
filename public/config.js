(function () {
    angular
        .module("app")
        .config(function($routeProvider) {
            $routeProvider
            .when("/form", {
                template: "<task-form></task-form"
            })
            .when("/start", {
                template: "<task-start></task-start>"
            })
            .otherwise({
                template: "<task-start></task-start>"
            })
        })

})();