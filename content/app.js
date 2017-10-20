var app=angular.module('myapp',['ui.router'])

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('tab',{
            url:'/tab',
            templateUrl:'./view/tab.html',
            controller:'mycontroller'
        })
    .state('tab1',{
        url:'/tab1',
        templateUrl:'./view/tab1.html',
        controller:'mycontroller1'
    })
    .state('tab2',{
        url:'/tab2',
        templateUrl:'./view/tab2.html',
        controller:'mycontroller2'
    })
    $urlRouterProvider.otherwise('/tab')
})