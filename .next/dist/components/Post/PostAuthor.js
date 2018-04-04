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

var _index = require("../Icons/index");

var _index2 = _interopRequireDefault(_index);

var _SocialLink = require("../SocialLink");

var _SocialLink2 = _interopRequireDefault(_SocialLink);

var _links = require("../../utils/links");

var _links2 = _interopRequireDefault(_links);

var _PostAuthorAvatar = require("./PostAuthorAvatar");

var _PostAuthorAvatar2 = _interopRequireDefault(_PostAuthorAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  position: relative;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"], ["\n  position: relative;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: 55px;\n  margin-bottom: -5px;\n  border-top: 1px solid #ebebeb;\n  text-align: center;\n  min-height: 150px;\n"], ["\n  margin-top: 55px;\n  margin-bottom: -5px;\n  border-top: 1px solid #ebebeb;\n  text-align: center;\n  min-height: 150px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  margin-bottom: 10px;\n"], ["\n  display: block;\n  margin-bottom: 10px;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  font-size: 16px;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  font-size: 16px;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ", ";\n  }\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  color: rgba(0, 0, 0, 0.5);\n  display: block;\n  font-size: 14px;\n  margin-top: 10px;\n"], ["\n  color: rgba(0, 0, 0, 0.5);\n  display: block;\n  font-size: 14px;\n  margin-top: 10px;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  margin-top: 10px;\n"], ["\n  display: block;\n  margin-top: 10px;\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n  margin-right: 5px;\n"], ["\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n  margin-right: 5px;\n"]),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: -60px;\n"], ["\n  margin-top: -60px;\n"]);

var AuthorBoxContainer = _styledComponents2.default.div(_templateObject);

var AuthorBox = _styledComponents2.default.div(_templateObject2);

var AuthorInfo = _styledComponents2.default.div(_templateObject3);

var AuthorLink = (0, _styledComponents2.default)(_links2.default.AuthorLink)(_templateObject4, function (props) {
  return props.theme.colors.inversedLinkHover;
});

var AuthorDescription = _styledComponents2.default.div(_templateObject5);

var AuthorSocialLinks = _styledComponents2.default.div(_templateObject6);

var AuthorSocialLink = (0, _styledComponents2.default)(_SocialLink2.default)(_templateObject7);

var StyledPostAuthorAvatar = (0, _styledComponents2.default)(_PostAuthorAvatar2.default)(_templateObject8);

exports.default = function (_ref) {
  var author = _ref.author,
      authorInfo = _ref.authorInfo,
      className = _ref.className;

  return _react2.default.createElement(AuthorBoxContainer, { className: className }, _react2.default.createElement(AuthorBox, null, _react2.default.createElement(AuthorLink, { author: author }, _react2.default.createElement(StyledPostAuthorAvatar, {
    alt: authorInfo.name,
    src: authorInfo.avatar,
    height: 70,
    width: 70
  })), _react2.default.createElement(AuthorInfo, null, _react2.default.createElement(AuthorLink, { author: author }, authorInfo.name), authorInfo.description && _react2.default.createElement(AuthorDescription, null, authorInfo.description), _react2.default.createElement(AuthorSocialLinks, null, _react2.default.createElement(AuthorSocialLink, { href: authorInfo.social.facebook.href }, _react2.default.createElement(_index2.default.Facebook, null)), _react2.default.createElement(AuthorSocialLink, { href: authorInfo.social.instagram.href }, _react2.default.createElement(_index2.default.Instagram, null))))));
};