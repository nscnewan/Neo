angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.login', {
        views: {
            app: {
                controller: 'app_login',
                templateProvider: function (app) {
                    return app.templateProvider('app.login');
                }
            }
        }
    }).state('app.viewissues', {
        views: {
            app: {
                controller: 'app_viewissues',
                templateProvider: function (app) {
                    return app.templateProvider('app.viewissues');
                }
            }
        }
    }).state('app.viewissues2', {
        views: {
            app: {
                controller: 'app_viewissues2',
                templateProvider: function (app) {
                    return app.templateProvider('app.viewissues2');
                }
            }
        }
    }).state('app.reprotissue', {
        views: {
            app: {
                controller: 'app_reprotissue',
                templateProvider: function (app) {
                    return app.templateProvider('app.reprotissue');
                }
            }
        }
    });
});