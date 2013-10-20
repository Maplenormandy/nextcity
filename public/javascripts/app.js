requirejs.config({
    "baseUrl": "/javascripts/lib",
    "paths": {
      "app": "../app",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min"
    }
});

requirejs(["app/main"]);
