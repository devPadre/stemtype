webpackHotUpdate(6,{

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(33);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(14);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(15);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(34);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(36);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(16);

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
        maxWidth: "90",
        margin: "0 auto 0 auto",
        leftmargin: "10px",
        rightmargin: "10px",
        width: "80%",
        height: "450px"
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/QuizEmbed.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/QuizEmbed.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4xYWFmZmU4MjM4YjZhYjFiMjUzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9RdWl6RW1iZWQuanM/OWE1NzUzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuIFxuY2xhc3MgUXVpekVtYmVkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiBcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gXG4gICAgc2NyaXB0LnNyYyA9IFwiaHR0cHM6Ly93d3cuc3VydmV5Z2l6bW8uY29tL3MzLzQyODM0MzMvU1RFTS1UeXBlLVF1aXpcIjtcbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZGl2U3R5bGUgPSB7XG4gICAgICAgICAgbWF4V2lkdGg6IFwiOTBcIixcbiAgICAgICAgICBtYXJnaW46IFwiMCBhdXRvIDAgYXV0b1wiLFxuICAgICAgICAgIGxlZnRtYXJnaW46IFwiMTBweFwiLFxuICAgICAgICAgIHJpZ2h0bWFyZ2luOiBcIjEwcHhcIixcbiAgICAgICAgICB3aWR0aDogXCI4MCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiNDUwcHhcIlxuICAgICAgICB9O1xuIFxuICAgIGNvbnN0IGlmcmFtZVN0eWxlID0ge1xuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiODAlXCIsXG4gICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIlxuICAgICAgICB9O1xuIFxuICAgIGNvbnN0IGdpem1vSUQgPSBcIjQyODM0MzNcIjtcbiAgICBjb25zdCBzdXJ2ZXlJRCA9IFwiU1RFTS1UeXBlLVF1aXpcIjtcbiAgICBjb25zdCBnaXptb1VybCA9IFwiaHR0cHM6Ly93d3cuc3VydmV5Z2l6bW8uY29tL3MzL1wiICsgZ2l6bW9JRCArICcvJyArIHN1cnZleUlEIDtcbiBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJRdWl6RW1iZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnaXptb190YXJnZXRcIiBkYXRhLXJpZC1pZD17Z2l6bW9JRH0gZGF0YS1mZz1cIiMyNTI1MjVcIiBkYXRhLWJnPVwiI0VERURFRFwiIHN0eWxlPXtkaXZTdHlsZX0gZGF0YS1hdXRvLXNjcm9sbD1cInRydWVcIj5cbiAgICAgICAgICA8aWZyYW1lIHRpdGxlPVwiZW1iZWQtdGVzdFwiIHN0eWxlPXtpZnJhbWVTdHlsZX0gc3JjPXtnaXptb1VybH0+PC9pZnJhbWU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIFxuZXhwb3J0IGRlZmF1bHQgUXVpekVtYmVkO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUXVpekVtYmVkLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFSQTtBQUNBO0FBT0E7QUFFQTtBQUNBO0FBR0E7QUFMQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUlBO0FBSkE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==