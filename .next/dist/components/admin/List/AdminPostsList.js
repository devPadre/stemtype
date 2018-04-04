"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _AdminPostsFilters = require("./AdminPostsFilters");

var _AdminPostsFilters2 = _interopRequireDefault(_AdminPostsFilters);

var _antd = require("antd");

var _AdminPostsListItem = require("./AdminPostsListItem");

var _AdminPostsListItem2 = _interopRequireDefault(_AdminPostsListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin: 100px auto;\n  text-align: center;\n\n  h2 {\n    font-size: 20px;\n    margin-bottom: 20px;\n  }\n"], ["\n  margin: 100px auto;\n  text-align: center;\n\n  h2 {\n    font-size: 20px;\n    margin-bottom: 20px;\n  }\n"]);

var NotFound = _styledComponents2.default.div(_templateObject);

var AdminPostsList = function (_React$Component) {
  (0, _inherits3.default)(AdminPostsList, _React$Component);

  function AdminPostsList() {
    (0, _classCallCheck3.default)(this, AdminPostsList);

    return (0, _possibleConstructorReturn3.default)(this, (AdminPostsList.__proto__ || (0, _getPrototypeOf2.default)(AdminPostsList)).apply(this, arguments));
  }

  (0, _createClass3.default)(AdminPostsList, [{
    key: "renderPost",
    value: function renderPost(post) {
      return _react2.default.createElement(_AdminPostsListItem2.default, { key: post.id, post: post });
    }
  }, {
    key: "renderNotFound",
    value: function renderNotFound() {
      return _react2.default.createElement(NotFound, null, _react2.default.createElement("h2", null, "No stories match the current filter"), _react2.default.createElement(_antd.Button, { onClick: this.props.onResetFilters }, "Reset filter"));
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement("div", null, _react2.default.createElement(_AdminPostsFilters2.default, null), this.props.posts.length > 0 ? this.props.posts.map(this.renderPost) : this.renderNotFound());
    }
  }]);

  return AdminPostsList;
}(_react2.default.Component);

exports.default = AdminPostsList;