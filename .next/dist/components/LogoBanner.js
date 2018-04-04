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

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

var _routes = require("../utils/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  position: relative;\n"], ["\n  width: 100%;\n  position: relative;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  position: relative;\n  width: 30%;\n  max-width: 340px;\n  padding-top: 120px;\n  padding-bottom: 10px;\n  margin: 0 auto;\n\n  @media screen and (max-width: ", ") {\n    width: 70%;\n  }\n\n  @media screen and (min-width: ", ") and (max-width: ", ") {\n    width: 50%;\n  }\n"], ["\n  display: block;\n  position: relative;\n  width: 30%;\n  max-width: 340px;\n  padding-top: 120px;\n  padding-bottom: 10px;\n  margin: 0 auto;\n\n  @media screen and (max-width: ", ") {\n    width: 70%;\n  }\n\n  @media screen and (min-width: ", ") and (max-width: ", ") {\n    width: 50%;\n  }\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  position: absolute;\n  left: 0;\n  top: 30px;\n  width: 100%;\n  height: auto;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 30px;\n  width: 100%;\n  height: auto;\n"]);

var LogoBannerContainer = _styledComponents2.default.div(_templateObject);

var LogoWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.md + "em";
});

var LogoImage = _styledComponents2.default.img.attrs({
  src: "/assets/logo.png",
  srcSet: "/assets/logo@2x.png 2x",
  width: "100%",
  alt: _config2.default.siteTitle + " logo"
})(_templateObject3);

exports.default = function (_ref) {
  var lang = _ref.lang;
  return _react2.default.createElement(LogoBannerContainer, null, _react2.default.createElement(LogoWrapper, null, _react2.default.createElement(_routes.Link, { route: "index", params: { lang: lang } }, _react2.default.createElement("a", null, _react2.default.createElement(LogoImage, null), _react2.default.createElement("div", { style: { paddingBottom: "18.76%" } })))));
};