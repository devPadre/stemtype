"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  &,\n  & a {\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 12px;\n    transition: all 0.25s ease;\n    text-decoration: underline;\n  }\n"], ["\n  &,\n  & a {\n    display: inline-block;\n    text-transform: uppercase;\n    font-size: 12px;\n    transition: all 0.25s ease;\n    text-decoration: underline;\n  }\n"]);

var BrandedTitle = _styledComponents2.default.div(_templateObject);

exports.default = BrandedTitle;