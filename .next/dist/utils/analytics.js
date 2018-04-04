'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logException = exports.logEvent = exports.logPageView = exports.initGA = undefined;

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initGA = exports.initGA = function initGA() {
  console.log('GA init');
  _reactGa2.default.initialize('UA-1638865-43');
};

var logPageView = exports.logPageView = function logPageView() {
  console.log('Logging pageview for ${window.location.pathname}');
  _reactGa2.default.set({ page: window.location.pathname });
  _reactGa2.default.pageview(window.location.pathname + window.location.search);
};

var logEvent = exports.logEvent = function logEvent() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (category && action) {
    _reactGa2.default.event({ category: category, action: action });
  }
};

var logException = exports.logException = function logException() {
  var description = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fatal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (description) {
    _reactGa2.default.exception({ description: description, fatal: fatal });
  }
};