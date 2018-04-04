"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminIndex = undefined;

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

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

var _AdminPage = require("../../components/admin/AdminPage");

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _AdminPageSection = require("../../components/admin/AdminPageSection");

var _AdminPageSection2 = _interopRequireDefault(_AdminPageSection);

var _AdminPostsList = require("../../components/admin/List/AdminPostsList");

var _AdminPostsList2 = _interopRequireDefault(_AdminPostsList);

var _antd = require("antd");

var _ProtectedPage = require("../_hocs/ProtectedPage");

var _ProtectedPage2 = _interopRequireDefault(_ProtectedPage);

var _ConnectedPage = require("../_hocs/ConnectedPage");

var _ConnectedPage2 = _interopRequireDefault(_ConnectedPage);

var _config = require("../../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class;

var Header = _AdminPageSection2.default.Header;

var AdminIndex = exports.AdminIndex = (_dec = (0, _mobxReact.inject)("blog"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(AdminIndex, _React$Component);

  function AdminIndex() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, AdminIndex);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = AdminIndex.__proto__ || (0, _getPrototypeOf2.default)(AdminIndex)).call.apply(_ref, [this].concat(args))), _this), _this.onNewStoryClick = function () {
      _index2.default.push("/admin/editor");
    }, _this.renderHeaderActions = function () {
      return _react2.default.createElement(_antd.Button, { type: "primary", size: "large", onClick: _this.onNewStoryClick }, "New post");
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(AdminIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.blog.categories.fetchCategories();
      this.props.blog.posts.fetchAllPosts();
    }
  }, {
    key: "render",
    value: function render() {
      var _props$blog = this.props.blog,
          posts = _props$blog.posts,
          categories = _props$blog.categories;

      return _react2.default.createElement(_AdminPage2.default, { user: this.props.user }, _react2.default.createElement(_AdminPageSection2.default, null, _react2.default.createElement(Header, { renderActions: this.renderHeaderActions }, _config2.default.siteTitle, " Posts"), _react2.default.createElement(_AdminPostsList2.default, {
        isLoaded: posts.arePostsLoaded && categories.areCategoriesLoaded,
        posts: posts.filteredPosts,
        onResetFilters: posts.resetFilters
      })));
    }
  }]);

  return AdminIndex;
}(_react2.default.Component)) || _class) || _class);

exports.default = function () {
  return _react2.default.createElement(_ConnectedPage2.default, null, _react2.default.createElement(_ProtectedPage2.default, null, function (_ref2) {
    var user = _ref2.user;
    return _react2.default.createElement(AdminIndex, { user: user });
  }));
};