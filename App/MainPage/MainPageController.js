(function () {
    // debugger;
    Global_NS.toastrApp.controller('MainPage', ['$scope', 'MainService', MainPage]);

    function MainPage($scope, MainService) {
        var vm = this;
        vm.testVal = 'Hello World from Main Page!';
        vm.pageName = MainService.PageName;

        vm.fields = [{
            key: 'emailRequired',
            type: 'checkbox',
            templateOptions: {
                label: 'emailRequired'
            }

        }
        ,{
            key: 'hideCustomInput',
            type: 'checkbox',
            templateOptions: {
                label: 'hideCustomInput'
            }

        }, {
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Email address',
                placeholder: 'Enter email'
            },
            expressionProperties:{
                'templateOptions.required':'model.emailRequired'
            },
            validation:{
                messages:{
                    required:'/"Email is required/"'
                }
            }

        },
    {
        type:'inputCustom',
        key:'CustomName',
        templateOptions:{
            label:'Custom Name'           
        },
        expressionProperties:{
            'templateOptions.required':'model.emailRequired',
            'templateOptions.setDefaultValue':'model.CustomName = model.CustomName?model.CustomName:"Pradeep"'
        },
        hideExpression:'model.hideCustomInput'
    }];
    vm.actualFiels=angular.copy(vm.fields);
        vm.options = {};
        vm.model = {'email':'pradeep@gmail.com',CustomName:'Srinivas'};
    }
})();