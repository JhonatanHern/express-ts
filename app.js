"use strict";
exports.__esModule = true;
var express = require("express");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express.Router();
        router.get('/', function (req, res) {
            res.end('<h1>Hello world! using TypeScript and express!</h1>');
        });
        this.express.use('/', router);
    };
    return App;
}());
exports["default"] = new App().express;
