"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tag = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _links = require("../../utils/links");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Post/Tags.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin-bottom: 26px;\n"], ["\n  margin-bottom: 26px;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: inline-block;\n  margin-top: 8px;\n  margin-right: 8px;\n  padding: 6px 18px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  line-height: 1.5;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: color 0.25s ease;\n\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  display: inline-block;\n  margin-top: 8px;\n  margin-right: 8px;\n  padding: 6px 18px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  line-height: 1.5;\n  text-transform: uppercase;\n  text-decoration: none;\n  transition: color 0.25s ease;\n\n  &:hover {\n    color: ", ";\n  }\n"]);

var TagsContainer = _styledComponents2.default.div(_templateObject);

var Tag = exports.Tag = (0, _styledComponents2.default)(_links.TagLink)(_templateObject2, function (props) {
  return props.theme.colors.inversedLinkHover;
});

exports.default = function (_ref) {
  var tags = _ref.tags;
  return _react2.default.createElement(TagsContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, tags.map(function (tag) {
    return _react2.default.createElement(Tag, { tag: tag, key: tag, __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      }
    }, "#", tag);
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9UYWdzLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiVGFnTGluayIsIlRhZ3NDb250YWluZXIiLCJkaXYiLCJUYWciLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiaW52ZXJzZWRMaW5rSG92ZXIiLCJ0YWdzIiwibWFwIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFlOzs7Ozs7Ozs7QUFFeEIsSUFBTSxnQkFBZ0IsMkJBQWhCLEFBQXVCLElBQTdCLEFBSUE7O0FBQU8sSUFBTSxzRkFnQkEsaUJBQUE7U0FBUyxNQUFBLEFBQU0sTUFBTixBQUFZLE9BQXJCLEFBQTRCO0FBaEJsQyxBQUFNLEFBb0JiLENBcEJhLEFBQU0sQUFBTzs7a0JBb0JYLGdCQUFBO01BQUEsQUFBRyxZQUFILEFBQUc7eUJBQ2YsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxPQUNHLEFBQUssSUFBSSxlQUFBOzJCQUNQLGNBQUQsT0FBSyxLQUFMLEFBQVUsS0FBSyxLQUFmLEFBQW9CO2tCQUFwQjtvQkFBQTtBQUFBO0tBQUEsRUFDSSxLQUZJLEFBQ1I7QUFIUyxBQUNiLEFBQ0c7QUFGTCIsImZpbGUiOiJUYWdzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=