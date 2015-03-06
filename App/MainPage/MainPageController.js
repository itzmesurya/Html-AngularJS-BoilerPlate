(function ()
{
    debugger;
    Global_NS.toastrApp.controller('MainPage', ['$scope', 'MainService', MainPage]);
    function MainPage($scope, MainService)
    {
        var vm = this;
        vm.testVal = 'Hello World!';
        vm.pageName = MainService.PageName;
    }
})();