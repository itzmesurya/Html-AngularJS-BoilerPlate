(function ()
{
    ; Global_NS = {
        toastrApp: angular.module('toastrApp', ['formly', 'formlyBootstrap'])
    };

    Global_NS.toastrApp.config(function(formlyConfigProvider) {
        formlyConfigProvider.setType({
            name:'inputCustom',
            template:`<label ng-bind="to.label"></label><span ng-if="to.required">*</span>
            <input class="form-control" type="{{to.type}}" ng-model="model[options.key]" ng-required="to.required" ng-disabled="to.disabled" />
            `,
            wrapper: [ 'bootstrapHasError']
        })
    });
})();