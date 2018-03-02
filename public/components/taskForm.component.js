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
                FormService.postInfo(newTask).then(loadItems);
                document.getElementById('addInput').value = "";
                ;
                
            }
            vm.rmInfo = function(task) {
                FormService.removeInfo(task.id).then(loadItems);
                
            }
            vm.showEdit = function(task) {
                
                vm.newTaskId = task.id;
                
                FormService.showEdit();
            }
            vm.editInfo = function(newTask) {
                console.log(newTask)
                var newTaskObj = {id: vm.newTaskId, task: newTask}
                FormService.putInfo(newTaskObj).then(loadItems);
                document.getElementById('editInput').value = "";
                document.getElementsByClassName("editContainer")[0].style.display = "none";
            }

        }
    };
    angular
        .module("app")
        .component("taskForm", taskForm)
})();