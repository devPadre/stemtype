"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminNewStory = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _mobxReact = require("mobx-react");

var _index = require("next/dist/lib/router/index.js");

var _index2 = _interopRequireDefault(_index);

var _AdminPage = require("../../components/admin/AdminPage");

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _StoryEditor = require("../../components/admin/Editor/StoryEditor");

var _StoryEditor2 = _interopRequireDefault(_StoryEditor);

var _ProtectedPage = require("../_hocs/ProtectedPage");

var _ProtectedPage2 = _interopRequireDefault(_ProtectedPage);

var _ConnectedPage = require("../_hocs/ConnectedPage");

var _ConnectedPage2 = _interopRequireDefault(_ConnectedPage);

var _antd = require("antd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _dec, _class;

var AdminNewStory = (exports.AdminNewStory = ((_dec = (0, _mobxReact.inject)(
  "blog"
)),
_dec(
  (_class =
    (0, _mobxReact.observer)(
      (_class = (function(_React$Component) {
        (0, _inherits3.default)(AdminNewStory, _React$Component);

        function AdminNewStory() {
          var _ref,
            _this2 = this;

          var _temp, _this, _ret;

          (0, _classCallCheck3.default)(this, AdminNewStory);

          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          return (
            (_ret = ((_temp = ((_this = (0,
            _possibleConstructorReturn3.default)(
              this,
              (_ref =
                AdminNewStory.__proto__ ||
                (0, _getPrototypeOf2.default)(AdminNewStory)).call.apply(
                _ref,
                [this].concat(args)
              )
            )),
            _this)),
            (_this.fetchPost = function(postId) {
              _this.props.blog.posts.fetchPost(postId).catch(function(error) {
                _index2.default.push("/admin/editor", "/admin/editor", {
                  shallow: true
                });
              });
            }),
            (_this.onSaveDraft = function(title, text) {
              return _this.props.blog.posts
                .savePost(_this.props.postId, title, text)
                .then(function(newId) {
                  if (_this.props.postId !== newId) {
                    var href = "/admin/editor?id=" + newId;
                    _index2.default.push(href, href, { shallow: true });
                  }
                })
                .catch(function(error) {
                  console.error(error);
                  _antd.Message.error("Couldn't save changes");
                });
            }),
            (_this.onUpdateMeta = function(values) {
              return _this.props.blog.posts
                .updateMeta(_this.props.postId, values)
                .catch(function(error) {
                  console.error(error);
                  _antd.Message.error("Couldn't save changes");
                });
            }),
            (_this.onPublish = (0, _asyncToGenerator3.default)(
              /*#__PURE__*/ _regenerator2.default.mark(function _callee() {
                var post;
                return _regenerator2.default.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          _context.prev = 0;
                          _context.next = 3;
                          return _this.props.blog.posts.publishPost(
                            _this.props.postId
                          );

                        case 3:
                          post = _context.sent;

                          _antd.Message.success("The post is published");
                          return _context.abrupt("return", post);

                        case 8:
                          _context.prev = 8;
                          _context.t0 = _context["catch"](0);

                          console.error(_context.t0);
                          _antd.Message.error("Couldn't publish post");
                          return _context.abrupt("return", _context.t0);

                        case 13:
                        case "end":
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  _this2,
                  [[0, 8]]
                );
              })
            )),
            (_this.onVerifyReadyForPublish = (0, _asyncToGenerator3.default)(
              /*#__PURE__*/ _regenerator2.default.mark(function _callee2() {
                var valid;
                return _regenerator2.default.wrap(
                  function _callee2$(_context2) {
                    while (1) {
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          _context2.next = 2;
                          return _this.props.blog.posts.verifyDraftIsValid(
                            _this.props.postId
                          );

                        case 2:
                          valid = _context2.sent;

                          if (valid) {
                            _context2.next = 6;
                            break;
                          }

                          _antd.Message.warning(
                            "Not all required settings are set. Cannot publish the changes."
                          );
                          return _context2.abrupt("return", false);

                        case 6:
                          return _context2.abrupt("return", true);

                        case 7:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  },
                  _callee2,
                  _this2
                );
              })
            )),
            (_this.onUnpublish = function() {
              return _this.props.blog.posts
                .unpublishPost(_this.props.postId)
                .then(function() {
                  _antd.Message.success("The post is un-published");
                })
                .catch(function(error) {
                  _antd.Message.error("Couldn't un-publish the post");
                });
            }),
            (_this.onCopy = function() {
              return _this.props.blog.posts
                .copyPost(_this.props.postId)
                .then(function(newId) {
                  _antd.Message.success("The post was copied");
                  if (_this.props.postId !== newId) {
                    var href = "/admin/editor?id=" + newId;
                    _index2.default.push(href, href, { shallow: true });
                  }
                })
                .catch(function(error) {
                  _antd.Message.error("Couldn't copy the post");
                });
            }),
            (_this.onOpenPreview = function() {
              var win = window.open(
                window.location.origin + "/preview?id=" + _this.props.postId,
                "_blank"
              );
              if (win) {
                //Browser has allowed it to be opened
                win.focus();
              } else {
                //Browser has blocked it
                alert("Please allow popups for this website");
              }
            }),
            (_this.onDelete = function() {
              return _this.props.blog.posts
                .deleteDraftPost(_this.props.postId)
                .then(function() {
                  _index2.default.push("/admin");
                })
                .catch(function(error) {
                  _antd.Message.error("Couldn't delete the post");
                });
            }),
            (_this.onDiscardChanges = function() {
              return _this.props.blog.posts
                .discardDraftChanges(_this.props.postId)
                .then(function() {
                  _antd.Message.success("All draft changes are discard");
                })
                .catch(function(error) {
                  _antd.Message.error("Couldn't discard draft changes");
                });
            }),
            _temp)),
            (0, _possibleConstructorReturn3.default)(_this, _ret)
          );
        }

        (0, _createClass3.default)(AdminNewStory, [
          {
            key: "componentDidMount",
            value: function componentDidMount() {
              this.props.blog.categories.fetchCategories();
              if (this.props.postId) {
                this.fetchPost(this.props.postId);
              }
            }
          },
          {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
              if (nextProps.postId && nextProps.postId !== this.props.postId) {
                this.fetchPost(nextProps.postId);
              }
            }
          },
          {
            key: "render",
            value: function render() {
              var currentPost = this.props.blog.posts.getPostForEditor(
                this.props.postId
              );
              return _react2.default.createElement(
                _AdminPage2.default,
                { user: this.props.user, noPadding: true },
                _react2.default.createElement(_StoryEditor2.default, {
                  initialValues: {
                    id: currentPost ? currentPost.id : "",
                    title: currentPost ? currentPost.title : "",
                    text: currentPost ? currentPost.text : "",
                    meta: currentPost ? currentPost.meta : {},
                    isPublished: currentPost
                      ? Boolean(currentPost.published)
                      : false
                  },
                  onOpenPreview: this.onOpenPreview,
                  onSaveDraft: this.onSaveDraft,
                  onUpdateMeta: this.onUpdateMeta,
                  onVerifyReadyForPublish: this.onVerifyReadyForPublish,
                  onPublish: this.onPublish,
                  onUnpublish: this.onUnpublish,
                  onCopy: this.onCopy,
                  onDelete: this.onDelete,
                  onDiscardChanges: this.onDiscardChanges
                })
              );
            }
          }
        ]);

        return AdminNewStory;
      })(_react2.default.Component))
    ) || _class)
) || _class));

exports.default = function(props) {
  return _react2.default.createElement(
    _ConnectedPage2.default,
    null,
    _react2.default.createElement(_ProtectedPage2.default, null, function(
      _ref4
    ) {
      var user = _ref4.user;
      return _react2.default.createElement(
        AdminNewStory,
        (0, _extends3.default)({}, props, {
          user: user,
          postId: props.url.query.id
        })
      );
    })
  );
};
