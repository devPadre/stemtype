"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactIconBase = require("react-icon-base");

var _reactIconBase2 = _interopRequireDefault(_reactIconBase);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Google = function Google(props) {
  return _react2.default.createElement(
    _reactIconBase2.default,
    (0, _extends3.default)({}, props, { viewBox: "0 0 48 48" }),
    _react2.default.createElement("path", {
      d:
        "M14 22v4.8h7.94c-.32 2.06-2.4 6.04-7.94 6.04a8.84 8.84 0 0 1 0-17.68 7.88 7.88 0 0 1 5.58 2.16l3.8-3.66A13.418 13.418 0 0 0 14 10a14 14 0 0 0 0 28c8.08 0 13.44-5.68 13.44-13.68a12.776 12.776 0 0 0-.22-2.32H14zm0 0l34 4h-6v6h-4v-6h-6v-4h6v-6h4v6h6v4z"
    })
  );
};

exports.default = Google;
