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

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Post/index.js";

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
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Grid, { style: { padding: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, { style: { margin: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, lg: 10, lgOffset: 1, style: { padding: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement(_ArticleTitle2.default, {
        author: post.author,
        authorInfo: authorInfo,
        title: post.title,
        video: post.fullscreenVideo,
        date: post.date,
        category: post.category,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      })))), _react2.default.createElement(_reactStyledFlexboxgrid.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Row, { style: { margin: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, lg: 8, lgOffset: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_Article2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, this.state.tree))), _react2.default.createElement(_reactStyledFlexboxgrid.Row, { style: { margin: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(TagsCol, {
        xs: 10,
        xsOffset: 1,
        md: 5,
        mdOffset: 1,
        lg: 4,
        lgOffset: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, post.tags && _react2.default.createElement(_Tags2.default, { tags: post.tags, __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), _react2.default.createElement(SocialCol, {
        xs: 10,
        xsOffset: 1,
        md: 5,
        mdOffset: 0,
        lg: 4,
        lgOffset: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_reactNoSsr2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement(_PostShare2.default, {
        key: "post-share-" + post.id,
        title: post.title,
        url: post.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      })))), _react2.default.createElement(_reactStyledFlexboxgrid.Row, { style: { margin: 0 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 10, xsOffset: 1, lg: 8, lgOffset: 2, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, post.author && _react2.default.createElement(StyledPostAuthor, {
        author: post.author,
        authorInfo: authorInfo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), this.props.disableComments === true ? null : _react2.default.createElement(_reactNoSsr2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement(_PostComments2.default, {
        key: "post-comments-" + post.id,
        url: post.url,
        title: post.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }))))));
    }
  }]);

  return Post;
}(_react2.default.Component);

exports.default = Post;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk5vU1NSIiwiR3JpZCIsIlJvdyIsIkNvbCIsInN0eWxlZCIsImNvbXBpbGUiLCJQb3N0QXV0aG9yIiwiQXJ0aWNsZSIsIlBvc3RTaGFyZSIsIlBvc3RDb21tZW50cyIsIkFydGljbGVUaXRsZSIsIlRhZ3MiLCJNZWRpYSIsIkNvbmZpZyIsIlN0eWxlZFBvc3RBdXRob3IiLCJUYWdzQ29sIiwibWQiLCJTb2NpYWxDb2wiLCJQb3N0IiwicHJvcHMiLCJzdGF0ZSIsInRyZWUiLCJwb3N0IiwidGV4dCIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwiYXV0aG9yIiwiYXV0aG9ycyIsImF1dGhvckluZm8iLCJwYWRkaW5nIiwibWFyZ2luIiwidGl0bGUiLCJmdWxsc2NyZWVuVmlkZW8iLCJkYXRlIiwiY2F0ZWdvcnkiLCJ0YWdzIiwiaWQiLCJ1cmwiLCJkaXNhYmxlQ29tbWVudHMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFLOztBQUNwQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBZ0I7Ozs7QUFDdkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWtCOzs7O0FBQ3pCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQVk7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBTSxtQkFBQSxBQUFtQixBQUFPLHNEQUFoQzs7QUFLQSxJQUFNLFVBQUEsQUFBVSxBQUFPLCtFQUVuQixnQkFGRSxBQUVJLEdBRlY7O0FBT0EsSUFBTSxZQUFBLEFBQVksQUFBTywrRUFFckIsZ0JBRkUsQUFFSSxHQUZWOztJQU9xQixBO2dDQUNuQjs7Z0JB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Q0UsQUFRTjtBQVJNO0FBQ0UsNkJBT1IsQUFBQyw2Q0FBSSxPQUFPLEVBQUUsUUFBZCxBQUFZLEFBQVU7b0JBQXRCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDZDQUFJLElBQUwsQUFBUyxJQUFJLFVBQWIsQUFBdUIsR0FBRyxJQUExQixBQUE4QixHQUFHLFVBQWpDLEFBQTJDO29CQUEzQztzQkFBQSxBQUNHO0FBREg7Y0FDRyxBQUFLLHdDQUNKLEFBQUM7Z0JBQ1MsS0FEVixBQUNlLEFBQ2I7b0JBRkYsQUFFYzs7b0JBRmQ7c0JBRkosQUFFSSxBQUtEO0FBTEM7QUFDRSxPQURGLFFBS0QsQUFBSyxNQUFMLEFBQVcsb0JBQVgsQUFBK0IsT0FBL0IsQUFBc0MsdUJBQ3JDLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQztnQ0FDdUIsS0FEeEIsQUFDNkIsQUFDM0I7YUFBSyxLQUZQLEFBRVksQUFDVjtlQUFPLEtBSFQsQUFHYzs7b0JBSGQ7c0JBNURkLEFBQ0UsQUFlRSxBQWtDRSxBQUNFLEFBUUksQUFDRSxBQVlmO0FBWmU7QUFDRTs7Ozs7RUFuRmMsZ0JBQU0sQTs7a0JBQW5CLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==