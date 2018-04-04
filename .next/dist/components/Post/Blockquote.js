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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  padding: 20px 20px;\n  padding-left: 20px;\n  margin: 0;\n  margin-bottom: 26px;\n  color: rgba(0, 0, 0, 0.75);\n  border-left: 5px solid rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.03);\n  font-size: ", ";\n"], ["\n  padding: 20px 20px;\n  padding-left: 20px;\n  margin: 0;\n  margin-bottom: 26px;\n  color: rgba(0, 0, 0, 0.75);\n  border-left: 5px solid rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.03);\n  font-size: ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  padding-top: 20px;\n  font-size: ", ";\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.55);\n"], ["\n  display: block;\n  padding-top: 20px;\n  font-size: ", ";\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.55);\n"]);

var StyledBlockquote = _styledComponents2.default.blockquote(_templateObject, function (props) {
  return props.size + "px";
});

StyledBlockquote.defaultProps = {
  size: 18
};

var StyledCite = _styledComponents2.default.cite(_templateObject2, function (props) {
  return props.size - 2 + "px";
});

StyledCite.defaultProps = {
  size: 18
};

exports.default = function (_ref) {
  var children = _ref.children,
      who = _ref.who,
      size = _ref.size;
  return _react2.default.createElement(StyledBlockquote, { size: size }, children, who && _react2.default.createElement(StyledCite, { size: size }, "- ", who));
};