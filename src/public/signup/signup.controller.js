(function () {
    "use strict";

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MyInfoService','MenuService', 'ApiPath'];
    function SignUpController(MyInfoService, MenuService, ApiPath) {
        var ctrl = this;
        ctrl.userInfo = {};
        ctrl.saved = false;
        ctrl.validShortCode = false;
        ctrl.itemSearched = false;
        ctrl.basePath = ApiPath;

        ctrl.setInfo = function() {
            MyInfoService.setInfo(ctrl.userInfo);
            ctrl.saved = true;
        };

        ctrl.validateFavdish = function() {
            ctrl.validShortCode = false;
            ctrl.itemSearched = false;
            if(typeof ctrl.userInfo.favouriteDish === 'undefined') return;
            if(ctrl.userInfo.favouriteDish.trim().length <= 0) return;
            MenuService.getMenuItem(ctrl.userInfo.favouriteDish).then(
                function(response) {
                    ctrl.userInfo.MenuItem = response.data;
                    ctrl.validShortCode = true;
                    ctrl.itemSearched = true;
                },
                function(response) {
                    ctrl.itemSearched = true;
                }
            );
        };
    }
})();
