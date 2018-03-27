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

var _links = require("../../utils/links");

var _CategoryLink = require("../CategoryLink");

var _CategoryLink2 = _interopRequireDefault(_CategoryLink);

var _FeedItemImage = require("./FeedItemImage");

var _FeedItemImage2 = _interopRequireDefault(_FeedItemImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/PostsFeed/FeedItem.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  width: 100%;\n  text-align: center;\n"], ["\n  display: block;\n  width: 100%;\n  text-align: center;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: 10px;\n"], ["\n  margin-top: 10px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 15px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ", ";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  font-size: 15px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ", ";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]);

var FeedItemContainer = _styledComponents2.default.div(_templateObject);

var CategoryLinkWrapper = _styledComponents2.default.div(_templateObject2);

var ItemTitle = (0, _styledComponents2.default)(_links.PostLink)(_templateObject3, function (props) {
  return props.theme.colors.black;
});

function FeedItem(props) {
  return _react2.default.createElement(FeedItemContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement(_links.PostLink, { href: props.href, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement(_FeedItemImage2.default, { src: props.image, lazy: props.lazy, __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), _react2.default.createElement("span", { style: { display: "none" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, props.title)), _react2.default.createElement(CategoryLinkWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement(_CategoryLink2.default, { category: props.category, __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, props.category)), _react2.default.createElement(ItemTitle, { href: props.href, __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, props.title));
}

exports.default = FeedItem;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHNGZWVkL0ZlZWRJdGVtLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiUG9zdExpbmsiLCJDYXRlZ29yeUxpbmsiLCJGZWVkSXRlbUltYWdlIiwiRmVlZEl0ZW1Db250YWluZXIiLCJkaXYiLCJDYXRlZ29yeUxpbmtXcmFwcGVyIiwiSXRlbVRpdGxlIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImJsYWNrIiwiRmVlZEl0ZW0iLCJocmVmIiwiaW1hZ2UiLCJsYXp5IiwiZGlzcGxheSIsInRpdGxlIiwiY2F0ZWdvcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBZ0I7O0FBQ3pCLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFtQjs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU0sb0JBQW9CLDJCQUFwQixBQUEyQixJQUFqQzs7QUFNQSxJQUFNLHNCQUFzQiwyQkFBdEIsQUFBNkIsSUFBbkM7O0FBSUEsSUFBTSwrRUFRSyxpQkFBQTtTQUFTLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBckIsQUFBNEI7QUFSdkMsQUFBTSxDQUFBLEFBQVksQUFBTzs7QUFlekIsU0FBQSxBQUFTLFNBQVQsQUFBa0IsT0FBTyxBQUN2Qjt5QkFDRyxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUMsaUNBQVMsTUFBTSxNQUFoQixBQUFzQjtnQkFBdEI7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUMseUNBQWMsS0FBSyxNQUFwQixBQUEwQixPQUFPLE1BQU0sTUFBdkMsQUFBNkM7Z0JBQTdDO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUEsVUFBTSxPQUFPLEVBQUUsU0FBZixBQUFhLEFBQVc7Z0JBQXhCO2tCQUFBLEFBQW1DO0FBQW5DO1dBSEosQUFDRSxBQUVFLEFBQXlDLEFBRTNDLHlCQUFDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsd0NBQWEsVUFBVSxNQUF4QixBQUE4QjtnQkFBOUI7a0JBQUEsQUFBeUM7QUFBekM7V0FOSixBQUtFLEFBQ0UsQUFBK0MsQUFFakQsNEJBQUMsY0FBRCxhQUFXLE1BQU0sTUFBakIsQUFBdUI7Z0JBQXZCO2tCQUFBLEFBQThCO0FBQTlCO1dBVEosQUFDRSxBQVFFLEFBQW9DLEFBR3pDO0FBRUQ7O2tCQUFBLEFBQWUiLCJmaWxlIjoiRmVlZEl0ZW0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==