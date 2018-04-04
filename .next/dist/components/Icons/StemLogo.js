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

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  position: relative;\n  margin: auto;\n  border: none;\n  content: \"\";\n  display: inline-block;\n  background: url(../../assets/stem-wt.png) 4rem center no-repeat;\n  width: 14rem;\n  height: 3rem;\n  background-size: 10rem;\n  left: 0;\n  right: 0;\n  margin: auto;\n"], ["\n  position: relative;\n  margin: auto;\n  border: none;\n  content: \"\";\n  display: inline-block;\n  background: url(../../assets/stem-wt.png) 4rem center no-repeat;\n  width: 14rem;\n  height: 3rem;\n  background-size: 10rem;\n  left: 0;\n  right: 0;\n  margin: auto;\n"]);

var Hr = _styledComponents2.default.hr(_templateObject);

exports.default = function () {
  return _react2.default.createElement(Hr, null);
};