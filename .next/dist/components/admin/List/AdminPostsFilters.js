"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _mobxReact = require("mobx-react");

var _antd = require("antd");

var _postsStore = require("../../../stores/postsStore");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _dec, _class;

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    "\n  .ant-form {\n    padding: 20px 0;\n    border-top: 1px solid #e5eff5;\n  }\n\n  .ant-form-item {\n    display: flex !important;\n    margin-right: 0 !important;\n    padding-right: 16px;\n\n    .ant-form-item-control-wrapper {\n      flex-grow: 1;\n    }\n\n    .ant-form-item-control {\n      width: 100%;\n    }\n  }\n"
  ],
  [
    "\n  .ant-form {\n    padding: 20px 0;\n    border-top: 1px solid #e5eff5;\n  }\n\n  .ant-form-item {\n    display: flex !important;\n    margin-right: 0 !important;\n    padding-right: 16px;\n\n    .ant-form-item-control-wrapper {\n      flex-grow: 1;\n    }\n\n    .ant-form-item-control {\n      width: 100%;\n    }\n  }\n"
  ]
);

var FiltersContainer = _styledComponents2.default.div(_templateObject);

var AdminPostsFilters = ((_dec = (0, _mobxReact.inject)("blog")),
_dec(
  (_class =
    (0, _mobxReact.observer)(
      (_class = (function(_React$Component) {
        (0, _inherits3.default)(AdminPostsFilters, _React$Component);

        function AdminPostsFilters() {
          var _ref;

          var _temp, _this, _ret;

          (0, _classCallCheck3.default)(this, AdminPostsFilters);

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
                AdminPostsFilters.__proto__ ||
                (0, _getPrototypeOf2.default)(AdminPostsFilters)).call.apply(
                _ref,
                [this].concat(args)
              )
            )),
            _this)),
            (_this.onChange = function(field) {
              return function(value) {
                _this.props.blog.posts.changeFilters(
                  (0, _defineProperty3.default)({}, field, value)
                );
              };
            }),
            _temp)),
            (0, _possibleConstructorReturn3.default)(_this, _ret)
          );
        }

        (0, _createClass3.default)(AdminPostsFilters, [
          {
            key: "render",
            value: function render() {
              var _props$blog$posts = this.props.blog.posts,
                sortBy = _props$blog$posts.sortBy,
                status = _props$blog$posts.status,
                author = _props$blog$posts.author,
                language = _props$blog$posts.language,
                category = _props$blog$posts.category;

              var authors = this.props.blog.authors.allAuthors;
              var languages = this.props.blog.ui.allLanguages;
              var categories = this.props.blog.categories.allCategories;

              return _react2.default.createElement(
                FiltersContainer,
                null,
                _react2.default.createElement(
                  _antd.Form,
                  { layout: "inline" },
                  _react2.default.createElement(
                    _antd.Row,
                    null,
                    _react2.default.createElement(
                      _antd.Col,
                      { md: 4 },
                      _react2.default.createElement(
                        _antd.Form.Item,
                        null,
                        _react2.default.createElement(
                          _antd.Select,
                          { onChange: this.onChange("status"), value: status },
                          _react2.default.createElement(
                            _antd.Select.Option,
                            { value: "all" },
                            "All posts"
                          ),
                          _react2.default.createElement(
                            _antd.Select.Option,
                            { value: _postsStore.PostStatus.Published },
                            "Published"
                          ),
                          _react2.default.createElement(
                            _antd.Select.Option,
                            { value: _postsStore.PostStatus.Draft },
                            "Draft"
                          ),
                          _react2.default.createElement(
                            _antd.Select.Option,
                            {
                              value: _postsStore.PostStatus.PendingCorrections
                            },
                            "Pending Corrections"
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _antd.Col,
                      { md: 4 },
                      _react2.default.createElement(
                        _antd.Form.Item,
                        null,
                        _react2.default.createElement(
                          _antd.Select,
                          { onChange: this.onChange("author"), value: author },
                          _react2.default.createElement(
                            _antd.Select.Option,
                            { value: "all" },
                            "All authors"
                          ),
                          authors.map(function(author) {
                            return _react2.default.createElement(
                              _antd.Select.Option,
                              { value: author.id, key: author.id },
                              author.name
                            );
                          })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _antd.Col,
                      { md: 4 },
                      _react2.default.createElement(
                        _antd.Form.Item,
                        null,
                        _react2.default.createElement(
                          _antd.Select,
                          {
                            onChange: this.onChange("language"),
                            value: language
                          },
                          _react2.default.createElement(
                            _antd.Select.Option,
                            { value: "all" },
                            "All languages"
                          ),
                          languages.map(function(language) {
                            return _react2.default.createElement(
                              _antd.Select.Option,
                              { value: language.id, key: language.id },
                              language.title
                            );
                          })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _antd.Col,
                      { md: 4 },
                      _react2.default.createElement(
                        _antd.Form.Item,
                        null,
                        _react2.default.createElement(
                          _antd.Select,
                          {
                            onChange: this.onChange("category"),
                            value: category
                          },
                          _react2.default.createElement(
                            _antd.Select.Option,
                            { value: "all" },
                            "All categories"
                          ),
                          categories.map(function(category) {
                            return _react2.default.createElement(
                              _antd.Select.Option,
                              { value: category.id, key: category.id },
                              category.title
                            );
                          })
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _antd.Col,
                      {
                        md: { offset: 2, span: 6 },
                        style: { textAlign: "right" }
                      },
                      _react2.default.createElement(
                        _antd.Form.Item,
                        { label: "Sort by", style: { paddingRight: 0 } },
                        _react2.default.createElement(
                          _antd.Select,
                          { onChange: this.onChange("sortBy"), value: sortBy },
                          _react2.default.createElement(
                            _antd.Select.Option,
                            { value: _postsStore.PostsOrder.Newest },
                            "Newest"
                          ),
                          _react2.default.createElement(
                            _antd.Select.Option,
                            { value: _postsStore.PostsOrder.Oldest },
                            "Oldest"
                          ),
                          _react2.default.createElement(
                            _antd.Select.Option,
                            { value: _postsStore.PostsOrder.ByPublication },
                            "By Publication"
                          )
                        )
                      )
                    )
                  )
                )
              );
            }
          }
        ]);

        return AdminPostsFilters;
      })(_react2.default.Component))
    ) || _class)
) || _class);

exports.default = AdminPostsFilters;
