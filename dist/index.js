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

let app = new (_slixApp().Slix)();
app.addProviders(_providers.default);
app.run();