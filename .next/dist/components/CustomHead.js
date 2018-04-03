"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function CustomHead(props) {
  var url = props.url,
    type = props.type,
    image = props.image,
    video = props.video;

  var title = props.title
    ? props.title + " - " + _config2.default.siteTitle
    : _config2.default.siteTitle;
  var description = props.description
    ? props.description
    : _config2.default.description;
  return _react2.default.createElement(
    _head2.default,
    null,
    _react2.default.createElement("title", null, title),
    _react2.default.createElement("meta", {
      name: "description",
      content: description
    }),
    url &&
      _react2.default.createElement("meta", {
        property: "og:url",
        content: url
      }),
    _react2.default.createElement("meta", {
      property: "og:type",
      content: type || "website"
    }),
    _react2.default.createElement("meta", {
      property: "og:title",
      content: title
    }),
    _react2.default.createElement("meta", {
      property: "og:description",
      content: description
    }),
    video &&
      _react2.default.createElement("meta", {
        property: "og:video",
        content: video
      }),
    image &&
      _react2.default.createElement("meta", {
        property: "og:image",
        content: image
      })
  );
}

exports.default = CustomHead;
