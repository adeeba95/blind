// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('noteit', ['ionic','firebase','ngAudio'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'home.html'
  });

    $stateProvider.state('login', {
    url: '/login',
    templateUrl: 'login.html',
    controller: 'LoginCtrl'
  });

  $stateProvider.state('signup', {
    url: '/signup',
    templateUrl: 'signup.html',
    controller: 'SignupCtrl'
  });

  $stateProvider.state('listen', {
    url: '/listen',
    templateUrl: 'listen.html',
    controller: 'ListenCtrl'
  });

  $stateProvider.state('listlisten', {
    url: '/listlisten/',
    templateUrl: 'listlisten.html',
    controller: 'ListListenCtrl'
  });

   $stateProvider.state('player', {
    url: '/player/',
    templateUrl: 'player.html',
    controller: 'PlayerCtrl'
  });

   $stateProvider.state('player1', {
    url: '/player1/',
    templateUrl: 'player1.html',
    controller: 'Player1Ctrl'
  });

   $stateProvider.state('player2', {
    url: '/player2/',
    templateUrl: 'player2.html',
    controller: 'Player2Ctrl'
  });

  $stateProvider.state('donor', {
    url: 'donor',
    templateUrl: 'donor.html',
    controller: 'DonorCtrl'
  });

  $stateProvider.state('listdonor', {
    url: '/listdonor',
    templateUrl: 'listdonor.html',
    controller: 'ListDonorCtrl'
  });

  $stateProvider.state('record', {
    url: '/record',
    templateUrl: 'record.html',
    controller: 'RecordCtrl'
  });

  $stateProvider.state('admin', {
    url: '/admin:/id',
    templateUrl: 'admin.html',
    controller: 'AdminCtrl'
  });

  $stateProvider.state('verify', {
    url: '/verify',
    templateUrl: 'verify.html',
    controller: 'VerifyCtrl'
  });

  $stateProvider.state('add', {
    url: '/add',
    templateUrl: 'add.html',
    controller: 'AddCtrl'
  });

  $urlRouterProvider.otherwise('/');
});