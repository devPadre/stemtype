"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  ", ";\n"], ["\n  ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  position: relative;\n  margin: 45px 0px;\n  border: none;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.1);\n\n  &:before {\n    content: \"\";\n    display: inline-block;\n    background: url(/assets/delimeter.svg) 21px center no-repeat;\n    width: 117px;\n    height: 25px;\n    background-size: 90px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -12px;\n    margin: auto;\n    background-color: #ffffff;\n  }\n"], ["\n  position: relative;\n  margin: 45px 0px;\n  border: none;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.1);\n\n  &:before {\n    content: \"\";\n    display: inline-block;\n    background: url(/assets/delimeter.svg) 21px center no-repeat;\n    width: 117px;\n    height: 25px;\n    background-size: 90px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -12px;\n    margin: auto;\n    background-color: #ffffff;\n  }\n"]);

var Container = _styledComponents2.default.div(_templateObject, (0, _polished.clearFix)());

var Hr = _styledComponents2.default.hr(_templateObject2);

exports.default = function () {
  return _react2.default.createElement("div", null, _react2.default.createElement(Container, null), _react2.default.createElement(Hr, null));
};