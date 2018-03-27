"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactPlayer = require("react-player");

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

var _reactLazyload = require("react-lazyload");

var _reactLazyload2 = _interopRequireDefault(_reactLazyload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Player.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  margin-bottom: 26px;\n  background-color: black;\n"], ["\n  display: block;\n  margin-bottom: 26px;\n  background-color: black;\n"]);

var PlayerContainer = _styledComponents2.default.div(_templateObject);

var Player = function Player(_ref) {
  var url = _ref.url,
      width = _ref.width,
      lazy = _ref.lazy,
      height = _ref.height,
      offset = _ref.offset,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ["url", "width", "lazy", "height", "offset"]);

  return _react2.default.createElement(PlayerContainer, { style: { width: width, height: height }, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, lazy && _react2.default.createElement(_reactLazyload2.default, { height: height, offset: offset, once: true, __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, _react2.default.createElement(_reactPlayer2.default, (0, _extends3.default)({ url: url, width: width, height: height }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }))), !lazy && _react2.default.createElement(_reactPlayer2.default, (0, _extends3.default)({ url: url, width: width, height: height }, restProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  })));
};

Player.defaultProps = {
  lazy: true,
  width: "100%",
  height: "360px",
  offset: 200
};

exports.default = Player;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheWVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVkIiwiUmVhY3RQbGF5ZXIiLCJMYXp5TG9hZCIsIlBsYXllckNvbnRhaW5lciIsImRpdiIsIlBsYXllciIsInVybCIsIndpZHRoIiwibGF6eSIsImhlaWdodCIsIm9mZnNldCIsInJlc3RQcm9wcyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7OztBQUVQLElBQU0sa0JBQWtCLDJCQUFsQixBQUF5QixJQUEvQjs7QUFNQSxJQUFNLFNBQVMsU0FBVCxBQUFTLGFBQUE7TUFBQSxBQUFHLFdBQUgsQUFBRztNQUFILEFBQVEsYUFBUixBQUFRO01BQVIsQUFBZSxZQUFmLEFBQWU7TUFBZixBQUFxQixjQUFyQixBQUFxQjtNQUFyQixBQUE2QixjQUE3QixBQUE2QjtNQUE3QixBQUF3Qyw0RkFBeEM7O3lCQUNaLGNBQUQsbUJBQWlCLE9BQU8sRUFBRSxPQUFGLE9BQVMsUUFBakMsQUFBd0I7Z0JBQXhCO2tCQUFBLEFBQ0c7QUFESDtHQUFBLDBCQUVJLEFBQUMseUNBQVMsUUFBVixBQUFrQixRQUFRLFFBQTFCLEFBQWtDLFFBQVEsTUFBMUM7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQyw4REFBWSxLQUFiLEFBQWtCLEtBQUssT0FBdkIsQUFBOEIsT0FBTyxRQUFyQyxBQUE2QyxVQUE3QyxBQUF5RDs7Z0JBQXpEO2tCQUhOLEFBRUksQUFDRSxBQUdIO0FBSEc7QUFBQSxTQUdILEFBQUMsd0JBQ0EsQUFBQyw4REFBWSxLQUFiLEFBQWtCLEtBQUssT0FBdkIsQUFBOEIsT0FBTyxRQUFyQyxBQUE2QyxVQUE3QyxBQUF5RDs7Z0JBQXpEO2tCQVJTLEFBQ2IsQUFPSTtBQUFBO0FBQUEsSUFBQTtBQVJOOztBQWFBLE9BQUEsQUFBTztRQUFlLEFBQ2QsQUFDTjtTQUZvQixBQUViLEFBQ1A7VUFIb0IsQUFHWixBQUNSO1VBSkYsQUFBc0IsQUFJWixBQUdWO0FBUHNCLEFBQ3BCOztrQkFNRixBQUFlIiwiZmlsZSI6IlBsYXllci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9