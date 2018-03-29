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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/pages/index.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  text-align: center;\n  display: block;\n  padding: 15px;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h3 {\n    margin-top: 0;\n    margin-bottom: 6px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 30px;\n    text-transform: uppercase;\n  }\n"], ["\n  text-align: center;\n  display: block;\n  padding: 15px;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h3 {\n    margin-top: 0;\n    margin-bottom: 6px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 30px;\n    text-transform: uppercase;\n  }\n"]);

var Header = _styledComponents2.default.div(_templateObject);

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);

    return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
  }

  (0, _createClass3.default)(Index, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          lang = _props.lang,
          posts = _props.posts,
          hasMore = _props.hasMore,
          onLoadMore = _props.onLoadMore;

      return _react2.default.createElement(_Page2.default, { lang: lang, __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_CustomHead2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(_LogoBanner2.default, { lang: lang, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Welcome to the Stem Type\u2122 Navigator"), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 12, md: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_link2.default, { href: "/quiz", __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(_LinkButton2.default, {
        title: "Find Your Stem Type™",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      })))), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, "STEM Type\u2122 connects your passions and dreams"), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, " to the right opportunities so that you can find career success! "), _react2.default.createElement(_Hr2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement("div", { style: { padding: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement(_reactStyledFlexboxgrid.Grid, { style: { overflow: "hidden" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 12, md: 9, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_PostsFeed2.default, { posts: posts, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: false, sm: false, md: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement("div", { style: { paddingLeft: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_SidebarBlock2.default, { title: "Tags", __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_TagsCloud2.default, { tags: (0, _content.getTags)(posts), lang: lang, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }))))), hasMore && _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 12, md: 9, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, _react2.default.createElement(_LoadMoreButton2.default, {
        onClick: onLoadMore,
        title: "Load more careers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      })))));
    }
  }]);

  return Index;
}(_react2.default.Component);

var POSTS_PER_PAGE = 5;

exports.default = (0, _LazyPostsFetcher2.default)(Index, POSTS_PER_PAGE);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIlJvdyIsIkNvbCIsInN0eWxlZCIsIlBhZ2UiLCJDdXN0b21IZWFkIiwiTG9nb0Jhbm5lciIsIlNpZGViYXJCbG9jayIsIlRhZ3NDbG91ZCIsImdldFRhZ3MiLCJQb3N0c0ZlZWQiLCJMYW5ndWFnZVNlbGVjdG9yIiwiZ2V0SW5kZXhMaW5rIiwiTGF6eVBvc3RzRmV0Y2hlciIsIkxvYWRNb3JlQnV0dG9uIiwiTGlua0J1dHRvbiIsIkhyIiwiQ29uZmlnIiwiU29jaWFsTGluayIsIkxpbmsiLCJIZWFkZXIiLCJkaXYiLCJJbmRleCIsInByb3BzIiwibGFuZyIsInBvc3RzIiwiaGFzTW9yZSIsIm9uTG9hZE1vcmUiLCJwYWRkaW5nIiwib3ZlcmZsb3ciLCJwYWRkaW5nTGVmdCIsIkNvbXBvbmVudCIsIlBPU1RTX1BFUl9QQUdFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQUs7O0FBQ3BCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQVMsQUFBZTs7QUFDeEIsQUFBTyxBQUFlOzs7O0FBQ3RCLEFBQU8sQUFBc0I7Ozs7QUFDN0IsQUFBUyxBQUFvQjs7QUFDN0IsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFROzs7O0FBQ2YsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTzs7Ozs7Ozs7OztBQUlQLElBQU0sU0FBUywyQkFBVCxBQUFnQixJQUF0Qjs7SSxBQXNCTTs7Ozs7Ozs7Ozs7NkJBQ0s7bUJBQ3NDLEtBRHRDLEFBQzJDO1VBRDNDLEFBQ0MsY0FERCxBQUNDO1VBREQsQUFDTyxlQURQLEFBQ087VUFEUCxBQUNjLGlCQURkLEFBQ2M7VUFEZCxBQUN1QixvQkFEdkIsQUFDdUIsQUFDOUI7OzZCQUNFLEFBQUMsZ0NBQUssTUFBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0UsQUFDQTtBQURBO0FBQUEsMEJBQ0EsQUFBQyxzQ0FBVyxNQUFaLEFBQWtCO29CQUFsQjtzQkFGRixBQUVFLEFBQ0E7QUFEQTswQkFDQyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FERixBQUNFLEFBQ0ksNkRBQUEsQUFBQyw2Q0FBSSxJQUFMLEFBQVMsSUFBSSxJQUFiLEFBQWlCLElBQUksSUFBckIsQUFBeUI7b0JBQXpCO3NCQUFBLEFBQ0E7QUFEQTt5QkFDQSxBQUFDLGdDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFBRztBQUFIO0FBQUEseUJBQUcsQUFBQztlQUFELEFBQ007O29CQUROO3NCQUpYLEFBRU0sQUFDQSxBQUNFLEFBQUcsQUFNVDtBQU5TO0FBQ0QsNkJBS1IsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBVkYsQUFVRSxBQUNBLHNFQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVhGLEFBV0UsQUFDRixzRkFBQSxBQUFDOztvQkFBRDtzQkFmRixBQUdFLEFBWUEsQUFFQTtBQUZBO0FBQUEsa0RBRUssT0FBTyxFQUFFLFNBQWQsQUFBWSxBQUFXO29CQUF2QjtzQkFqQkYsQUFpQkUsQUFFQTtBQUZBOzBCQUVBLEFBQUMsOENBQUssT0FBTyxFQUFFLFVBQWYsQUFBYSxBQUFZO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw2Q0FBSSxJQUFMLEFBQVMsSUFBSSxJQUFiLEFBQWlCLElBQUksSUFBckIsQUFBeUI7b0JBQXpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHFDQUFVLE9BQVgsQUFBa0I7b0JBQWxCO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsQUFBQyw2Q0FBSSxJQUFMLEFBQVMsT0FBTyxJQUFoQixBQUFvQixPQUFPLElBQTNCLEFBQStCO29CQUEvQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLE9BQU8sRUFBRSxhQUFkLEFBQVksQUFBZTtvQkFBM0I7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsd0NBQWEsT0FBZCxBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMscUNBQVUsTUFBTSxzQkFBakIsQUFBaUIsQUFBUSxRQUFRLE1BQWpDLEFBQXVDO29CQUF2QztzQkFSVixBQUNFLEFBSUUsQUFDRSxBQUNFLEFBQ0UsQUFLUDtBQUxPO3lDQU1OLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQyw2Q0FBSSxJQUFMLEFBQVMsSUFBSSxJQUFiLEFBQWlCLElBQUksSUFBckIsQUFBeUI7b0JBQXpCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2lCQUFELEFBQ1csQUFDVDtlQUZGLEFBRVM7O29CQUZUO3NCQXBDWixBQUNFLEFBbUJFLEFBY0ksQUFDRSxBQUNFLEFBV2I7QUFYYTtBQUNFOzs7OztFQXhDRSxnQixBQUFNOztBQXFEMUIsSUFBTSxpQkFBTixBQUF1QixBQUV2Qjs7a0JBQWUsZ0NBQUEsQUFBaUIsT0FBaEMsQUFBZSxBQUF3QiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9