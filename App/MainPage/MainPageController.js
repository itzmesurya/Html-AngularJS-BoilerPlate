(function ()
{
    debugger;
    Global_NS.toastrApp.controller('MainPage', ['$scope', MainPage]);
    function MainPage($scope)
    {
        var vm = this;
        vm.testVal = 'Hello World!';
    }
})();