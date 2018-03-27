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

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Post/Image.js";

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
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }) : _react2.default.createElement("img", (0, _extends3.default)({ alt: caption }, rest, { src: src, __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }));

      return _react2.default.createElement("div", { className: this.state.isLoaded ? "loaded" : "", __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, img);
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

      return _react2.default.createElement(_reactVisibilitySensor2.default, { partialVisibility: true, onChange: this.onChangeVisibility, __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement(ImageContainer, { position: position, __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, previewSrc && _react2.default.createElement(DelayedImage, { className: "small", src: previewSrc, __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }), !lazy && _react2.default.createElement(DelayedImage, (0, _extends3.default)({ src: src, zoomSrc: zoomSrc }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      })), lazy && this.state.isVisible && _react2.default.createElement(DelayedImage, (0, _extends3.default)({
        caption: caption,
        src: src,
        zoomSrc: zoomSrc
      }, rest, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      })), _react2.default.createElement("div", {
        style: {
          paddingBottom: 100 * height / width + "%",
          backgroundColor: "rgba(0, 0, 0, 0.05)"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), caption && _react2.default.createElement(ImageCaption, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, caption)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9JbWFnZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIlZpc2liaWxpdHlTZW5zb3IiLCJJbWFnZVpvb20iLCJzdHlsZWQiLCJjc3MiLCJNZWRpYSIsIkltYWdlQ29udGFpbmVyIiwiZmlndXJlIiwicHJvcHMiLCJwb3NpdGlvbiIsInNtIiwiSW1hZ2VDYXB0aW9uIiwiZmlnY2FwdGlvbiIsIkRlbGF5ZWRJbWFnZSIsInN0YXRlIiwiaXNMb2FkZWQiLCJkZWZhdWx0SW1hZ2UiLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsInNldFN0YXRlIiwiem9vbVNyYyIsImNhcHRpb24iLCJyZXN0IiwiaW1nIiwiQ29tcG9uZW50IiwiSW1hZ2VDb21wb25lbnQiLCJvbkNoYW5nZVZpc2liaWxpdHkiLCJpc1Zpc2libGUiLCJsYXp5IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlckhlaWdodCIsIm9mZnNldCIsInByZXZpZXdTcmMiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmdCb3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBVzs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFNLDRDQUFBLEFBQXdCLHdCQWlDMUIsaUJBQUE7U0FDQSxNQUFBLEFBQU0sYUFBTixBQUFtQixnQkFBbkIsQUFDQSwyQkFGQTtBQWpDRSxDQUFpQixFQXdDbkIsaUJBQUE7U0FDQSxNQUFBLEFBQU0sYUFBTixBQUFtQixVQUFuQixBQUNBLDZDQUtJLGdCQU5KLEFBTVUsR0FQVjtBQXhDRSxHQXNERixpQkFBQTtTQUNBLE1BQUEsQUFBTSxhQUFOLEFBQW1CLFdBQW5CLEFBQ0EsNkNBS0ksZ0JBTkosQUFNVSxHQVBWO0FBdERKLEFBQU07O0FBcUVOLElBQU0sZUFBZSwyQkFBZixBQUFzQixXQUE1Qjs7SUFPTSxBO3dDQUNKOzt3QkFBQSxBQUFZLE9BQU87d0NBQUE7O2tKQUFBLEFBQ1gsQUFDTjs7VUFBQSxBQUFLO2dCQUZZLEFBRWpCLEFBQWEsQUFDRDtBQURDLEFBQ1g7V0FFSDs7Ozs7d0NBRW1CO21CQUNsQjs7VUFBTSxlQUFlLElBQXJCLEFBQXFCLEFBQUksQUFDekI7bUJBQUEsQUFBYSxNQUFNLEtBQUEsQUFBSyxNQUF4QixBQUE4QixBQUM5QjttQkFBQSxBQUFhLFNBQVMsWUFBTSxBQUMxQjtlQUFBLEFBQUssU0FBUyxFQUFFLFVBQWhCLEFBQWMsQUFBWSxBQUMzQjtBQUZELEFBR0Q7Ozs7NkJBRVE7bUJBQ29DLEtBRHBDLEFBQ3lDO1VBRHpDLEFBQ0MsaUJBREQsQUFDQztVQURELEFBQ1UsYUFEVixBQUNVO1VBRFYsQUFDZSxpQkFEZixBQUNlO1VBRGYsQUFDMkIseUVBRWxDOztVQUFNLGdDQUNKLEFBQUM7MENBQ0MsQUFDSztlQUZQLEFBQ0UsQUFJQTtBQUZFOzhDQUVGLEFBQ0s7ZUFOUCxBQUtFLEFBRU87QUFBTDs7b0JBUEo7c0JBRFUsQUFDVjtBQUFBO0FBQ0UsT0FERixDQURVLGlFQVlMLEtBQUwsQUFBVSxXQUFWLEFBQXVCLFFBQU0sS0FBN0IsQUFBa0M7b0JBQWxDO3NCQVpGLEFBWUUsQUFHRjtBQUhFO1FBQUE7OzZCQUdLLGNBQUEsU0FBSyxXQUFXLEtBQUEsQUFBSyxNQUFMLEFBQVcsV0FBWCxBQUFzQixXQUF0QyxBQUFpRDtvQkFBakQ7c0JBQUEsQUFBc0Q7QUFBdEQ7T0FBQSxFQUFQLEFBQU8sQUFDUjs7Ozs7RUFuQ3dCLGdCLEFBQU07O0lBc0MzQixBOzBDQUNKOzswQkFBQSxBQUFZLE9BQU87d0NBQUE7O3VKQUFBLEFBQ1g7O1dBRFcsQUFPbkIscUJBQXFCLHFCQUFhLEFBQ2hDO1VBQUksYUFBYSxPQUFBLEFBQUssTUFBdEIsQUFBNEIsTUFBTSxBQUNoQztlQUFBLEFBQUssU0FBUyxFQUFFLFdBQWhCLEFBQWMsQUFBYSxBQUM1QjtBQUNGO0FBWGtCLEFBRWpCOztXQUFBLEFBQUs7aUJBRlksQUFFakIsQUFBYSxBQUNBO0FBREEsQUFDWDtXQUVIOzs7Ozs2QkFRUTtvQkFlSCxLQWZHLEFBZUU7VUFmRixBQUVMLG1CQUZLLEFBRUw7VUFGSyxBQUdMLG9CQUhLLEFBR0w7VUFISyxBQUlMLDRCQUpLLEFBSUw7VUFKSyxBQUtMLG1CQUxLLEFBS0w7VUFMSyxBQU1MLGVBTkssQUFNTDtVQU5LLEFBT0wsaUJBUEssQUFPTDtVQVBLLEFBUUwsa0JBUkssQUFRTDtVQVJLLEFBU0wscUJBVEssQUFTTDtVQVRLLEFBVUwsa0JBVkssQUFVTDtVQVZLLEFBV0wsZ0JBWEssQUFXTDtVQVhLLEFBWUwsaUJBWkssQUFZTDtVQVpLLEFBYUwsY0FiSyxBQWFMO1VBYkssQUFjRiwyTEFHTDs7NkJBQ0UsQUFBQyxpREFBaUIsbUJBQWxCLE1BQW9DLFVBQVUsS0FBOUMsQUFBbUQ7b0JBQW5EO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNHLGNBQUQsa0JBQWdCLFVBQWhCLEFBQTBCO29CQUExQjtzQkFBQSxBQUNHO0FBREg7cURBQ2lCLEFBQUMsZ0JBQWEsV0FBZCxBQUF3QixTQUFRLEtBQWhDLEFBQXFDO29CQUFyQztzQkFEakIsQUFDaUIsQUFDZDtBQURjO09BQUEsSUFDZCxBQUFDLHNDQUFRLEFBQUMsdUNBQWEsS0FBZCxBQUFtQixLQUFLLFNBQXhCLEFBQWlDLFdBQWpDLEFBQThDOztvQkFBOUM7c0JBRlosQUFFWSxBQUNUO0FBRFM7QUFBQSxRQUFBLFdBRVIsS0FBQSxBQUFLLE1BRE4sQUFDWSwyQ0FDVCxBQUFDO2lCQUFELEFBQ1csQUFDVDthQUZGLEFBRU8sQUFDTDtpQkFIRixBQUdXO0FBRlQsU0FERixBQUlNOztvQkFKTjtzQkFMTixBQUtNLEFBT0o7QUFQSTtBQUFBLFFBQUE7O3lCQVNrQixNQUFBLEFBQU0sU0FBeEIsQUFBaUMsUUFENUIsQUFFTDsyQkFISixBQUNTLEFBRVk7QUFGWixBQUNMOztvQkFGSjtzQkFaRixBQVlFLEFBTUM7QUFORDtBQUNFLHFDQUtXLGNBQUQ7O29CQUFBO3NCQUFBLEFBQWU7QUFBZjtBQUFBLE9BQUEsRUFwQmxCLEFBQ0UsQUFDRSxBQWtCYyxBQUluQjs7Ozs7RUF2RDBCLGdCQUFNLEE7O0FBMERuQyxlQUFBLEFBQWU7UUFBZSxBQUN0QixBQUNOO1NBRjRCLEFBRXJCLEFBQ1A7VUFINEIsQUFHcEIsQUFDUjtZQUpGLEFBQThCLEFBSWxCLEFBR1o7QUFQOEIsQUFDNUI7O2tCQU1GLEFBQWUiLCJmaWxlIjoiSW1hZ2UuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==