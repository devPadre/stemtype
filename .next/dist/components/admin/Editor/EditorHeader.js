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

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _EditorStatus = require("./EditorStatus");

var _EditorStatus2 = _interopRequireDefault(_EditorStatus);

var _EditorActions = require("./EditorActions");

var _EditorActions2 = _interopRequireDefault(_EditorActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  align-items: center;\n  display: flex;\n  height: 80px;\n  justify-content: space-between;\n  left: 0;\n  padding: 0 30px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: #fff;\n  z-index: 99;\n"], ["\n  align-items: center;\n  display: flex;\n  height: 80px;\n  justify-content: space-between;\n  left: 0;\n  padding: 0 30px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  background-color: #fff;\n  z-index: 99;\n"]);

var EditorHeaderContainer = _styledComponents2.default.header(_templateObject);

var EditorHeader = function (_Component) {
  (0, _inherits3.default)(EditorHeader, _Component);

  function EditorHeader() {
    (0, _classCallCheck3.default)(this, EditorHeader);

    return (0, _possibleConstructorReturn3.default)(this, (EditorHeader.__proto__ || (0, _getPrototypeOf2.default)(EditorHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(EditorHeader, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(EditorHeaderContainer, null, _react2.default.createElement(_EditorStatus2.default, { status: this.props.editorStatus }), _react2.default.createElement(_EditorActions2.default, {
        editorStatus: this.props.editorStatus,
        editorMode: this.props.editorMode,
        isPublished: this.props.isPublished,
        onAction: this.props.onAction
      }));
    }
  }]);

  return EditorHeader;
}(_react.Component);

exports.default = EditorHeader;