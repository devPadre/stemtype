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

var _links = require("../../utils/links");

var _CategoryLink = require("../CategoryLink");

var _CategoryLink2 = _interopRequireDefault(_CategoryLink);

var _FeedItemImage = require("./FeedItemImage");

var _FeedItemImage2 = _interopRequireDefault(_FeedItemImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  ", ";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ", ") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"], ["\n  display: block;\n  ", ";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ", ") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  width: 45%;\n  float: ", ";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ", ") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"], ["\n  width: 45%;\n  float: ", ";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ", ") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ", ") {\n    width: 100%;\n  }\n"], ["\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ", ") {\n    width: 100%;\n  }\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ", ") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"], ["\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ", ") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);

var FeedItemContainer = _styledComponents2.default.div(_templateObject, (0, _polished.clearFix)(), function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
});

var ImageColumn = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.even ? "right" : "left";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
});

var DescriptionColumn = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
});

var DescriptionColumnInner = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
});

var PostTitleLink = (0, _styledComponents2.default)(_links.PostLink)(_templateObject5);

function FeedItemFeatured(props) {
  return _react2.default.createElement(FeedItemContainer, null, _react2.default.createElement(ImageColumn, { even: props.even }, _react2.default.createElement(_links.PostLink, { href: props.href }, _react2.default.createElement(_FeedItemImage2.default, { featured: true, src: props.image, lazy: props.lazy }), _react2.default.createElement("span", { style: { display: "none" } }, props.title))), _react2.default.createElement(DescriptionColumn, null, _react2.default.createElement(DescriptionColumnInner, null, _react2.default.createElement(_CategoryLink2.default, { category: props.category }, props.category), _react2.default.createElement(PostTitleLink, { prefetch: true, href: props.href }, props.title), props.text && _react2.default.createElement("p", null, props.text))));
}

exports.default = FeedItemFeatured;