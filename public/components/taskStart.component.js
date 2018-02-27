(function () {
    var taskStart = {
        
        template: `
        <main>
            <div class="container startContainer">
                <p class="heading">Welcome to TODO </p>
                <p>Do more. Increase your productivity with a simple to do app.</p>
                <a class="enterArrow" href="#!/form">Enter Here<i class="material-icons arrow">arrow_forward</i></a> 
            </div>
        </main>
        `,
        controller: function (FormService) {
            var vm = this;
             
        }
    };
    angular
        .module("app")
        .component("taskStart", taskStart)
})();