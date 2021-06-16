angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/page10',
    views: {
      'tab10': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.search', {
    url: '/page11',
    views: {
      'tab11': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('searchAutocomplete', {
    url: '/page15',
    templateUrl: 'templates/searchAutocomplete.html',
    controller: 'searchAutocompleteCtrl'
  })

  .state('tabsController.messages', {
    url: '/page12',
    views: {
      'tab12': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/page13',
    views: {
      'tab13': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('conversaArtur', {
    url: '/page14',
    templateUrl: 'templates/conversaArtur.html',
    controller: 'conversaArturCtrl'
  })

  .state('tabsController.playlists', {
    url: '/page16',
    views: {
      'tab13': {
        templateUrl: 'templates/playlists.html',
        controller: 'playlistsCtrl'
      }
    }
  })

  .state('page', {
    url: '/page17',
    templateUrl: 'templates/page.html',
    controller: 'pageCtrl'
  })

  .state('tabsController.uploadSongs', {
    url: '/page18',
    views: {
      'tab13': {
        templateUrl: 'templates/uploadSongs.html',
        controller: 'uploadSongsCtrl'
      }
    }
  })

  .state('musica', {
    url: '/page19',
    templateUrl: 'templates/musica.html',
    controller: 'musicaCtrl'
  })

  .state('singlePlaylist', {
    url: '/page20',
    templateUrl: 'templates/singlePlaylist.html',
    controller: 'singlePlaylistCtrl'
  })

$urlRouterProvider.otherwise('/page1/page10')


});