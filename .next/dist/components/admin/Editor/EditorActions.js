"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.EditorActionType = undefined;

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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _antd = require("antd");

var _constants = require("./constants");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var EditorActionType = (exports.EditorActionType = {
  PUBLISH: "publish",
  DELETE_DRAFT: "delete_draft",
  DISCARD_DRAFT_CHANGES: "discard_draft_changes",
  UNPUBLISH: "unpublish",
  UPDATE: "update",
  TOGGLE_MODE: "toggle_mode",
  SAVE_CHANGES: "save_changes",
  CREATE_COPY: "create_copy"
});

var EditorActionTypeEditorActions = (function(_React$Component) {
  (0, _inherits3.default)(EditorActionTypeEditorActions, _React$Component);

  function EditorActionTypeEditorActions() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, EditorActionTypeEditorActions);

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
          EditorActionTypeEditorActions.__proto__ ||
          (0, _getPrototypeOf2.default)(
            EditorActionTypeEditorActions
          )).call.apply(_ref, [this].concat(args))
      )),
      _this)),
      (_this.onHandleMenuClick = function(e) {
        _this.props.onAction(e.key);
      }),
      (_this.onPublish = function() {
        _this.props.onAction(EditorActionType.PUBLISH);
      }),
      (_this.onUpdate = function() {
        _this.props.onAction(EditorActionType.UPDATE);
      }),
      (_this.onToggleMode = function() {
        _this.props.onAction(EditorActionType.TOGGLE_MODE);
      }),
      (_this.onSaveChanges = function() {
        _this.props.onAction(EditorActionType.SAVE_CHANGES);
      }),
      _temp)),
      (0, _possibleConstructorReturn3.default)(_this, _ret)
    );
  }

  (0, _createClass3.default)(EditorActionTypeEditorActions, [
    {
      key: "render",
      value: function render() {
        if (this.props.editorMode === _constants.EditorMode.EDIT_SETTINGS) {
          return _react2.default.createElement(
            _antd.Button.Group,
            { style: { marginLeft: 10 } },
            _react2.default.createElement(
              _antd.Button,
              {
                icon: "left",
                type: "default",
                size: "large",
                onClick: this.onToggleMode
              },
              "Back"
            )
          );
        }

        var settingsBtn = _react2.default.createElement(
          _antd.Button.Group,
          { style: { marginLeft: 10 } },
          _react2.default.createElement(
            _antd.Button,
            {
              icon: "setting",
              type: "default",
              size: "large",
              onClick: this.onToggleMode
            },
            "Settings"
          )
        );

        if (this.props.editorStatus !== _constants.EditorStatus.SAVED) {
          return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              _antd.Button.Group,
              null,
              _react2.default.createElement(
                _antd.Button,
                { size: "large", type: "primary", onClick: this.onSaveChanges },
                "Save Changes"
              )
            ),
            settingsBtn
          );
        }

        if (!this.props.isPublished) {
          var _overlay = _react2.default.createElement(
            _antd.Menu,
            { onClick: this.onHandleMenuClick },
            _react2.default.createElement(
              _antd.Menu.Item,
              { key: EditorActionType.CREATE_COPY },
              "Create copy"
            ),
            _react2.default.createElement(
              _antd.Menu.Item,
              { key: EditorActionType.DELETE_DRAFT },
              "Delete draft"
            )
          );

          return _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              _antd.Dropdown.Button,
              {
                size: "large",
                type: "primary",
                overlay: _overlay,
                onClick: this.onPublish
              },
              "Publish"
            ),
            settingsBtn
          );
        }

        var overlay = _react2.default.createElement(
          _antd.Menu,
          { onClick: this.onHandleMenuClick },
          _react2.default.createElement(
            _antd.Menu.Item,
            { key: EditorActionType.CREATE_COPY },
            "Create copy"
          ),
          _react2.default.createElement(
            _antd.Menu.Item,
            { key: EditorActionType.DISCARD_DRAFT_CHANGES },
            "Discard changes"
          ),
          _react2.default.createElement(
            _antd.Menu.Item,
            { key: EditorActionType.UNPUBLISH },
            "Unpublish"
          )
        );

        return _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            _antd.Dropdown.Button,
            {
              size: "large",
              type: "primary",
              overlay: overlay,
              onClick: this.onUpdate
            },
            "Update"
          ),
          settingsBtn
        );
      }
    }
  ]);

  return EditorActionTypeEditorActions;
})(_react2.default.Component);

exports.default = EditorActionTypeEditorActions;
