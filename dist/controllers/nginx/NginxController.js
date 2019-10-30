"use strict";

exports.default = void 0;

function _slixApp() {
  const data = require("slix-app");

  _slixApp = function () {
    return data;
  };

  return data;
}

var _Nginx = require("../../utils/Nginx");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let fs = require('fs');

class NginxController extends _slixApp().AbstractController {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "index", async () => {
      return new (_slixApp().Response)('index');
    });

    _defineProperty(this, "restart", async () => {
      await _Nginx.default.restart();
      return new (_slixApp().Response)('Restart');
    });

    _defineProperty(this, "start", async () => {
      await _Nginx.default.start();
      return new (_slixApp().Response)('Restart');
    });

    _defineProperty(this, "stop", async () => {
      await _Nginx.default.stop();
      return new (_slixApp().Response)('Restart');
    });

    _defineProperty(this, "item", async request => {
      let data = await new Promise((resolve, reject) => {
        fs.readFile(`/var/log/nginx/${request.path.get('item')}`, (err, data) => {
          if (err) {
            reject(err);
          }

          resolve(data);
        });
      });
      return await this.App.render('nginx/item', {
        data: data.toString('utf8').split(new RegExp('[\\r\\n]', 'gm')).reverse()
      });
    });
  }

  mount() {
    this.GET('/nginx/', this.index);
    this.GET('/nginx/restart/', this.restart);
    this.GET('/nginx/start/', this.start);
    this.GET('/nginx/stop/', this.stop);
    this.GET('/nginx/:item:/', this.item);
  }

}

exports.default = NginxController;