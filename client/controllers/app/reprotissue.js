angular.module('app').controller('app_reprotissue', app_reprotissue);
function app_reprotissue($scope, app) {
    'use strict';
    app.init($scope);
    
    $scope.save = function() {
        app.action('reportissue', 'ReportIssue', this);
    }
}