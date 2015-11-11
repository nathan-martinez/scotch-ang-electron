/**
 * Created by nmartinez on 11/11/2015.
 */
(function(){
    'use strict';
    var mysql = require('mysql');

    // Creates MySql database connection
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "customer_manager"
    });

    angular.module('app')
        .service('customerService', ['$q', CustomerService]);

    function CustomerService
})();