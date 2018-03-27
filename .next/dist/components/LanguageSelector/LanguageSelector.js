"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _lodash = require("lodash.values");

var _lodash2 = _interopRequireDefault(_lodash);

var _routes = require("../../utils/routes");

var _config = require("../../utils/config");

var _config2 = _interopRequireDefault(_config);

var _BrandedTitle = require("../BrandedTitle");

var _BrandedTitle2 = _interopRequireDefault(_BrandedTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/LanguageSelector/LanguageSelector.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  font-size: 13px;\n  cursor: pointer;\n\n  a {\n    opacity: ", ";\n\n    &,\n    &:visited {\n      color: ", ";\n    }\n\n    &:hover,\n    &:focus {\n      opacity: 1;\n      color: ", ";\n    }\n  }\n"], ["\n  font-size: 13px;\n  cursor: pointer;\n\n  a {\n    opacity: ", ";\n\n    &,\n    &:visited {\n      color: ", ";\n    }\n\n    &:hover,\n    &:focus {\n      opacity: 1;\n      color: ", ";\n    }\n  }\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  margin: 0 auto;\n  margin-bottom: 30px;\n  width: 210px;\n  text-align: center;\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    display: inline-block;\n    margin-right: 20px;\n  }\n\n  li:last-item {\n    margin-right: 0;\n  }\n"], ["\n  margin: 0 auto;\n  margin-bottom: 30px;\n  width: 210px;\n  text-align: center;\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    display: inline-block;\n    margin-right: 20px;\n  }\n\n  li:last-item {\n    margin-right: 0;\n  }\n"]);

var LanguageSelectorItem = (0, _styledComponents2.default)(_BrandedTitle2.default)(_templateObject, function (props) {
  return props.selected ? 1 : 0.3;
}, function (props) {
  return props.theme.colors.text;
}, function (props) {
  return props.theme.colors.inversedLinkHover;
});

var LanguageSelectorContainer = _styledComponents2.default.div(_templateObject2);

var LanguageSelector = function (_React$Component) {
  (0, _inherits3.default)(LanguageSelector, _React$Component);

  function LanguageSelector() {
    (0, _classCallCheck3.default)(this, LanguageSelector);

    return (0, _possibleConstructorReturn3.default)(this, (LanguageSelector.__proto__ || (0, _getPrototypeOf2.default)(LanguageSelector)).apply(this, arguments));
  }

  (0, _createClass3.default)(LanguageSelector, [{
    key: "render",
    value: function render() {
      var languages = (0, _lodash2.default)(_config2.default.languages);
      if (languages.length < 2) {
        return null;
      }
      var _props = this.props,
          getLink = _props.getLink,
          current = _props.current;

      return _react2.default.createElement(LanguageSelectorContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, _react2.default.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, languages.map(function (language) {
        return _react2.default.createElement("li", { key: language.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }, _react2.default.createElement(LanguageSelectorItem, { selected: current === language.id, __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          }
        }, _react2.default.createElement(_routes.Link, (0, _extends3.default)({}, getLink(language), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          }
        }), _react2.default.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        }, language.shortTitle))));
      })));
    }
  }]);

  return LanguageSelector;
}(_react2.default.Component);

exports.default = LanguageSelector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGFuZ3VhZ2VTZWxlY3Rvci9MYW5ndWFnZVNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwidmFsdWVzIiwiTGluayIsIkNvbmZpZyIsIkJyYW5kZWRUaXRsZSIsIkxhbmd1YWdlU2VsZWN0b3JJdGVtIiwicHJvcHMiLCJzZWxlY3RlZCIsInRoZW1lIiwiY29sb3JzIiwidGV4dCIsImludmVyc2VkTGlua0hvdmVyIiwiTGFuZ3VhZ2VTZWxlY3RvckNvbnRhaW5lciIsImRpdiIsIkxhbmd1YWdlU2VsZWN0b3IiLCJsYW5ndWFnZXMiLCJsZW5ndGgiLCJnZXRMaW5rIiwiY3VycmVudCIsIm1hcCIsImxhbmd1YWdlIiwiaWQiLCJzaG9ydFRpdGxlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFrQjs7Ozs7Ozs7Ozs7QUFFekIsSUFBTSxnR0FLUyxpQkFBQTtTQUFVLE1BQUEsQUFBTSxXQUFOLEFBQWlCLElBQTNCLEFBQStCO0FBTHhDLENBQUEsQUFBdUIsQUFBTyxFQVNyQixpQkFBQTtTQUFTLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBckIsQUFBNEI7QUFUckMsR0FlUyxpQkFBQTtTQUFTLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBckIsQUFBNEI7QUFmM0MsQUFBTTs7QUFvQk4sSUFBTSw0QkFBNEIsMkJBQTVCLEFBQW1DLElBQXpDOztJQXFCTSxBOzs7Ozs7Ozs7Ozs2QkFDSyxBQUNQO1VBQU0sWUFBWSxzQkFBTyxpQkFBekIsQUFBa0IsQUFBYyxBQUNoQztVQUFJLFVBQUEsQUFBVSxTQUFkLEFBQXVCLEdBQUcsQUFDeEI7ZUFBQSxBQUFPLEFBQ1I7QUFKTTttQkFLc0IsS0FMdEIsQUFLMkI7VUFMM0IsQUFLQyxpQkFMRCxBQUtDO1VBTEQsQUFLVSxpQkFMVixBQUtVLEFBQ2pCOzs2QkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLG1CQUNHLEFBQVUsSUFBSSxvQkFBQTsrQkFDYixjQUFBLFFBQUksS0FBSyxTQUFULEFBQWtCO3NCQUFsQjt3QkFBQSxBQUNFO0FBREY7U0FBQSxrQkFDRyxjQUFELHdCQUFzQixVQUFVLFlBQVksU0FBNUMsQUFBcUQ7c0JBQXJEO3dCQUFBLEFBQ0U7QUFERjsyQkFDRSxBQUFDLHVEQUFTLFFBQVYsQUFBVSxBQUFROztzQkFBbEI7d0JBQUEsQUFDRTtBQURGO0FBQUEsNEJBQ0UsY0FBQTs7c0JBQUE7d0JBQUEsQUFBSTtBQUFKO0FBQUEsb0JBSk8sQUFDYixBQUNFLEFBQ0UsQUFDRSxBQUFhO0FBUDNCLEFBQ0UsQUFDRSxBQUNHLEFBWVI7Ozs7O0VBdEI0QixnQkFBTSxBLEFBeUJyQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJMYW5ndWFnZVNlbGVjdG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=