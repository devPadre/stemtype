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

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ellipsis = require("polished/lib/mixins/ellipsis");

var _ellipsis2 = _interopRequireDefault(_ellipsis);

var _antd = require("antd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  margin: 24px;\n  margin-bottom: 14px;\n  margin-left: ",
      ";\n  margin-right: ",
      ";\n  height: 32px;\n  overflow: hidden;\n  cursor: pointer;\n"
    ],
    [
      "\n  margin: 24px;\n  margin-bottom: 14px;\n  margin-left: ",
      ";\n  margin-right: ",
      ";\n  height: 32px;\n  overflow: hidden;\n  cursor: pointer;\n"
    ]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    ["\n  float: left;\n"],
    ["\n  float: left;\n"]
  ),
  _templateObject3 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  display: inline-block;\n  float: left;\n  line-height: 32px;\n  margin-left: 10px;\n  font-size: 14px;\n  ",
      ";\n"
    ],
    [
      "\n  display: inline-block;\n  float: left;\n  line-height: 32px;\n  margin-left: 10px;\n  font-size: 14px;\n  ",
      ";\n"
    ]
  );

var Container = _styledComponents2.default.div(
  _templateObject,
  function(props) {
    return props.collapsed ? "18px" : "24px";
  },
  function(props) {
    return props.collapsed ? "18px" : "24px";
  }
);

var UserAvatar = (0, _styledComponents2.default)(_antd.Avatar)(
  _templateObject2
);

var UserName = _styledComponents2.default.div(
  _templateObject3,
  (0, _ellipsis2.default)("160px")
);

var AdminUserMenu = (function(_React$Component) {
  (0, _inherits3.default)(AdminUserMenu, _React$Component);

  function AdminUserMenu() {
    (0, _classCallCheck3.default)(this, AdminUserMenu);

    return (0, _possibleConstructorReturn3.default)(
      this,
      (
        AdminUserMenu.__proto__ || (0, _getPrototypeOf2.default)(AdminUserMenu)
      ).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(AdminUserMenu, [
    {
      key: "render",
      value: function render() {
        return _react2.default.createElement(
          Container,
          { collapsed: this.props.collapsed },
          _react2.default.createElement(UserAvatar, {
            shape: "square",
            size: this.props.collapsed ? "small" : "default",
            src: this.props.user.photoURL
          }),
          !this.props.collapsed &&
            _react2.default.createElement(
              UserName,
              null,
              this.props.user.displayName
            )
        );
      }
    }
  ]);

  return AdminUserMenu;
})(_react2.default.Component);

exports.default = AdminUserMenu;
