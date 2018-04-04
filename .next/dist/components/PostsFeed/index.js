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

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require("polished");

var _media = require("../../utils/media");

var _media2 = _interopRequireDefault(_media);

var _FeedItem = require("./FeedItem");

var _FeedItem2 = _interopRequireDefault(_FeedItem);

var _FeedItemFeatured = require("./FeedItemFeatured");

var _FeedItemFeatured2 = _interopRequireDefault(_FeedItemFeatured);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin-left: -15px;\n  margin-right: -15px;\n  ", ";\n  ", ";\n"], ["\n  margin-left: -15px;\n  margin-right: -15px;\n  ", ";\n  ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n    margin-left: 0;\n    margin-right: 0;\n  "], ["\n    margin-left: 0;\n    margin-right: 0;\n  "]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ", ";\n"], ["\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ", ";\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "], ["\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"], ["\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"]);

var ItemRow = _styledComponents2.default.div(_templateObject, _media2.default.sm(_templateObject2), (0, _polished.clearFix)());

var SimpleItem = _styledComponents2.default.div(_templateObject3, _media2.default.sm(_templateObject4));

var FeaturedItem = _styledComponents2.default.div(_templateObject5);

function makeRows(posts, withFeatured) {
  var featured = [];
  var simple = [];
  var rows = [];

  if (!withFeatured) {
    simple = [].concat((0, _toConsumableArray3.default)(posts));
  } else {
    if (posts.length <= 2) {
      featured = [].concat((0, _toConsumableArray3.default)(posts));
    } else {
      posts.forEach(function (post, index) {
        var isFourth = index % 4 === 0;
        if (isFourth) {
          featured.push(post);
        } else {
          simple.push(post);
        }
      });
    }
  }
  featured.forEach(function (featured, index) {
    rows.push([(0, _extends3.default)({}, featured, {
      featured: true,
      even: index % 2
    })]);
    if (simple.length >= 3) {
      var shifted = simple.splice(0, 3);
      rows.push([].concat((0, _toConsumableArray3.default)(shifted)));
    }
  });
  while (simple.length > 0) {
    var shifted = simple.splice(0, 3);
    rows.push([].concat((0, _toConsumableArray3.default)(shifted)));
  }
  return rows;
}

var PostsFeed = function (_React$Component) {
  (0, _inherits3.default)(PostsFeed, _React$Component);

  function PostsFeed() {
    (0, _classCallCheck3.default)(this, PostsFeed);

    return (0, _possibleConstructorReturn3.default)(this, (PostsFeed.__proto__ || (0, _getPrototypeOf2.default)(PostsFeed)).apply(this, arguments));
  }

  (0, _createClass3.default)(PostsFeed, [{
    key: "renderRow",
    value: function renderRow(row, index) {
      if (this.props.featured && row.length === 1 && row[0].featured) {
        var post = row[0];
        return _react2.default.createElement(FeaturedItem, { key: "featured-" + post.url }, _react2.default.createElement(_FeedItemFeatured2.default, {
          key: post.url,
          lazy: index > 0,
          title: post.title,
          image: post.thumbImage,
          text: post.thumbText,
          even: post.even,
          tags: post.tags,
          date: post.date,
          category: post.category,
          href: post.url
        }));
      }
      return _react2.default.createElement(ItemRow, { key: "simple-" + index }, row.map(function (post) {
        return _react2.default.createElement(SimpleItem, { key: post.url }, _react2.default.createElement(_FeedItem2.default, {
          lazy: index > 0,
          title: post.title,
          image: post.thumbImage,
          text: post.thumbText,
          even: post.even,
          tags: post.tags,
          date: post.date,
          category: post.category,
          href: post.url
        }));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.posts.length === 0) {
        return null;
      }
      var rows = makeRows(this.props.posts, this.props.featured);
      return _react2.default.createElement("div", null, rows.map(function (row, index) {
        return _this2.renderRow(row, index);
      }));
    }
  }]);

  return PostsFeed;
}(_react2.default.Component);

PostsFeed.defaultProps = {
  featured: true,
  placeholder: ""
};

exports.default = PostsFeed;