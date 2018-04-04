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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _mobxReact = require("mobx-react");

var _antd = require("antd");

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

var _config = require("../../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class;

var AdminSidebarMenu = (_dec = (0, _mobxReact.inject)("blog"), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(AdminSidebarMenu, _React$Component);

  function AdminSidebarMenu() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AdminSidebarMenu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AdminSidebarMenu.__proto__ || (0, _getPrototypeOf2.default)(AdminSidebarMenu)).call.apply(_ref, [this].concat(args))), _this), _this.onSignOutClick = function () {
      _this.props.blog.auth.signOut();
    }, _this.onMenuClick = function (event) {
      if (event.key === "signout") {
        _this.onSignOutClick();
      } else if (event.key === "new_post") {
        _index2.default.push("/admin/editor");
      } else if (event.key === "posts") {
        _index2.default.push("/admin");
      } else if (event.key === "settings") {
        _index2.default.push("/admin/settings");
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AdminSidebarMenu, [{
    key: "getCurrentItem",
    value: function getCurrentItem() {
      var pathname = _index2.default.pathname;
      if (pathname === "/admin/editor") {
        return "new_post";
      } else if (pathname === "/admin/settings") {
        return "settings";
      }
      return "stories";
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_antd.Menu, {
        theme: "light",
        mode: "inline",
        defaultSelectedKeys: [this.getCurrentItem()],
        onClick: this.onMenuClick
      }, _react2.default.createElement(_antd.Menu.Item, { key: "new_post" }, _react2.default.createElement(_antd.Icon, { type: "file" }), _react2.default.createElement("span", null, "New post")), _react2.default.createElement(_antd.Menu.Item, { key: "posts" }, _react2.default.createElement(_antd.Icon, { type: "book" }), _react2.default.createElement("span", null, "Posts")), _react2.default.createElement(_antd.Menu.Item, { key: "settings" }, _react2.default.createElement(_antd.Icon, { type: "setting" }), _react2.default.createElement("span", null, "Settings")), _react2.default.createElement(_antd.Menu.ItemGroup, { key: "user", title: "User" }, _react2.default.createElement(_antd.Menu.Item, { key: "signout" }, _react2.default.createElement(_antd.Icon, { type: "logout" }), _react2.default.createElement("span", null, "Sign out"))));
    }
  }]);

  return AdminSidebarMenu;
}(_react2.default.Component)) || _class);

exports.default = AdminSidebarMenu;