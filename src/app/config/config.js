/**
 * My Angular App 1 
 * @module MyAngularApp1.config
 */
angular.module('MyAngularApp1.config', [
        'user',
        'template.app',
        'ui.router',
        'ngCookies',
        'ngResource'
    ])

    .constant('NAV_ITEMS', [
        {title: 'Home', state: 'home', sref: 'home', icon: 'glyphicon-home'},
        {title: 'About', state: 'about', sref: 'about', icon: 'glyphicon-info-sign'},
        {title: 'Contact', state: 'contact', sref: 'contact', icon: 'glyphicon-earphone'},
        {title: 'My account', state: 'user', sref: 'user.dashboard', icon: 'glyphicon-user'}
    ])

    .config(function ($stateProvider, $urlRouterProvider) {
        'use strict';

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/view/home.tpl.html',
                controller: 'HomeCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'app/view/about.tpl.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'app/view/contact.tpl.html'
            });
    });
