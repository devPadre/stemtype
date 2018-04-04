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

      return _react2.default.createElement(LanguageSelectorContainer, null, _react2.default.createElement("ul", null, languages.map(function (language) {
        return _react2.default.createElement("li", { key: language.id }, _react2.default.createElement(LanguageSelectorItem, { selected: current === language.id }, _react2.default.createElement(_routes.Link, getLink(language), _react2.default.createElement("a", null, language.shortTitle))));
      })));
    }
  }]);

  return LanguageSelector;
}(_react2.default.Component);

exports.default = LanguageSelector;