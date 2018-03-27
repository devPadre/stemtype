"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _api = require("../../utils/api");

var Api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/pages/_hocs/LazyPostsFetcher.js";

exports.default = function (WrappedComponent, POSTS_PER_PAGE) {
  return function (_React$Component) {
    (0, _inherits3.default)(LazyPostsFetcher, _React$Component);

    (0, _createClass3.default)(LazyPostsFetcher, null, [{
      key: "getInitialProps",
      value: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref) {
          var query = _ref.query;
          var posts;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Api.fetchAllPublishedPosts(query.lang, POSTS_PER_PAGE);

                case 2:
                  posts = _context.sent;
                  return _context.abrupt("return", (0, _defineProperty3.default)({}, query.lang, { posts: posts, hasMore: posts.length === POSTS_PER_PAGE }));

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref2.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function LazyPostsFetcher(props) {
      (0, _classCallCheck3.default)(this, LazyPostsFetcher);

      var _this = (0, _possibleConstructorReturn3.default)(this, (LazyPostsFetcher.__proto__ || (0, _getPrototypeOf2.default)(LazyPostsFetcher)).call(this, props));

      _this.onLoadOlderClick = function () {
        var postsToFetch = POSTS_PER_PAGE * 2;
        var lang = _this.props.url.query.lang;
        var posts = _this.state[lang] ? _this.state[lang].posts : [];
        Api.fetchAllPublishedPosts(lang, postsToFetch, posts.length).then(function (posts) {
          _this.setState(function (state) {
            return (0, _defineProperty3.default)({}, lang, {
              posts: [].concat((0, _toConsumableArray3.default)(state[lang].posts), (0, _toConsumableArray3.default)(posts)),
              hasMore: posts.length === postsToFetch
            });
          });
        });
      };

      _this.state = props;
      return _this;
    }

    (0, _createClass3.default)(LazyPostsFetcher, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var nextLanguage = nextProps.url.query.lang;
        var currentLanguage = this.props.url.query.lang;
        if (!this.state[nextLanguage] && nextLanguage !== currentLanguage) {
          this.setState(function (state) {
            return (0, _defineProperty3.default)({}, nextLanguage, state[currentLanguage]);
          });
          Api.fetchAllPublishedPosts(nextLanguage, POSTS_PER_PAGE).then(function (posts) {
            _this2.setState((0, _defineProperty3.default)({}, nextLanguage, {
              posts: posts,
              hasMore: posts.length === POSTS_PER_PAGE
            }));
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        var lang = this.props.url.query.lang;
        var posts = this.state[lang] ? this.state[lang].posts : [];
        var hasMore = this.state[lang] ? this.state[lang].hasMore : false;

        return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, {
          lang: lang,
          posts: posts,
          hasMore: hasMore,
          onLoadMore: this.onLoadOlderClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }));
      }
    }]);

    return LazyPostsFetcher;
  }(_react2.default.Component);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL19ob2NzL0xhenlQb3N0c0ZldGNoZXIuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJBcGkiLCJXcmFwcGVkQ29tcG9uZW50IiwiUE9TVFNfUEVSX1BBR0UiLCJxdWVyeSIsImZldGNoQWxsUHVibGlzaGVkUG9zdHMiLCJsYW5nIiwicG9zdHMiLCJoYXNNb3JlIiwibGVuZ3RoIiwicHJvcHMiLCJvbkxvYWRPbGRlckNsaWNrIiwicG9zdHNUb0ZldGNoIiwidXJsIiwic3RhdGUiLCJ0aGVuIiwic2V0U3RhdGUiLCJuZXh0UHJvcHMiLCJuZXh0TGFuZ3VhZ2UiLCJjdXJyZW50TGFuZ3VhZ2UiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7SUFBUCxBQUFZLEFBQVMsQUFFckI7Ozs7Ozs7O2tCQUFlLFVBQUEsQUFBQyxrQkFBRCxBQUFtQixnQkFBbkI7cUNBQUE7OENBQUE7OztXQUFBO3lCQUFBO29IQUFBO2NBQUEsQUFFb0IsYUFGcEIsQUFFb0I7Y0FGcEI7d0VBQUE7c0JBQUE7K0NBQUE7cUJBQUE7a0NBQUE7eUJBR1csSUFBQSxBQUFJLHVCQUN0QixNQURrQixBQUNaLE1BSkMsQUFHVyxBQUVsQjs7cUJBRkk7QUFIRyxtQ0FBQTtxRkFRTixNQVJNLEFBUUEsTUFBTyxFQUFFLE9BQUYsT0FBUyxTQUFTLE1BQUEsQUFBTSxXQVIvQixBQVFPLEFBQW1DOztxQkFSMUM7cUJBQUE7a0NBQUE7O0FBQUE7c0JBQUE7QUFBQTs7cUNBQUE7bUNBQUE7QUFBQTs7ZUFBQTtBQUFBLEFBWVg7QUFaVzs7OEJBWVgsQUFBWSxPQUFPOzBDQUFBOzs0SkFBQSxBQUNYOztZQURXLEFBdUJuQixtQkFBbUIsWUFBTSxBQUN2QjtZQUFNLGVBQWUsaUJBQXJCLEFBQXNDLEFBQ3RDO1lBQU0sT0FBTyxNQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUE1QixBQUFrQyxBQUNsQztZQUFNLFFBQVEsTUFBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLE1BQUEsQUFBSyxNQUFMLEFBQVcsTUFBOUIsQUFBb0MsUUFBbEQsQUFBMEQsQUFDMUQ7WUFBQSxBQUFJLHVCQUFKLEFBQTJCLE1BQTNCLEFBQWlDLGNBQWMsTUFBL0MsQUFBcUQsUUFBckQsQUFBNkQsS0FDM0QsaUJBQVMsQUFDUDtnQkFBQSxBQUFLLFNBQVMsaUJBQUE7cURBQUEsQUFDWDtnRUFDWSxNQUFBLEFBQU0sTUFBakIsQUFBdUIseUNBRGpCLEFBQ04sQUFBaUMsQUFDakM7dUJBQVMsTUFBQSxBQUFNLFdBSEwsQUFDSixBQUVvQjtBQUZwQixBQUNOO0FBRkosQUFNRDtBQVJILEFBVUQ7QUFyQ2tCLEFBRWpCOztZQUFBLEFBQUssUUFGWSxBQUVqQixBQUFhO2FBQ2Q7QUFmVTs7O1dBQUE7Z0RBQUEsQUFpQmUsV0FBVztxQkFDbkM7O1lBQU0sZUFBZSxVQUFBLEFBQVUsSUFBVixBQUFjLE1BQW5DLEFBQXlDLEFBQ3pDO1lBQU0sa0JBQWtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsSUFBWCxBQUFlLE1BQXZDLEFBQTZDLEFBQzdDO1lBQUksQ0FBQyxLQUFBLEFBQUssTUFBTixBQUFDLEFBQVcsaUJBQWlCLGlCQUFqQyxBQUFrRCxpQkFBaUIsQUFDakU7ZUFBQSxBQUFLLFNBQVMsaUJBQUE7cURBQUEsQUFDWCxjQUFlLE1BREosQUFDSSxBQUFNO0FBRHhCLEFBR0E7Y0FBQSxBQUFJLHVCQUFKLEFBQTJCLGNBQTNCLEFBQXlDLGdCQUF6QyxBQUF5RCxLQUFLLGlCQUFTLEFBQ3JFO21CQUFBLEFBQUssMkNBQUwsQUFDRztxQkFBZSxBQUVkO3VCQUFTLE1BQUEsQUFBTSxXQUhuQixBQUNrQixBQUVZLEFBRy9CO0FBTG1CLEFBQ2Q7QUFITixBQVFEO0FBQ0Y7QUFqQ1U7QUFBQTtXQUFBOytCQW1ERixBQUNQO1lBQU0sT0FBTyxLQUFBLEFBQUssTUFBTCxBQUFXLElBQVgsQUFBZSxNQUE1QixBQUFrQyxBQUNsQztZQUFNLFFBQVEsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFRLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBOUIsQUFBb0MsUUFBbEQsQUFBMEQsQUFDMUQ7WUFBTSxVQUFVLEtBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLE1BQTlCLEFBQW9DLFVBQXBELEFBQThELEFBRTlEOzs2Q0FDRSxBQUFDLDZDQUNLLEtBRE4sQUFDVztnQkFEWCxBQUVRLEFBQ047aUJBSEYsQUFHUyxBQUNQO21CQUpGLEFBSVcsQUFDVDtzQkFBWSxLQUxkLEFBS21COztzQkFMbkI7d0JBREYsQUFDRSxBQVFIO0FBUkc7QUFFRSxVQUZGO0FBekRPO0FBQUE7O1dBQUE7SUFDa0IsZ0JBRGxCLEFBQ3dCO0FBRHZDIiwiZmlsZSI6IkxhenlQb3N0c0ZldGNoZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==