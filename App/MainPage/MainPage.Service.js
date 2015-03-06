(function ()
{
    Global_NS.toastrApp.service('MainService', [MainService]);
    function MainService()
    {
        return res =
        {
            PageName: 'Main Page',
            AppName: 'ToastrApp',
            Author: 'Surya'
        }
    }
})();