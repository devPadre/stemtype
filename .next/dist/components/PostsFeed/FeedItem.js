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

var _links = require("../../utils/links");

var _CategoryLink = require("../CategoryLink");

var _CategoryLink2 = _interopRequireDefault(_CategoryLink);

var _FeedItemImage = require("./FeedItemImage");

var _FeedItemImage2 = _interopRequireDefault(_FeedItemImage);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
    ["\n  display: block;\n  width: 100%;\n  text-align: center;\n"],
    ["\n  display: block;\n  width: 100%;\n  text-align: center;\n"]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    ["\n  margin-top: 10px;\n"],
    ["\n  margin-top: 10px;\n"]
  ),
  _templateObject3 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  font-size: 15px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",
      ";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
    ],
    [
      "\n  font-size: 15px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",
      ";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
    ]
  );

var FeedItemContainer = _styledComponents2.default.div(_templateObject);

var CategoryLinkWrapper = _styledComponents2.default.div(_templateObject2);

var ItemTitle = (0, _styledComponents2.default)(_links.PostLink)(
  _templateObject3,
  function(props) {
    return props.theme.colors.black;
  }
);

function FeedItem(props) {
  return _react2.default.createElement(
    FeedItemContainer,
    null,
    _react2.default.createElement(
      _links.PostLink,
      { href: props.href },
      _react2.default.createElement(_FeedItemImage2.default, {
        src: props.image,
        lazy: props.lazy
      }),
      _react2.default.createElement(
        "span",
        { style: { display: "none" } },
        props.title
      )
    ),
    _react2.default.createElement(
      CategoryLinkWrapper,
      null,
      _react2.default.createElement(
        _CategoryLink2.default,
        { category: props.category },
        props.category
      )
    ),
    _react2.default.createElement(ItemTitle, { href: props.href }, props.title)
  );
}

exports.default = FeedItem;
