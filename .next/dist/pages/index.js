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
          lineNumber: 48
        }
      }, _react2.default.createElement(_CustomHead2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement(_LogoBanner2.default, { lang: lang, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement(Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, _react2.default.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Welcome to the Stem Type\u2122 Navigator"), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 12, md: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement(_SocialLink2.default, { href: _config2.default.social.stemjobs.href, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(_LoadMoreButton2.default, {
        title: "Find Your Stem Type™",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }))), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, "STEM Type\u2122 connects your passions and dreams"), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, " the right opportunities so that you can find career success! "), _react2.default.createElement(_Hr2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })), _react2.default.createElement("div", { style: { padding: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement(_reactStyledFlexboxgrid.Grid, { style: { overflow: "hidden" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 12, md: 9, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, _react2.default.createElement(_PostsFeed2.default, { posts: posts, __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: false, sm: false, md: 3, __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement("div", { style: { paddingLeft: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_SidebarBlock2.default, { title: "Tags", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_TagsCloud2.default, { tags: (0, _content.getTags)(posts), lang: lang, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }))))), hasMore && _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 12, md: 9, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_LoadMoreButton2.default, {
        onClick: onLoadMore,
        title: "Load more careers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      })))));
    }
  }]);

  return Index;
}(_react2.default.Component);

var POSTS_PER_PAGE = 5;

exports.default = (0, _LazyPostsFetcher2.default)(Index, POSTS_PER_PAGE);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiR3JpZCIsIlJvdyIsIkNvbCIsInN0eWxlZCIsIlBhZ2UiLCJDdXN0b21IZWFkIiwiTG9nb0Jhbm5lciIsIlNpZGViYXJCbG9jayIsIlRhZ3NDbG91ZCIsImdldFRhZ3MiLCJQb3N0c0ZlZWQiLCJMYW5ndWFnZVNlbGVjdG9yIiwiZ2V0SW5kZXhMaW5rIiwiTGF6eVBvc3RzRmV0Y2hlciIsIkxvYWRNb3JlQnV0dG9uIiwiTGlua0J1dHRvbiIsIkhyIiwiQ29uZmlnIiwiU29jaWFsTGluayIsIkhlYWRlciIsImRpdiIsIkluZGV4IiwicHJvcHMiLCJsYW5nIiwicG9zdHMiLCJoYXNNb3JlIiwib25Mb2FkTW9yZSIsInNvY2lhbCIsInN0ZW1qb2JzIiwiaHJlZiIsInBhZGRpbmciLCJvdmVyZmxvdyIsInBhZGRpbmdMZWZ0IiwiQ29tcG9uZW50IiwiUE9TVFNfUEVSX1BBR0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU0sQUFBSzs7QUFDcEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBUyxBQUFlOztBQUN4QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFTLEFBQW9COztBQUM3QixBQUFPLEFBQXNCOzs7O0FBQzdCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7Ozs7Ozs7OztBQUl2QixJQUFNLFNBQVMsMkJBQVQsQUFBZ0IsSUFBdEI7O0lBc0JNLEE7Ozs7Ozs7Ozs7OzZCQUNLO21CQUNzQyxLQUR0QyxBQUMyQztVQUQzQyxBQUNDLGNBREQsQUFDQztVQURELEFBQ08sZUFEUCxBQUNPO1VBRFAsQUFDYyxpQkFEZCxBQUNjO1VBRGQsQUFDdUIsb0JBRHZCLEFBQ3VCLEFBQzlCOzs2QkFDRSxBQUFDLGdDQUFLLE1BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMsc0NBQVcsTUFBWixBQUFrQjtvQkFBbEI7c0JBRkYsQUFFRSxBQUNBO0FBREE7MEJBQ0MsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNJLDZEQUFBLEFBQUMsNkNBQUksSUFBTCxBQUFTLElBQUksSUFBYixBQUFpQixJQUFJLElBQXJCLEFBQXlCO29CQUF6QjtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQyxzQ0FBVyxNQUFNLGlCQUFBLEFBQU8sT0FBUCxBQUFjLFNBQWhDLEFBQXlDO29CQUF6QztzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztlQUFELEFBQ1M7O29CQURUO3NCQUpSLEFBRU0sQUFDQSxBQUNFLEFBS047QUFMTTtBQUNFLDRCQUlSLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQVRGLEFBU0UsQUFDQSxzRUFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FWRixBQVVFLEFBQ0YsbUZBQUEsQUFBQzs7b0JBQUQ7c0JBZEYsQUFHRSxBQVdBLEFBRUE7QUFGQTtBQUFBLGtEQUVLLE9BQU8sRUFBRSxTQUFkLEFBQVksQUFBVztvQkFBdkI7c0JBaEJGLEFBZ0JFLEFBRUE7QUFGQTswQkFFQSxBQUFDLDhDQUFLLE9BQU8sRUFBRSxVQUFmLEFBQWEsQUFBWTtvQkFBekI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsNkNBQUksSUFBTCxBQUFTLElBQUksSUFBYixBQUFpQixJQUFJLElBQXJCLEFBQXlCO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyxxQ0FBVSxPQUFYLEFBQWtCO29CQUFsQjtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLEFBQUMsNkNBQUksSUFBTCxBQUFTLE9BQU8sSUFBaEIsQUFBb0IsT0FBTyxJQUEzQixBQUErQjtvQkFBL0I7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxPQUFPLEVBQUUsYUFBZCxBQUFZLEFBQWU7b0JBQTNCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHdDQUFhLE9BQWQsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHFDQUFVLE1BQU0sc0JBQWpCLEFBQWlCLEFBQVEsUUFBUSxNQUFqQyxBQUF1QztvQkFBdkM7c0JBUlYsQUFDRSxBQUlFLEFBQ0UsQUFDRSxBQUNFLEFBS1A7QUFMTzt5Q0FNTixBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsNkNBQUksSUFBTCxBQUFTLElBQUksSUFBYixBQUFpQixJQUFJLElBQXJCLEFBQXlCO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQztpQkFBRCxBQUNXLEFBQ1Q7ZUFGRixBQUVTOztvQkFGVDtzQkFuQ1osQUFDRSxBQWtCRSxBQWNJLEFBQ0UsQUFDRSxBQVdiO0FBWGE7QUFDRTs7Ozs7RUF2Q0UsZ0IsQUFBTTs7QUFvRDFCLElBQU0saUJBQU4sQUFBdUIsQUFFdkI7O2tCQUFlLGdDQUFBLEFBQWlCLE9BQWhDLEFBQWUsQUFBd0IiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==