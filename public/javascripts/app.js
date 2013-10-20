requirejs.config({
    "baseUrl": "/javascripts/lib",
    "paths": {
      "app": "../app",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
      "socket.io": "/socket.io/socket.io",
      "angular": "//code.angularjs.org/1.1.5/angular.min",
    },
    "shim": {
      "angular": { exports: "angular" }
    }
});

requirejs(["app/main"]);
