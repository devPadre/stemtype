"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizes = undefined;

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _lodash = require("lodash.keys");

var _lodash2 = _interopRequireDefault(_lodash);

var _styledComponents = require("styled-components");

var _theme = require("./theme");

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
  ["\n    @media (max-width: ", "em) {\n      ", ";\n    }\n  "],
  ["\n    @media (max-width: ", "em) {\n      ", ";\n    }\n  "]
);

var sizes = (exports.sizes = _theme2.default.flexboxgrid.breakpoints);

// Iterate through the sizes and create a media template
var media = (0, _lodash2.default)(sizes).reduce(function(acc, label) {
  acc[label] = function() {
    return (0, _styledComponents.css)(
      _templateObject,
      sizes[label],
      _styledComponents.css.apply(undefined, arguments)
    );
  };
  return acc;
}, {});

exports.default = media;
