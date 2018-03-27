"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Tags = require("../Post/Tags");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Sidebar/TagsCloud.js";


var TagsCloud = function (_React$Component) {
  (0, _inherits3.default)(TagsCloud, _React$Component);

  function TagsCloud() {
    (0, _classCallCheck3.default)(this, TagsCloud);

    return (0, _possibleConstructorReturn3.default)(this, (TagsCloud.__proto__ || (0, _getPrototypeOf2.default)(TagsCloud)).apply(this, arguments));
  }

  (0, _createClass3.default)(TagsCloud, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          tags = _props.tags,
          lang = _props.lang;

      return _react2.default.createElement("div", { className: className, __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, tags.map(function (tag) {
        return _react2.default.createElement(_Tags.Tag, {
          key: tag.value,
          tag: tag.value,
          lang: lang,
          style: { fontSize: 10 },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          }
        }, "#", tag.value);
      }));
    }
  }]);

  return TagsCloud;
}(_react2.default.Component);

exports.default = TagsCloud;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2lkZWJhci9UYWdzQ2xvdWQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJUYWciLCJUYWdzQ2xvdWQiLCJwcm9wcyIsImNsYXNzTmFtZSIsInRhZ3MiLCJsYW5nIiwibWFwIiwidGFnIiwidmFsdWUiLCJmb250U2l6ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBVzs7Ozs7OztJLEFBRUM7Ozs7Ozs7Ozs7OzRDQUNLLEFBQ3RCO2FBQUEsQUFBTyxBQUNSOzs7OzZCQUVRO21CQUMyQixLQUQzQixBQUNnQztVQURoQyxBQUNDLG1CQURELEFBQ0M7VUFERCxBQUNZLGNBRFosQUFDWTtVQURaLEFBQ2tCLGNBRGxCLEFBQ2tCLEFBQ3pCOzs2QkFDRSxjQUFBLFNBQUssV0FBTCxBQUFnQjtvQkFBaEI7c0JBQUEsQUFDRztBQURIO09BQUEsT0FDRyxBQUFLLElBQUksZUFBQTsrQkFDUixBQUFDO2VBQ00sSUFEUCxBQUNXLEFBQ1Q7ZUFBSyxJQUZQLEFBRVcsQUFDVDtnQkFIRixBQUdRLEFBQ047aUJBQU8sRUFBRSxVQUpYLEFBSVMsQUFBWTs7c0JBSnJCO3dCQUFBO0FBQUE7QUFDRSxTQURGLEVBTUksU0FQSSxBQUNSLEFBTVE7QUFUZCxBQUNFLEFBQ0csQUFZTjs7Ozs7RUFyQm9DLGdCQUFNLEE7O2tCQUF4QixBIiwiZmlsZSI6IlRhZ3NDbG91ZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9