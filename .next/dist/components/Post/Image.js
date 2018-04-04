"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _reactVisibilitySensor = require("react-visibility-sensor");

var _reactVisibilitySensor2 = _interopRequireDefault(_reactVisibilitySensor);

var _reactMediumImageZoom = require("react-medium-image-zoom");

var _reactMediumImageZoom2 = _interopRequireDefault(_reactMediumImageZoom);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _media = require("../../utils/media");

var _media2 = _interopRequireDefault(_media);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  padding: 0;\n  margin: 0;\n  margin-bottom: 26px;\n  position: relative;\n  height: auto;\n  overflow: hidden;\n\n  img {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: auto;\n    transition: opacity 0.4s linear;\n    opacity: 0;\n  }\n\n  img.small {\n    transition: opacity 0.1s linear;\n  }\n\n  img.loaded,\n  .loaded img {\n    opacity: 1;\n  }\n\n  img.small {\n    filter: blur(50px);\n    /* this is needed so Safari keeps sharp edges */\n    transform: scale(1);\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  padding: 0;\n  margin: 0;\n  margin-bottom: 26px;\n  position: relative;\n  height: auto;\n  overflow: hidden;\n\n  img {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: auto;\n    transition: opacity 0.4s linear;\n    opacity: 0;\n  }\n\n  img.small {\n    transition: opacity 0.1s linear;\n  }\n\n  img.loaded,\n  .loaded img {\n    opacity: 1;\n  }\n\n  img.small {\n    filter: blur(50px);\n    /* this is needed so Safari keeps sharp edges */\n    transform: scale(1);\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n      display: block;\n      width: 100%;\n    "], ["\n      display: block;\n      width: 100%;\n    "]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n      display: inline-block;\n      float: left;\n      width: 50%;\n      margin-right: 26px;\n      ", ";\n    "], ["\n      display: inline-block;\n      float: left;\n      width: 50%;\n      margin-right: 26px;\n      ", ";\n    "]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n        float: none;\n        width: 100%;\n        margin-right: 0;\n      "], ["\n        float: none;\n        width: 100%;\n        margin-right: 0;\n      "]),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(["\n      display: inline-block;\n      float: right;\n      width: 50%;\n      margin-left: 26px;\n      ", ";\n    "], ["\n      display: inline-block;\n      float: right;\n      width: 50%;\n      margin-left: 26px;\n      ", ";\n    "]),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(["\n        float: none;\n        width: 100%;\n        margin-left: 0;\n      "], ["\n        float: none;\n        width: 100%;\n        margin-left: 0;\n      "]),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(["\n  margin-top: 10px;\n  font-size: 0.9em;\n  text-align: center;\n  color: #b4b4b4;\n"], ["\n  margin-top: 10px;\n  font-size: 0.9em;\n  text-align: center;\n  color: #b4b4b4;\n"]);

var ImageContainer = _styledComponents2.default.figure(_templateObject, function (props) {
  return props.position === "fullscreen" && (0, _styledComponents.css)(_templateObject2);
}, function (props) {
  return props.position === "left" && (0, _styledComponents.css)(_templateObject3, _media2.default.sm(_templateObject4));
}, function (props) {
  return props.position === "right" && (0, _styledComponents.css)(_templateObject5, _media2.default.sm(_templateObject6));
});

var ImageCaption = _styledComponents2.default.figcaption(_templateObject7);

var DelayedImage = function (_React$Component) {
  (0, _inherits3.default)(DelayedImage, _React$Component);

  function DelayedImage(props) {
    (0, _classCallCheck3.default)(this, DelayedImage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DelayedImage.__proto__ || (0, _getPrototypeOf2.default)(DelayedImage)).call(this, props));

    _this.state = {
      isLoaded: false
    };
    return _this;
  }

  (0, _createClass3.default)(DelayedImage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var defaultImage = new Image();
      defaultImage.src = this.props.src;
      defaultImage.onload = function () {
        _this2.setState({ isLoaded: true });
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          zoomSrc = _props.zoomSrc,
          src = _props.src,
          caption = _props.caption,
          rest = (0, _objectWithoutProperties3.default)(_props, ["zoomSrc", "src", "caption"]);

      var img = zoomSrc ? _react2.default.createElement(_reactMediumImageZoom2.default, {
        image: (0, _extends3.default)({}, rest, {
          src: src
        }),
        zoomImage: (0, _extends3.default)({}, rest, {
          src: zoomSrc
        })
      }) : _react2.default.createElement("img", (0, _extends3.default)({ alt: caption }, rest, { src: src }));

      return _react2.default.createElement("div", { className: this.state.isLoaded ? "loaded" : "" }, img);
    }
  }]);

  return DelayedImage;
}(_react2.default.Component);

var ImageComponent = function (_React$Component2) {
  (0, _inherits3.default)(ImageComponent, _React$Component2);

  function ImageComponent(props) {
    (0, _classCallCheck3.default)(this, ImageComponent);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, (ImageComponent.__proto__ || (0, _getPrototypeOf2.default)(ImageComponent)).call(this, props));

    _this3.onChangeVisibility = function (isVisible) {
      if (isVisible && _this3.props.lazy) {
        _this3.setState({ isVisible: true });
      }
    };

    _this3.state = {
      isVisible: false
    };
    return _this3;
  }

  (0, _createClass3.default)(ImageComponent, [{
    key: "render",
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          placeholderHeight = _props2.placeholderHeight,
          position = _props2.position,
          lazy = _props2.lazy,
          offset = _props2.offset,
          caption = _props2.caption,
          previewSrc = _props2.previewSrc,
          zoomSrc = _props2.zoomSrc,
          width = _props2.width,
          height = _props2.height,
          src = _props2.src,
          rest = (0, _objectWithoutProperties3.default)(_props2, ["children", "className", "placeholderHeight", "position", "lazy", "offset", "caption", "previewSrc", "zoomSrc", "width", "height", "src"]);

      return _react2.default.createElement(_reactVisibilitySensor2.default, { partialVisibility: true, onChange: this.onChangeVisibility }, _react2.default.createElement(ImageContainer, { position: position }, previewSrc && _react2.default.createElement(DelayedImage, { className: "small", src: previewSrc }), !lazy && _react2.default.createElement(DelayedImage, (0, _extends3.default)({ src: src, zoomSrc: zoomSrc }, rest)), lazy && this.state.isVisible && _react2.default.createElement(DelayedImage, (0, _extends3.default)({
        caption: caption,
        src: src,
        zoomSrc: zoomSrc
      }, rest)), _react2.default.createElement("div", {
        style: {
          paddingBottom: 100 * height / width + "%",
          backgroundColor: "rgba(0, 0, 0, 0.05)"
        }
      }), caption && _react2.default.createElement(ImageCaption, null, caption)));
    }
  }]);

  return ImageComponent;
}(_react2.default.Component);

ImageComponent.defaultProps = {
  lazy: true,
  width: 1000,
  height: 600,
  position: "fullscreen"
};

exports.default = ImageComponent;