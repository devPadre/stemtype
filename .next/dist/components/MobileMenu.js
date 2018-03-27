"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _slide = require("react-burger-menu/lib/menus/slide");

var _slide2 = _interopRequireDefault(_slide);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

var _routes = require("../utils/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/MobileMenu.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"], ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  margin-bottom: 15px;\n  font-size: 20px;\n  color: ", ";\n\n  a,\n  a:visited {\n    color: inherit;\n    text-decoration: none;\n    text-transform: uppercase;\n    transition: color 0.25s ease;\n  }\n"], ["\n  margin-bottom: 15px;\n  font-size: 20px;\n  color: ", ";\n\n  a,\n  a:visited {\n    color: inherit;\n    text-decoration: none;\n    text-transform: uppercase;\n    transition: color 0.25s ease;\n  }\n"]);

var styles = {
  bmCrossButton: {
    height: "24px",
    width: "24px"
  },
  bmCross: {
    background: "#000"
  },
  bmMenu: {
    background: "#FFF",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em"
  },
  bmMorphShape: {
    fill: "#FFF"
  },
  bmItemList: {
    color: "#000",
    padding: 0
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)"
  }
};

var MenuList = _styledComponents2.default.ul(_templateObject);

var MenuListItem = _styledComponents2.default.li(_templateObject2, function (props) {
  return props.theme.colors.black;
});

exports.default = function (_ref) {
  var pageWrapId = _ref.pageWrapId,
      outerContainerId = _ref.outerContainerId,
      isOpen = _ref.isOpen,
      onStateChange = _ref.onStateChange,
      lang = _ref.lang;
  return _react2.default.createElement(_slide2.default, {
    pageWrapId: pageWrapId,
    outerContainerId: outerContainerId,
    styles: styles,
    customBurgerIcon: false,
    isOpen: isOpen,
    onStateChange: onStateChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, _react2.default.createElement(MenuList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, _config2.default.menu.map(function (_ref2, index) {
    var text = _ref2.text,
        route = _ref2.route,
        params = _ref2.params;
    return _react2.default.createElement(MenuListItem, { key: index, __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      }
    }, _react2.default.createElement(_routes.Link, {
      route: route,
      params: (0, _extends3.default)({}, params, {
        lang: lang
      }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    }, _react2.default.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      }
    }, text)));
  })));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTW9iaWxlTWVudS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIk1lbnUiLCJDb25maWciLCJMaW5rIiwic3R5bGVzIiwiYm1Dcm9zc0J1dHRvbiIsImhlaWdodCIsIndpZHRoIiwiYm1Dcm9zcyIsImJhY2tncm91bmQiLCJibU1lbnUiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJibU1vcnBoU2hhcGUiLCJmaWxsIiwiYm1JdGVtTGlzdCIsImNvbG9yIiwiYm1PdmVybGF5IiwiTWVudUxpc3QiLCJ1bCIsIk1lbnVMaXN0SXRlbSIsImxpIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImJsYWNrIiwicGFnZVdyYXBJZCIsIm91dGVyQ29udGFpbmVySWQiLCJpc09wZW4iLCJvblN0YXRlQ2hhbmdlIiwibGFuZyIsIm1lbnUiLCJtYXAiLCJpbmRleCIsInRleHQiLCJyb3V0ZSIsInBhcmFtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7Ozs7QUFFckIsSUFBTTs7WUFDVyxBQUNMLEFBQ1I7V0FIVyxBQUNFLEFBRU4sQUFFVDtBQUplLEFBQ2I7O2dCQUZXLEFBS0osQUFDSyxBQUVkO0FBSFMsQUFDUDs7Z0JBRU0sQUFDTSxBQUNaO2FBRk0sQUFFRyxBQUNUO2NBWFcsQUFRTCxBQUdJLEFBRVo7QUFMUSxBQUNOOztVQVRXLEFBYUMsQUFDTixBQUVSO0FBSGMsQUFDWjs7V0FFVSxBQUNILEFBQ1A7YUFsQlcsQUFnQkQsQUFFRCxBQUVYO0FBSlksQUFDVjs7Z0JBakJKLEFBQWUsQUFvQkYsQUFDRztBQURILEFBQ1Q7QUFyQlcsQUFDYjs7QUF3QkYsSUFBTSxXQUFXLDJCQUFYLEFBQWtCLEdBQXhCOztBQU1BLElBQU0sMENBQUEsQUFBc0IscUJBR2pCLGlCQUFBO1NBQVMsTUFBQSxBQUFNLE1BQU4sQUFBWSxPQUFyQixBQUE0QjtBQUh2QyxBQUFNLEFBY04sQ0FkcUI7O2tCQWNOLGdCQUFBO01BQUEsQUFDYixrQkFEYSxBQUNiO01BRGEsQUFFYix3QkFGYSxBQUViO01BRmEsQUFHYixjQUhhLEFBR2I7TUFIYSxBQUliLHFCQUphLEFBSWI7TUFKYSxBQUtiLFlBTGEsQUFLYjt5QkFFQSxBQUFDO2dCQUFELEFBQ2MsQUFDWjtzQkFGRixBQUVvQixBQUNsQjtZQUhGLEFBR1UsQUFDUjtzQkFKRixBQUlvQixBQUNsQjtZQUxGLEFBS1UsQUFDUjttQkFORixBQU1pQjs7Z0JBTmpCO2tCQUFBLEFBUUU7QUFSRjtBQUNFLEdBREYsa0JBUUcsY0FBRDs7Z0JBQUE7a0JBQUEsQUFDRztBQURIO0FBQUEsc0JBQ0csQUFBTyxLQUFQLEFBQVksSUFBSSxpQkFBQSxBQUEwQixPQUExQjtRQUFBLEFBQUcsYUFBSCxBQUFHO1FBQUgsQUFBUyxjQUFULEFBQVM7UUFBVCxBQUFnQixlQUFoQixBQUFnQjsyQkFDOUIsY0FBRCxnQkFBYyxLQUFkLEFBQW1CO2tCQUFuQjtvQkFBQSxBQUNFO0FBREY7S0FBQSxrQkFDRSxBQUFDO2FBQUQsQUFDUyxBQUNQO3lDQUFBLEFBQ0s7Y0FIUCxBQUVFO0FBRUU7O2tCQUpKO29CQUFBLEFBT0U7QUFQRjtBQUNFLHVCQU1BLGNBQUE7O2tCQUFBO29CQUFBLEFBQUk7QUFBSjtBQUFBLE9BVFcsQUFDZixBQUNFLEFBT0U7QUF6QkcsQUFPYixBQVFFLEFBQ0c7QUFoQlAiLCJmaWxlIjoiTW9iaWxlTWVudS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9