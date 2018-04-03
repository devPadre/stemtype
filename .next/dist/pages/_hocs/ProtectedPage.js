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

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNoSsr = require("react-no-ssr");

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _mobx = require("mobx");

var _mobxReact = require("mobx-react");

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

var _SplashLoader = require("../../components/SplashLoader");

var _SplashLoader2 = _interopRequireDefault(_SplashLoader);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _dec, _class;

var ProtectedPageComponent = ((_dec = (0, _mobxReact.inject)("blog")),
_dec(
  (_class =
    (0, _mobxReact.observer)(
      (_class = (function(_Component) {
        (0, _inherits3.default)(ProtectedPageComponent, _Component);

        function ProtectedPageComponent() {
          (0, _classCallCheck3.default)(this, ProtectedPageComponent);

          return (0, _possibleConstructorReturn3.default)(
            this,
            (
              ProtectedPageComponent.__proto__ ||
              (0, _getPrototypeOf2.default)(ProtectedPageComponent)
            ).apply(this, arguments)
          );
        }

        (0, _createClass3.default)(ProtectedPageComponent, [
          {
            key: "componentDidMount",
            value: function componentDidMount() {
              var _this2 = this;

              this.props.blog.auth.subscribe();
              this.disposer = (0, _mobx.autorun)(function() {
                if (
                  typeof window !== "undefined" &&
                  !_this2.props.blog.auth.isUserPending &&
                  !_this2.props.blog.auth.isAuthenticated
                ) {
                  _index2.default.push("/admin/login");
                }
              });
            }
          },
          {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              if (this.disposer) {
                this.disposer();
              }
            }
          },
          {
            key: "render",
            value: function render() {
              var blog = this.props.blog;
              var auth = blog.auth;

              var isLoaded = !auth.isUserPending && auth.isAuthenticated;
              return [
                isLoaded &&
                  typeof this.props.children === "function" &&
                  _react2.default.createElement(
                    "div",
                    { key: "content" },
                    this.props.children({ user: auth.user })
                  ),
                _react2.default.createElement(
                  _reactNoSsr2.default,
                  { key: "loader" },
                  _react2.default.createElement(_SplashLoader2.default, {
                    loaded: isLoaded
                  })
                )
              ];
            }
          }
        ]);

        return ProtectedPageComponent;
      })(_react.Component))
    ) || _class)
) || _class);

exports.default = ProtectedPageComponent;
