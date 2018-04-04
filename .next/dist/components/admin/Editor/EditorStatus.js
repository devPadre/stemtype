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

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function (_Component) {
  (0, _inherits3.default)(_default, _Component);

  function _default() {
    (0, _classCallCheck3.default)(this, _default);

    return (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).apply(this, arguments));
  }

  (0, _createClass3.default)(_default, [{
    key: "render",
    value: function render() {
      var params = {};
      switch (this.props.status) {
        case _constants.EditorStatus.SAVING:
          params = {
            status: "processing",
            text: "Saving..."
          };
          break;
        case _constants.EditorStatus.UNSAVED:
          params = {
            status: "warning",
            text: "Unsaved changes"
          };
          break;
        case _constants.EditorStatus.SAVED:
          params = {
            status: "success",
            text: "Saved"
          };
          break;
        default:
          params = {
            text: this.props.status
          };
          break;
      }
      return _react2.default.createElement(_antd.Badge, params);
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;