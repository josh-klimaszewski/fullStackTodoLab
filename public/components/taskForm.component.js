(function () {
    var taskForm = {
        templateUrl: "partials/taskForm.html",
        controller: function (FormService) {
            var vm = this;
            loadItems();
            function loadItems() {
                FormService.getInfo().then(function(tasks) {
                    vm.tasks = tasks; 
                })
            }
            vm.sendInfo = function(task) {
                var newTask = {task: task};
                FormService.postInfo(newTask).then(loadItems());
                console.log(newTask);
                
            }
            vm.rmInfo = function(task) {
                FormService.removeInfo(task.id).then(loadItems());
            }

        }
    };
    angular
        .module("app")
        .component("taskForm", taskForm)
})();