"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require("react-styled-flexboxgrid");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icons = require("../Icons");

var _Icons2 = _interopRequireDefault(_Icons);

var _SocialLink = require("../SocialLink");

var _SocialLink2 = _interopRequireDefault(_SocialLink);

var _media = require("../../utils/media");

var _media2 = _interopRequireDefault(_media);

var _config = require("../../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  background-color: ", ";\n  color: ", ";\n"], ["\n  width: 100%;\n  background-color: ", ";\n  color: ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  padding-top: 16px;\n  padding-bottom: 16px;\n  font-size: 12px;\n  line-height: 35px;\n"], ["\n  padding-top: 16px;\n  padding-bottom: 16px;\n  font-size: 12px;\n  line-height: 35px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  margin-right: 15px;\n  &:last-child {\n    margin-right: 0;\n  }\n"], ["\n  margin-right: 15px;\n  &:last-child {\n    margin-right: 0;\n  }\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  text-align: right;\n  ", ";\n"], ["\n  text-align: right;\n  ", ";\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["text-align: left"], ["text-align: left"]);

var Background = _styledComponents2.default.section(_templateObject, function (props) {
  return props.theme.colors.black;
}, function (props) {
  return props.theme.colors.inversedText;
});

var FooterGrid = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Grid)(_templateObject2);

var FooterSocialLink = _SocialLink2.default.extend(_templateObject3);

var SocialCol = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Col)(_templateObject4, _media2.default.md(_templateObject5));

exports.default = function (_ref) {
  var copyright = _ref.copyright;
  return _react2.default.createElement(Background, null, _react2.default.createElement(FooterGrid, null, _react2.default.createElement(_reactStyledFlexboxgrid.Row, { style: { margin: 0 } }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 10, xsOffset: 1, sm: 12, smOffset: 0, md: 6, mdOffset: 0 }, _react2.default.createElement("span", null, "\xA9 "), _react2.default.createElement("span", null, new Date().getFullYear(), " "), _react2.default.createElement("span", null, copyright)), _react2.default.createElement(SocialCol, {
    xs: 10,
    xsOffset: 1,
    sm: 12,
    smOffset: 0,
    md: 6,
    mdOffset: 0
  }, _react2.default.createElement(FooterSocialLink, { href: _config2.default.social.facebook.href }, _react2.default.createElement(_Icons2.default.Facebook, null), _react2.default.createElement("span", null, _config2.default.social.facebook.title)), _react2.default.createElement(FooterSocialLink, { href: _config2.default.social.twitter.href }, _react2.default.createElement(_Icons2.default.Twitter, null), _react2.default.createElement("span", null, _config2.default.social.twitter.title)), _react2.default.createElement(FooterSocialLink, { href: _config2.default.social.youtube.href }, _react2.default.createElement(_Icons2.default.Youtube, null), _react2.default.createElement("span", null, _config2.default.social.youtube.title))))));
};