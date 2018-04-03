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

var _reactStyledFlexboxgrid = require("react-styled-flexboxgrid");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

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

var _PostsFeed = require("../components/PostsFeed");

var _PostsFeed2 = _interopRequireDefault(_PostsFeed);

var _LanguageSelector = require("../components/LanguageSelector");

var _LanguageSelector2 = _interopRequireDefault(_LanguageSelector);

var _links = require("../utils/links");

var _LazyPostsFetcher = require("./_hocs/LazyPostsFetcher");

var _LazyPostsFetcher2 = _interopRequireDefault(_LazyPostsFetcher);

var _LoadMoreButton = require("../components/LoadMoreButton");

var _LoadMoreButton2 = _interopRequireDefault(_LoadMoreButton);

var _LinkButton = require("../components/LinkButton");

var _LinkButton2 = _interopRequireDefault(_LinkButton);

var _Hr = require("../components/Hr");

var _Hr2 = _interopRequireDefault(_Hr);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

var _SocialLink = require("../components/SocialLink");

var _SocialLink2 = _interopRequireDefault(_SocialLink);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    "\n  text-align: center;\n  display: block;\n  padding: 15px;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h3 {\n    margin-top: 0;\n    margin-bottom: 6px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 30px;\n    text-transform: uppercase;\n  }\n"
  ],
  [
    "\n  text-align: center;\n  display: block;\n  padding: 15px;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h3 {\n    margin-top: 0;\n    margin-bottom: 6px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 30px;\n    text-transform: uppercase;\n  }\n"
  ]
);

var Header = _styledComponents2.default.div(_templateObject);

var Index = (function(_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(
      this,
      (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(Index, [
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          lang = _props.lang,
          posts = _props.posts,
          hasMore = _props.hasMore,
          onLoadMore = _props.onLoadMore;

        return _react2.default.createElement(
          _Page2.default,
          { lang: lang },
          _react2.default.createElement(_CustomHead2.default, null),
          _react2.default.createElement(_LogoBanner2.default, { lang: lang }),
          _react2.default.createElement(
            Header,
            null,
            _react2.default.createElement(
              "h1",
              null,
              "Welcome to the Stem Type\u2122 Navigator"
            ),
            _react2.default.createElement(
              _reactStyledFlexboxgrid.Col,
              { xs: 12, sm: 12, md: 12 },
              _react2.default.createElement(
                _link2.default,
                { href: "/quiz" },
                _react2.default.createElement(
                  "a",
                  null,
                  _react2.default.createElement(_LinkButton2.default, {
                    title: "Find Your Stem Type™"
                  })
                )
              )
            ),
            _react2.default.createElement(
              "h3",
              null,
              "STEM Type\u2122 connects your passions and dreams"
            ),
            _react2.default.createElement(
              "h3",
              null,
              " to the right opportunities so that you can find career success! "
            ),
            _react2.default.createElement(_Hr2.default, null)
          ),
          _react2.default.createElement("div", { style: { padding: 20 } }),
          _react2.default.createElement(
            _reactStyledFlexboxgrid.Grid,
            { style: { overflow: "hidden" } },
            _react2.default.createElement(
              _reactStyledFlexboxgrid.Row,
              null,
              _react2.default.createElement(
                _reactStyledFlexboxgrid.Col,
                { xs: 12, sm: 12, md: 9 },
                _react2.default.createElement(_PostsFeed2.default, {
                  posts: posts
                })
              ),
              _react2.default.createElement(
                _reactStyledFlexboxgrid.Col,
                { xs: false, sm: false, md: 3 },
                _react2.default.createElement(
                  "div",
                  { style: { paddingLeft: 20 } },
                  _react2.default.createElement(
                    _SidebarBlock2.default,
                    { title: "Tags" },
                    _react2.default.createElement(_TagsCloud2.default, {
                      tags: (0, _content.getTags)(posts),
                      lang: lang
                    })
                  )
                )
              )
            ),
            hasMore &&
              _react2.default.createElement(
                _reactStyledFlexboxgrid.Row,
                null,
                _react2.default.createElement(
                  _reactStyledFlexboxgrid.Col,
                  { xs: 12, sm: 12, md: 9 },
                  _react2.default.createElement(_LoadMoreButton2.default, {
                    onClick: onLoadMore,
                    title: "Load more careers"
                  })
                )
              )
          )
        );
      }
    }
  ]);

  return Index;
})(_react2.default.Component);

var POSTS_PER_PAGE = 5;

exports.default = (0, _LazyPostsFetcher2.default)(Index, POSTS_PER_PAGE);
