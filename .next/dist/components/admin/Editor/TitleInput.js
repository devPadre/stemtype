"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

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

var _antd = require("antd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  [
    "\n  margin-bottom: 20px;\n\n  input {\n    display: inline-block;\n    padding: 0;\n    width: 100%;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.65);\n    background-image: none;\n    border: none !important;\n    resize: none;\n    height: 50px;\n    z-index: auto;\n    position: relative;\n    line-height: 36px;\n    font-size: 32px;\n    transition: none;\n    background: transparent !important;\n\n    :hover,\n    :focus {\n      outline: 0;\n      box-shadow: none;\n    }\n  }\n"
  ],
  [
    "\n  margin-bottom: 20px;\n\n  input {\n    display: inline-block;\n    padding: 0;\n    width: 100%;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.65);\n    background-image: none;\n    border: none !important;\n    resize: none;\n    height: 50px;\n    z-index: auto;\n    position: relative;\n    line-height: 36px;\n    font-size: 32px;\n    transition: none;\n    background: transparent !important;\n\n    :hover,\n    :focus {\n      outline: 0;\n      box-shadow: none;\n    }\n  }\n"
  ]
);

var StyledInput = _styledComponents2.default.div(_templateObject);

var TitleInput = (function(_React$Component) {
  (0, _inherits3.default)(TitleInput, _React$Component);

  function TitleInput() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TitleInput);

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = (0, _possibleConstructorReturn3.default)(
        this,
        (_ref =
          TitleInput.__proto__ ||
          (0, _getPrototypeOf2.default)(TitleInput)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
      _this)),
      (_this.onKeyDown = function(event) {
        if (event.metaKey) {
          if (event.keyCode === 83) {
            event.preventDefault();
            event.stopPropagation();
            _this.props.onSave();
          }
        }
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(TitleInput, [
    {
      key: "render",
      value: function render() {
        var _props = this.props,
          onSave = _props.onSave,
          restProps = (0, _objectWithoutProperties3.default)(_props, [
            "onSave"
          ]);

        return _react2.default.createElement(
          StyledInput,
          null,
          _react2.default.createElement(
            _antd.Input,
            (0, _extends3.default)({}, restProps, { onKeyDown: this.onKeyDown })
          )
        );
      }
    }
  ]);

  return TitleInput;
})(_react2.default.Component);

exports.default = TitleInput;
