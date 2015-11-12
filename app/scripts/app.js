/**
 * Created by nmartinez on 11/11/2015.
 */
(function(){
    'use strict';

    var _templateBase = './scripts';

    angular.module('app', [
        'ngRoute',
        'ngMaterial',
        'ngAnimate'
    ])
    .config(['$routeProvider', function($routeProvider){
            $routeProvider.when('/', {
                templateUrl: _templateBase + '/customer/customer.html',
                controller: 'customerController',
                controllerAs: '_ctrl'
            });
            $routeProvider.otherwise({redirectTo: '/'});
    }]);
})();