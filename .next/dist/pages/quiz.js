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

var _PostsFeed = require("../components/PostsFeed");

var _PostsFeed2 = _interopRequireDefault(_PostsFeed);

var _LanguageSelector = require("../components/LanguageSelector");

var _LanguageSelector2 = _interopRequireDefault(_LanguageSelector);

var _links = require("../utils/links");

var _LazyPostsFetcher = require("./_hocs/LazyPostsFetcher");

var _LazyPostsFetcher2 = _interopRequireDefault(_LazyPostsFetcher);

var _LoadMoreButton = require("../components/LoadMoreButton");

var _LoadMoreButton2 = _interopRequireDefault(_LoadMoreButton);

var _QuizEmbed = require("../components/QuizEmbed");

var _QuizEmbed2 = _interopRequireDefault(_QuizEmbed);

var _media = require("../utils/media");

var _media2 = _interopRequireDefault(_media);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

var _StemBanner = require("../components/StemBanner");

var _StemBanner2 = _interopRequireDefault(_StemBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/pages/quiz.js?entry";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"], ["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"]);

var Header = _styledComponents2.default.div(_templateObject);

var Quiz = function (_React$Component) {
  (0, _inherits3.default)(Quiz, _React$Component);

  function Quiz() {
    (0, _classCallCheck3.default)(this, Quiz);

    return (0, _possibleConstructorReturn3.default)(this, (Quiz.__proto__ || (0, _getPrototypeOf2.default)(Quiz)).apply(this, arguments));
  }

  (0, _createClass3.default)(Quiz, [{
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

      return _react2.default.createElement(_Page2.default, { lang: lang, __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement(_CustomHead2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement(_LogoBanner2.default, { lang: lang, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_reactStyledFlexboxgrid.Grid, { style: { overflow: "hidden" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, lg: 10, lgOffset: 1, style: { padding: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement(_StemBanner2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement(Header, { style: { paddingbottom: 20 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Welcome to the STEM Type Quiz!"), _react2.default.createElement("div", { style: { paddingBottom: "5%" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }))), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 12, md: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_QuizEmbed2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      })))));
    }
  }]);

  return Quiz;
}(_react2.default.Component);

var POSTS_PER_PAGE = 5;

exports.default = (0, _LazyPostsFetcher2.default)(Quiz, POSTS_PER_PAGE);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3F1aXouanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJHcmlkIiwiUm93IiwiQ29sIiwiUGFnZSIsIkN1c3RvbUhlYWQiLCJMb2dvQmFubmVyIiwiU2lkZWJhckJsb2NrIiwiVGFnc0Nsb3VkIiwiZ2V0VGFncyIsIlBvc3RzRmVlZCIsIkxhbmd1YWdlU2VsZWN0b3IiLCJnZXRJbmRleExpbmsiLCJMYXp5UG9zdHNGZXRjaGVyIiwiTG9hZE1vcmVCdXR0b24iLCJRdWl6RW1iZWQiLCJNZWRpYSIsIkNvbmZpZyIsIlN0ZW1CYW5uZXIiLCJIZWFkZXIiLCJkaXYiLCJRdWl6IiwicHJvcHMiLCJsYW5nIiwicG9zdHMiLCJoYXNNb3JlIiwib25Mb2FkTW9yZSIsImltYWdlIiwiaW1hZ2VXaWR0aCIsImltYWdlSGVpZ2h0IiwiYXV0aG9ySW5mbyIsImF1dGhvcnMiLCJzdGVtam9icyIsIm92ZXJmbG93IiwicGFkZGluZyIsInBhZGRpbmdib3R0b20iLCJwYWRkaW5nQm90dG9tIiwiQ29tcG9uZW50IiwiUE9TVFNfUEVSX1BBR0UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFNLEFBQUs7O0FBQ3BCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBUyxBQUFlOztBQUN4QixBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBTyxBQUFzQjs7OztBQUM3QixBQUFTLEFBQW9COztBQUM3QixBQUFPLEFBQXNCOzs7O0FBQzdCLEFBQU8sQUFBb0I7Ozs7QUFDM0IsQUFBTyxBQUFlOzs7O0FBRXRCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFnQjs7Ozs7Ozs7OztBQUd2QixJQUFNLFNBQVMsMkJBQVQsQUFBZ0IsSUFBdEI7O0lBZ0JNLEE7Ozs7Ozs7Ozs7OzZCQUNLO21CQUNzRSxLQUR0RSxBQUMyRTtVQUQzRSxBQUNDLGNBREQsQUFDQztVQURELEFBQ08sZUFEUCxBQUNPO1VBRFAsQUFDYyxpQkFEZCxBQUNjO1VBRGQsQUFDdUIsb0JBRHZCLEFBQ3VCO1VBRHZCLEFBQ21DLGVBRG5DLEFBQ21DO1VBRG5DLEFBQzBDLG9CQUQxQyxBQUMwQztVQUQxQyxBQUNzRCxxQkFEdEQsQUFDc0QsQUFDN0Q7O1VBQU0sYUFBYSxpQkFBQSxBQUFPLFFBQTFCLEFBQW1CLEFBQWUsQUFDbEM7VUFBTSxXQUFXLGlCQUFBLEFBQU8sUUFBeEIsQUFBaUIsQUFBZSxBQUVoQzs7NkJBQ0UsQUFBQyxnQ0FBSyxNQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDRTtBQURGO09BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRSxBQUNFO0FBREY7QUFBQSwwQkFDRSxBQUFDLHNDQUFXLE1BQVosQUFBa0I7b0JBQWxCO3NCQUZKLEFBRUksQUFDRjtBQURFOzBCQUNGLEFBQUMsOENBQUssT0FBTyxFQUFFLFVBQWYsQUFBYSxBQUFZO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyw2Q0FBSSxJQUFMLEFBQVMsSUFBSSxJQUFiLEFBQWlCLElBQUksVUFBckIsQUFBK0IsR0FBRyxPQUFPLEVBQUUsU0FBM0MsQUFBeUMsQUFBVztvQkFBcEQ7c0JBQUEsQUFDQTtBQURBO3lCQUNBLEFBQUM7O29CQUFEO3NCQURBLEFBQ0EsQUFDQTtBQURBO0FBQUEsMEJBQ0MsY0FBRCxVQUFRLE9BQU8sRUFBRSxlQUFqQixBQUFlLEFBQWlCO29CQUFoQztzQkFBQSxBQUNBO0FBREE7eUJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREEsQUFDQSxBQUNBLDBFQUFLLE9BQU8sRUFBRSxlQUFkLEFBQVksQUFBaUI7b0JBQTdCO3NCQUxGLEFBQ0UsQUFFQSxBQUVBLEFBR0E7QUFIQTs0QkFHQSxBQUFDLDZDQUFJLElBQUwsQUFBUztvQkFBVDtzQkFUSixBQUNFLEFBUUUsQUFJRjtBQUpFOzJCQUlGLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsNkNBQUksSUFBTCxBQUFTLElBQUksSUFBYixBQUFpQixJQUFJLElBQXJCLEFBQXlCO29CQUF6QjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQzs7b0JBQUQ7c0JBbkJWLEFBQ0UsQUFHRSxBQWFFLEFBQ0UsQUFDRSxBQU1YO0FBTlc7QUFBQTs7Ozs7RUF6QkssZ0JBQU0sQTs7QUFrQ3pCLElBQU0saUJBQU4sQUFBdUIsQUFFdkI7O2tCQUFlLGdDQUFBLEFBQWlCLE1BQWhDLEFBQWUsQUFBdUIiLCJmaWxlIjoicXVpei5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9