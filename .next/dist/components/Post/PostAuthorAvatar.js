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

var _Icons = require("../Icons");

var _Icons2 = _interopRequireDefault(_Icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  position: relative;\n  display: inline-block;\n  border: 22px solid #fff;\n\n  svg {\n    fill: #ebebeb;\n    width: ", "px;\n    height: ", "px;\n    top: -10px;\n    left: -10px;\n    transition: all 0.25s ease;\n    position: absolute;\n  }\n\n  &:hover {\n    svg {\n      fill: ", ";\n      transform: rotate(90deg);\n    }\n  }\n\n  img {\n    display: inline-block;\n    border-radius: 50%;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  border: 22px solid #fff;\n\n  svg {\n    fill: #ebebeb;\n    width: ", "px;\n    height: ", "px;\n    top: -10px;\n    left: -10px;\n    transition: all 0.25s ease;\n    position: absolute;\n  }\n\n  &:hover {\n    svg {\n      fill: ", ";\n      transform: rotate(90deg);\n    }\n  }\n\n  img {\n    display: inline-block;\n    border-radius: 50%;\n  }\n"]);

var AuthorAvatar = _styledComponents2.default.div(_templateObject, function (props) {
  return props.width + 20;
}, function (props) {
  return props.height + 20;
}, function (props) {
  return props.theme.colors.inversedLinkHover;
});

exports.default = function (_ref) {
  var src = _ref.src,
      width = _ref.width,
      height = _ref.height,
      alt = _ref.alt,
      className = _ref.className;
  return _react2.default.createElement(AuthorAvatar, { height: height, width: width, className: className }, _react2.default.createElement("img", { alt: alt, src: src, height: height, width: width }), _react2.default.createElement(_Icons2.default.Avatar, null));
};