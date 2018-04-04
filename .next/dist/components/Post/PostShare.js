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
      return _react2.default.createElement(SocialButtonsContainer, null, _react2.default.createElement(SocialButton, null, _react2.default.createElement(FacebookShareButton, { url: shareUrl, quote: this.props.title }, _react2.default.createElement(FacebookIcon, { size: 32, round: true })), _react2.default.createElement(FacebookShareCount, { url: shareUrl, className: "count" }, function (count) {
        return count;
      })), _react2.default.createElement(SocialButton, null, _react2.default.createElement(GooglePlusShareButton, { url: shareUrl }, _react2.default.createElement(GooglePlusIcon, { size: 32, round: true })), _react2.default.createElement(GooglePlusShareCount, { url: shareUrl, className: "count" }, function (count) {
        return count;
      })), _react2.default.createElement(SocialButton, null, _react2.default.createElement(VKShareButton, { url: shareUrl, windowWidth: 660, windowHeight: 460 }, _react2.default.createElement(VKIcon, { size: 32, round: true })), _react2.default.createElement(VKShareCount, { url: shareUrl, className: "count" })), _react2.default.createElement(SocialButton, null, _react2.default.createElement(OKShareButton, { url: shareUrl, windowWidth: 660, windowHeight: 460 }, _react2.default.createElement(OKIcon, { size: 32, round: true })), _react2.default.createElement(OKShareCount, { url: shareUrl, className: "count" })), _react2.default.createElement(SocialButton, null, _react2.default.createElement(TwitterShareButton, { url: shareUrl, title: this.props.title }, _react2.default.createElement(TwitterIcon, { size: 32, round: true }))), _react2.default.createElement(SocialButton, null, _react2.default.createElement(TelegramShareButton, { url: shareUrl, title: this.props.title }, _react2.default.createElement(TelegramIcon, { size: 32, round: true }))));
    }
  }]);

  return SocialButtons;
}(_react2.default.Component);

exports.default = SocialButtons;