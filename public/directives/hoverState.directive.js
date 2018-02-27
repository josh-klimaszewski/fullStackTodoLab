(function () {
    function hoverState() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("mouseover", function () {
                    $element.css('border', '1px solid black')
                    $element.children().css('color', 'red')
                });
                $element.on("mouseleave", function () {
                    $element.css('border', 'none')
                    $element.children().css('color', 'black')
                });
            }
        }
    }
    angular
        .module("app")
        .directive("hoverState", hoverState)
})();