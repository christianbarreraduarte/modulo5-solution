(function () {
    "use strict";

    angular.module('common')
    .service('MyInfoService', MyInfoService);

    MyInfoService.$inject = [];
    function MyInfoService() {
        var service = this;
        service.myInfo = {};

        service.setInfo = function(myInfo) {
            service.myInfo = myInfo;
        };

        service.getInfo = function () {
            return service.myInfo;
        };
    }
})();
