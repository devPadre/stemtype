"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require("react-styled-flexboxgrid");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Two = function Two(_ref) {
  var first = _ref.first,
    second = _ref.second;
  return _react2.default.createElement(
    _reactStyledFlexboxgrid.Row,
    null,
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
      { xs: 12, sm: 6 },
      first
    ),
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Col,
      { xs: 12, sm: 6 },
      second
    )
  );
};

exports.default = function(_ref2) {
  var children = _ref2.children;

  var images = [];
  _react2.default.Children.forEach(children, function(child) {
    if (child.props && child.props.url) {
      images.push(child);
    }
  });
  return _react2.default.createElement(
    _reactStyledFlexboxgrid.Grid,
    { fluid: true, style: { padding: 0 } },
    images.length === 1 && images[0],
    images.length === 2 &&
      _react2.default.createElement(Two, {
        first: images[0],
        second: images[1]
      }),
    images.length === 3 &&
      _react2.default.createElement(
        "div",
        null,
        images[0],
        _react2.default.createElement(Two, {
          first: images[1],
          second: images[2]
        })
      ),
    images.length === 4 &&
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(Two, {
          first: images[0],
          second: images[1]
        }),
        _react2.default.createElement(Two, {
          first: images[2],
          second: images[3]
        })
      )
  );
};
