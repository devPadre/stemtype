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

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin: 10px 0 20px 0;\n  text-align: center;\n"], ["\n  margin: 10px 0 20px 0;\n  text-align: center;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: inline-block;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  padding: 16px 48px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    color: ", ";\n  }\n"], ["\n  display: inline-block;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  padding: 16px 48px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    color: ", ";\n  }\n"]);

var ButtonContainer = _styledComponents2.default.div(_templateObject);

var Button = _styledComponents2.default.button(_templateObject2, function (props) {
  return props.theme.colors.inversedLinkHover;
});

exports.default = function (_ref) {
  var title = _ref.title,
      onClick = _ref.onClick;
  return _react2.default.createElement(ButtonContainer, null, _react2.default.createElement(Button, { onClick: onClick }, title));
};