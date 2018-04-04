"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _links = require("../utils/links");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 28px;\n  cursor: pointer;\n  transition: color 0.25s ease; \n\t-webkit-transition: color 0.25s ease; \n\t-moz-transition: color 0.25s ease; \n\t-o-transition: color 0.25s ease;\n  color: #8BC53F;\n\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 28px;\n  cursor: pointer;\n  transition: color 0.25s ease; \n\t-webkit-transition: color 0.25s ease; \n\t-moz-transition: color 0.25s ease; \n\t-o-transition: color 0.25s ease;\n  color: #8BC53F;\n\n  &:hover {\n    color: ", ";\n  }\n"]);

exports.default = (0, _styledComponents2.default)(_links.CategoryLink)(_templateObject, function (props) {
  return props.theme.colors.inversedLinkHover;
});