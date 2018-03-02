(function () {
    function FormService($http) {
        //remove item array. going to use server instad.
        
        return {
            postInfo: postInfo,
            getInfo: getInfo,
            removeInfo: removeInfo,
            showEdit: showEdit,
            putInfo: putInfo
        }
        function postInfo(item) {
            // API post method
            return $http({
                method: "POST",
                url: "/todos",
                data: item
                
            })
            
        }
        function getInfo() {
            // API get method
            return $http({
                method: "GET",
                url: "/todos"
            }).then(function(response) {
                return response.data;
            })
        }
        function removeInfo(itemId) {
            // api remove method
            return $http({
                method: "DELETE",
                url: "/todos/" + itemId
            })
        }
        function showEdit() {
            
            document.getElementsByClassName("editContainer")[0].style.display = "block";
        }
        function putInfo(newTaskObj) {
            
            // api remove method
            return $http({
                method: "PUT",
                url: "/todos/" + newTaskObj.id,
                data: newTaskObj
            }).then(function(response) {
                return response.data;
            })
            
            
            
            
        }
    }
    angular
        .module("app")
        .factory("FormService", FormService);
})();