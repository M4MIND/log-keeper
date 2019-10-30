"use strict";

exports.default = void 0;

function _slixApp() {
  const data = require("slix-app");

  _slixApp = function () {
    return data;
  };

  return data;
}

var _Nginx = require("../utils/Nginx");

var _PHP = require("../utils/PHP");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let fsLib = require('fs');

let exec = require('child_process').exec;

class IndexController extends _slixApp().AbstractController {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "index", async () => {
      return await this.App.render('/index', {
        status: {
          nginx: await _Nginx.default.status(),
          php: await _PHP.default.status()
        }
      });
    });
  }

  mount() {
    this.GET('/', this.index);
  }

}

exports.default = IndexController;