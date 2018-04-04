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

var _reactNoSsr = require("react-no-ssr");

var _reactNoSsr2 = _interopRequireDefault(_reactNoSsr);

var _reactStyledFlexboxgrid = require("react-styled-flexboxgrid");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _compile = require("../../utils/compile");

var _compile2 = _interopRequireDefault(_compile);

var _PostAuthor = require("./PostAuthor");

var _PostAuthor2 = _interopRequireDefault(_PostAuthor);

var _Article = require("./Article");

var _Article2 = _interopRequireDefault(_Article);

var _PostShare = require("./PostShare");

var _PostShare2 = _interopRequireDefault(_PostShare);

var _PostComments = require("./PostComments");

var _PostComments2 = _interopRequireDefault(_PostComments);

var _ArticleTitle = require("./ArticleTitle");

var _ArticleTitle2 = _interopRequireDefault(_ArticleTitle);

var _Tags = require("./Tags");

var _Tags2 = _interopRequireDefault(_Tags);

var _media = require("../../utils/media");

var _media2 = _interopRequireDefault(_media);

var _config = require("../../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n"], ["\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  text-align: left;\n  ", ";\n"], ["\n  text-align: left;\n  ", ";\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n    text-align: center;\n  "], ["\n    text-align: center;\n  "]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  text-align: right;\n  ", ";\n"], ["\n  text-align: right;\n  ", ";\n"]);

var StyledPostAuthor = (0, _styledComponents2.default)(_PostAuthor2.default)(_templateObject);

var TagsCol = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Col)(_templateObject2, _media2.default.md(_templateObject3));

var SocialCol = (0, _styledComponents2.default)(_reactStyledFlexboxgrid.Col)(_templateObject4, _media2.default.md(_templateObject3));

var Post = function (_React$Component) {
  (0, _inherits3.default)(Post, _React$Component);

  function Post(props) {
    (0, _classCallCheck3.default)(this, Post);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).call(this, props));

    _this.state = {
      tree: (0, _compile2.default)(props.post.text).tree
    };
    return _this;
  }

  (0, _createClass3.default)(Post, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.post && nextProps.post.text !== this.props.post.text) {
        this.setState({
          tree: (0, _compile2.default)(nextProps.post.text).tree
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var post = this.props.post;
      if (!post || !post.author || !_config2.default.authors[post.author]) {
        return null;
      }
      var authorInfo = _config2.default.authors[post.author];
      return _react2.default.createElement("div", null, _react2.default.createElement(_reactStyledFlexboxgrid.Grid, { style: { padding: 0 } }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, { style: { margin: 0 } }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, lg: 10, lgOffset: 1, style: { padding: 0 } }, _react2.default.createElement(_ArticleTitle2.default, {
        author: post.author,
        authorInfo: authorInfo,
        title: post.title,
        video: post.fullscreenVideo,
        date: post.date,
        category: post.category
      })))), _react2.default.createElement(_reactStyledFlexboxgrid.Grid, null, _react2.default.createElement(_reactStyledFlexboxgrid.Row, { style: { margin: 0 } }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, lg: 8, lgOffset: 2 }, _react2.default.createElement(_Article2.default, null, this.state.tree))), _react2.default.createElement(_reactStyledFlexboxgrid.Row, { style: { margin: 0 } }, _react2.default.createElement(TagsCol, {
        xs: 10,
        xsOffset: 1,
        md: 5,
        mdOffset: 1,
        lg: 4,
        lgOffset: 2
      }, post.tags && _react2.default.createElement(_Tags2.default, { tags: post.tags })), _react2.default.createElement(SocialCol, {
        xs: 10,
        xsOffset: 1,
        md: 5,
        mdOffset: 0,
        lg: 4,
        lgOffset: 0
      }, _react2.default.createElement(_reactNoSsr2.default, null, _react2.default.createElement(_PostShare2.default, {
        key: "post-share-" + post.id,
        title: post.title,
        url: post.url
      })))), _react2.default.createElement(_reactStyledFlexboxgrid.Row, { style: { margin: 0 } }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 10, xsOffset: 1, lg: 8, lgOffset: 2 }, post.author && _react2.default.createElement(StyledPostAuthor, {
        author: post.author,
        authorInfo: authorInfo
      }), this.props.disableComments === true ? null : _react2.default.createElement(_reactNoSsr2.default, null, _react2.default.createElement(_PostComments2.default, {
        key: "post-comments-" + post.id,
        url: post.url,
        title: post.title
      }))))));
    }
  }]);

  return Post;
}(_react2.default.Component);

exports.default = Post;