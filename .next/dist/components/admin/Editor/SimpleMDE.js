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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactSimplemdeEditor = require("react-simplemde-editor");

var _reactSimplemdeEditor2 = _interopRequireDefault(_reactSimplemdeEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _replaceSelection(cm, active, startEnd) {
  if (/editor-preview-active/.test(cm.getWrapperElement().lastChild.className)) return;
  var text;
  var start = startEnd[0];
  var end = startEnd[1];
  var startPoint = cm.getCursor("start");
  var endPoint = cm.getCursor("end");
  text = cm.getSelection();
  cm.replaceSelection(start + text + end);
  startPoint.ch += start.length;
  if (startPoint !== endPoint) {
    endPoint.ch += start.length;
  }
  cm.setSelection(startPoint, endPoint);
  cm.focus();
}

var SimpleMDE = function (_React$Component) {
  (0, _inherits3.default)(SimpleMDE, _React$Component);

  function SimpleMDE() {
    (0, _classCallCheck3.default)(this, SimpleMDE);

    return (0, _possibleConstructorReturn3.default)(this, (SimpleMDE.__proto__ || (0, _getPrototypeOf2.default)(SimpleMDE)).apply(this, arguments));
  }

  (0, _createClass3.default)(SimpleMDE, [{
    key: "getDefaultOptions",
    value: function getDefaultOptions() {
      return {
        spellChecker: false,
        autofocus: true,
        autosave: {
          enabled: false
        },
        toolbar: ["bold", "italic", "heading", "strikethrough", "|", "link", "horizontal-rule", "unordered-list", "ordered-list", "|", {
          name: "blockquote",
          action: function addBlockQuote(editor) {
            var cm = editor.codemirror;
            _replaceSelection(cm, true, [["```marksy", '<Blockquote who="Albert Einstein">'].join("\n"), ["\n", "</Blockquote>", "```"].join("\n")]);
          },
          className: "fa fa-quote-right",
          title: "Blockquote"
        }, {
          name: "custom-image",
          action: function addImage(editor) {
            var cm = editor.codemirror;
            _replaceSelection(cm, true, [["```marksy", "<Image", '  position="fullscreen|left|right"', '  previewSrc="<url-to-preview-image>"', '  src="<url-to-image>"', '  zoomSrc="<url-to-big-image>"', "  width={700}", "  height={500}", "  lazy={false|true}"].join("\n"), ["\n/>", "```"].join("\n")]);
          },
          className: "fa fa-picture-o",
          title: "Image"
        }, {
          name: "custom-images-grid",
          action: function addImages(editor) {
            var cm = editor.codemirror;
            _replaceSelection(cm, true, [["```marksy", "<ImageGrid>", "  <Image", '    previewSrc="<url-to-preview-image>"', '    src="<url-to-image>"', '    zoomSrc="<url-to-big-image>"', "    width={700}", "    height={500}", "  />"].join("\n"), ["\n</ImageGrid>", "```"].join("\n")]);
          },
          className: "fa fa-th-large",
          title: "Images Grid"
        }, "|", {
          name: "youtube",
          action: function addYoutubePlayer(editor) {
            var cm = editor.codemirror;
            _replaceSelection(cm, true, ['\n\n```marksy\n<Player url="https://www.youtube.com/watch?v=<video-id>" controls />\n', "```\n"]);
          },
          className: "fa fa-youtube-square",
          title: "Youtube Player"
        }, {
          name: "vimeo",
          action: function addVimeoPlayer(editor) {
            var cm = editor.codemirror;
            _replaceSelection(cm, true, ['\n\n```marksy\n<Player url="https://vimeo.com/<video-id>" controls />\n', "```\n"]);
          },
          className: "fa fa-vimeo-square",
          title: "Vimeo Player"
        }, "|", {
          name: "custom_preview",
          action: this.props.onOpenPreview,
          className: "fa fa-eye",
          title: "Open Preview"
        }, "guide"],
        shortcuts: {
          toggleFullScreen: null,
          togglePreview: null,
          toggleSideBySide: null,
          drawImage: null
        },
        status: ["words"]
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange,
          extraKeys = _props.extraKeys,
          options = (0, _objectWithoutProperties3.default)(_props, ["value", "onChange", "extraKeys"]);

      return _react2.default.createElement(_reactSimplemdeEditor2.default, {
        value: value,
        onChange: onChange,
        options: (0, _extends3.default)({}, this.getDefaultOptions(), options),
        extraKeys: extraKeys
      });
    }
  }]);

  return SimpleMDE;
}(_react2.default.Component);

exports.default = SimpleMDE;