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

var _TypesLink = require("../TypesLink");

var _TypesLink2 = _interopRequireDefault(_TypesLink);

var _FeedItemImage = require("./FeedItemImage");

var _FeedItemImage2 = _interopRequireDefault(_FeedItemImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding-bottom: 10px;\n"], ["\n  display: block;\n  width: 100%;\n  text-align: center;\n  padding-bottom: 10px;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  text-align: center;\n  left: 0;\n  position:absolute;\n  top: 45%;\n  width: 100%;\n"], ["\n  text-align: center;\n  left: 0;\n  position:absolute;\n  top: 45%;\n  width: 100%;\n"]);

var FeedItemContainer = _styledComponents2.default.div(_templateObject);

var TypesLinkWrapper = _styledComponents2.default.div(_templateObject2);

function FeedItem(props) {
  return _react2.default.createElement(FeedItemContainer, null, _react2.default.createElement(TypesLinkWrapper, null, _react2.default.createElement(_TypesLink2.default, { category: props.category }, props.category)), _react2.default.createElement(_links.TypeLink, { category: props.category }, _react2.default.createElement(_FeedItemImage2.default, { src: props.image, lazy: props.lazy }), _react2.default.createElement("span", { style: { display: "none" } }, props.title)));
}

exports.default = FeedItem;