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

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactStyledFlexboxgrid = require("react-styled-flexboxgrid");

var _Page = require("../components/Page");

var _Page2 = _interopRequireDefault(_Page);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

var _CustomHead = require("../components/CustomHead");

var _CustomHead2 = _interopRequireDefault(_CustomHead);

var _LogoBanner = require("../components/LogoBanner");

var _LogoBanner2 = _interopRequireDefault(_LogoBanner);

var _SidebarBlock = require("../components/Sidebar/SidebarBlock");

var _SidebarBlock2 = _interopRequireDefault(_SidebarBlock);

var _TagsCloud = require("../components/Sidebar/TagsCloud");

var _TagsCloud2 = _interopRequireDefault(_TagsCloud);

var _content = require("../utils/content");

var _links = require("../utils/links");

var _PostsFeed = require("../components/PostsFeed");

var _PostsFeed2 = _interopRequireDefault(_PostsFeed);

var _error = require("next/dist/lib/error.js");

var _error2 = _interopRequireDefault(_error);

var _PostAuthor = require("../components/Post/PostAuthor");

var _PostAuthor2 = _interopRequireDefault(_PostAuthor);

var _LanguageSelector = require("../components/LanguageSelector");

var _LanguageSelector2 = _interopRequireDefault(_LanguageSelector);

var _LazyPostsFetcher = require("./_hocs/LazyPostsFetcher");

var _LazyPostsFetcher2 = _interopRequireDefault(_LazyPostsFetcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  text-align: center;\n  display: block;\n  margin-bottom: 20px;\n"], ["\n  text-align: center;\n  display: block;\n  margin-bottom: 20px;\n"]);

var Header = _styledComponents2.default.div(_templateObject);

var AuthorPage = function (_React$Component) {
  (0, _inherits3.default)(AuthorPage, _React$Component);

  function AuthorPage() {
    (0, _classCallCheck3.default)(this, AuthorPage);

    return (0, _possibleConstructorReturn3.default)(this, (AuthorPage.__proto__ || (0, _getPrototypeOf2.default)(AuthorPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(AuthorPage, [{
    key: "render",
    value: function render() {
      var author = this.props.url.query.author;
      var _props = this.props,
          lang = _props.lang,
          hasMore = _props.hasMore,
          onLoadMore = _props.onLoadMore;

      if (!(author && _config2.default.authors[author])) {
        return _react2.default.createElement(_error2.default, { statusCode: 404 });
      }
      var posts = (0, _content.postsByAuthor)(this.props.posts, author);
      return _react2.default.createElement(_Page2.default, { lang: lang }, _react2.default.createElement(_CustomHead2.default, null), _react2.default.createElement(_LogoBanner2.default, { lang: lang }), _react2.default.createElement("div", { style: { padding: 20 } }), _react2.default.createElement(_reactStyledFlexboxgrid.Grid, { style: { overflow: "hidden" } }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, null, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12 }, _react2.default.createElement(Header, null, _react2.default.createElement(_PostAuthor2.default, {
        author: author,
        authorInfo: _config2.default.authors[author]
      })))), _react2.default.createElement(_reactStyledFlexboxgrid.Row, null, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 12, md: 9 }, _react2.default.createElement(_PostsFeed2.default, { posts: posts, featured: false })), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: false, sm: false, md: 3 }, _react2.default.createElement("div", { style: { paddingLeft: 20 } }, _react2.default.createElement(_SidebarBlock2.default, { title: "Tags" }, _react2.default.createElement(_TagsCloud2.default, { tags: (0, _content.getTags)(posts), lang: lang })))))));
    }
  }]);

  return AuthorPage;
}(_react2.default.Component);

exports.default = (0, _LazyPostsFetcher2.default)(AuthorPage);