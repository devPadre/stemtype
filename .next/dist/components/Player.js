"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(
  _objectWithoutProperties2
);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactPlayer = require("react-player");

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _reactLazyload = require("react-lazyload");

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  ["\n  display: block;\n  margin-bottom: 26px;\n  background-color: black;\n"],
  ["\n  display: block;\n  margin-bottom: 26px;\n  background-color: black;\n"]
);

var PlayerContainer = _styledComponents2.default.div(_templateObject);

var Player = function Player(_ref) {
  var url = _ref.url,
    width = _ref.width,
    lazy = _ref.lazy,
    height = _ref.height,
    offset = _ref.offset,
    restProps = (0, _objectWithoutProperties3.default)(_ref, [
      "url",
      "width",
      "lazy",
      "height",
      "offset"
    ]);

  return _react2.default.createElement(
    PlayerContainer,
    { style: { width: width, height: height } },
    lazy &&
      _react2.default.createElement(
        _reactLazyload2.default,
        { height: height, offset: offset, once: true },
        _react2.default.createElement(
          _reactPlayer2.default,
          (0, _extends3.default)(
            { url: url, width: width, height: height },
            restProps
          )
        )
      ),
    !lazy &&
      _react2.default.createElement(
        _reactPlayer2.default,
        (0, _extends3.default)(
          { url: url, width: width, height: height },
          restProps
        )
      )
  );
};

Player.defaultProps = {
  lazy: true,
  width: "100%",
  height: "360px",
  offset: 200
};

exports.default = Player;
