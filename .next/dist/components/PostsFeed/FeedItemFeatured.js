"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require("polished");

var _links = require("../../utils/links");

var _CategoryLink = require("../CategoryLink");

var _CategoryLink2 = _interopRequireDefault(_CategoryLink);

var _FeedItemImage = require("./FeedItemImage");

var _FeedItemImage2 = _interopRequireDefault(_FeedItemImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/PostsFeed/FeedItemFeatured.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  ", ";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ", ") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"], ["\n  display: block;\n  ", ";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ", ") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  width: 45%;\n  float: ", ";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ", ") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"], ["\n  width: 45%;\n  float: ", ";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ", ") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ", ") {\n    width: 100%;\n  }\n"], ["\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ", ") {\n    width: 100%;\n  }\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ", ") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"], ["\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ", ") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);

var FeedItemContainer = _styledComponents2.default.div(_templateObject, (0, _polished.clearFix)(), function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
});

var ImageColumn = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.even ? "right" : "left";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
});

var DescriptionColumn = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
});

var DescriptionColumnInner = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
});

var PostTitleLink = (0, _styledComponents2.default)(_links.PostLink)(_templateObject5);

function FeedItem(props) {
  return _react2.default.createElement(FeedItemContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, _react2.default.createElement(ImageColumn, { even: props.even, __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, _react2.default.createElement(_links.PostLink, { href: props.href, __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, _react2.default.createElement(_FeedItemImage2.default, { featured: true, src: props.image, lazy: props.lazy, __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }), _react2.default.createElement("span", { style: { display: "none" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, props.title))), _react2.default.createElement(DescriptionColumn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, _react2.default.createElement(DescriptionColumnInner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    }
  }, _react2.default.createElement(_CategoryLink2.default, { category: props.category, __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, props.category), _react2.default.createElement(PostTitleLink, { prefetch: true, href: props.href, __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, props.title), props.text && _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }, props.text))));
}

exports.default = FeedItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHNGZWVkL0ZlZWRJdGVtRmVhdHVyZWQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJjbGVhckZpeCIsIlBvc3RMaW5rIiwiQ2F0ZWdvcnlMaW5rIiwiRmVlZEl0ZW1JbWFnZSIsIkZlZWRJdGVtQ29udGFpbmVyIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImZsZXhib3hncmlkIiwiYnJlYWtwb2ludHMiLCJzbSIsIkltYWdlQ29sdW1uIiwiZXZlbiIsIkRlc2NyaXB0aW9uQ29sdW1uIiwiRGVzY3JpcHRpb25Db2x1bW5Jbm5lciIsIlBvc3RUaXRsZUxpbmsiLCJGZWVkSXRlbSIsImhyZWYiLCJpbWFnZSIsImxhenkiLCJkaXNwbGF5IiwidGl0bGUiLCJjYXRlZ29yeSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVM7O0FBQ1QsQUFBUyxBQUFnQjs7QUFDekIsQUFBTyxBQUFrQjs7OztBQUN6QixBQUFPLEFBQW1COzs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNLCtDQUFBLEFBQTJCLHFCQUEzQixBQUVGLDJCQUs4QixpQkFBQTtTQUM1QixNQUFBLEFBQU0sTUFBTixBQUFZLFlBQVosQUFBd0IsWUFBeEIsQUFBb0MsS0FEUixBQUNhO0FBUi9DLEFBQU0sQ0FBb0I7O0FBYzFCLElBQU0seUNBQUEsQUFBcUIsc0JBRWhCLGlCQUFBO1NBQVUsTUFBQSxBQUFNLE9BQU4sQUFBYSxVQUF2QixBQUFpQztBQUZ0QyxDQUFjLEVBT2MsaUJBQUE7U0FDNUIsTUFBQSxBQUFNLE1BQU4sQUFBWSxZQUFaLEFBQXdCLFlBQXhCLEFBQW9DLEtBRFIsQUFDYTtBQVIvQyxBQUFNOztBQWdCTixJQUFNLCtDQUFBLEFBQTJCLHNCQUlDLGlCQUFBO1NBQzVCLE1BQUEsQUFBTSxNQUFOLEFBQVksWUFBWixBQUF3QixZQUF4QixBQUFvQyxLQURSLEFBQ2E7QUFML0MsQUFBTSxDQUFvQjs7QUFVMUIsSUFBTSxvREFBQSxBQUFnQyxzQkFVSixpQkFBQTtTQUM1QixNQUFBLEFBQU0sTUFBTixBQUFZLFlBQVosQUFBd0IsWUFBeEIsQUFBb0MsS0FEUixBQUNhO0FBWC9DLEFBQU0sQ0FBeUI7O0FBb0IvQixJQUFNLGdCQUFBLEFBQWdCLEFBQU8saURBQTdCOztBQWFBLFNBQUEsQUFBUyxTQUFULEFBQWtCLE9BQU8sQUFDdkI7eUJBQ0csY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRyxjQUFELGVBQWEsTUFBTSxNQUFuQixBQUF5QjtnQkFBekI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMsaUNBQVMsTUFBTSxNQUFoQixBQUFzQjtnQkFBdEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMseUNBQWMsVUFBZixNQUF3QixLQUFLLE1BQTdCLEFBQW1DLE9BQU8sTUFBTSxNQUFoRCxBQUFzRDtnQkFBdEQ7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQSxVQUFNLE9BQU8sRUFBRSxTQUFmLEFBQWEsQUFBVztnQkFBeEI7a0JBQUEsQUFBbUM7QUFBbkM7V0FKTixBQUNFLEFBQ0UsQUFFRSxBQUF5QyxBQUc3QywwQkFBQyxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRyxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxBQUFDLHdDQUFhLFVBQVUsTUFBeEIsQUFBOEI7Z0JBQTlCO2tCQUFBLEFBQ0c7QUFESDtXQURGLEFBQ0UsQUFDUyxBQUVULDJCQUFDLGNBQUQsaUJBQWUsVUFBZixNQUF3QixNQUFNLE1BQTlCLEFBQW9DO2dCQUFwQztrQkFBQSxBQUNHO0FBREg7V0FKRixBQUlFLEFBQ1MsQUFFUixjQUFBLEFBQU0sd0JBQVEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBSTtBQUFKO0FBQUEsR0FBQSxRQWhCdkIsQUFDRSxBQU9FLEFBQ0UsQUFPaUIsQUFBVSxBQUtsQztBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IkZlZWRJdGVtRmVhdHVyZWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==