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

var _reactShare = require("react-share");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Post/PostShare.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: inline-block;\n  min-height: 50px;\n"], ["\n  display: inline-block;\n  min-height: 50px;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  float: left;\n  margin-right: 10px;\n  text-align: center;\n  cursor: pointer;\n\n  .SocialMediaShareButton:focus {\n    outline: none;\n  }\n\n  .count {\n    font-size: 14px;\n    margin-top: 2px;\n    color: rgba(0, 0, 0, 0.5);\n  }\n"], ["\n  float: left;\n  margin-right: 10px;\n  text-align: center;\n  cursor: pointer;\n\n  .SocialMediaShareButton:focus {\n    outline: none;\n  }\n\n  .count {\n    font-size: 14px;\n    margin-top: 2px;\n    color: rgba(0, 0, 0, 0.5);\n  }\n"]);

var FacebookShareButton = _reactShare.ShareButtons.FacebookShareButton,
    GooglePlusShareButton = _reactShare.ShareButtons.GooglePlusShareButton,
    TwitterShareButton = _reactShare.ShareButtons.TwitterShareButton,
    VKShareButton = _reactShare.ShareButtons.VKShareButton,
    OKShareButton = _reactShare.ShareButtons.OKShareButton,
    TelegramShareButton = _reactShare.ShareButtons.TelegramShareButton;
var FacebookShareCount = _reactShare.ShareCounts.FacebookShareCount,
    GooglePlusShareCount = _reactShare.ShareCounts.GooglePlusShareCount,
    VKShareCount = _reactShare.ShareCounts.VKShareCount,
    OKShareCount = _reactShare.ShareCounts.OKShareCount;

var FacebookIcon = (0, _reactShare.generateShareIcon)("facebook");
var TwitterIcon = (0, _reactShare.generateShareIcon)("twitter");
var GooglePlusIcon = (0, _reactShare.generateShareIcon)("google");
var VKIcon = (0, _reactShare.generateShareIcon)("vk");
var OKIcon = (0, _reactShare.generateShareIcon)("ok");
var TelegramIcon = (0, _reactShare.generateShareIcon)("telegram");

var SocialButtonsContainer = _styledComponents2.default.div(_templateObject);

var SocialButton = _styledComponents2.default.div(_templateObject2);

var SocialButtons = function (_React$Component) {
  (0, _inherits3.default)(SocialButtons, _React$Component);

  function SocialButtons() {
    (0, _classCallCheck3.default)(this, SocialButtons);

    return (0, _possibleConstructorReturn3.default)(this, (SocialButtons.__proto__ || (0, _getPrototypeOf2.default)(SocialButtons)).apply(this, arguments));
  }

  (0, _createClass3.default)(SocialButtons, [{
    key: "render",
    value: function render() {
      var shareUrl = "" + window.location.origin + this.props.url;
      return _react2.default.createElement(SocialButtonsContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement(SocialButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(FacebookShareButton, { url: shareUrl, quote: this.props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(FacebookIcon, { size: 32, round: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      })), _react2.default.createElement(FacebookShareCount, { url: shareUrl, className: "count", __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, function (count) {
        return count;
      })), _react2.default.createElement(SocialButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(GooglePlusShareButton, { url: shareUrl, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(GooglePlusIcon, { size: 32, round: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      })), _react2.default.createElement(GooglePlusShareCount, { url: shareUrl, className: "count", __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, function (count) {
        return count;
      })), _react2.default.createElement(SocialButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement(VKShareButton, { url: shareUrl, windowWidth: 660, windowHeight: 460, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(VKIcon, { size: 32, round: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      })), _react2.default.createElement(VKShareCount, { url: shareUrl, className: "count", __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      })), _react2.default.createElement(SocialButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement(OKShareButton, { url: shareUrl, windowWidth: 660, windowHeight: 460, __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(OKIcon, { size: 32, round: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      })), _react2.default.createElement(OKShareCount, { url: shareUrl, className: "count", __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      })), _react2.default.createElement(SocialButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(TwitterShareButton, { url: shareUrl, title: this.props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement(TwitterIcon, { size: 32, round: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }))), _react2.default.createElement(SocialButton, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, _react2.default.createElement(TelegramShareButton, { url: shareUrl, title: this.props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, _react2.default.createElement(TelegramIcon, { size: 32, round: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }))));
    }
  }]);

  return SocialButtons;
}(_react2.default.Component);

exports.default = SocialButtons;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9Qb3N0U2hhcmUuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJTaGFyZUJ1dHRvbnMiLCJTaGFyZUNvdW50cyIsImdlbmVyYXRlU2hhcmVJY29uIiwiRmFjZWJvb2tTaGFyZUJ1dHRvbiIsIkdvb2dsZVBsdXNTaGFyZUJ1dHRvbiIsIlR3aXR0ZXJTaGFyZUJ1dHRvbiIsIlZLU2hhcmVCdXR0b24iLCJPS1NoYXJlQnV0dG9uIiwiVGVsZWdyYW1TaGFyZUJ1dHRvbiIsIkZhY2Vib29rU2hhcmVDb3VudCIsIkdvb2dsZVBsdXNTaGFyZUNvdW50IiwiVktTaGFyZUNvdW50IiwiT0tTaGFyZUNvdW50IiwiRmFjZWJvb2tJY29uIiwiVHdpdHRlckljb24iLCJHb29nbGVQbHVzSWNvbiIsIlZLSWNvbiIsIk9LSWNvbiIsIlRlbGVncmFtSWNvbiIsIlNvY2lhbEJ1dHRvbnNDb250YWluZXIiLCJkaXYiLCJTb2NpYWxCdXR0b24iLCJTb2NpYWxCdXR0b25zIiwic2hhcmVVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsInByb3BzIiwidXJsIiwidGl0bGUiLCJjb3VudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWMsQUFBYTs7Ozs7Ozs7O0lBR2xDLEEsc0IsQUFNRSx5QixBQU5GO0ksQUFDQSx3QkFLRSxBLHlCLEFBTEY7SUFDQSxBLHFCQUlFLEEseUIsQUFKRjtJQUNBLEEsZ0JBR0UsQSx5QkFIRixBO0lBQ0EsQSxnQixBQUVFLHlCLEFBRkY7SSxBQUNBLHNCLEFBQ0UseUJBREYsQTtJQUlBLEEscUJBSUUsQSx3QixBQUpGO0lBQ0EsQSx1QkFHRSxBLHdCQUhGLEE7SSxBQUNBLGUsQUFFRSx3QkFGRixBO0lBQ0EsQSxlLEFBQ0Usd0IsQUFERjs7QUFHRixJQUFNLGVBQWUsbUNBQXJCLEFBQXFCLEFBQWtCO0FBQ3ZDLElBQU0sY0FBYyxtQ0FBcEIsQUFBb0IsQUFBa0I7QUFDdEMsSUFBTSxpQkFBaUIsbUNBQXZCLEFBQXVCLEFBQWtCO0FBQ3pDLElBQU0sU0FBUyxtQ0FBZixBQUFlLEFBQWtCO0FBQ2pDLElBQU0sU0FBUyxtQ0FBZixBQUFlLEFBQWtCO0FBQ2pDLElBQU0sZUFBZSxtQ0FBckIsQUFBcUIsQUFBa0I7O0FBRXZDLElBQU0seUJBQXlCLDJCQUF6QixBQUFnQyxJQUF0Qzs7QUFLQSxJQUFNLGVBQWUsMkJBQWYsQUFBc0IsSUFBNUI7O0lBaUJNLEE7Ozs7Ozs7Ozs7OzZCQUNLLEFBQ1A7VUFBTSxnQkFBYyxPQUFBLEFBQU8sU0FBckIsQUFBOEIsU0FBUyxLQUFBLEFBQUssTUFBbEQsQUFBd0QsQUFDeEQ7NkJBQ0csY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRyxjQUFEOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHVCQUFxQixLQUFyQixBQUEwQixVQUFVLE9BQU8sS0FBQSxBQUFLLE1BQWhELEFBQXNEO29CQUF0RDtzQkFBQSxBQUNFO0FBREY7dUNBQ0UsQUFBQyxnQkFBYSxNQUFkLEFBQW9CLElBQUksT0FBeEI7b0JBQUE7c0JBRkosQUFDRSxBQUNFLEFBR0Y7QUFIRTsyQkFHRCxjQUFELHNCQUFvQixLQUFwQixBQUF5QixVQUFVLFdBQW5DLEFBQTZDO29CQUE3QztzQkFBQSxBQUNHO0FBREg7MEJBQ0c7ZUFBQSxBQUFTO0FBUGhCLEFBQ0UsQUFLRSxBQUlGLDJCQUFDLGNBQUQ7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQseUJBQXVCLEtBQXZCLEFBQTRCO29CQUE1QjtzQkFBQSxBQUNFO0FBREY7dUNBQ0UsQUFBQyxrQkFBZSxNQUFoQixBQUFzQixJQUFJLE9BQTFCO29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUdGO0FBSEU7MkJBR0QsY0FBRCx3QkFBc0IsS0FBdEIsQUFBMkIsVUFBVSxXQUFyQyxBQUErQztvQkFBL0M7c0JBQUEsQUFDRztBQURIOzBCQUNHO2VBQUEsQUFBUztBQWhCaEIsQUFVRSxBQUtFLEFBSUYsMkJBQUMsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxpQkFBZSxLQUFmLEFBQW9CLFVBQVUsYUFBOUIsQUFBMkMsS0FBSyxjQUFoRCxBQUE4RDtvQkFBOUQ7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsVUFBTyxNQUFSLEFBQWMsSUFBSSxPQUFsQjtvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFHRjtBQUhFO3lDQUdGLEFBQUMsZ0JBQWEsS0FBZCxBQUFtQixVQUFVLFdBQTdCLEFBQXVDO29CQUF2QztzQkF4QkosQUFtQkUsQUFLRSxBQUVGO0FBRkU7MkJBRUQsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxpQkFBZSxLQUFmLEFBQW9CLFVBQVUsYUFBOUIsQUFBMkMsS0FBSyxjQUFoRCxBQUE4RDtvQkFBOUQ7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsVUFBTyxNQUFSLEFBQWMsSUFBSSxPQUFsQjtvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFHRjtBQUhFO3lDQUdGLEFBQUMsZ0JBQWEsS0FBZCxBQUFtQixVQUFVLFdBQTdCLEFBQXVDO29CQUF2QztzQkEvQkosQUEwQkUsQUFLRSxBQUVGO0FBRkU7MkJBRUQsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBb0IsS0FBcEIsQUFBeUIsVUFBVSxPQUFPLEtBQUEsQUFBSyxNQUEvQyxBQUFxRDtvQkFBckQ7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsZUFBWSxNQUFiLEFBQW1CLElBQUksT0FBdkI7b0JBQUE7c0JBbkNOLEFBaUNFLEFBQ0UsQUFDRSxBQUdKO0FBSEk7NEJBR0gsY0FBRDs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCx1QkFBcUIsS0FBckIsQUFBMEIsVUFBVSxPQUFPLEtBQUEsQUFBSyxNQUFoRCxBQUFzRDtvQkFBdEQ7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsZ0JBQWEsTUFBZCxBQUFvQixJQUFJLE9BQXhCO29CQUFBO3NCQXpDUixBQUNFLEFBc0NFLEFBQ0UsQUFDRSxBQUtUO0FBTFM7Ozs7OztFQTVDZ0IsZ0JBQU0sQSxBQW9EbEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUG9zdFNoYXJlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=