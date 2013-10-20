define(["jquery", "socket.io", "angular"], function($, io, ng) {
  var socket = io.connect('/');
  var ncApp = ng.module('ncApp', [], function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  });

  ncApp.controller('StockMarketCtrl', function StockMarketCtrl($scope) {
    $scope.stocks = {};
    socket.on('stocks', function(data) {
      $scope.$apply(function() {
        for (var stock in data) {
          $scope.stocks[stock] = data[stock];
        }
      });
    });

  });

  ng.bootstrap(document, ['ncApp']);

  $('body').append('<p>hello world!</p>');
});
