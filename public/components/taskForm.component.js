(function () {
    var taskForm = {
        templateUrl: "partials/taskForm.html",
        controller: function (FormService) {
            var vm = this;
            vm.sendInfo = function(task) {
                if (task) {
                FormService.postInfo(task);
                
                document.getElementById('addInput').value = "";
                }
            }
        }
    };
    angular
        .module("app")
        .component("taskForm", taskForm)
})();