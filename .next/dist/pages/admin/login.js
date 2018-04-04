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

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _AdminPage = require("../../components/admin/AdminPage");

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

var _ConnectedPage = require("../_hocs/ConnectedPage");

var _ConnectedPage2 = _interopRequireDefault(_ConnectedPage);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require("../../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class;

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  color: #000;\n  background: #fff;\n  height: 100vh;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  color: #000;\n  background: #fff;\n  height: 100vh;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  background-color: transparent;\n  border-width: 0;\n  font-size: 18px;\n  cursor: pointer;\n"], ["\n  background-color: transparent;\n  border-width: 0;\n  font-size: 18px;\n  cursor: pointer;\n"]);

var PageContainter = _styledComponents2.default.div(_templateObject);

var LoginButton = _styledComponents2.default.button(_templateObject2);

var AdminLogin = (_dec = (0, _mobxReact.inject)("blog"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(AdminLogin, _React$Component);

  function AdminLogin(props) {
    (0, _classCallCheck3.default)(this, AdminLogin);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AdminLogin.__proto__ || (0, _getPrototypeOf2.default)(AdminLogin)).call(this, props));

    _this.onLoginClick = function () {
      var auth = _this.props.blog.auth;

      auth.signInWithGoogle().then(function (_ref) {
        var user = _ref.user;

        auth.verifyIfUserIsAuthor(user).then(function (authorName) {
          if (!authorName) {
            _this.setState({ accessDenied: true });
          }
        });
      }).catch(function () {
        _this.setState({ accessDenied: true });
      });
    };

    _this.state = {
      accessDenied: false
    };
    return _this;
  }

  (0, _createClass3.default)(AdminLogin, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.blog.auth.subscribe();
      this.disposer = (0, _mobx.autorun)(function () {
        if (_this2.props.blog.auth.isAuthenticated) {
          _index2.default.replace("/admin");
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.disposer) {
        this.disposer();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props$blog$auth = this.props.blog.auth,
          isUserPending = _props$blog$auth.isUserPending,
          isAuthenticated = _props$blog$auth.isAuthenticated;

      return _react2.default.createElement(_AdminPage2.default, { key: "content", withLayout: false }, _react2.default.createElement(PageContainter, null, this.state.accessDenied === false && (isUserPending || isAuthenticated) && _react2.default.createElement("h2", null, "..."), this.state.accessDenied === false && !isUserPending && !isAuthenticated && _react2.default.createElement(LoginButton, { onClick: this.onLoginClick }, "Click to start writing..."), this.state.accessDenied && _react2.default.createElement("h2", null, "Become an author to start writing on ", _config2.default.siteTitle)));
    }
  }]);

  return AdminLogin;
}(_react2.default.Component)) || _class) || _class);

exports.default = function () {
  return _react2.default.createElement(_ConnectedPage2.default, null, _react2.default.createElement(AdminLogin, null));
};