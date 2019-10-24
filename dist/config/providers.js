"use strict";

exports.default = void 0;

function _slixApp() {
  const data = require("slix-app");

  _slixApp = function () {
    return data;
  };

  return data;
}

function _slixTwigProvider() {
  const data = require("slix-twig-provider");

  _slixTwigProvider = function () {
    return data;
  };

  return data;
}

var _default = [{
  provider: _slixApp().ProtocolProvider
}, {
  provider: _slixApp().FileTransferProvider
}, {
  provider: _slixApp().ControllerProvider
}, {
  provider: _slixTwigProvider().SlixTwigProvider,
  params: {
    typeFile: '.twig',
    path: 'views'
  }
}];
exports.default = _default;