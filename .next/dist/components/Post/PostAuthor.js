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

var _index = require("../Icons/index");

var _index2 = _interopRequireDefault(_index);

var _SocialLink = require("../SocialLink");

var _SocialLink2 = _interopRequireDefault(_SocialLink);

var _links = require("../../utils/links");

var _links2 = _interopRequireDefault(_links);

var _PostAuthorAvatar = require("./PostAuthorAvatar");

var _PostAuthorAvatar2 = _interopRequireDefault(_PostAuthorAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Post/PostAuthor.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  position: relative;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"], ["\n  position: relative;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: 55px;\n  margin-bottom: -5px;\n  border-top: 1px solid #ebebeb;\n  text-align: center;\n  min-height: 150px;\n"], ["\n  margin-top: 55px;\n  margin-bottom: -5px;\n  border-top: 1px solid #ebebeb;\n  text-align: center;\n  min-height: 150px;\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  margin-bottom: 10px;\n"], ["\n  display: block;\n  margin-bottom: 10px;\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  font-size: 16px;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  font-size: 16px;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ", ";\n  }\n"]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n  color: rgba(0, 0, 0, 0.5);\n  display: block;\n  font-size: 14px;\n  margin-top: 10px;\n"], ["\n  color: rgba(0, 0, 0, 0.5);\n  display: block;\n  font-size: 14px;\n  margin-top: 10px;\n"]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  margin-top: 10px;\n"], ["\n  display: block;\n  margin-top: 10px;\n"]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n  margin-right: 5px;\n"], ["\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n  margin-right: 5px;\n"]),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: -60px;\n"], ["\n  margin-top: -60px;\n"]);

var AuthorBoxContainer = _styledComponents2.default.div(_templateObject);

var AuthorBox = _styledComponents2.default.div(_templateObject2);

var AuthorInfo = _styledComponents2.default.div(_templateObject3);

var AuthorLink = (0, _styledComponents2.default)(_links2.default.AuthorLink)(_templateObject4, function (props) {
  return props.theme.colors.inversedLinkHover;
});

var AuthorDescription = _styledComponents2.default.div(_templateObject5);

var AuthorSocialLinks = _styledComponents2.default.div(_templateObject6);

var AuthorSocialLink = (0, _styledComponents2.default)(_SocialLink2.default)(_templateObject7);

var StyledPostAuthorAvatar = (0, _styledComponents2.default)(_PostAuthorAvatar2.default)(_templateObject8);

exports.default = function (_ref) {
  var author = _ref.author,
      authorInfo = _ref.authorInfo,
      className = _ref.className;

  return _react2.default.createElement(AuthorBoxContainer, { className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    }
  }, _react2.default.createElement(AuthorBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    }
  }, _react2.default.createElement(AuthorLink, { author: author, __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  }, _react2.default.createElement(StyledPostAuthorAvatar, {
    alt: authorInfo.name,
    src: authorInfo.avatar,
    height: 70,
    width: 70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    }
  })), _react2.default.createElement(AuthorInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }, _react2.default.createElement(AuthorLink, { author: author, __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, authorInfo.name), authorInfo.description && _react2.default.createElement(AuthorDescription, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, authorInfo.description), _react2.default.createElement(AuthorSocialLinks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, _react2.default.createElement(AuthorSocialLink, { href: authorInfo.social.facebook.href, __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    }
  }, _react2.default.createElement(_index2.default.Facebook, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  })), _react2.default.createElement(AuthorSocialLink, { href: authorInfo.social.instagram.href, __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, _react2.default.createElement(_index2.default.Instagram, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }))))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0QXV0aG9yLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiSWNvbnMiLCJTb2NpYWxMaW5rIiwiTGlua3MiLCJQb3N0QXV0aG9yQXZhdGFyIiwiQXV0aG9yQm94Q29udGFpbmVyIiwiZGl2IiwiQXV0aG9yQm94IiwiQXV0aG9ySW5mbyIsIkF1dGhvckxpbmsiLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiaW52ZXJzZWRMaW5rSG92ZXIiLCJBdXRob3JEZXNjcmlwdGlvbiIsIkF1dGhvclNvY2lhbExpbmtzIiwiQXV0aG9yU29jaWFsTGluayIsIlN0eWxlZFBvc3RBdXRob3JBdmF0YXIiLCJhdXRob3IiLCJhdXRob3JJbmZvIiwiY2xhc3NOYW1lIiwibmFtZSIsImF2YXRhciIsImRlc2NyaXB0aW9uIiwic29jaWFsIiwiZmFjZWJvb2siLCJocmVmIiwiaW5zdGFncmFtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFnQjs7OztBQUN2QixBQUFPLEFBQVc7Ozs7QUFDbEIsQUFBTyxBQUFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBTSxxQkFBcUIsMkJBQXJCLEFBQTRCLElBQWxDOztBQU1BLElBQU0sWUFBWSwyQkFBWixBQUFtQixJQUF6Qjs7QUFRQSxJQUFNLGFBQWEsMkJBQWIsQUFBb0IsSUFBMUI7O0FBS0EsSUFBTSw2Q0FBb0IsZ0JBQXBCLEFBQWEsQUFBYSw4QkFNbkIsaUJBQUE7U0FBUyxNQUFBLEFBQU0sTUFBTixBQUFZLE9BQXJCLEFBQTRCO0FBTnpDLEFBQU0sQ0FBYTs7QUFVbkIsSUFBTSxvQkFBb0IsMkJBQXBCLEFBQTJCLElBQWpDOztBQU9BLElBQU0sb0JBQW9CLDJCQUFwQixBQUEyQixJQUFqQzs7QUFLQSxJQUFNLG1CQUFBLEFBQW1CLEFBQU8sc0RBQWhDOztBQU1BLElBQU0seUJBQUEsQUFBeUIsQUFBTyw0REFBdEMsQUFJQTs7a0JBQWUsZ0JBQXVDO01BQXBDLEFBQW9DLGNBQXBDLEFBQW9DO01BQTVCLEFBQTRCLGtCQUE1QixBQUE0QjtNQUFoQixBQUFnQixpQkFBaEIsQUFBZ0IsQUFDcEQ7O3lCQUNHLGNBQUQsc0JBQW9CLFdBQXBCLEFBQStCO2dCQUEvQjtrQkFBQSxBQUNFO0FBREY7R0FBQSxrQkFDRyxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRyxjQUFELGNBQVksUUFBWixBQUFvQjtnQkFBcEI7a0JBQUEsQUFDRTtBQURGO21DQUNFLEFBQUM7U0FDTSxXQURQLEFBQ2tCLEFBQ2hCO1NBQUssV0FGUCxBQUVrQixBQUNoQjtZQUhGLEFBR1UsQUFDUjtXQUpGLEFBSVM7O2dCQUpUO2tCQUZKLEFBQ0UsQUFDRSxBQU9GO0FBUEU7QUFDRSx1QkFNSCxjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRyxjQUFELGNBQVksUUFBWixBQUFvQjtnQkFBcEI7a0JBQUEsQUFBNkI7QUFBN0I7Z0JBREYsQUFDRSxBQUF3QyxBQUN2QyxrQkFBQSxBQUFXLCtCQUNULGNBQUQ7O2dCQUFBO2tCQUFBLEFBQW9CO0FBQXBCO0FBQUEsR0FBQSxhQUhKLEFBR0ksQUFBK0IsQUFFakMsOEJBQUMsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0csY0FBRCxvQkFBa0IsTUFBTSxXQUFBLEFBQVcsT0FBWCxBQUFrQixTQUExQyxBQUFtRDtnQkFBbkQ7a0JBQUEsQUFDRTtBQURGO21DQUNFLEFBQUMsZ0JBQUQsQUFBTzs7Z0JBQVA7a0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTtBQUFBLHVCQUVELGNBQUQsb0JBQWtCLE1BQU0sV0FBQSxBQUFXLE9BQVgsQUFBa0IsVUFBMUMsQUFBb0Q7Z0JBQXBEO2tCQUFBLEFBQ0U7QUFERjttQ0FDRSxBQUFDLGdCQUFELEFBQU87O2dCQUFQO2tCQXJCWixBQUNFLEFBQ0UsQUFTRSxBQUtFLEFBSUUsQUFDRSxBQU9iO0FBUGE7QUFBQTtBQXRCZCIsImZpbGUiOiJQb3N0QXV0aG9yLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=