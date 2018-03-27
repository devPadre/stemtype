"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactStyledFlexboxgrid = require("react-styled-flexboxgrid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/Post/ImageGrid.js";


var Two = function Two(_ref) {
  var first = _ref.first,
      second = _ref.second;
  return _react2.default.createElement(_reactStyledFlexboxgrid.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 6, __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, first), _react2.default.createElement(_reactStyledFlexboxgrid.Col, { xs: 12, sm: 6, __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, second));
};

exports.default = function (_ref2) {
  var children = _ref2.children;

  var images = [];
  _react2.default.Children.forEach(children, function (child) {
    if (child.props && child.props.url) {
      images.push(child);
    }
  });
  return _react2.default.createElement(_reactStyledFlexboxgrid.Grid, { fluid: true, style: { padding: 0 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, images.length === 1 && images[0], images.length === 2 && _react2.default.createElement(Two, { first: images[0], second: images[1], __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }), images.length === 3 && _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, images[0], _react2.default.createElement(Two, { first: images[1], second: images[2], __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  })), images.length === 4 && _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(Two, { first: images[0], second: images[1], __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement(Two, { first: images[2], second: images[3], __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC9JbWFnZUdyaWQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJHcmlkIiwiUm93IiwiQ29sIiwiVHdvIiwiZmlyc3QiLCJzZWNvbmQiLCJjaGlsZHJlbiIsImltYWdlcyIsIkNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwicHJvcHMiLCJ1cmwiLCJwdXNoIiwicGFkZGluZyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFLOzs7Ozs7O0FBRXBCLElBQU0sTUFBTSxTQUFOLEFBQU0sVUFBQTtNQUFBLEFBQUcsYUFBSCxBQUFHO01BQUgsQUFBVSxjQUFWLEFBQVU7eUJBQ3BCLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQyw2Q0FBSSxJQUFMLEFBQVMsSUFBSSxJQUFiLEFBQWlCO2dCQUFqQjtrQkFBQSxBQUNHO0FBREg7S0FERixBQUNFLEFBR0Esd0JBQUEsQUFBQyw2Q0FBSSxJQUFMLEFBQVMsSUFBSSxJQUFiLEFBQWlCO2dCQUFqQjtrQkFBQSxBQUNHO0FBREg7S0FMUSxBQUNWLEFBSUU7QUFMSixBQVdBOztrQkFBZSxpQkFBa0I7TUFBZixBQUFlLGlCQUFmLEFBQWUsQUFDL0I7O01BQU0sU0FBTixBQUFlLEFBQ2Y7a0JBQUEsQUFBTSxTQUFOLEFBQWUsUUFBZixBQUF1QixVQUFVLGlCQUFTLEFBQ3hDO1FBQUksTUFBQSxBQUFNLFNBQVMsTUFBQSxBQUFNLE1BQXpCLEFBQStCLEtBQUssQUFDbEM7YUFBQSxBQUFPLEtBQVAsQUFBWSxBQUNiO0FBQ0Y7QUFKRCxBQUtBO3lCQUNFLEFBQUMsOENBQUssT0FBTixNQUFZLE9BQU8sRUFBRSxTQUFyQixBQUFtQixBQUFXO2dCQUE5QjtrQkFBQSxBQUNHO0FBREg7R0FBQSxTQUNHLEFBQU8sV0FBUCxBQUFrQixLQUFLLE9BRDFCLEFBQzBCLEFBQU8sQUFDOUIsV0FBQSxBQUFPLFdBQVAsQUFBa0IsbUNBQUssQUFBQyxPQUFJLE9BQU8sT0FBWixBQUFZLEFBQU8sSUFBSSxRQUFRLE9BQS9CLEFBQStCLEFBQU87Z0JBQXRDO2tCQUYxQixBQUUwQixBQUN2QjtBQUR1QjtHQUFBLFVBQ3ZCLEFBQU8sV0FBUCxBQUFrQixxQkFDakIsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsR0FBQSxTQUFBLEFBQ0csQUFBTyxBQUNSLGtDQUFBLEFBQUMsT0FBSSxPQUFPLE9BQVosQUFBWSxBQUFPLElBQUksUUFBUSxPQUEvQixBQUErQixBQUFPO2dCQUF0QztrQkFOTixBQUlJLEFBRUUsQUFHSDtBQUhHO2NBR0gsQUFBTyxXQUFQLEFBQWtCLHFCQUNqQixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGdDQUNFLEFBQUMsT0FBSSxPQUFPLE9BQVosQUFBWSxBQUFPLElBQUksUUFBUSxPQUEvQixBQUErQixBQUFPO2dCQUF0QztrQkFERixBQUNFLEFBQ0E7QUFEQTtvQ0FDQSxBQUFDLE9BQUksT0FBTyxPQUFaLEFBQVksQUFBTyxJQUFJLFFBQVEsT0FBL0IsQUFBK0IsQUFBTztnQkFBdEM7a0JBYlIsQUFDRSxBQVVJLEFBRUUsQUFLVDtBQUxTOztBQXBCViIsImZpbGUiOiJJbWFnZUdyaWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==