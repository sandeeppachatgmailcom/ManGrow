"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var NodeServer = /** @class */ (function () {
    function NodeServer() {
        this.app = (0, express_1.default)();
        this.port = 7000;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.get('/', function (req, res) {
            console.log('hello');
        });
    }
    NodeServer.prototype.start = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server is listening on port ".concat(_this.port));
        });
    };
    return NodeServer;
}());
var server = new NodeServer();
server.start();
exports.default = NodeServer;
