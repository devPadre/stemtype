"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require("../utils/media");

var _media2 = _interopRequireDefault(_media);

var _ExternalLink = require("./ExternalLink");

var _ExternalLink2 = _interopRequireDefault(_ExternalLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: inline-flex;\n  vertical-align: middle;\n  cursor: pointer;\n  font-size: ", ";\n  color: ", ";\n  transition: color 0.25s ease-in-out;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    color: ", ";\n  }\n\n  span {\n    display: inline-block;\n    margin-left: 5px;\n    font-size: 11px;\n    letter-spacing: 0.13em;\n    text-transform: uppercase;\n    ", ";\n  }\n"], ["\n  display: inline-flex;\n  vertical-align: middle;\n  cursor: pointer;\n  font-size: ", ";\n  color: ", ";\n  transition: color 0.25s ease-in-out;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    color: ", ";\n  }\n\n  span {\n    display: inline-block;\n    margin-left: 5px;\n    font-size: 11px;\n    letter-spacing: 0.13em;\n    text-transform: uppercase;\n    ", ";\n  }\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["display:none"], ["display:none"]);

exports.default = (0, _styledComponents2.default)(_ExternalLink2.default)(_templateObject, function (props) {
  return props.size || "30px";
}, function (props) {
  return props.theme.colors.inversedLink;
}, function (props) {
  return props.theme.colors.inversedLinkHover;
}, _media2.default.md(_templateObject2));