"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _mobxReact = require("mobx-react");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class;

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  user-select: none;\n"], ["\n  user-select: none;\n"]);

var StyledForm = (0, _styledComponents2.default)(_antd.Form)(_templateObject);

var MetaEditor = (_dec = (0, _mobxReact.inject)("blog"), _dec(_class = (0, _mobxReact.observer)(_class = function (_React$Component) {
  (0, _inherits3.default)(MetaEditor, _React$Component);

  function MetaEditor() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MetaEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MetaEditor.__proto__ || (0, _getPrototypeOf2.default)(MetaEditor)).call.apply(_ref, [this].concat(args))), _this), _this.onFormSubmit = function (event) {
      event.preventDefault();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MetaEditor, [{
    key: "render",
    value: function render() {
      var initialValues = this.props.initialValues;
      var getFieldDecorator = this.props.form.getFieldDecorator;

      var authors = this.props.blog.authors.allAuthors;
      var languages = this.props.blog.ui.allLanguages;
      var categories = this.props.blog.categories.allCategories;

      return _react2.default.createElement(StyledForm, { layout: "vertical", onSubmit: this.onFormSubmit }, _react2.default.createElement(_antd.Collapse, { accordion: true, bordered: false, defaultActiveKey: ["main"] }, _react2.default.createElement(_antd.Collapse.Panel, { header: "Main Settings", key: "main" }, _react2.default.createElement(_antd.Row, null, _react2.default.createElement(_antd.Col, { xs: 24 }, _react2.default.createElement(_antd.Form.Item, { label: "Url" }, getFieldDecorator("url", {
        initialValue: initialValues.url || "",
        rules: [{ required: true, message: "Url is required" }]
      })(_react2.default.createElement(_antd.Input, { placeholder: "Article url" })))), _react2.default.createElement(_antd.Col, { xs: 24, sm: 11 }, _react2.default.createElement(_antd.Form.Item, { label: "Language" }, getFieldDecorator("language", {
        initialValue: initialValues.language,
        rules: [{ required: true, message: "Please select a language" }]
      })(_react2.default.createElement(_antd.Select, { placeholder: "Select a language" }, languages.map(function (language) {
        return _react2.default.createElement(_antd.Select.Option, { key: language.id, value: language.id }, language.title);
      })))), _react2.default.createElement(_antd.Form.Item, { label: "Author" }, getFieldDecorator("author", {
        initialValue: initialValues.author,
        rules: [{ required: true, message: "Please select an author" }]
      })(_react2.default.createElement(_antd.Select, { placeholder: "Select an author" }, authors.map(function (author) {
        return _react2.default.createElement(_antd.Select.Option, { key: author.id, value: author.id }, author.name);
      })))), _react2.default.createElement(_antd.Form.Item, { label: "Category" }, getFieldDecorator("category", {
        initialValue: initialValues.category,
        rules: [{ required: true, message: "Please select a category" }]
      })(_react2.default.createElement(_antd.Select, { placeholder: "Select a category" }, categories.map(function (category) {
        return _react2.default.createElement(_antd.Select.Option, { key: category.id, value: category.id }, category.title);
      }))))), _react2.default.createElement(_antd.Col, { xs: 24, sm: { span: 11, offset: 1 } }, _react2.default.createElement(_antd.Form.Item, { label: "Publication Date" }, getFieldDecorator("date", {
        initialValue: initialValues.date ? (0, _moment2.default)(initialValues.date) : undefined,
        rules: [{
          type: "object",
          required: true,
          message: "Please select publication date"
        }]
      })(_react2.default.createElement(_antd.DatePicker, null))), _react2.default.createElement(_antd.Form.Item, { label: "Tags" }, getFieldDecorator("tags", {
        initialValue: initialValues.tags ? initialValues.tags.map(function (tag) {
          return tag;
        }) : []
      })(_react2.default.createElement(_antd.Select, { mode: "tags", placeholder: "Tags for the post" }))), _react2.default.createElement(_antd.Form.Item, { label: "Has Translation?", style: { marginBottom: 0 } }, getFieldDecorator("hasTranslation", {
        valuePropName: "checked",
        initialValue: initialValues.hasTranslation || false
      })(_react2.default.createElement(_antd.Switch, {
        checkedChildren: _react2.default.createElement(_antd.Icon, { type: "check" }),
        unCheckedChildren: _react2.default.createElement(_antd.Icon, { type: "cross" })
      })))))), _react2.default.createElement(_antd.Collapse.Panel, { header: "List Preview & Images", key: "previews" }, _react2.default.createElement(_antd.Row, null, _react2.default.createElement(_antd.Col, { xs: 24, sm: 11 }, _react2.default.createElement(_antd.Form.Item, { label: "Preview image" }, getFieldDecorator("thumbImage", {
        initialValue: initialValues.thumbImage || "",
        rules: [{ required: true, message: "Preview image is required" }]
      })(_react2.default.createElement(_antd.Input, { placeholder: "Url to the image" }))), _react2.default.createElement(_antd.Form.Item, { label: "Preview text" }, getFieldDecorator("thumbText", {
        initialValue: initialValues.thumbText || "",
        rules: [{ required: true, message: "Preview text is required" }]
      })(_react2.default.createElement(_antd.Input.TextArea, { rows: 5 })))), _react2.default.createElement(_antd.Col, { xs: 24, sm: { span: 11, offset: 1 } }, _react2.default.createElement(_antd.Form.Item, { label: "Fullscreen Video" }, getFieldDecorator("fullscreenVideo", {
        initialValue: initialValues.fullscreenVideo || ""
      })(_react2.default.createElement(_antd.Input, { placeholder: "Url to the video" }))), _react2.default.createElement(_antd.Form.Item, { label: "Featured", style: { marginBottom: 0 } }, getFieldDecorator("featured", {
        valuePropName: "checked",
        initialValue: initialValues.featured || false
      })(_react2.default.createElement(_antd.Switch, {
        checkedChildren: _react2.default.createElement(_antd.Icon, { type: "check" }),
        unCheckedChildren: _react2.default.createElement(_antd.Icon, { type: "cross" })
      })))))), _react2.default.createElement(_antd.Collapse.Panel, { header: "Social Networks", key: "social" }, _react2.default.createElement(_antd.Row, null, _react2.default.createElement(_antd.Col, { xs: 24, sm: 11 }, _react2.default.createElement(_antd.Form.Item, { label: "Facebook Share Preview" }, getFieldDecorator("ogImage", {
        initialValue: initialValues.ogImage || "",
        rules: [{
          required: true,
          message: "It's crucial to have proper preview image if you share the post"
        }]
      })(_react2.default.createElement(_antd.Input, { placeholder: "Url to the image" }))))))));
    }
  }]);

  return MetaEditor;
}(_react2.default.Component)) || _class) || _class);

exports.default = _antd.Form.create({
  onValuesChange: function onValuesChange(props, values) {
    if (values.date) {
      props.onValuesChange({
        date: values.date.format("YYYY-MM-DD")
      });
      return;
    }
    props.onValuesChange(values);
  }
})(MetaEditor);