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

var _PostCategoryAvatar = require("./PostCategoryAvatar");

var _PostCategoryAvatar2 = _interopRequireDefault(_PostCategoryAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  position: relative;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"], ["\n  position: relative;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: 55px;\n  margin-bottom: -5px;\n  border-top: 1px solid #ebebeb;\n  text-align: center;\n  min-height: 150px;\n"], ["\n  margin-top: 55px;\n  margin-bottom: -5px;\n  border-top: 1px solid #ebebeb;\n  text-align: center;\n  min-height: 150px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  margin-bottom: 10px;\n"], ["\n  display: block;\n  margin-bottom: 10px;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  font-size: 28px;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  font-size: 28px;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ", ";\n  }\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  color: rgba(0, 0, 0, 0.5);\n  display: block;\n  font-size: 14px;\n  margin-top: 10px;\n"], ["\n  color: rgba(0, 0, 0, 0.5);\n  display: block;\n  font-size: 14px;\n  margin-top: 10px;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: -60px;\n"], ["\n  margin-top: -60px;\n"]);

var CategoryBoxContainer = _styledComponents2.default.div(_templateObject);

var CategoryBox = _styledComponents2.default.div(_templateObject2);

var CategoryInfo = _styledComponents2.default.div(_templateObject3);

var CategoryLink = (0, _styledComponents2.default)(_links2.default.CategoryLink)(_templateObject4, function (props) {
  return props.theme.colors.inversedLinkHover;
});

var CategoryDescription = _styledComponents2.default.div(_templateObject5);

var StyledPostCategoryAvatar = (0, _styledComponents2.default)(_PostCategoryAvatar2.default)(_templateObject6);

exports.default = function (_ref) {
  var category = _ref.category,
      categoryInfo = _ref.categoryInfo,
      className = _ref.className;

  return _react2.default.createElement(CategoryBoxContainer, { className: className }, _react2.default.createElement(CategoryBox, null, _react2.default.createElement(CategoryLink, { category: category }, _react2.default.createElement(StyledPostCategoryAvatar, {
    alt: categoryInfo.title,
    src: categoryInfo.card.avatar,
    height: 70,
    width: 70
  })), _react2.default.createElement(CategoryInfo, null, _react2.default.createElement(CategoryLink, { category: category }, categoryInfo.title), categoryInfo.card.description && _react2.default.createElement(CategoryDescription, null, categoryInfo.card.description))));
};