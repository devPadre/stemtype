"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _polished = require("polished");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _BrandedTitle = require("../BrandedTitle");

var _BrandedTitle2 = _interopRequireDefault(_BrandedTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  margin-bottom: 30px;\n  ", ";\n"], ["\n  display: block;\n  margin-bottom: 30px;\n  ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  margin-bottom: 10px;\n"], ["\n  display: block;\n  margin-bottom: 10px;\n"]);

var SidebarBlock = _styledComponents2.default.div(_templateObject, (0, _polished.clearFix)());

var SidebarTitle = (0, _styledComponents2.default)(_BrandedTitle2.default)(_templateObject2);

exports.default = function (_ref) {
  var className = _ref.className,
      title = _ref.title,
      children = _ref.children;
  return _react2.default.createElement(SidebarBlock, { className: className }, _react2.default.createElement(SidebarTitle, null, title), children);
};