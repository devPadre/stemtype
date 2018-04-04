"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoryEditor = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _lodash = require("lodash.debounce");

var _lodash2 = _interopRequireDefault(_lodash);

var _SimpleMDE = require("./SimpleMDE");

var _SimpleMDE2 = _interopRequireDefault(_SimpleMDE);

var _EditorContainer = require("./EditorContainer");

var _EditorContainer2 = _interopRequireDefault(_EditorContainer);

var _EditorMainSection = require("./EditorMainSection");

var _EditorMainSection2 = _interopRequireDefault(_EditorMainSection);

var _TitleInput = require("./TitleInput");

var _TitleInput2 = _interopRequireDefault(_TitleInput);

var _ToolbarHack = require("./ToolbarHack");

var _ToolbarHack2 = _interopRequireDefault(_ToolbarHack);

var _EditorHeader = require("./EditorHeader");

var _EditorHeader2 = _interopRequireDefault(_EditorHeader);

var _MetaEditor = require("./MetaEditor");

var _MetaEditor2 = _interopRequireDefault(_MetaEditor);

var _antd = require("antd");

var _constants = require("./constants");

var _EditorActions = require("./EditorActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoryEditor = exports.StoryEditor = function (_React$Component) {
  (0, _inherits3.default)(StoryEditor, _React$Component);

  function StoryEditor(props) {
    (0, _classCallCheck3.default)(this, StoryEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StoryEditor.__proto__ || (0, _getPrototypeOf2.default)(StoryEditor)).call(this, props));

    _this.onChangeTitle = function (event) {
      var title = event.target.value;
      _this.setState(function (state) {
        var touched = state.title !== title;
        return {
          title: title,
          touched: touched,
          editorStatus: touched ? _constants.EditorStatus.UNSAVED : state.editorStatus
        };
      });
    };

    _this.onChangeText = function (text) {
      _this.setState(function (state) {
        var touched = state.text !== text;
        return {
          text: text,
          touched: touched,
          editorStatus: touched ? _constants.EditorStatus.UNSAVED : state.editorStatus
        };
      });
    };

    _this.onSaveDraft = function () {
      var title = _this.state.title || "";
      var text = _this.state.text || "";
      _this.setState({ editorStatus: _constants.EditorStatus.SAVING });
      _this.props.onSaveDraft(title, text).then(function () {
        _this.setState({ editorStatus: _constants.EditorStatus.SAVED });
      }).catch(function () {
        _this.setState({ editorStatus: _constants.EditorStatus.UNSAVED });
      });
    };

    _this.onMetaValuesChange = (0, _lodash2.default)(function (values) {
      _this.setState({ editorStatus: _constants.EditorStatus.SAVING });
      _this.props.onUpdateMeta(values).then(function () {
        _this.setState({ editorStatus: _constants.EditorStatus.SAVED });
      }).catch(function () {
        _this.setState({ editorStatus: _constants.EditorStatus.UNSAVED });
      });
    }, 500);

    _this.onEditorAction = function (action) {
      switch (action) {
        case _EditorActions.EditorActionType.SAVE_CHANGES:
          _this.onSaveDraft();
          break;
        case _EditorActions.EditorActionType.PUBLISH:
          _this.props.onVerifyReadyForPublish().then(function (valid) {
            if (valid) {
              _antd.Modal.confirm({
                title: "Are you sure that you want to publish this post?",
                okText: "Yes, publish the post",
                cancelText: "Cancel",
                onOk: function onOk() {
                  _this.props.onPublish();
                }
              });
            }
          });
          break;
        case _EditorActions.EditorActionType.UPDATE:
          _this.props.onVerifyReadyForPublish().then(function (valid) {
            if (valid) {
              _antd.Modal.confirm({
                title: "Are you sure that you what to update content of published post?",
                okText: "Yes, update the post",
                cancelText: "Cancel",
                onOk: function onOk() {
                  _this.props.onPublish();
                }
              });
            }
          });
          break;
        case _EditorActions.EditorActionType.DELETE_DRAFT:
          _antd.Modal.confirm({
            title: "Are you sure that you want to delete this post?",
            content: "This action cannot be undone!",
            okText: "Yes, delete the post",
            cancelText: "Cancel",
            onOk: function onOk() {
              _this.props.onDelete();
            }
          });
          break;
        case _EditorActions.EditorActionType.DISCARD_DRAFT_CHANGES:
          _antd.Modal.confirm({
            title: "Are you sure that you what to discard all unpublished changes?",
            okText: "Yes, discard the changes",
            cancelText: "Cancel",
            onOk: function onOk() {
              _this.props.onDiscardChanges();
            }
          });
          break;
        case _EditorActions.EditorActionType.UNPUBLISH:
          _antd.Modal.confirm({
            title: "Are you sure that you what to unpublish the post?",
            content: "This means that all reposts, links that led to the post will be broken.",
            okText: "Yes, unpublish the post",
            cancelText: "Cancel",
            onOk: function onOk() {
              _this.props.onUnpublish();
            }
          });
          break;
        case _EditorActions.EditorActionType.CREATE_COPY:
          _antd.Modal.confirm({
            title: "Are you sure that you want to create the copy of this post?",
            okText: "Yes, create the copy",
            cancelText: "Cancel",
            onOk: function onOk() {
              _this.props.onCopy();
            }
          });
          break;
        case _EditorActions.EditorActionType.TOGGLE_MODE:
          _this.setState(function (state) {
            if (state.editorMode === _constants.EditorMode.EDIT_TEXT) {
              return {
                editorMode: _constants.EditorMode.EDIT_SETTINGS
              };
            }
            return {
              editorMode: _constants.EditorMode.EDIT_TEXT
            };
          });
          break;
        default:
          break;
      }
    };

    _this.state = (0, _extends3.default)({
      title: "",
      text: "",
      meta: {},
      isPublished: false,
      editorMode: _constants.EditorMode.EDIT_TEXT,
      editorStatus: props.initialValues && props.initialValues.id ? _constants.EditorStatus.SAVED : _constants.EditorStatus.UNSAVED,
      touched: false
    }, props.initialValues);
    return _this;
  }

  (0, _createClass3.default)(StoryEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.initialValues && (nextProps.initialValues.id !== this.props.initialValues.id || nextProps.initialValues.isPublished !== this.props.isPublished)) {
        this.setState((0, _extends3.default)({}, nextProps.initialValues, {
          editorStatus: _constants.EditorStatus.SAVED
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(_EditorContainer2.default, null, _react2.default.createElement(_EditorMainSection2.default, null, _react2.default.createElement(_EditorHeader2.default, {
        onAction: this.onEditorAction,
        editorMode: this.state.editorMode,
        editorStatus: this.state.editorStatus,
        isPublished: this.state.isPublished
      }), _react2.default.createElement("div", { className: "markdown-editor" }, _react2.default.createElement("div", { className: "markdown-editor-inner" }, this.state.editorMode === _constants.EditorMode.EDIT_SETTINGS && _react2.default.createElement(_MetaEditor2.default, {
        initialValues: this.state.meta,
        onValuesChange: this.onMetaValuesChange
      }), _react2.default.createElement("div", {
        style: {
          display: this.state.editorMode === _constants.EditorMode.EDIT_TEXT ? "block" : "none"
        }
      }, _react2.default.createElement(_TitleInput2.default, {
        autoFocus: true,
        placeholder: "Post Title",
        value: this.state.title,
        onChange: this.onChangeTitle,
        onSave: this.onSaveDraft
      }), _react2.default.createElement(_SimpleMDE2.default, {
        placeholder: "Begin writing your post...",
        value: this.state.text,
        onChange: this.onChangeText,
        onOpenPreview: this.props.onOpenPreview,
        extraKeys: {
          "Ctrl-S": this.onSaveDraft,
          "Cmd-S": this.onSaveDraft
        }
      })))), _react2.default.createElement("footer", { className: "markdown-editor-footer" }), _react2.default.createElement(_ToolbarHack2.default, null)));
    }
  }]);

  return StoryEditor;
}(_react2.default.Component);

exports.default = StoryEditor;