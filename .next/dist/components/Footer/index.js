"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _LowerFooter = require("./LowerFooter");

var _LowerFooter2 = _interopRequireDefault(_LowerFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var copyright = _ref.copyright;
  return _react2.default.createElement("footer", { role: "contentinfo" }, _react2.default.createElement(_LowerFooter2.default, { copyright: copyright }));
};