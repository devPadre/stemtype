"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _links = require("../../utils/links");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
    ["\n  margin-bottom: 26px;\n"],
    ["\n  margin-bottom: 26px;\n"]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  display: inline-block;\n  margin-top: 8px;\n  margin-right: 8px;\n  padding: 6px 18px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  line-height: 1.5;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: color 0.25s ease;\n\n  &:hover {\n    color: ",
      ";\n  }\n"
    ],
    [
      "\n  display: inline-block;\n  margin-top: 8px;\n  margin-right: 8px;\n  padding: 6px 18px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  line-height: 1.5;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: color 0.25s ease;\n\n  &:hover {\n    color: ",
      ";\n  }\n"
    ]
  );

var TagsContainer = _styledComponents2.default.div(_templateObject);

var Tag = (exports.Tag = (0, _styledComponents2.default)(_links.TagLink)(
  _templateObject2,
  function(props) {
    return props.theme.colors.inversedLinkHover;
  }
));

exports.default = function(_ref) {
  var tags = _ref.tags;
  return _react2.default.createElement(
    TagsContainer,
    null,
    tags.map(function(tag) {
      return _react2.default.createElement(
        Tag,
        { tag: tag, key: tag },
        "#",
        tag
      );
    })
  );
};
