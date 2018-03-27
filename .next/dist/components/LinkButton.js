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

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/LinkButton.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin: 10px 0 20px 0;\n  text-align: center;\n"], ["\n  margin: 10px 0 20px 0;\n  text-align: center;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: inline-block;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  padding: 16px 48px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    color: ", ";\n  }\n"], ["\n  display: inline-block;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  padding: 16px 48px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    color: ", ";\n  }\n"]);

var ButtonContainer = _styledComponents2.default.div(_templateObject);

var Button = _styledComponents2.default.button(_templateObject2, function (props) {
  return props.theme.colors.inversedLinkHover;
});

exports.default = function (_ref) {
  var title = _ref.title,
      onClick = _ref.onClick;
  return _react2.default.createElement(ButtonContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement(Button, { onClick: onClick, __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, title));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlua0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkJ1dHRvbkNvbnRhaW5lciIsImRpdiIsIkJ1dHRvbiIsImJ1dHRvbiIsInByb3BzIiwidGhlbWUiLCJjb2xvcnMiLCJpbnZlcnNlZExpbmtIb3ZlciIsInRpdGxlIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7OztBQUVQLElBQU0sa0JBQWtCLDJCQUFsQixBQUF5QixJQUEvQjs7QUFLQSxJQUFNLG9DQUFBLEFBQWdCLHlCQWtCVCxpQkFBQTtTQUFTLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBckIsQUFBNEI7QUFsQnpDLEFBQU0sQUFzQk4sQ0F0QmU7O2tCQXNCQSxnQkFBQTtNQUFBLEFBQUcsYUFBSCxBQUFHO01BQUgsQUFBVSxlQUFWLEFBQVU7eUJBQ3RCLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0csY0FBRCxVQUFRLFNBQVIsQUFBaUI7Z0JBQWpCO2tCQUFBLEFBQTJCO0FBQTNCO0tBRlcsQUFDYixBQUNFO0FBRkoiLCJmaWxlIjoiTGlua0J1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9