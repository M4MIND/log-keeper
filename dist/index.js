#!/usr/bin/env node
"use strict";

function _slixApp() {
  const data = require("slix-app");

  _slixApp = function () {
    return data;
  };

  return data;
}

var _providers = require("./config/providers");

function _slixTwigProvider() {
  const data = require("slix-twig-provider");

  _slixTwigProvider = function () {
    return data;
  };

  return data;
}

let fsLib = require('fs');

let app = new (_slixApp().Slix)();
app.addProviders(_providers.default);
app.run();
app.helpers = {
  nginx: {
    files: () => {
      return fsLib.readdirSync('/var/log/nginx');
    }
  }
};
app.addEventListener(_slixTwigProvider().TwigEvent.RENDERING_PREPARATION, event => {
  event.data.app = app;
});