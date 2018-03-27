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

var _Icons = require("../Icons");

var _Icons2 = _interopRequireDefault(_Icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Post/PostAuthorAvatar.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  position: relative;\n  display: inline-block;\n  border: 22px solid #fff;\n\n  svg {\n    fill: #ebebeb;\n    width: ", "px;\n    height: ", "px;\n    top: -10px;\n    left: -10px;\n    transition: all 0.25s ease;\n    position: absolute;\n  }\n\n  &:hover {\n    svg {\n      fill: ", ";\n      transform: rotate(90deg);\n    }\n  }\n\n  img {\n    display: inline-block;\n    border-radius: 50%;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n  border: 22px solid #fff;\n\n  svg {\n    fill: #ebebeb;\n    width: ", "px;\n    height: ", "px;\n    top: -10px;\n    left: -10px;\n    transition: all 0.25s ease;\n    position: absolute;\n  }\n\n  &:hover {\n    svg {\n      fill: ", ";\n      transform: rotate(90deg);\n    }\n  }\n\n  img {\n    display: inline-block;\n    border-radius: 50%;\n  }\n"]);

var AuthorAvatar = _styledComponents2.default.div(_templateObject, function (props) {
  return props.width + 20;
}, function (props) {
  return props.height + 20;
}, function (props) {
  return props.theme.colors.inversedLinkHover;
});

exports.default = function (_ref) {
  var src = _ref.src,
      width = _ref.width,
      height = _ref.height,
      alt = _ref.alt,
      className = _ref.className;
  return _react2.default.createElement(AuthorAvatar, { height: height, width: width, className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, _react2.default.createElement("img", { alt: alt, src: src, height: height, width: width, __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), _react2.default.createElement(_Icons2.default.Avatar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0QXV0aG9yQXZhdGFyLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiSWNvbnMiLCJBdXRob3JBdmF0YXIiLCJkaXYiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0IiwidGhlbWUiLCJjb2xvcnMiLCJpbnZlcnNlZExpbmtIb3ZlciIsInNyYyIsImFsdCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7Ozs7Ozs7O0FBRWxCLElBQU0sMENBQUEsQUFBc0IscUJBT2YsaUJBQUE7U0FBUyxNQUFBLEFBQU0sUUFBZixBQUF1QjtBQVA5QixDQUFlLEVBUVAsaUJBQUE7U0FBUyxNQUFBLEFBQU0sU0FBZixBQUF3QjtBQVJoQyxHQWlCUSxpQkFBQTtTQUFTLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBckIsQUFBNEI7QUFqQjFDLEFBQU0sQUE0Qk47O2tCQUFlLGdCQUFBO01BQUEsQUFBRyxXQUFILEFBQUc7TUFBSCxBQUFRLGFBQVIsQUFBUTtNQUFSLEFBQWUsY0FBZixBQUFlO01BQWYsQUFBdUIsV0FBdkIsQUFBdUI7TUFBdkIsQUFBNEIsaUJBQTVCLEFBQTRCO3lCQUN4QyxjQUFELGdCQUFjLFFBQWQsQUFBc0IsUUFBUSxPQUE5QixBQUFxQyxPQUFPLFdBQTVDLEFBQXVEO2dCQUF2RDtrQkFBQSxBQUNFO0FBREY7R0FBQSx5Q0FDTyxLQUFMLEFBQVUsS0FBSyxLQUFmLEFBQW9CLEtBQUssUUFBekIsQUFBaUMsUUFBUSxPQUF6QyxBQUFnRDtnQkFBaEQ7a0JBREYsQUFDRSxBQUNBO0FBREE7b0NBQ0EsQUFBQyxnQkFBRCxBQUFPOztnQkFBUDtrQkFIVyxBQUNiLEFBRUU7QUFBQTtBQUFBO0FBSEoiLCJmaWxlIjoiUG9zdEF1dGhvckF2YXRhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9