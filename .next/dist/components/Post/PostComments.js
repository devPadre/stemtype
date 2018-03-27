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

var _DiscusThread = require("../DiscusThread");

var _DiscusThread2 = _interopRequireDefault(_DiscusThread);

var _config = require("../../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Post/PostComments.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  margin-bottom: 26px;\n  min-height: 323px;\n\n  .dsq-brlink {\n    display: none;\n  }\n"], ["\n  display: block;\n  margin-bottom: 26px;\n  min-height: 323px;\n\n  .dsq-brlink {\n    display: none;\n  }\n"]);

var PostCommentsContainer = _styledComponents2.default.div(_templateObject);

var PostComments = function (_React$Component) {
  (0, _inherits3.default)(PostComments, _React$Component);

  function PostComments() {
    (0, _classCallCheck3.default)(this, PostComments);

    return (0, _possibleConstructorReturn3.default)(this, (PostComments.__proto__ || (0, _getPrototypeOf2.default)(PostComments)).apply(this, arguments));
  }

  (0, _createClass3.default)(PostComments, [{
    key: "render",
    value: function render() {
      var url = "" + window.location.origin + this.props.url;
      return _react2.default.createElement(_DiscusThread2.default, {
        shortname: _config2.default.disqusShortname,
        title: this.props.title,
        identifier: url,
        url: url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      });
    }
  }]);

  return PostComments;
}(_react2.default.Component);

exports.default = function (props) {
  return _react2.default.createElement(PostCommentsContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(PostComments, (0, _extends3.default)({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0Q29tbWVudHMuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJEaXNxdXNUaHJlYWQiLCJDb25maWciLCJQb3N0Q29tbWVudHNDb250YWluZXIiLCJkaXYiLCJQb3N0Q29tbWVudHMiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsInByb3BzIiwiZGlzcXVzU2hvcnRuYW1lIiwidGl0bGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBa0I7Ozs7QUFDekIsQUFBTyxBQUFZOzs7Ozs7Ozs7O0FBRW5CLElBQU0sd0JBQXdCLDJCQUF4QixBQUErQixJQUFyQzs7SUFVTSxBOzs7Ozs7Ozs7Ozs2QkFDSyxBQUNQO1VBQU0sV0FBUyxPQUFBLEFBQU8sU0FBaEIsQUFBeUIsU0FBUyxLQUFBLEFBQUssTUFBN0MsQUFBbUQsQUFDbkQ7NkJBQ0UsQUFBQzttQkFDWSxpQkFEYixBQUNvQixBQUNsQjtlQUFPLEtBQUEsQUFBSyxNQUZkLEFBRW9CLEFBQ2xCO29CQUhGLEFBR2MsQUFDWjthQUpGLEFBSU87O29CQUpQO3NCQURGLEFBQ0UsQUFPSDtBQVBHO0FBQ0UsT0FERjs7Ozs7RUFKcUIsZ0JBQU0sQSxBQWNqQzs7a0JBQWUsaUJBQUE7eUJBQ1osY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxnQ0FDRSxBQUFDLHlDQUFELEFBQWtCOztnQkFBbEI7a0JBRlcsQUFDYixBQUNFO0FBQUE7QUFBQTtBQUZKIiwiZmlsZSI6IlBvc3RDb21tZW50cy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9