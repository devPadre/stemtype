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
          onLoadMore: this.onLoadOlderClick
        }));
      }
    }]);

    return LazyPostsFetcher;
  }(_react2.default.Component);
};