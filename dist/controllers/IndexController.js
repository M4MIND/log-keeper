"use strict";

exports.default = void 0;

function _slixApp() {
  const data = require("slix-app");

  _slixApp = function () {
    return data;
  };

  return data;
}

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class IndexController extends _slixApp().AbstractController {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "index", async () => {
      return await this.App.render('/index');
    });
  }

  mount() {
    this.GET('/', this.index);
  }

}

exports.default = IndexController;