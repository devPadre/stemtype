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

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  ["\n    ", ";\n  "],
  ["\n    ", ";\n  "]
);

var resetStyles =
  "\n\n  " +
  (0, _styledComponents.css)(_templateObject, (0, _polished.normalize)()) +
  "\n\n  body {\n    font-family: " +
  _theme2.default.fonts.family.fallback +
  ";\n    font-size: " +
  _theme2.default.fonts.size.normal +
  ";\n    font-style: normal;\n    padding: 0;\n    margin: 0;\n    color: " +
  _theme2.default.colors.text +
  ";\n    background: " +
  _theme2.default.colors.background +
  ";\n    -webkit-font-smoothing: subpixel-antialiased;\n  }\n\n  .fonts-loaded body {\n    font-family: " +
  _theme2.default.fonts.family.base +
  ";\n  }\n\n  .root {\n    position: relative;\n    overflow: auto;\n  }\n";

var MyDocument = (function(_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(
      this,
      (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(
    MyDocument,
    [
      {
        key: "render",
        value: function render() {
          return _react2.default.createElement(
            "html",
            {
              lang: "en",
              className: this.props.fontsAreLoaded ? "fonts-loaded" : ""
            },
            _react2.default.createElement(
              _document.Head,
              null,
              _react2.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
              }),
              _react2.default.createElement("meta", { charSet: "UTF-8" }),
              _react2.default.createElement("meta", {
                httpEquiv: "X-UA-Compatible",
                content: "IE=edge,chrome=1"
              }),
              _react2.default.createElement("meta", {
                name: "viewport",
                content:
                  "width=device-width, initial-scale=1.0, user-scalable=yes"
              }),
              _react2.default.createElement("link", {
                rel: "apple-touch-icon",
                sizes: "57x57",
                href: "/favicon/apple-icon-57x57.png"
              }),
              _react2.default.createElement("link", {
                rel: "apple-touch-icon",
                sizes: "60x60",
                href: "/favicon/apple-icon-60x60.png"
              }),
              _react2.default.createElement("link", {
                rel: "apple-touch-icon",
                sizes: "72x72",
                href: "/favicon/apple-icon-72x72.png"
              }),
              _react2.default.createElement("link", {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: "/favicon/apple-icon-76x76.png"
              }),
              _react2.default.createElement("link", {
                rel: "apple-touch-icon",
                sizes: "114x114",
                href: "/favicon/apple-icon-114x114.png"
              }),
              _react2.default.createElement("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "/favicon/apple-icon-120x120.png"
              }),
              _react2.default.createElement("link", {
                rel: "apple-touch-icon",
                sizes: "144x144",
                href: "/favicon/apple-icon-144x144.png"
              }),
              _react2.default.createElement("link", {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/favicon/apple-icon-152x152.png"
              }),
              _react2.default.createElement("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicon/apple-icon-180x180.png"
              }),
              _react2.default.createElement("link", {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                href: "/favicon/android-icon-192x192.png"
              }),
              _react2.default.createElement("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon/favicon-32x32.png"
              }),
              _react2.default.createElement("link", {
                rel: "icon",
                type: "image/png",
                sizes: "96x96",
                href: "/favicon/favicon-96x96.png"
              }),
              _react2.default.createElement("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon/favicon-16x16.png"
              }),
              _react2.default.createElement("link", {
                rel: "manifest",
                href: "/manifest.json"
              }),
              _react2.default.createElement("meta", {
                name: "msapplication-TileColor",
                content: "#ffffff"
              }),
              _react2.default.createElement("meta", {
                name: "msapplication-TileImage",
                content: "/favicon/ms-icon-144x144.png"
              }),
              _react2.default.createElement("meta", {
                name: "theme-color",
                content: "#ffffff"
              }),
              _react2.default.createElement("style", {
                dangerouslySetInnerHTML: { __html: resetStyles }
              }),
              _react2.default.createElement("link", {
                href:
                  "https://fonts.googleapis.com/css?family=Open+Sans&subset=cyrillic",
                rel: "stylesheet"
              }),
              this.props.styleTags
            ),
            _react2.default.createElement(
              "body",
              null,
              _react2.default.createElement(_document.Main, null),
              _react2.default.createElement(_document.NextScript, null)
            )
          );
        }
      }
    ],
    [
      {
        key: "getInitialProps",
        value: function getInitialProps(_ref) {
          var renderPage = _ref.renderPage,
            req = _ref.req;

          var sheet = new _styledComponents.ServerStyleSheet();
          var page = renderPage(function(App) {
            return function(props) {
              return sheet.collectStyles(
                _react2.default.createElement(App, props)
              );
            };
          });
          var styleTags = sheet.getStyleElement();
          var fontsAreLoaded =
            (req.headers.cookie || "").indexOf("fonts-loaded") !== 0;
          return (0, _extends3.default)({}, page, {
            styleTags: styleTags,
            fontsAreLoaded: fontsAreLoaded
          });
        }
      }
    ]
  );

  return MyDocument;
})(_document2.default);

exports.default = MyDocument;
