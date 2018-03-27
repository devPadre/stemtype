"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _document = require("next/dist/server/document.js");

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require("styled-components");

var _polished = require("polished");

var _theme = require("../utils/theme");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/pages/_document.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n    ", ";\n  "], ["\n    ", ";\n  "]);

var resetStyles = "\n\n  " + (0, _styledComponents.css)(_templateObject, (0, _polished.normalize)()) + "\n\n  body {\n    font-family: " + _theme2.default.fonts.family.fallback + ";\n    font-size: " + _theme2.default.fonts.size.normal + ";\n    font-style: normal;\n    padding: 0;\n    margin: 0;\n    color: " + _theme2.default.colors.text + ";\n    background: " + _theme2.default.colors.background + ";\n    -webkit-font-smoothing: subpixel-antialiased;\n  }\n\n  .fonts-loaded body {\n    font-family: " + _theme2.default.fonts.family.base + ";\n  }\n\n  .root {\n    position: relative;\n    overflow: auto;\n  }\n";

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement("html", {
        lang: "en",
        className: this.props.fontsAreLoaded ? "fonts-loaded" : "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), _react2.default.createElement("meta", { charSet: "UTF-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }), _react2.default.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge,chrome=1", __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }), _react2.default.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, user-scalable=yes",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }), _react2.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/favicon/apple-icon-57x57.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }), _react2.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/favicon/apple-icon-60x60.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/favicon/apple-icon-72x72.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }), _react2.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/favicon/apple-icon-76x76.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), _react2.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/favicon/apple-icon-114x114.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }), _react2.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/favicon/apple-icon-120x120.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }), _react2.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/favicon/apple-icon-144x144.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }), _react2.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/favicon/apple-icon-152x152.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }), _react2.default.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-icon-180x180.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }), _react2.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/favicon/android-icon-192x192.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }), _react2.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }), _react2.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/favicon/favicon-96x96.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }), _react2.default.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }), _react2.default.createElement("link", { rel: "manifest", href: "/manifest.json", __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }), _react2.default.createElement("meta", { name: "msapplication-TileColor", content: "#ffffff", __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), _react2.default.createElement("meta", {
        name: "msapplication-TileImage",
        content: "/favicon/ms-icon-144x144.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }), _react2.default.createElement("meta", { name: "theme-color", content: "#ffffff", __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), _react2.default.createElement("style", { dangerouslySetInnerHTML: { __html: resetStyles }, __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), _react2.default.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Open+Sans&subset=cyrillic",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }), this.props.styleTags), _react2.default.createElement("body", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage,
          req = _ref.req;

      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(App, (0, _extends3.default)({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            }
          })));
        };
      });
      var styleTags = sheet.getStyleElement();
      var fontsAreLoaded = (req.headers.cookie || "").indexOf("fonts-loaded") !== 0;
      return (0, _extends3.default)({}, page, { styleTags: styleTags, fontsAreLoaded: fontsAreLoaded });
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19kb2N1bWVudC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkRvY3VtZW50IiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiU2VydmVyU3R5bGVTaGVldCIsImNzcyIsIm5vcm1hbGl6ZSIsIlRoZW1lIiwicmVzZXRTdHlsZXMiLCJmb250cyIsImZhbWlseSIsImZhbGxiYWNrIiwic2l6ZSIsIm5vcm1hbCIsImNvbG9ycyIsInRleHQiLCJiYWNrZ3JvdW5kIiwiYmFzZSIsIk15RG9jdW1lbnQiLCJwcm9wcyIsImZvbnRzQXJlTG9hZGVkIiwiX19odG1sIiwic3R5bGVUYWdzIiwicmVuZGVyUGFnZSIsInJlcSIsInNoZWV0IiwicGFnZSIsImNvbGxlY3RTdHlsZXMiLCJnZXRTdHlsZUVsZW1lbnQiLCJoZWFkZXJzIiwiY29va2llIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZLEFBQU0sQUFBTTs7OztBQUMvQixBQUFTLEFBQWtCOztBQUMzQixBQUFTOztBQUNULEFBQU8sQUFBVzs7Ozs7Ozs7OztBQUVsQixJQUFNLHlCQUFBLEFBRUYsNENBRkUsQUFHQSxrRUFJYSxnQkFBQSxBQUFNLE1BQU4sQUFBWSxPQVB6QixBQU9nQyxrQ0FDckIsZ0JBQUEsQUFBTSxNQUFOLEFBQVksS0FSdkIsQUFRNEIsc0ZBSXJCLGdCQUFBLEFBQU0sT0FaYixBQVlvQiwrQkFDUixnQkFBQSxBQUFNLE9BYmxCLEFBYXlCLHdIQUtaLGdCQUFBLEFBQU0sTUFBTixBQUFZLE9BbEJ6QixBQWtCZ0MsT0FsQnRDOztJLEFBMkJxQjs7Ozs7Ozs7Ozs7NkJBWVYsQUFDUDs2QkFDRSxjQUFBO2NBQUEsQUFDTyxBQUNMO21CQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsaUJBQVgsQUFBNEIsaUJBRnpDLEFBRTBEOztvQkFGMUQ7c0JBQUEsQUFJRTtBQUpGO0FBQ0UsT0FERixr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Qzs7b0JBQUQ7c0JBbEdOLEFBQ0UsQUErRkUsQUFFRSxBQUlQO0FBSk87QUFBQTs7OzswQ0E5R29DO1VBQW5CLEFBQW1CLGtCQUFuQixBQUFtQjtVQUFQLEFBQU8sV0FBUCxBQUFPLEFBQzFDOztVQUFNLFFBQU4sQUFBYyxBQUFJLEFBQ2xCO1VBQU0sa0JBQWtCLGVBQUE7ZUFBTyxpQkFBQTt1QkFDN0IsQUFBTSw0Q0FBYyxBQUFDLGdDQUFELEFBQVM7O3dCQUFUOzBCQURTLEFBQzdCLEFBQW9CO0FBQUE7QUFBQSxZQUFBLENBQXBCO0FBRHNCO0FBQXhCLEFBQWEsQUFHYixPQUhhO1VBR1AsWUFBWSxNQUFsQixBQUFrQixBQUFNLEFBQ3hCO1VBQU0saUJBQ0osQ0FBQyxJQUFBLEFBQUksUUFBSixBQUFZLFVBQWIsQUFBdUIsSUFBdkIsQUFBMkIsUUFBM0IsQUFBbUMsb0JBRHJDLEFBQ3lELEFBQ3pEO3dDQUFBLEFBQVksUUFBTSxXQUFsQixXQUE2QixnQkFBN0IsQUFDRDs7Ozs7QUFWcUMsQTs7a0JBQW5CLEEiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=