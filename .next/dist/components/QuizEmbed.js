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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuizEmbed = function (_Component) {
  (0, _inherits3.default)(QuizEmbed, _Component);

  function QuizEmbed() {
    (0, _classCallCheck3.default)(this, QuizEmbed);

    return (0, _possibleConstructorReturn3.default)(this, (QuizEmbed.__proto__ || (0, _getPrototypeOf2.default)(QuizEmbed)).apply(this, arguments));
  }

  (0, _createClass3.default)(QuizEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var script = document.createElement("script");

      script.src = "https://www.surveygizmo.com/s3/4283433/STEM-Type-Quiz";
      script.async = true;

      document.body.appendChild(script);
    }
  }, {
    key: "render",
    value: function render() {
      var divStyle = {
        maxWidth: "100%",
        margin: "0 auto 0 auto",
        leftmargin: "10px",
        rightmargin: "10px",
        width: "90%",
        height: "500px"
      };

      var iframeStyle = {
        position: "relative",
        width: "100%",
        height: "100%",
        border: "none"
      };

      var gizmoID = "4283433";
      var surveyID = "STEM-Type-Quiz";
      var gizmoUrl = "https://www.surveygizmo.com/s3/" + gizmoID + '/' + surveyID;

      return _react2.default.createElement("div", { className: "QuizEmbed" }, _react2.default.createElement("div", { className: "gizmo_target", "data-rid-id": gizmoID, "data-fg": "#252525", "data-bg": "#EDEDED", style: divStyle, "data-auto-scroll": "true" }, _react2.default.createElement("iframe", { title: "stem-type", style: iframeStyle, src: gizmoUrl, sandbox: "allow-top-navigation allow-scripts allow-forms allow-popups allow-same-origin" })));
    }
  }]);

  return QuizEmbed;
}(_react.Component);

exports.default = QuizEmbed;