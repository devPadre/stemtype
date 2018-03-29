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

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/QuizEmbed.js";


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
        maxWidth: "85",
        margin: "0 auto 0 auto",
        leftmargin: "10px",
        rightmargin: "10px",
        width: "80%",
        height: "425px"
      };

      var iframeStyle = {
        width: "100%",
        height: "80%",
        border: "none"
      };

      var gizmoID = "4283433";
      var surveyID = "STEM-Type-Quiz";
      var gizmoUrl = "https://www.surveygizmo.com/s3/" + gizmoID + '/' + surveyID;

      return _react2.default.createElement("div", { className: "QuizEmbed", __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, _react2.default.createElement("div", { className: "gizmo_target", "data-rid-id": gizmoID, "data-fg": "#252525", "data-bg": "#EDEDED", style: divStyle, "data-auto-scroll": "true", __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement("iframe", { title: "embed-test", style: iframeStyle, src: gizmoUrl, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      })));
    }
  }]);

  return QuizEmbed;
}(_react.Component);

exports.default = QuizEmbed;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUXVpekVtYmVkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUXVpekVtYmVkIiwic2NyaXB0IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYXN5bmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJkaXZTdHlsZSIsIm1heFdpZHRoIiwibWFyZ2luIiwibGVmdG1hcmdpbiIsInJpZ2h0bWFyZ2luIiwid2lkdGgiLCJoZWlnaHQiLCJpZnJhbWVTdHlsZSIsImJvcmRlciIsImdpem1vSUQiLCJzdXJ2ZXlJRCIsImdpem1vVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBRVYsQTs7Ozs7Ozs7Ozs7d0NBRWlCLEFBQ25CO1VBQU0sU0FBUyxTQUFBLEFBQVMsY0FBeEIsQUFBZSxBQUF1QixBQUV0Qzs7YUFBQSxBQUFPLE1BQVAsQUFBYSxBQUNiO2FBQUEsQUFBTyxRQUFQLEFBQWUsQUFFZjs7ZUFBQSxBQUFTLEtBQVQsQUFBYyxZQUFkLEFBQTBCLEFBQzNCOzs7OzZCQUVRLEFBQ1A7VUFBTTtrQkFBVyxBQUNELEFBQ1Y7Z0JBRlcsQUFFSCxBQUNSO29CQUhXLEFBR0MsQUFDWjtxQkFKVyxBQUlFLEFBQ2I7ZUFMVyxBQUtKLEFBQ1A7Z0JBTk4sQUFBaUIsQUFNSCxBQUdkO0FBVGlCLEFBQ1g7O1VBUUE7ZUFBYyxBQUNQLEFBQ1A7Z0JBRmMsQUFFTixBQUNSO2dCQUhOLEFBQW9CLEFBR04sQUFHZDtBQU5vQixBQUNkOztVQUtBLFVBQU4sQUFBZ0IsQUFDaEI7VUFBTSxXQUFOLEFBQWlCLEFBQ2pCO1VBQU0sV0FBVyxvQ0FBQSxBQUFvQyxVQUFwQyxBQUE4QyxNQUEvRCxBQUFxRSxBQUVyRTs7NkJBQ0UsY0FBQSxTQUFLLFdBQUwsQUFBZTtvQkFBZjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxjQUFBLFNBQUssV0FBTCxBQUFlLGdCQUFlLGVBQTlCLEFBQTJDLFNBQVMsV0FBcEQsQUFBNEQsV0FBVSxXQUF0RSxBQUE4RSxXQUFVLE9BQXhGLEFBQStGLFVBQVUsb0JBQXpHLEFBQTBIO29CQUExSDtzQkFBQSxBQUNFO0FBREY7bURBQ1UsT0FBUixBQUFjLGNBQWEsT0FBM0IsQUFBa0MsYUFBYSxLQUEvQyxBQUFvRDtvQkFBcEQ7c0JBSE4sQUFDRSxBQUNFLEFBQ0UsQUFJUDtBQUpPOzs7Ozs7QUFsQ2MsQSxBQXlDeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiUXVpekVtYmVkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=