"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _LogoBanner = require("../components/LogoBanner");

var _LogoBanner2 = _interopRequireDefault(_LogoBanner);

var _Page = require("../components/Page");

var _Page2 = _interopRequireDefault(_Page);

var _CustomHead = require("../components/CustomHead");

var _CustomHead2 = _interopRequireDefault(_CustomHead);

var _Post = require("../components/Post");

var _Post2 = _interopRequireDefault(_Post);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

var _links = require("../utils/links");

var _LanguageSelector = require("../components/LanguageSelector");

var _LanguageSelector2 = _interopRequireDefault(_LanguageSelector);

var _error = require("next/dist/lib/error.js");

var _error2 = _interopRequireDefault(_error);

var _api = require("../utils/api");

var Api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};
    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key))
          newObj[key] = obj[key];
      }
    }
    newObj.default = obj;
    return newObj;
  }
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var PostPage = (function(_React$Component) {
  (0, _inherits3.default)(PostPage, _React$Component);

  function PostPage() {
    (0, _classCallCheck3.default)(this, PostPage);

    return (0, _possibleConstructorReturn3.default)(
      this,
      (PostPage.__proto__ || (0, _getPrototypeOf2.default)(PostPage)).apply(
        this,
        arguments
      )
    );
  }

  (0, _createClass3.default)(
    PostPage,
    [
      {
        key: "render",
        value: function render() {
          var _props = this.props,
            post = _props.post,
            fullUrl = _props.fullUrl;

          if (!post) {
            return _react2.default.createElement(_error2.default, {
              statusCode: 404
            });
          }
          return _react2.default.createElement(
            _Page2.default,
            { lang: "en" },
            _react2.default.createElement(_CustomHead2.default, {
              title: post.title,
              image: post.ogImage,
              video: post.ogVideo,
              description: post.thumbText,
              type: "article",
              url: "" + _config2.default.baseUrl + post.url
            }),
            _react2.default.createElement(_LogoBanner2.default, { lang: "en" }),
            post.hasTranslation &&
              _react2.default.createElement(_LanguageSelector2.default, {
                current: post.language,
                getLink: function getLink(language) {
                  return (0, _links.getPostLink)(fullUrl, language.id);
                }
              }),
            _react2.default.createElement(_Post2.default, { post: post })
          );
        }
      }
    ],
    [
      {
        key: "getInitialProps",
        value: (function() {
          var _ref2 = (0, _asyncToGenerator3.default)(
            /*#__PURE__*/ _regenerator2.default.mark(function _callee(_ref) {
              var query = _ref.query;
              var url, post;
              return _regenerator2.default.wrap(
                function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        url = query ? query.fullUrl : "";
                        _context.next = 3;
                        return Api.fetchPublishedPost(url);

                      case 3:
                        post = _context.sent;
                        return _context.abrupt("return", {
                          post: post,
                          fullUrl: url
                        });

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                },
                _callee,
                this
              );
            })
          );

          function getInitialProps(_x) {
            return _ref2.apply(this, arguments);
          }

          return getInitialProps;
        })()
      }
    ]
  );

  return PostPage;
})(_react2.default.Component);

exports.default = PostPage;
