"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require("react-styled-flexboxgrid");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Icons = require("../Icons");

var _Icons2 = _interopRequireDefault(_Icons);

var _SocialLink = require("../SocialLink");

var _SocialLink2 = _interopRequireDefault(_SocialLink);

var _media = require("../../utils/media");

var _media2 = _interopRequireDefault(_media);

var _config = require("../../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Footer/LowerFooter.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  background-color: ", ";\n  color: ", ";\n"], ["\n  width: 100%;\n  background-color: ", ";\n  color: ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  padding-top: 16px;\n  padding-bottom: 16px;\n  font-size: 12px;\n  line-height: 35px;\n"], ["\n  padding-top: 16px;\n  padding-bottom: 16px;\n  font-size: 12px;\n  line-height: 35px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  margin-right: 15px;\n  &:last-child {\n    margin-right: 0;\n  }\n"], ["\n  margin-right: 15px;\n  &:last-child {\n    margin-right: 0;\n  }\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  text-align: right;\n  ", ";\n"], ["\n  text-align: right;\n  ", ";\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["text-align: left"], ["text-align: left"]);

var Background = _styledComponents2.default.section(_templateObject, function (props) {
  return props.theme.colors.black;
}, function (props) {
  return props.theme.colors.inversedText;
});

var FooterGrid = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Grid)(_templateObject2);

var FooterSocialLink = _SocialLink2.default.extend(_templateObject3);

var SocialCol = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Col)(_templateObject4, _media2.default.md(_templateObject5));

exports.default = function (_ref) {
  var copyright = _ref.copyright;
  return _react2.default.createElement(Background, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(FooterGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, { style: { margin: 0 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 10, xsOffset: 1, sm: 12, smOffset: 0, md: 6, mdOffset: 0, __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "\xA9 "), _react2.default.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, new Date().getFullYear(), " "), _react2.default.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, copyright)), _react2.default.createElement(SocialCol, {
    xs: 10,
    xsOffset: 1,
    sm: 12,
    smOffset: 0,
    md: 6,
    mdOffset: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, _react2.default.createElement(FooterSocialLink, { href: _config2.default.social.facebook.href, __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }, _react2.default.createElement(_Icons2.default.Facebook, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }), _react2.default.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, _config2.default.social.facebook.title)), _react2.default.createElement(FooterSocialLink, { href: _config2.default.social.twitter.href, __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, _react2.default.createElement(_Icons2.default.Twitter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), _react2.default.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, _config2.default.social.twitter.title)), _react2.default.createElement(FooterSocialLink, { href: _config2.default.social.youtube.href, __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement(_Icons2.default.Youtube, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), _react2.default.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _config2.default.social.youtube.title))))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyL0xvd2VyRm9vdGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIlJvdyIsIkNvbCIsInN0eWxlZCIsIkljb25zIiwiU29jaWFsTGluayIsIk1lZGlhIiwiQ29uZmlnIiwiQmFja2dyb3VuZCIsInNlY3Rpb24iLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiYmxhY2siLCJpbnZlcnNlZFRleHQiLCJGb290ZXJHcmlkIiwiRm9vdGVyU29jaWFsTGluayIsImV4dGVuZCIsIlNvY2lhbENvbCIsIm1kIiwiY29weXJpZ2h0IiwibWFyZ2luIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic29jaWFsIiwiZmFjZWJvb2siLCJocmVmIiwidGl0bGUiLCJ0d2l0dGVyIiwieW91dHViZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBSzs7QUFDcEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7Ozs7Ozs7Ozs7O0FBRW5CLElBQU0sd0NBQUEsQUFBb0IseUJBRUosaUJBQUE7U0FBUyxNQUFBLEFBQU0sTUFBTixBQUFZLE9BQXJCLEFBQTRCO0FBRjVDLENBQWEsRUFHUixpQkFBQTtTQUFTLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBckIsQUFBNEI7QUFIdkMsQUFBTTs7QUFNTixJQUFNLGFBQUEsQUFBYSxBQUFPLDhEQUExQjs7QUFPQSxJQUFNLG1CQUFtQixxQkFBbkIsQUFBOEIsT0FBcEM7O0FBT0EsSUFBTSxZQUFBLEFBQVksQUFBTywrRUFFckIsZ0JBRkUsQUFFSSxHQUZWLEFBS0E7O2tCQUFlLGdCQUFBO01BQUEsQUFBRyxpQkFBSCxBQUFHO3lCQUNmLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyw2Q0FBSSxPQUFPLEVBQUUsUUFBZCxBQUFZLEFBQVU7Z0JBQXRCO2tCQUFBLEFBQ0U7QUFERjtxQkFDRSxBQUFDLDZDQUFJLElBQUwsQUFBUyxJQUFJLFVBQWIsQUFBdUIsR0FBRyxJQUExQixBQUE4QixJQUFJLFVBQWxDLEFBQTRDLEdBQUcsSUFBL0MsQUFBbUQsR0FBRyxVQUF0RCxBQUFnRTtnQkFBaEU7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSwwQkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFPO0FBQVA7QUFBQSxTQUFPLEFBQUksT0FBWCxBQUFPLEFBQVcsZUFGcEIsQUFFRSxBQUNBLHNCQUFBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQU87QUFBUDtBQUFBLEtBSkosQUFDRSxBQUdFLEFBRUYsNkJBQUMsY0FBRDtRQUFBLEFBQ00sQUFDSjtjQUZGLEFBRVksQUFDVjtRQUhGLEFBR00sQUFDSjtjQUpGLEFBSVksQUFDVjtRQUxGLEFBS00sQUFDSjtjQU5GLEFBTVk7O2dCQU5aO2tCQUFBLEFBUUU7QUFSRjtBQUNFLHFCQU9DLGNBQUQsb0JBQWtCLE1BQU0saUJBQUEsQUFBTyxPQUFQLEFBQWMsU0FBdEMsQUFBK0M7Z0JBQS9DO2tCQUFBLEFBQ0U7QUFERjttQ0FDRSxBQUFDLGdCQUFELEFBQU87O2dCQUFQO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBTztBQUFQO0FBQUEsc0JBQU8sQUFBTyxPQUFQLEFBQWMsU0FWekIsQUFRRSxBQUVFLEFBQThCLEFBRWhDLHlCQUFDLGNBQUQsb0JBQWtCLE1BQU0saUJBQUEsQUFBTyxPQUFQLEFBQWMsUUFBdEMsQUFBOEM7Z0JBQTlDO2tCQUFBLEFBQ0U7QUFERjttQ0FDRSxBQUFDLGdCQUFELEFBQU87O2dCQUFQO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBTztBQUFQO0FBQUEsc0JBQU8sQUFBTyxPQUFQLEFBQWMsUUFkekIsQUFZRSxBQUVFLEFBQTZCLEFBRS9CLHlCQUFDLGNBQUQsb0JBQWtCLE1BQU0saUJBQUEsQUFBTyxPQUFQLEFBQWMsUUFBdEMsQUFBOEM7Z0JBQTlDO2tCQUFBLEFBQ0U7QUFERjttQ0FDRSxBQUFDLGdCQUFELEFBQU87O2dCQUFQO2tCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsc0JBQ0EsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBTztBQUFQO0FBQUEsc0JBQU8sQUFBTyxPQUFQLEFBQWMsUUEzQmxCLEFBQ2IsQUFDRSxBQUNFLEFBTUUsQUFnQkUsQUFFRSxBQUE2QjtBQTNCekMiLCJmaWxlIjoiTG93ZXJGb290ZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==