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

var _tinytime = require("tinytime");

var _tinytime2 = _interopRequireDefault(_tinytime);

var _links = require("../../utils/links");

var _links2 = _interopRequireDefault(_links);

var _Image = require("./Image");

var _Image2 = _interopRequireDefault(_Image);

var _Player = require("../Player");

var _Player2 = _interopRequireDefault(_Player);

var _PostAuthorAvatar = require("./PostAuthorAvatar");

var _PostAuthorAvatar2 = _interopRequireDefault(_PostAuthorAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Post/ArticleTitle.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: 40px;\n  height: 1px;\n  border-top: 1px solid #ebebeb;\n"], ["\n  margin-top: 40px;\n  height: 1px;\n  border-top: 1px solid #ebebeb;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: inline-flex;\n  align-items: center;\n  background-color: #fff;\n  margin-top: -33px;\n  padding: 0 20px;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  background-color: #fff;\n  margin-top: -33px;\n  padding: 0 20px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  text-align: left;\n  line-height: 20px;\n  font-size: 14px;\n\n  span {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"], ["\n  text-align: left;\n  line-height: 20px;\n  font-size: 14px;\n\n  span {\n    color: rgba(0, 0, 0, 0.5);\n  }\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  margin-bottom: 26px;\n  text-align: center;\n\n  h1 {\n    display: inline-block;\n    font-size: 36px;\n    font-weight: 400;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 10px;\n  }\n\n  .image {\n    margin-bottom: 26px;\n  }\n\n  .video {\n    margin-bottom: 26px;\n  }\n"], ["\n  margin-bottom: 26px;\n  text-align: center;\n\n  h1 {\n    display: inline-block;\n    font-size: 36px;\n    font-weight: 400;\n    padding-left: 10px;\n    padding-right: 10px;\n    margin-bottom: 10px;\n  }\n\n  .image {\n    margin-bottom: 26px;\n  }\n\n  .video {\n    margin-bottom: 26px;\n  }\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  border-top-width: 5px;\n  border-bottom-width: 5px;\n  border-left-width: 0px;\n"], ["\n  border-top-width: 5px;\n  border-bottom-width: 5px;\n  border-left-width: 0px;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ", ";\n  }\n"]);

var template = (0, _tinytime2.default)("{DD} {MMMM}, {YYYY}");

var MetaContainerDivider = _styledComponents2.default.div(_templateObject);

var MetaContainer = _styledComponents2.default.div(_templateObject2);

var MetaContainerText = _styledComponents2.default.div(_templateObject3);

var SimpleTitleContainer = _styledComponents2.default.div(_templateObject4);

var ArticleTitleAuthorAvatar = (0, _styledComponents2.default)(_PostAuthorAvatar2.default)(_templateObject5);

var ArticleTitleAuthorLink = (0, _styledComponents2.default)(_links2.default.AuthorLink)(_templateObject6, function (props) {
  return props.theme.colors.inversedLinkHover;
});

exports.default = function (_ref) {
  var title = _ref.title,
      date = _ref.date,
      category = _ref.category,
      image = _ref.image,
      imageHeight = _ref.imageHeight,
      imageWidth = _ref.imageWidth,
      video = _ref.video,
      author = _ref.author,
      authorInfo = _ref.authorInfo;
  return _react2.default.createElement(SimpleTitleContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }, image && _react2.default.createElement("div", { className: "image", __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, _react2.default.createElement(_Image2.default, {
    src: image,
    width: imageWidth,
    height: imageHeight,
    lazy: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  })), video && _react2.default.createElement("div", { className: "video", __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }, _react2.default.createElement(_Player2.default, { url: video, width: "100%", height: "60vh", lazy: false, __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  })), _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, _react2.default.createElement(MetaContainerDivider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }), _react2.default.createElement(MetaContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, _react2.default.createElement(_links2.default.AuthorLink, { author: author, __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    }
  }, _react2.default.createElement(ArticleTitleAuthorAvatar, {
    alt: authorInfo.name,
    src: authorInfo.avatar,
    width: 50,
    height: 50,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    }
  })), _react2.default.createElement(MetaContainerText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    }
  }, _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    }
  }, _react2.default.createElement(ArticleTitleAuthorLink, { author: author, __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }, authorInfo.name)), _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    }
  }, _react2.default.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    }
  }, template.render(new Date(date))))))), _react2.default.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    }
  }, title));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9BcnRpY2xlVGl0bGUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJ0aW55dGltZSIsIkxpbmtzIiwiSW1hZ2UiLCJQbGF5ZXIiLCJQb3N0QXV0aG9yQXZhdGFyIiwidGVtcGxhdGUiLCJNZXRhQ29udGFpbmVyRGl2aWRlciIsImRpdiIsIk1ldGFDb250YWluZXIiLCJNZXRhQ29udGFpbmVyVGV4dCIsIlNpbXBsZVRpdGxlQ29udGFpbmVyIiwiQXJ0aWNsZVRpdGxlQXV0aG9yQXZhdGFyIiwiQXJ0aWNsZVRpdGxlQXV0aG9yTGluayIsIkF1dGhvckxpbmsiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiaW52ZXJzZWRMaW5rSG92ZXIiLCJ0aXRsZSIsImRhdGUiLCJjYXRlZ29yeSIsImltYWdlIiwiaW1hZ2VIZWlnaHQiLCJpbWFnZVdpZHRoIiwidmlkZW8iLCJhdXRob3IiLCJhdXRob3JJbmZvIiwibmFtZSIsImF2YXRhciIsInJlbmRlciIsIkRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQXNCOzs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxXQUFXLHdCQUFqQixBQUFpQixBQUFTOztBQUUxQixJQUFNLHVCQUF1QiwyQkFBdkIsQUFBOEIsSUFBcEM7O0FBTUEsSUFBTSxnQkFBZ0IsMkJBQWhCLEFBQXVCLElBQTdCOztBQVFBLElBQU0sb0JBQW9CLDJCQUFwQixBQUEyQixJQUFqQzs7QUFVQSxJQUFNLHVCQUF1QiwyQkFBdkIsQUFBOEIsSUFBcEM7O0FBc0JBLElBQU0sMkJBQUEsQUFBMkIsQUFBTyw0REFBeEM7O0FBTUEsSUFBTSx5REFBZ0MsZ0JBQWhDLEFBQXlCLEFBQWEsOEJBSy9CLGlCQUFBO1NBQVMsTUFBQSxBQUFNLE1BQU4sQUFBWSxPQUFyQixBQUE0QjtBQUx6QyxBQUFNLEFBU04sQ0FUK0I7O2tCQVNoQixnQkFBQTtNQUFBLEFBQ2IsYUFEYSxBQUNiO01BRGEsQUFFYixZQUZhLEFBRWI7TUFGYSxBQUdiLGdCQUhhLEFBR2I7TUFIYSxBQUliLGFBSmEsQUFJYjtNQUphLEFBS2IsbUJBTGEsQUFLYjtNQUxhLEFBTWIsa0JBTmEsQUFNYjtNQU5hLEFBT2IsYUFQYSxBQU9iO01BUGEsQUFRYixjQVJhLEFBUWI7TUFSYSxBQVNiLGtCQVRhLEFBU2I7eUJBRUMsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSwyQkFFSSxjQUFBLFNBQUssV0FBTCxBQUFlO2dCQUFmO2tCQUFBLEFBQ0U7QUFERjtHQUFBLGtCQUNFLEFBQUM7U0FBRCxBQUNPLEFBQ0w7V0FGRixBQUVTLEFBQ1A7WUFIRixBQUdVLEFBQ1I7VUFKRixBQUlROztnQkFKUjtrQkFITixBQUVJLEFBQ0UsQUFRSDtBQVJHO0FBQ0UsZ0NBUUosY0FBQSxTQUFLLFdBQUwsQUFBZTtnQkFBZjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRSxBQUFDLGtDQUFPLEtBQVIsQUFBYSxPQUFPLE9BQXBCLEFBQTBCLFFBQU8sUUFBakMsQUFBd0MsUUFBTyxNQUEvQyxBQUFxRDtnQkFBckQ7a0JBYk4sQUFZSSxBQUNFLEFBR0o7QUFISTt1QkFHSixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxtQ0FDRSxBQUFDOztnQkFBRDtrQkFERixBQUNFLEFBQ0E7QUFEQTtBQUFBLHNCQUNDLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNHLGNBQUQsZ0JBQUEsQUFBTyxjQUFXLFFBQWxCLEFBQTBCO2dCQUExQjtrQkFBQSxBQUNFO0FBREY7bUNBQ0UsQUFBQztTQUNNLFdBRFAsQUFDa0IsQUFDaEI7U0FBSyxXQUZQLEFBRWtCLEFBQ2hCO1dBSEYsQUFHUyxBQUNQO1lBSkYsQUFJVTs7Z0JBSlY7a0JBRkosQUFDRSxBQUNFLEFBT0Y7QUFQRTtBQUNFLHVCQU1ILGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNHLGNBQUQsMEJBQXdCLFFBQXhCLEFBQWdDO2dCQUFoQztrQkFBQSxBQUNHO0FBREg7Z0JBRkosQUFDRSxBQUNFLEFBQ2MsQUFHaEIsd0JBQUEsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFBTztBQUFQO0FBQUEsY0FBTyxBQUFTLE9BQU8sSUFBQSxBQUFJLEtBbENyQyxBQWdCRSxBQUVFLEFBU0UsQUFNRSxBQUNFLEFBQU8sQUFBZ0IsQUFBUyxBQUt4Qyw2QkFBQSxjQUFBOztnQkFBQTtrQkFBQSxBQUFLO0FBQUw7QUFBQSxLQWxEVyxBQVdiLEFBdUNFO0FBbERKIiwiZmlsZSI6IkFydGljbGVUaXRsZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9