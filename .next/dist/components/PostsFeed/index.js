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

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/PostsFeed/index.js";

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
        return _react2.default.createElement(FeaturedItem, { key: "featured-" + post.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        }, _react2.default.createElement(_FeedItemFeatured2.default, {
          key: post.url,
          lazy: index > 0,
          title: post.title,
          image: post.thumbImage,
          text: post.thumbText,
          even: post.even,
          tags: post.tags,
          date: post.date,
          category: post.category,
          href: post.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          }
        }));
      }
      return _react2.default.createElement(ItemRow, { key: "simple-" + index, __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, row.map(function (post) {
        return _react2.default.createElement(SimpleItem, { key: post.url, __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          }
        }, _react2.default.createElement(_FeedItem2.default, {
          lazy: index > 0,
          title: post.title,
          image: post.thumbImage,
          text: post.thumbText,
          even: post.even,
          tags: post.tags,
          date: post.date,
          category: post.category,
          href: post.url,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          }
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
      return _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, rows.map(function (row, index) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHNGZWVkL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiY2xlYXJGaXgiLCJNZWRpYSIsIkZlZWRJdGVtIiwiRmVlZEl0ZW1GZWF0dXJlZCIsIkl0ZW1Sb3ciLCJkaXYiLCJzbSIsIlNpbXBsZUl0ZW0iLCJGZWF0dXJlZEl0ZW0iLCJtYWtlUm93cyIsInBvc3RzIiwid2l0aEZlYXR1cmVkIiwiZmVhdHVyZWQiLCJzaW1wbGUiLCJyb3dzIiwibGVuZ3RoIiwiZm9yRWFjaCIsInBvc3QiLCJpbmRleCIsImlzRm91cnRoIiwicHVzaCIsImV2ZW4iLCJzaGlmdGVkIiwic3BsaWNlIiwiUG9zdHNGZWVkIiwicm93IiwicHJvcHMiLCJ1cmwiLCJ0aXRsZSIsInRodW1iSW1hZ2UiLCJ0aHVtYlRleHQiLCJ0YWdzIiwiZGF0ZSIsImNhdGVnb3J5IiwibWFwIiwicmVuZGVyUm93IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicGxhY2Vob2xkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU8sQUFBVzs7OztBQUNsQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFzQjs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxVQUFVLDJCQUFWLEFBQWlCLHFCQUduQixnQkFIRSxBQUdJLHNCQUhWLEFBQU0sQUFPRjs7QUFHSixJQUFNLGFBQWEsMkJBQWIsQUFBb0Isc0JBVXRCLGdCQVZFLEFBVUksR0FWVjs7QUFpQkEsSUFBTSxlQUFlLDJCQUFmLEFBQXNCLElBQTVCOztBQU9BLFNBQUEsQUFBUyxTQUFULEFBQWtCLE9BQWxCLEFBQXlCLGNBQWMsQUFDckM7TUFBSSxXQUFKLEFBQWUsQUFDZjtNQUFJLFNBQUosQUFBYSxBQUNiO01BQUksT0FBSixBQUFXLEFBRVg7O01BQUksQ0FBSixBQUFLLGNBQWMsQUFDakI7d0RBQUEsQUFBYSxBQUNkO0FBRkQsU0FFTyxBQUNMO1FBQUksTUFBQSxBQUFNLFVBQVYsQUFBb0IsR0FBRyxBQUNyQjs0REFBQSxBQUFlLEFBQ2hCO0FBRkQsV0FFTyxBQUNMO1lBQUEsQUFBTSxRQUFRLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBVSxBQUM3QjtZQUFNLFdBQVcsUUFBQSxBQUFRLE1BQXpCLEFBQStCLEFBQy9CO1lBQUEsQUFBSSxVQUFVLEFBQ1o7bUJBQUEsQUFBUyxLQUFULEFBQWMsQUFDZjtBQUZELGVBRU8sQUFDTDtpQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBQ0Y7QUFQRCxBQVFEO0FBQ0Y7QUFDRDtXQUFBLEFBQVMsUUFBUSxVQUFBLEFBQUMsVUFBRCxBQUFXLE9BQVUsQUFDcEM7U0FBQSxBQUFLLGlDQUFLLEFBRUg7Z0JBRkcsQUFHSSxBQUNWO1lBQU0sUUFKVixBQUFVLEFBSVEsQUFHbEI7QUFKSSxNQUhNO1FBT04sT0FBQSxBQUFPLFVBQVgsQUFBcUIsR0FBRyxBQUN0QjtVQUFNLFVBQVUsT0FBQSxBQUFPLE9BQVAsQUFBYyxHQUE5QixBQUFnQixBQUFpQixBQUNqQztXQUFBLEFBQUssZ0RBQUwsQUFBYyxBQUNmO0FBQ0Y7QUFaRCxBQWFBO1NBQU8sT0FBQSxBQUFPLFNBQWQsQUFBdUIsR0FBRyxBQUN4QjtRQUFNLFVBQVUsT0FBQSxBQUFPLE9BQVAsQUFBYyxHQUE5QixBQUFnQixBQUFpQixBQUNqQztTQUFBLEFBQUssZ0RBQUwsQUFBYyxBQUNmO0FBQ0Q7U0FBQSxBQUFPLEFBQ1I7OztJQUVLLEE7Ozs7Ozs7Ozs7OzhCQUNNLEEsS0FBSyxBLE9BQU8sQUFDcEI7VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLFlBQVksSUFBQSxBQUFJLFdBQTNCLEFBQXNDLEtBQUssSUFBQSxBQUFJLEdBQW5ELEFBQXNELFVBQVUsQUFDOUQ7WUFBTSxPQUFPLElBQWIsQUFBYSxBQUFJLEFBQ2pCOytCQUNHLGNBQUQsZ0JBQWMsbUJBQWlCLEtBQS9CLEFBQW9DO3NCQUFwQzt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRSxBQUFDO2VBQ00sS0FEUCxBQUNZLEFBQ1Y7Z0JBQU0sUUFGUixBQUVnQixBQUNkO2lCQUFPLEtBSFQsQUFHYyxBQUNaO2lCQUFPLEtBSlQsQUFJYyxBQUNaO2dCQUFNLEtBTFIsQUFLYSxBQUNYO2dCQUFNLEtBTlIsQUFNYSxBQUNYO2dCQUFNLEtBUFIsQUFPYSxBQUNYO2dCQUFNLEtBUlIsQUFRYSxBQUNYO29CQUFVLEtBVFosQUFTaUIsQUFDZjtnQkFBTSxLQVZSLEFBVWE7O3NCQVZiO3dCQUZKLEFBQ0UsQUFDRSxBQWNMO0FBZEs7QUFDRTtBQWNSOzZCQUNHLGNBQUQsV0FBUyxpQkFBVCxBQUF3QjtvQkFBeEI7c0JBQUEsQUFDRztBQURIO09BQUEsTUFDRyxBQUFJLElBQUksZ0JBQVEsQUFDZjsrQkFDRyxjQUFELGNBQVksS0FBSyxLQUFqQixBQUFzQjtzQkFBdEI7d0JBQUEsQUFDRTtBQURGO1NBQUEsa0JBQ0UsQUFBQztnQkFDTyxRQURSLEFBQ2dCLEFBQ2Q7aUJBQU8sS0FGVCxBQUVjLEFBQ1o7aUJBQU8sS0FIVCxBQUdjLEFBQ1o7Z0JBQU0sS0FKUixBQUlhLEFBQ1g7Z0JBQU0sS0FMUixBQUthLEFBQ1g7Z0JBQU0sS0FOUixBQU1hLEFBQ1g7Z0JBQU0sS0FQUixBQU9hLEFBQ1g7b0JBQVUsS0FSWixBQVFpQixBQUNmO2dCQUFNLEtBVFIsQUFTYTs7c0JBVGI7d0JBRkosQUFDRSxBQUNFLEFBYUw7QUFiSztBQUNFO0FBTlosQUFDRSxBQUNHLEFBbUJOOzs7OzZCQUVRO21CQUNQOztVQUFJLEtBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixXQUFyQixBQUFnQyxHQUFHLEFBQ2pDO2VBQUEsQUFBTyxBQUNSO0FBQ0Q7VUFBTSxPQUFPLFNBQVMsS0FBQSxBQUFLLE1BQWQsQUFBb0IsT0FBTyxLQUFBLEFBQUssTUFBN0MsQUFBYSxBQUFzQyxBQUNuRDs2QkFBTyxjQUFBOztvQkFBQTtzQkFBQSxBQUFNO0FBQU47QUFBQSxPQUFBLE9BQU0sQUFBSyxJQUFJLFVBQUEsQUFBQyxLQUFELEFBQU0sT0FBTjtlQUFnQixPQUFBLEFBQUssVUFBTCxBQUFlLEtBQS9CLEFBQWdCLEFBQW9CO0FBQTFELEFBQU8sQUFBTSxBQUNkOzs7OztFQWxEcUIsZ0JBQU0sQTs7QUFxRDlCLFVBQUEsQUFBVTtZQUFlLEFBQ2IsQUFDVjtlQUZGLEFBQXlCLEFBRVYsQUFHZjtBQUx5QixBQUN2Qjs7a0JBSUYsQUFBZSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9