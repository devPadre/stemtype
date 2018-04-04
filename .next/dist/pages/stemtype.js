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

var _CustomHead = require("../components/CustomHead");

var _CustomHead2 = _interopRequireDefault(_CustomHead);

var _LogoBanner = require("../components/LogoBanner");

var _LogoBanner2 = _interopRequireDefault(_LogoBanner);

var _SidebarBlock = require("../components/Sidebar/SidebarBlock");

var _SidebarBlock2 = _interopRequireDefault(_SidebarBlock);

var _TagsCloud = require("../components/Sidebar/TagsCloud");

var _TagsCloud2 = _interopRequireDefault(_TagsCloud);

var _content = require("../utils/content");

var _TypesFeed = require("../components/TypesFeed");

var _TypesFeed2 = _interopRequireDefault(_TypesFeed);

var _LanguageSelector = require("../components/LanguageSelector");

var _LanguageSelector2 = _interopRequireDefault(_LanguageSelector);

var _links = require("../utils/links");

var _LazyPostsFetcher = require("./_hocs/LazyPostsFetcher");

var _LazyPostsFetcher2 = _interopRequireDefault(_LazyPostsFetcher);

var _LoadMoreButton = require("../components/LoadMoreButton");

var _LoadMoreButton2 = _interopRequireDefault(_LoadMoreButton);

var _media = require("../utils/media");

var _media2 = _interopRequireDefault(_media);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

var _StemBanner = require("../components/StemBanner");

var _StemBanner2 = _interopRequireDefault(_StemBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"], ["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"]);

var Header = _styledComponents2.default.div(_templateObject);

var StemType = function (_React$Component) {
  (0, _inherits3.default)(StemType, _React$Component);

  function StemType() {
    (0, _classCallCheck3.default)(this, StemType);

    return (0, _possibleConstructorReturn3.default)(this, (StemType.__proto__ || (0, _getPrototypeOf2.default)(StemType)).apply(this, arguments));
  }

  (0, _createClass3.default)(StemType, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          lang = _props.lang,
          posts = _props.posts,
          hasMore = _props.hasMore,
          onLoadMore = _props.onLoadMore,
          image = _props.image,
          imageWidth = _props.imageWidth,
          imageHeight = _props.imageHeight;

      var authorInfo = _config2.default.authors[stemjobs];
      var stemjobs = _config2.default.authors[stemjobs];

      return _react2.default.createElement(_Page2.default, { lang: lang }, _react2.default.createElement(_CustomHead2.default, null), _react2.default.createElement(_LogoBanner2.default, { lang: lang }), _react2.default.createElement(_reactStyledFlexboxgrid.Grid, { style: { overflow: "hidden" } }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, null, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, lg: 10, lgOffset: 1, style: { padding: 0 } }, _react2.default.createElement(_StemBanner2.default, null), _react2.default.createElement(Header, { style: { paddingbottom: 20 } }, _react2.default.createElement("h2", null, "Explore Jobs Connected with each STEM TYPE"), _react2.default.createElement("div", { style: { paddingBottom: "5%" } }))), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12 })), _react2.default.createElement(_reactStyledFlexboxgrid.Row, null, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 12, md: 12, style: { paddingbottom: 40 } }, _react2.default.createElement(_TypesFeed2.default, { posts: posts, featured: false })))));
    }
  }]);

  return StemType;
}(_react2.default.Component);

var POSTS_PER_PAGE = 8;

exports.default = (0, _LazyPostsFetcher2.default)(StemType, POSTS_PER_PAGE);