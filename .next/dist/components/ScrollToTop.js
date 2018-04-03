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

var _reactScrollUp = require("react-scroll-up");

var _reactScrollUp2 = _interopRequireDefault(_reactScrollUp);

var _Icons = require("./Icons");

var _Icons2 = _interopRequireDefault(_Icons);

var _theme = require("../utils/theme");

var _theme2 = _interopRequireDefault(_theme);

var _media = require("../utils/media");

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
    ["\n  display: inline-block;\n  font-size: 40px;\n  ", ";\n"],
    ["\n  display: inline-block;\n  font-size: 40px;\n  ", ";\n"]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    ["display: none"],
    ["display: none"]
  );

var StyledArrowUp = (0, _styledComponents2.default)(_Icons2.default.ArrowUp)(
  _templateObject,
  _media2.default.sm(_templateObject2)
);

exports.default = function(_ref) {
  var showUnder = _ref.showUnder;
  return _react2.default.createElement(
    _reactScrollUp2.default,
    {
      showUnder: showUnder || 150,
      style: { right: 20, bottom: 12, color: _theme2.default.colors.black }
    },
    _react2.default.createElement(StyledArrowUp, null)
  );
};
