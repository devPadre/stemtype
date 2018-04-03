"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Redirect = (function(_Component) {
  (0, _inherits3.default)(Redirect, _Component);

  function Redirect() {
    (0, _classCallCheck3.default)(this, Redirect);

    return (0, _possibleConstructorReturn3.default)(
      this,
      (Redirect.__proto__ || (0, _getPrototypeOf2.default)(Redirect)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Redirect, [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        _index2.default.push(this.props.to);
      }
    },
    {
      key: "render",
      value: function render() {
        return null;
      }
    }
  ]);

  return Redirect;
})(_react.Component);

exports.default = Redirect;
