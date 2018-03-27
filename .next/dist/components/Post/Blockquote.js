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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Post/Blockquote.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  padding: 20px 20px;\n  padding-left: 20px;\n  margin: 0;\n  margin-bottom: 26px;\n  color: rgba(0, 0, 0, 0.75);\n  border-left: 5px solid rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.03);\n  font-size: ", ";\n"], ["\n  padding: 20px 20px;\n  padding-left: 20px;\n  margin: 0;\n  margin-bottom: 26px;\n  color: rgba(0, 0, 0, 0.75);\n  border-left: 5px solid rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.03);\n  font-size: ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  padding-top: 20px;\n  font-size: ", ";\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.55);\n"], ["\n  display: block;\n  padding-top: 20px;\n  font-size: ", ";\n  font-style: italic;\n  color: rgba(0, 0, 0, 0.55);\n"]);

var StyledBlockquote = _styledComponents2.default.blockquote(_templateObject, function (props) {
  return props.size + "px";
});

StyledBlockquote.defaultProps = {
  size: 18
};

var StyledCite = _styledComponents2.default.cite(_templateObject2, function (props) {
  return props.size - 2 + "px";
});

StyledCite.defaultProps = {
  size: 18
};

exports.default = function (_ref) {
  var children = _ref.children,
      who = _ref.who,
      size = _ref.size;
  return _react2.default.createElement(StyledBlockquote, { size: size, __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, children, who && _react2.default.createElement(StyledCite, { size: size, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "- ", who));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9CbG9ja3F1b3RlLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiU3R5bGVkQmxvY2txdW90ZSIsImJsb2NrcXVvdGUiLCJwcm9wcyIsInNpemUiLCJkZWZhdWx0UHJvcHMiLCJTdHlsZWRDaXRlIiwiY2l0ZSIsImNoaWxkcmVuIiwid2hvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7Ozs7O0FBRVAsSUFBTSw4Q0FBQSxBQUEwQiw0QkFRakIsaUJBQUE7U0FBWSxNQUFaLEFBQWtCLE9BQWxCO0FBUmYsQUFBTSxDQUFtQjs7QUFXekIsaUJBQUEsQUFBaUI7UUFBakIsQUFBZ0MsQUFDeEI7QUFEd0IsQUFDOUI7O0FBR0YsSUFBTSx3Q0FBQSxBQUFvQix1QkFHWCxpQkFBQTtTQUFZLE1BQUEsQUFBTSxPQUFsQixBQUF5QixJQUF6QjtBQUhmLEFBQU0sQ0FBYTs7QUFRbkIsV0FBQSxBQUFXO1FBQVgsQUFBMEIsQUFDbEIsQUFHUjtBQUowQixBQUN4Qjs7a0JBR2EsZ0JBQUE7TUFBQSxBQUFHLGdCQUFILEFBQUc7TUFBSCxBQUFhLFdBQWIsQUFBYTtNQUFiLEFBQWtCLFlBQWxCLEFBQWtCO3lCQUM5QixjQUFELG9CQUFrQixNQUFsQixBQUF3QjtnQkFBeEI7a0JBQUEsQUFDRztBQURIO0dBQUEsRUFBQSxBQUVHLGlDQUFRLGNBQUQsY0FBWSxNQUFaLEFBQWtCO2dCQUFsQjtrQkFBQTtBQUFBO0dBQUEsRUFBMkIsTUFIeEIsQUFDYixBQUVVO0FBSFoiLCJmaWxlIjoiQmxvY2txdW90ZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9