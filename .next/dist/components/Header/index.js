"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = require("react-styled-flexboxgrid");

var _routes = require("../../utils/routes");

var _SocialLink = require("../SocialLink");

var _SocialLink2 = _interopRequireDefault(_SocialLink);

var _LogoLink = require("../LogoLink");

var _LogoLink2 = _interopRequireDefault(_LogoLink);

var _media = require("../../utils/media");

var _media2 = _interopRequireDefault(_media);

var _Icons = require("../Icons");

var _Icons2 = _interopRequireDefault(_Icons);

var _config = require("../../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Header/index.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  min-height: 48px;\n  width: 100%;\n  background-color: ", ";\n"], ["\n  min-height: 48px;\n  width: 100%;\n  background-color: ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  color: ", ";\n  font-size: 24px;\n  margin-top: 20px;\n  margin-left: 10px;\n  cursor: pointer;\n  display: none;\n\n  ", ";\n"], ["\n  color: ", ";\n  font-size: 24px;\n  margin-top: 20px;\n  margin-left: 10px;\n  cursor: pointer;\n  display: none;\n\n  ", ";\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["display: inline-block;"], ["display: inline-block;"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    float: left;\n  }\n\n  li {\n    display: inline-block;\n    margin-right: 30px;\n    position: relative;\n    list-style: none;\n  }\n\n  a {\n    color: ", ";\n    font-weight: 400;\n    transition: 0.25s;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 11px;\n    font-weight: 400;\n    line-height: 80px;\n    letter-spacing: 2px;\n    display: block;\n    text-transform: uppercase;\n  }\n\n  a:hover,\n  a:focus {\n    color: ", ";\n  }\n\n  ", ";\n"], ["\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    float: left;\n  }\n\n  li {\n    display: inline-block;\n    margin-right: 30px;\n    position: relative;\n    list-style: none;\n  }\n\n  a {\n    color: ", ";\n    font-weight: 400;\n    transition: 0.25s;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 11px;\n    font-weight: 400;\n    line-height: 80px;\n    letter-spacing: 2px;\n    display: block;\n    text-transform: uppercase;\n  }\n\n  a:hover,\n  a:focus {\n    color: ", ";\n  }\n\n  ", ";\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["display: none;"], ["display: none;"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: ", "};\n  padding: 14px 0;\n  margin-right: 10px;\n  &:last-child {\n    margin-right: 0;\n  }\n"], ["\n  font-size: ", "};\n  padding: 14px 0;\n  margin-right: 10px;\n  &:last-child {\n    margin-right: 0;\n  }\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n  padding: 16px 0;\n  margin-right: 0px;\n"], ["\n  padding: 16px 0;\n  margin-right: 0px;\n"]);

var HeaderContainer = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.colors.black;
});

var ToggleMenuIcon = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.colors.inversedText;
}, _media2.default.md(_templateObject3));

var Navigation = _styledComponents2.default.nav.attrs({
  role: "navigation"
})(_templateObject4, function (props) {
  return props.theme.colors.inversedLink;
}, function (props) {
  return props.theme.colors.inversedLinkHover;
}, _media2.default.md(_templateObject5));

var NavigationMenu = function NavigationMenu(_ref) {
  var lang = _ref.lang;
  return _react2.default.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, _config2.default.menu.map(function (_ref2, index) {
    var text = _ref2.text,
        route = _ref2.route,
        params = _ref2.params;
    return _react2.default.createElement("li", { key: "menu-" + index, __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    }, _react2.default.createElement(_routes.Link, { route: route, params: (0, _extends3.default)({}, params, { lang: lang }), __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      }
    }, _react2.default.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      }
    }, text)));
  }));
};

var HeaderRoot = function HeaderRoot(_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, _react2.default.createElement(HeaderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, children));
};

var HeaderSocialLink = _SocialLink2.default.extend(_templateObject6, function (props) {
  return props.size || "20px";
});

var HeaderLogoLink = _LogoLink2.default.extend(_templateObject7);

exports.default = function (_ref4) {
  var onToggleMobileNavigation = _ref4.onToggleMobileNavigation,
      lang = _ref4.lang;
  return _react2.default.createElement(HeaderRoot, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Grid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, { style: { margin: 0 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 4, xsOffset: 0, sm: 4, smOffset: 0, __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, _react2.default.createElement(ToggleMenuIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    }
  }, _react2.default.createElement(_Icons2.default.Burger, { onClick: onToggleMobileNavigation, __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    }
  })), _react2.default.createElement(Navigation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, _react2.default.createElement(NavigationMenu, { lang: lang, __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }))), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 6, sm: 6, __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }, _react2.default.createElement(HeaderLogoLink, { href: _config2.default.social.facebook.href, __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }, _react2.default.createElement(_Icons2.default.StemLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    }
  }))))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiR3JpZCIsIlJvdyIsIkNvbCIsIkxpbmsiLCJTb2NpYWxMaW5rIiwiTG9nb0xpbmsiLCJNZWRpYSIsIkljb25zIiwiQ29uZmlnIiwiSGVhZGVyQ29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImJsYWNrIiwiVG9nZ2xlTWVudUljb24iLCJpbnZlcnNlZFRleHQiLCJtZCIsIk5hdmlnYXRpb24iLCJuYXYiLCJhdHRycyIsInJvbGUiLCJpbnZlcnNlZExpbmsiLCJpbnZlcnNlZExpbmtIb3ZlciIsIk5hdmlnYXRpb25NZW51IiwibGFuZyIsIm1lbnUiLCJtYXAiLCJpbmRleCIsInRleHQiLCJyb3V0ZSIsInBhcmFtcyIsIkhlYWRlclJvb3QiLCJjaGlsZHJlbiIsIkhlYWRlclNvY2lhbExpbmsiLCJleHRlbmQiLCJzaXplIiwiSGVhZGVyTG9nb0xpbmsiLCJvblRvZ2dsZU1vYmlsZU5hdmlnYXRpb24iLCJtYXJnaW4iLCJzb2NpYWwiLCJmYWNlYm9vayIsImhyZWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBSzs7QUFDcEIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFNLDZDQUFBLEFBQXlCLHFCQUdULGlCQUFBO1NBQVMsTUFBQSxBQUFNLE1BQU4sQUFBWSxPQUFyQixBQUE0QjtBQUhsRCxBQUFNLENBQWtCOztBQU14QixJQUFNLDRDQUFBLEFBQXdCLHNCQUNuQixpQkFBQTtTQUFTLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBckIsQUFBNEI7QUFEakMsQ0FBaUIsRUFRbkIsZ0JBUkUsQUFRSSxHQVJWOztBQVdBLElBQU0sd0NBQWEsQUFBTyxJQUFQLEFBQVc7UUFBeEIsQUFBYSxBQUFpQixBQUM1QjtBQUQ0QixBQUNsQyxDQURpQixvQkFrQk4saUJBQUE7U0FBUyxNQUFBLEFBQU0sTUFBTixBQUFZLE9BQXJCLEFBQTRCO0FBbEJuQyxHQWlDTyxpQkFBQTtTQUFTLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBckIsQUFBNEI7QUFqQ25DLEdBb0NGLGdCQXBDRSxBQW9DSSxHQXBDVjs7QUF1Q0EsSUFBTSxpQkFBaUIsU0FBakIsQUFBaUIscUJBQUE7TUFBQSxBQUFHLFlBQUgsQUFBRzt5QkFDeEIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxtQkFDRyxBQUFPLEtBQVAsQUFBWSxJQUFJLGlCQUFBLEFBQTBCLE9BQTFCO1FBQUEsQUFBRyxhQUFILEFBQUc7UUFBSCxBQUFTLGNBQVQsQUFBUztRQUFULEFBQWdCLGVBQWhCLEFBQWdCOzJCQUMvQixjQUFBLFFBQUksZUFBSixBQUFpQjtrQkFBakI7b0JBQUEsQUFDRTtBQURGO0tBQUEsa0JBQ0UsQUFBQyw4QkFBSyxPQUFOLEFBQWEsT0FBTyxtQ0FBQSxBQUFhLFVBQVEsTUFBekMsQUFBb0I7a0JBQXBCO29CQUFBLEFBQ0U7QUFERjt1QkFDRSxjQUFBOztrQkFBQTtvQkFBQSxBQUFJO0FBQUo7QUFBQSxPQUhXLEFBQ2YsQUFDRSxBQUNFO0FBTGEsQUFDckIsQUFDRztBQUZMOztBQVlBLElBQU0sYUFBYSxTQUFiLEFBQWEsa0JBQUE7TUFBQSxBQUFHLGlCQUFILEFBQUc7eUJBQ3BCLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFBa0I7QUFBbEI7QUFBQSxLQUZlLEFBQ2pCLEFBQ0U7QUFGSjs7QUFNQSxJQUFNLHdDQUFBLEFBQThCLHlCQUNyQixpQkFBQTtTQUFTLE1BQUEsQUFBTSxRQUFmLEFBQXVCO0FBRHRDLEFBQU0sQ0FBbUI7O0FBU3pCLElBQU0saUJBQWlCLG1CQUFqQixBQUEwQixPQUFoQyxBQUtBOztrQkFBZSxpQkFBQTtNQUFBLEFBQUcsaUNBQUgsQUFBRztNQUFILEFBQTZCLGFBQTdCLEFBQTZCO3lCQUN6QyxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsNkNBQUksT0FBTyxFQUFFLFFBQWQsQUFBWSxBQUFVO2dCQUF0QjtrQkFBQSxBQUVFO0FBRkY7cUJBRUUsQUFBQyw2Q0FBSSxJQUFMLEFBQVMsR0FBRyxVQUFaLEFBQXNCLEdBQUcsSUFBekIsQUFBNkIsR0FBRyxVQUFoQyxBQUEwQztnQkFBMUM7a0JBQUEsQUFDRTtBQURGO3FCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLG1DQUNFLEFBQUMsZ0JBQUQsQUFBTyxVQUFPLFNBQWQsQUFBdUI7Z0JBQXZCO2tCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7dUJBRUQsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsbUNBQ0UsQUFBQyxrQkFBZSxNQUFoQixBQUFzQjtnQkFBdEI7a0JBUE4sQUFFRSxBQUlFLEFBQ0UsQUFJSjtBQUpJO3dCQUlKLEFBQUMsNkNBQUksSUFBTCxBQUFTLEdBQUcsSUFBWixBQUFnQjtnQkFBaEI7a0JBQUEsQUFDRTtBQURGO3FCQUNHLGNBQUQsa0JBQWdCLE1BQU0saUJBQUEsQUFBTyxPQUFQLEFBQWMsU0FBcEMsQUFBNkM7Z0JBQTdDO2tCQUFBLEFBQ0E7QUFEQTttQ0FDQSxBQUFDLGdCQUFELEFBQU87O2dCQUFQO2tCQWhCSyxBQUNiLEFBQ0UsQUFDRSxBQVdFLEFBQ0UsQUFDQTtBQUFBO0FBQUE7QUFoQlYiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==