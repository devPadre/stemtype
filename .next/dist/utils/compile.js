"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _components = require("marksy/components");

var _components2 = _interopRequireDefault(_components);

var _Blockquote = require("../components/Post/Blockquote");

var _Blockquote2 = _interopRequireDefault(_Blockquote);

var _Image = require("../components/Post/Image");

var _Image2 = _interopRequireDefault(_Image);

var _ImageGrid = require("../components/Post/ImageGrid");

var _ImageGrid2 = _interopRequireDefault(_ImageGrid);

var _Player = require("../components/Player");

var _Player2 = _interopRequireDefault(_Player);

var _Hr = require("../components/Hr");

var _Hr2 = _interopRequireDefault(_Hr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compile = (0, _components2.default)({
  createElement: _react.createElement,
  elements: {
    hr: function hr() {
      return _react2.default.createElement(_Hr2.default, null);
    }
  },
  components: {
    Blockquote: _Blockquote2.default,
    Player: _Player2.default,
    Image: _Image2.default,
    ImageGrid: _ImageGrid2.default
  }
});

exports.default = compile;