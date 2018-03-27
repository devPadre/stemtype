"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require("./Header/index");

var _index2 = _interopRequireDefault(_index);

var _MobileMenu = require("./MobileMenu");

var _MobileMenu2 = _interopRequireDefault(_MobileMenu);

var _index3 = require("./Footer/index");

var _index4 = _interopRequireDefault(_index3);

var _ScrollToTop = require("./ScrollToTop");

var _ScrollToTop2 = _interopRequireDefault(_ScrollToTop);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

var _theme = require("../utils/theme");

var _theme2 = _interopRequireDefault(_theme);

var _fonts = require("../utils/fonts");

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Page.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  min-height: 90vh;\n"], ["\n  min-height: 90vh;\n"]);

var Main = _styledComponents2.default.main(_templateObject);

var Page = function (_React$Component) {
  (0, _inherits3.default)(Page, _React$Component);

  function Page(props) {
    (0, _classCallCheck3.default)(this, Page);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).call(this, props));

    _this.onMobileMenuOpenChange = function (state) {
      _this.setState({ isMobileMenuOpen: state.isOpen });
    };

    _this.onToggleMobileNavigation = function () {
      _this.setState(function (state) {
        return {
          isMobileMenuOpen: !state.isMobileMenuOpen
        };
      });
    };

    _this.state = {
      isMobileMenuOpen: false
    };
    return _this;
  }

  (0, _createClass3.default)(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _fonts2.default)();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_styledComponents.ThemeProvider, { theme: _theme2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement("div", { id: "outer-container", __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_MobileMenu2.default, {
        lang: this.props.lang,
        isOpen: this.state.isMobileMenuOpen,
        onStateChange: this.onMobileMenuOpenChange,
        pageWrapId: "main-container",
        outerContainerId: "outer-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement(_index2.default, {
        lang: this.props.lang,
        onToggleMobileNavigation: this.onToggleMobileNavigation,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement(Main, { role: "main", id: "main-container", __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, this.props.children), _react2.default.createElement(_ScrollToTop2.default, { showUnder: 150, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), _react2.default.createElement(_index4.default, { copyright: _config2.default.copyright, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })));
    }
  }]);

  return Page;
}(_react2.default.Component);

exports.default = Page;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIlRoZW1lUHJvdmlkZXIiLCJIZWFkZXIiLCJNb2JpbGVNZW51IiwiRm9vdGVyIiwiU2Nyb2xsVG9Ub3AiLCJDb25maWciLCJ0aGVtZSIsImZvbnRzIiwiTWFpbiIsIm1haW4iLCJQYWdlIiwicHJvcHMiLCJvbk1vYmlsZU1lbnVPcGVuQ2hhbmdlIiwic2V0U3RhdGUiLCJpc01vYmlsZU1lbnVPcGVuIiwic3RhdGUiLCJpc09wZW4iLCJvblRvZ2dsZU1vYmlsZU5hdmlnYXRpb24iLCJsYW5nIiwiY2hpbGRyZW4iLCJjb3B5cmlnaHQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBaUI7Ozs7QUFDeEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVc7Ozs7Ozs7Ozs7QUFFbEIsSUFBTSxPQUFPLDJCQUFQLEFBQWMsS0FBcEI7O0ksQUFJTTtnQ0FDSjs7Z0JBQUEsQUFBWSxPQUFPO3dDQUFBOztrSUFBQSxBQUNYOztVQURXLEFBV25CLHlCQUF5QixpQkFBUyxBQUNoQztZQUFBLEFBQUssU0FBUyxFQUFFLGtCQUFrQixNQUFsQyxBQUFjLEFBQTBCLEFBQ3pDO0FBYmtCOztVQUFBLEFBZW5CLDJCQUEyQixZQUFNLEFBQy9CO1lBQUEsQUFBSyxTQUFTLGlCQUFBOzs0QkFDTSxDQUFDLE1BRFAsQUFBVSxBQUNHO0FBREgsQUFDdEI7QUFERixBQUdEO0FBbkJrQixBQUVqQjs7VUFBQSxBQUFLO3dCQUZZLEFBRWpCLEFBQWEsQUFDTztBQURQLEFBQ1g7V0FFSDs7Ozs7d0NBRW1CLEFBQ2xCO0FBQ0Q7Ozs7NkJBWVEsQUFDUDs2QkFDRSxBQUFDLGlEQUFELEFBQWUsQUFBTztvQkFBdEI7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsY0FBQSxTQUFLLElBQUwsQUFBUTtvQkFBUjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztjQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2pCO2dCQUFRLEtBQUEsQUFBSyxNQUZmLEFBRXFCLEFBQ25CO3VCQUFlLEtBSGpCLEFBR3NCLEFBQ3BCO29CQUpGLEFBSWEsQUFDWDswQkFMRixBQUttQjs7b0JBTG5CO3NCQURGLEFBQ0UsQUFPQTtBQVBBO0FBQ0UsMEJBTUYsQUFBQztjQUNPLEtBQUEsQUFBSyxNQURiLEFBQ21CLEFBQ2pCO2tDQUEwQixLQUY1QixBQUVpQzs7b0JBRmpDO3NCQVJGLEFBUUUsQUFJQTtBQUpBO0FBQ0UsMEJBR0QsY0FBRCxRQUFNLE1BQU4sQUFBVyxRQUFPLElBQWxCLEFBQXFCO29CQUFyQjtzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLE1BYlYsQUFZRSxBQUNjLEFBRWQsMkJBQUEsQUFBQyx1Q0FBWSxXQUFiLEFBQXdCO29CQUF4QjtzQkFmRixBQWVFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLGlDQUFPLFdBQVcsaUJBQW5CLEFBQTBCO29CQUExQjtzQkFsQk4sQUFDRSxBQUNFLEFBZ0JFLEFBSVA7QUFKTzs7Ozs7O0VBekNTLGdCQUFNLEEsQUFnRHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlBhZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==