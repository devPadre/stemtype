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

var _tinytime = require("tinytime");

var _tinytime2 = _interopRequireDefault(_tinytime);

var _links = require("../../utils/links");

var _links2 = _interopRequireDefault(_links);

var _Image = require("./Image");

var _Image2 = _interopRequireDefault(_Image);

var _Player = require("../Player");

var _Player2 = _interopRequireDefault(_Player);

var _PostAuthorAvatar = require("./PostAuthorAvatar");

var _PostAuthorAvatar2 = _interopRequireDefault(_PostAuthorAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: 40px;\n  height: 1px;\n  border-top: 1px solid #ebebeb;\n"], ["\n  margin-top: 40px;\n  height: 1px;\n  border-top: 1px solid #ebebeb;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: inline-flex;\n  align-items: center;\n  background-color: #fff;\n  margin-top: -33px;\n  padding: 0 20px;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  background-color: #fff;\n  margin-top: -33px;\n  padding: 0 20px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  text-align: left;\n  line-height: 20px;\n  font-size: 14px;\n\n  span {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"], ["\n  text-align: left;\n  line-height: 20px;\n  font-size: 14px;\n\n  span {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  margin-bottom: 26px;\n  text-align: center;\n\n  h1 {\n    display: inline-block;\n    font-size: 36px;\n    font-weight: 400;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 10px;\n  }\n\n  .image {\n    margin-bottom: 26px;\n  }\n\n  .video {\n    margin-bottom: 26px;\n  }\n"], ["\n  margin-bottom: 26px;\n  text-align: center;\n\n  h1 {\n    display: inline-block;\n    font-size: 36px;\n    font-weight: 400;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 10px;\n  }\n\n  .image {\n    margin-bottom: 26px;\n  }\n\n  .video {\n    margin-bottom: 26px;\n  }\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  border-top-width: 5px;\n  border-bottom-width: 5px;\n  border-left-width: 0px;\n"], ["\n  border-top-width: 5px;\n  border-bottom-width: 5px;\n  border-left-width: 0px;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ", ";\n  }\n"]);

var template = (0, _tinytime2.default)("{DD} {MMMM}, {YYYY}");

var MetaContainerDivider = _styledComponents2.default.div(_templateObject);

var MetaContainer = _styledComponents2.default.div(_templateObject2);

var MetaContainerText = _styledComponents2.default.div(_templateObject3);

var SimpleTitleContainer = _styledComponents2.default.div(_templateObject4);

var ArticleTitleAuthorAvatar = (0, _styledComponents2.default)(_PostAuthorAvatar2.default)(_templateObject5);

var ArticleTitleAuthorLink = (0, _styledComponents2.default)(_links2.default.AuthorLink)(_templateObject6, function (props) {
  return props.theme.colors.inversedLinkHover;
});

exports.default = function (_ref) {
  var title = _ref.title,
      date = _ref.date,
      category = _ref.category,
      image = _ref.image,
      imageHeight = _ref.imageHeight,
      imageWidth = _ref.imageWidth,
      video = _ref.video,
      author = _ref.author,
      authorInfo = _ref.authorInfo;
  return _react2.default.createElement(SimpleTitleContainer, null, image && _react2.default.createElement("div", { className: "image" }, _react2.default.createElement(_Image2.default, {
    src: image,
    width: imageWidth,
    height: imageHeight,
    lazy: false
  })), video && _react2.default.createElement("div", { className: "video" }, _react2.default.createElement(_Player2.default, { url: video, width: "100%", height: "60vh", lazy: false })), _react2.default.createElement("div", null, _react2.default.createElement(MetaContainerDivider, null), _react2.default.createElement(MetaContainer, null, _react2.default.createElement(_links2.default.AuthorLink, { author: author }, _react2.default.createElement(ArticleTitleAuthorAvatar, {
    alt: authorInfo.name,
    src: authorInfo.avatar,
    width: 50,
    height: 50
  })), _react2.default.createElement(MetaContainerText, null, _react2.default.createElement("div", null, _react2.default.createElement(ArticleTitleAuthorLink, { author: author }, authorInfo.name)), _react2.default.createElement("div", null, _react2.default.createElement("span", null, template.render(new Date(date))))))), _react2.default.createElement("h1", null, title));
};