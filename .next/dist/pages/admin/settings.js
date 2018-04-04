"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AdminSettings = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

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

var _mobxReact = require("mobx-react");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _AdminPage = require("../../components/admin/AdminPage");

var _AdminPage2 = _interopRequireDefault(_AdminPage);

var _AdminPageSection = require("../../components/admin/AdminPageSection");

var _AdminPageSection2 = _interopRequireDefault(_AdminPageSection);

var _ProtectedPage = require("../_hocs/ProtectedPage");

var _ProtectedPage2 = _interopRequireDefault(_ProtectedPage);

var _ConnectedPage = require("../_hocs/ConnectedPage");

var _ConnectedPage2 = _interopRequireDefault(_ConnectedPage);

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _dec, _class;

var Header = _AdminPageSection2.default.Header;

function download(filename, text) {
  var pom = document.createElement("a");
  pom.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(text));
  pom.setAttribute("download", filename);

  if (document.createEvent) {
    var event = document.createEvent("MouseEvents");
    event.initEvent("click", true, true);
    pom.dispatchEvent(event);
  } else {
    pom.click();
  }
}

var AdminSettings = exports.AdminSettings = (_dec = (0, _mobxReact.inject)("blog"), _dec(_class = function (_React$Component) {
  (0, _inherits3.default)(AdminSettings, _React$Component);

  function AdminSettings(props) {
    (0, _classCallCheck3.default)(this, AdminSettings);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AdminSettings.__proto__ || (0, _getPrototypeOf2.default)(AdminSettings)).call(this, props));

    _this.onBackupClick = function () {
      _this.setState({ inProgress: true });
      _this.props.blog.backup().then(function (data) {
        download("blog-backup-" + (0, _moment2.default)().format("YYYY-MM-DD-hh-mm") + ".json", (0, _stringify2.default)(data, null, 2));
        _this.setState({ inProgress: false });
      }).catch(function (e) {
        _this.setState({ inProgress: false });
      });
    };

    _this.state = {
      inProgress: false
    };
    return _this;
  }

  (0, _createClass3.default)(AdminSettings, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(_AdminPage2.default, { user: this.props.user }, _react2.default.createElement(_AdminPageSection2.default, null, _react2.default.createElement(Header, null, "General"), _react2.default.createElement(_antd.Button, {
        loading: this.state.inProgress,
        size: "large",
        type: "primary",
        onClick: this.onBackupClick
      }, "Create Backup")));
    }
  }]);

  return AdminSettings;
}(_react2.default.Component)) || _class);

exports.default = function () {
  return _react2.default.createElement(_ConnectedPage2.default, null, _react2.default.createElement(_ProtectedPage2.default, null, function (_ref) {
    var user = _ref.user;
    return _react2.default.createElement(AdminSettings, { user: user });
  }));
};