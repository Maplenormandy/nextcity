define(["jquery", "socket.io", "angular"], function($, io, angular) {
  var socket = io.connect('/');
  var ncApp = angular.module('ncApp', [],
    function($routeProvider, $interpolateProvider) {
      $interpolateProvider.startSymbol('[[');
      $interpolateProvider.endSymbol(']]');
      $routeProvider.
        when('/stocks', {
          templateUrl: '/partials/stocks',
          controller: 'StockMarketCtrl'
        }).
        otherwise({
          redirectTo: '/stocks'
        });
    }
  );

  ncApp.controller('StockMarketCtrl', function StockMarketCtrl($scope) {
    //$scope.stocks = {};
  });

  ncApp.run(function ($rootScope) {
    $rootScope.stocks={};
    socket.on('stocks', function(data) {
      $rootScope.$apply(function() {
        for (var stock in data) {
          $rootScope.stocks[stock] = data[stock];
        }
      });
    });
  });

  angular.bootstrap(document, ['ncApp']);

  $('body').append('<p>hello world!</p>');
});
