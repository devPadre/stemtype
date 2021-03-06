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

var _links = require("../utils/links");

var _PostsFeed = require("../components/PostsFeed");

var _PostsFeed2 = _interopRequireDefault(_PostsFeed);

var _error = require("next/dist/lib/error.js");

var _error2 = _interopRequireDefault(_error);

var _PostCategory = require("../components/Post/PostCategory");

var _PostCategory2 = _interopRequireDefault(_PostCategory);

var _LanguageSelector = require("../components/LanguageSelector");

var _LanguageSelector2 = _interopRequireDefault(_LanguageSelector);

var _LazyPostsFetcher = require("./_hocs/LazyPostsFetcher");

var _LazyPostsFetcher2 = _interopRequireDefault(_LazyPostsFetcher);

var _Hr = require("../components/Hr");

var _Hr2 = _interopRequireDefault(_Hr);

var _layout = require("../components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"], ["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"]);

var Header = _styledComponents2.default.div(_templateObject);

var CategoryPage = function (_React$Component) {
  (0, _inherits3.default)(CategoryPage, _React$Component);

  function CategoryPage() {
    (0, _classCallCheck3.default)(this, CategoryPage);

    return (0, _possibleConstructorReturn3.default)(this, (CategoryPage.__proto__ || (0, _getPrototypeOf2.default)(CategoryPage)).apply(this, arguments));
  }

  (0, _createClass3.default)(CategoryPage, [{
    key: "render",
    value: function render() {
      var category = this.props.url.query.category;
      var lang = this.props.lang;

      if (!(category && _config2.default.categories[category])) {
        return _react2.default.createElement(_error2.default, { statusCode: 404 });
      }
      var posts = (0, _content.postsByCategory)(this.props.posts, category);
      return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(_Page2.default, { lang: lang }, _react2.default.createElement(_CustomHead2.default, null), _react2.default.createElement(_LogoBanner2.default, { lang: lang }), _react2.default.createElement(_reactStyledFlexboxgrid.Grid, { style: { overflow: "hidden" } }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, null, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12 }, _react2.default.createElement(Header, null, _react2.default.createElement(_PostCategory2.default, {
        category: category,
        categoryInfo: _config2.default.categories[category]
      }), _react2.default.createElement("div", { style: { padding: 20 } })))), _react2.default.createElement(_reactStyledFlexboxgrid.Row, null, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 12, md: 9 }, _react2.default.createElement(_PostsFeed2.default, { posts: posts, featured: false })), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: false, sm: false, md: 3 }, _react2.default.createElement("div", { style: { paddingLeft: 20 } }, _react2.default.createElement(_SidebarBlock2.default, { title: "Tags" }, _react2.default.createElement(_TagsCloud2.default, { tags: (0, _content.getTags)(posts), lang: lang }))))))));
    }
  }]);

  return CategoryPage;
}(_react2.default.Component);

exports.default = (0, _LazyPostsFetcher2.default)(CategoryPage);