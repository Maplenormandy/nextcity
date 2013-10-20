requirejs.config({
    "baseUrl": "/javascripts/lib",
    "paths": {
      "app": "../app",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
      "socket.io": "/socket.io/socket.io",
      "angular": "//ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min"
    },
    "shim": {
      "angular": { exports: "angular" }
    }
});

requirejs(["app/main"]);
