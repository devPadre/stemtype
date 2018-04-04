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

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _en_US = require("antd/lib/locale-provider/en_US");

var _en_US2 = _interopRequireDefault(_en_US);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _nprogress = require("nprogress");

var _nprogress2 = _interopRequireDefault(_nprogress);

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

var _mobxReact = require("mobx-react");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _AdminSidebarMenu = require("./AdminSidebarMenu");

var _AdminSidebarMenu2 = _interopRequireDefault(_AdminSidebarMenu);

var _AdminUserMenu = require("./AdminUserMenu");

var _AdminUserMenu2 = _interopRequireDefault(_AdminUserMenu);

var _config = require("../../utils/config");

var _config2 = _interopRequireDefault(_config);

var _theme = require("../../utils/theme");

var _theme2 = _interopRequireDefault(_theme);

var _fonts = require("../../utils/fonts");

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class;

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  background: #fff !important;\n"], ["\n  background: #fff !important;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  position: fixed !important;\n  overflow: auto;\n  height: 100vh;\n  left: 0;\n  background-color: #f4f8fb !important;\n  width: 300px;\n\n  .ant-menu-inline,\n  .ant-menu-vertical {\n    border-color: #f4f8fb;\n  }\n  .ant-menu-item,\n  .ant-menu-item-group-title {\n    background-color: #f4f8fb !important;\n    font-size: 14px !important;\n  }\n  .ant-menu-item-group-title {\n    ", ";\n  }\n  .ant-menu-item:hover {\n    background-color: #cfe6f7 !important;\n  }\n"], ["\n  position: fixed !important;\n  overflow: auto;\n  height: 100vh;\n  left: 0;\n  background-color: #f4f8fb !important;\n  width: 300px;\n\n  .ant-menu-inline,\n  .ant-menu-vertical {\n    border-color: #f4f8fb;\n  }\n  .ant-menu-item,\n  .ant-menu-item-group-title {\n    background-color: #f4f8fb !important;\n    font-size: 14px !important;\n  }\n  .ant-menu-item-group-title {\n    ", ";\n  }\n  .ant-menu-item:hover {\n    background-color: #cfe6f7 !important;\n  }\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n            text-align: center;\n          "], ["\n            text-align: center;\n          "]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n            text-align: left;\n          "], ["\n            text-align: left;\n          "]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 14px;\n  overflow: initial;\n  position: relative;\n  margin: 0;\n  padding: ", ";\n  min-height: 100vh;\n"], ["\n  font-size: 14px;\n  overflow: initial;\n  position: relative;\n  margin: 0;\n  padding: ", ";\n  min-height: 100vh;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  border: 5px solid #f4f8fb;\n  border-radius: 4px;\n  cursor: pointer;\n  display: block;\n  height: 34px;\n  position: absolute;\n  left: -15px;\n  top: 25px;\n  width: 25px;\n  z-index: 999;\n"], ["\n  border: 5px solid #f4f8fb;\n  border-radius: 4px;\n  cursor: pointer;\n  display: block;\n  height: 34px;\n  position: absolute;\n  left: -15px;\n  top: 25px;\n  width: 25px;\n  z-index: 999;\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n  margin-left: ", ";\n  transition: all 0.2s;\n  background: #fff !important;\n"], ["\n  margin-left: ", ";\n  transition: all 0.2s;\n  background: #fff !important;\n"]);

_index2.default.onRouteChangeStart = function (url) {
  _nprogress2.default.start();
};
_index2.default.onRouteChangeComplete = function () {
  return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
  return _nprogress2.default.done();
};

var MainLayout = (0, _styledComponents2.default)(_antd.Layout)(_templateObject);

var Sider = (0, _styledComponents2.default)(_antd.Layout.Sider)(_templateObject2, function (props) {
  return props.collapsed ? (0, _styledComponents.css)(_templateObject3) : (0, _styledComponents.css)(_templateObject4);
});

var Content = (0, _styledComponents2.default)(function (_ref) {
  var noPadding = _ref.noPadding,
      rest = (0, _objectWithoutProperties3.default)(_ref, ["noPadding"]);

  return _react2.default.createElement(_antd.Layout.Content, rest);
})(_templateObject5, function (props) {
  return props.noPadding ? "0px" : "24px 16px 0";
});

var TriggerIcon = _styledComponents2.default.div(_templateObject6);

var LayoutContent = (0, _styledComponents2.default)(function (_ref2) {
  var collapsed = _ref2.collapsed,
      rest = (0, _objectWithoutProperties3.default)(_ref2, ["collapsed"]);

  return _react2.default.createElement(_antd.Layout, rest);
})(_templateObject7, function (props) {
  return props.collapsed ? "64px" : "260px";
});

var AdminPage = (_dec = (0, _mobxReact.inject)("blog"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(AdminPage, _React$Component);

  function AdminPage() {
    (0, _classCallCheck3.default)(this, AdminPage);

    return (0, _possibleConstructorReturn3.default)(this, (AdminPage.__proto__ || (0, _getPrototypeOf2.default)(AdminPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(AdminPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      (0, _fonts2.default)();
    }
  }, {
    key: "renderLayout",
    value: function renderLayout() {
      var _props$blog$ui = this.props.blog.ui,
          collapsedSidebar = _props$blog$ui.collapsedSidebar,
          toggleSidebar = _props$blog$ui.toggleSidebar;

      return _react2.default.createElement(MainLayout, null, _react2.default.createElement(Sider, {
        width: 260,
        trigger: null,
        collapsible: true,
        collapsed: collapsedSidebar
      }, _react2.default.createElement(_AdminUserMenu2.default, { user: this.props.user, collapsed: collapsedSidebar }), _react2.default.createElement(_AdminSidebarMenu2.default, null)), _react2.default.createElement(LayoutContent, { collapsed: collapsedSidebar }, _react2.default.createElement(Content, { noPadding: this.props.noPadding }, _react2.default.createElement(TriggerIcon, { onClick: toggleSidebar }), this.props.children)));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_styledComponents.ThemeProvider, { theme: _theme2.default }, _react2.default.createElement(_antd.LocaleProvider, { locale: _en_US2.default }, _react2.default.createElement("div", null, _react2.default.createElement(_head2.default, null, _react2.default.createElement("title", null, "Editor - ", _config2.default.siteTitle), _react2.default.createElement("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/antd@2.13.3/dist/antd.min.css"
      }), _react2.default.createElement("link", {
        rel: "stylesheet",
        href: "https://unpkg.com/nprogress@0.2.0/nprogress.css"
      })), this.props.withLayout ? this.renderLayout() : this.props.children)));
    }
  }]);

  return AdminPage;
}(_react2.default.Component)) || _class) || _class);

AdminPage.defaultProps = {
  withLayout: true,
  noPadding: false
};

exports.default = AdminPage;