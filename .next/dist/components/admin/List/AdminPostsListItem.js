"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _mobxReact = require("mobx-react");

var _routes = require("../../../utils/routes");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _antd = require("antd");

var _postsStore = require("../../../stores/postsStore");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _dec, _class;

var _templateObject = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  border-bottom: 1px solid #e5eff5;\n  margin: 0;\n  margin-left: -20px;\n  margin-right: -20px;\n  padding: 24px 20px 12px;\n  position: relative;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #fcfcfc;\n  }\n\n  .ant-tag {\n    margin-left: 4px;\n    margin-right: 4px;\n  }\n  .status.ant-tag {\n    margin-left: 0;\n  }\n"
    ],
    [
      "\n  border-bottom: 1px solid #e5eff5;\n  margin: 0;\n  margin-left: -20px;\n  margin-right: -20px;\n  padding: 24px 20px 12px;\n  position: relative;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #fcfcfc;\n  }\n\n  .ant-tag {\n    margin-left: 4px;\n    margin-right: 4px;\n  }\n  .status.ant-tag {\n    margin-left: 0;\n  }\n"
    ]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    ["\n  display: inline-block;\n  font-size: 20px;\n"],
    ["\n  display: inline-block;\n  font-size: 20px;\n"]
  ),
  _templateObject3 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  margin-top: 10px;\n  display: block;\n  max-width: 80%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n"
    ],
    [
      "\n  margin-top: 10px;\n  display: block;\n  max-width: 80%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  word-wrap: normal;\n"
    ]
  ),
  _templateObject4 = (0, _taggedTemplateLiteral3.default)(
    ["\n  margin: 10px auto;\n"],
    ["\n  margin: 10px auto;\n"]
  );

var ItemContainer = _styledComponents2.default.div(_templateObject);

var ItemTitle = _styledComponents2.default.h2(_templateObject2);

var ItemTextPreview = _styledComponents2.default.p(_templateObject3);

var ItemStatus = _styledComponents2.default.div(_templateObject4);

var AdminPostsListItem = ((_dec = (0, _mobxReact.inject)("blog")),
_dec(
  (_class = (function(_React$Component) {
    (0, _inherits3.default)(AdminPostsListItem, _React$Component);

    function AdminPostsListItem() {
      (0, _classCallCheck3.default)(this, AdminPostsListItem);

      return (0, _possibleConstructorReturn3.default)(
        this,
        (
          AdminPostsListItem.__proto__ ||
          (0, _getPrototypeOf2.default)(AdminPostsListItem)
        ).apply(this, arguments)
      );
    }

    (0, _createClass3.default)(AdminPostsListItem, [
      {
        key: "renderStatus",
        value: function renderStatus(status) {
          var color = "green";
          var text = "Published";

          if (status === _postsStore.PostStatus.Draft) {
            color = "orange";
            text = "Draft";
          } else if (status === _postsStore.PostStatus.PendingCorrections) {
            color = "orange";
            text = "Pending corrections";
          }

          return _react2.default.createElement(
            _antd.Tag,
            { className: "status", color: color },
            text
          );
        }
      },
      {
        key: "renderPostCategory",
        value: function renderPostCategory(category) {
          var categoryObj = this.props.blog.categories.categories.get(category);
          if (!categoryObj) {
            return null;
          }
          return _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              _antd.Tag,
              null,
              "Category: ",
              categoryObj.title
            )
          );
        }
      },
      {
        key: "renderPostLanguage",
        value: function renderPostLanguage(language) {
          var languageObj = this.props.blog.ui.languages.get(language);
          if (!languageObj) {
            return null;
          }
          return _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              _antd.Tag,
              null,
              "Language: ",
              languageObj.title
            )
          );
        }
      },
      {
        key: "renderPostAuthor",
        value: function renderPostAuthor(author) {
          var authorObj = this.props.blog.authors.authors.get(author);
          if (!authorObj) {
            return null;
          }
          return _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              _antd.Tag,
              null,
              "Author: ",
              authorObj.name
            )
          );
        }
      },
      {
        key: "renderPostChanged",
        value: function renderPostChanged(changed) {
          return _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              _antd.Tag,
              null,
              "Last change: ",
              (0, _moment2.default)(changed).calendar()
            )
          );
        }
      },
      {
        key: "render",
        value: function render() {
          var post = this.props.post;

          var status = void 0;
          var content = void 0;
          if (
            post.status === _postsStore.PostStatus.Published &&
            post.published
          ) {
            status = _postsStore.PostStatus.Published;
            content = post.published;
          } else if (
            post.status === _postsStore.PostStatus.Draft &&
            post.published
          ) {
            status = _postsStore.PostStatus.PendingCorrections;
            content = (0, _extends3.default)({}, post.published, post.draft);
          } else {
            status = _postsStore.PostStatus.Draft;
            content = post.draft;
          }

          var _content = content,
            title = _content.title,
            changed = _content.changed,
            meta = _content.meta;

          return _react2.default.createElement(
            _routes.Link,
            { key: post.id, route: "/admin/editor?id=" + post.id },
            _react2.default.createElement(
              "a",
              null,
              _react2.default.createElement(
                ItemContainer,
                null,
                _react2.default.createElement(ItemTitle, null, title),
                _react2.default.createElement(
                  ItemTextPreview,
                  null,
                  meta.thumbText || "..."
                ),
                _react2.default.createElement(
                  ItemStatus,
                  null,
                  this.renderStatus(status),
                  meta.language && this.renderPostLanguage(meta.language),
                  meta.category && this.renderPostCategory(meta.category),
                  meta.author && this.renderPostAuthor(meta.author),
                  changed && this.renderPostChanged(changed)
                )
              )
            )
          );
        }
      }
    ]);

    return AdminPostsListItem;
  })(_react2.default.Component))
) || _class);

exports.default = AdminPostsListItem;
