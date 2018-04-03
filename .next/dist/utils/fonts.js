"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fontfaceobserver = require("fontfaceobserver");

var _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var Fonts = function Fonts() {
  var loader = new _fontfaceobserver2.default("Open Sans");
  loader.load().then(function() {
    if (!document.documentElement.classList.contains("fonts-loaded")) {
      document.documentElement.classList.add("fonts-loaded");
    }
    setCookie("fonts-loaded", true, 365);
  });
};

exports.default = Fonts;
