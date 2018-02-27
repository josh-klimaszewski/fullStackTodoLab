(function () {
    var taskList = {

        templateUrl: "partials/taskList.html",
        controller: function (FormService) {
            var vm = this;
            vm.tasks = FormService.getInfo();
                                  
            console.log(vm.tasks);
            // loadTasks();
            // function loadTasks() {
            //     FormService.getInfo()
            //                .then(function(tasks) {
            //                    vm.tasks = tasks;
            //                })
            // }
            // vm.rmInfo = function (item) {
            //     FormService.removeInfo(item);
                
            // }
        }
    };
    angular
        .module("app")
        .component("taskList", taskList)
})();