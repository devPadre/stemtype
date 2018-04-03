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

var _possibleConstructorReturn3 = _interopRequireDefault(
  _possibleConstructorReturn2
);

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    "\n  display: block;\n  margin-bottom: 26px;\n  min-height: 323px;\n\n  .dsq-brlink {\n    display: none;\n  }\n"
  ],
  [
    "\n  display: block;\n  margin-bottom: 26px;\n  min-height: 323px;\n\n  .dsq-brlink {\n    display: none;\n  }\n"
  ]
);

var PostCommentsContainer = _styledComponents2.default.div(_templateObject);

var PostComments = (function(_React$Component) {
  (0, _inherits3.default)(PostComments, _React$Component);

  function PostComments() {
    (0, _classCallCheck3.default)(this, PostComments);

    return (0, _possibleConstructorReturn3.default)(
      this,
      (
        PostComments.__proto__ || (0, _getPrototypeOf2.default)(PostComments)
      ).apply(this, arguments)
    );
  }

  (0, _createClass3.default)(PostComments, [
    {
      key: "render",
      value: function render() {
        var url = "" + window.location.origin + this.props.url;
        return _react2.default.createElement(_DiscusThread2.default, {
          shortname: _config2.default.disqusShortname,
          title: this.props.title,
          identifier: url,
          url: url
        });
      }
    }
  ]);

  return PostComments;
})(_react2.default.Component);

exports.default = function(props) {
  return _react2.default.createElement(
    PostCommentsContainer,
    null,
    _react2.default.createElement(PostComments, props)
  );
};
