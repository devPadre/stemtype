"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

var _routes = require("../utils/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/LogoBanner.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  position: relative;\n"], ["\n  width: 100%;\n  position: relative;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  position: relative;\n  width: 30%;\n  max-width: 340px;\n  padding-top: 120px;\n  padding-bottom: 10px;\n  margin: 0 auto;\n\n  @media screen and (max-width: ", ") {\n    width: 70%;\n  }\n\n  @media screen and (min-width: ", ") and (max-width: ", ") {\n    width: 50%;\n  }\n"], ["\n  display: block;\n  position: relative;\n  width: 30%;\n  max-width: 340px;\n  padding-top: 120px;\n  padding-bottom: 10px;\n  margin: 0 auto;\n\n  @media screen and (max-width: ", ") {\n    width: 70%;\n  }\n\n  @media screen and (min-width: ", ") and (max-width: ", ") {\n    width: 50%;\n  }\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  position: absolute;\n  left: 0;\n  top: 30px;\n  width: 100%;\n  height: auto;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 30px;\n  width: 100%;\n  height: auto;\n"]);

var LogoBannerContainer = _styledComponents2.default.div(_templateObject);

var LogoWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.md + "em";
});

var LogoImage = _styledComponents2.default.img.attrs({
  src: "/assets/logo.png",
  srcSet: "/assets/logo@2x.png 2x",
  width: "100%",
  alt: _config2.default.siteTitle + " logo"
})(_templateObject3);

exports.default = function (_ref) {
  var lang = _ref.lang;
  return _react2.default.createElement(LogoBannerContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, _react2.default.createElement(LogoWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(_routes.Link, { route: "index", params: { lang: lang }, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, _react2.default.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }, _react2.default.createElement(LogoImage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), _react2.default.createElement("div", { style: { paddingBottom: "18.76%" }, __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  })))));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTG9nb0Jhbm5lci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkNvbmZpZyIsIkxpbmsiLCJMb2dvQmFubmVyQ29udGFpbmVyIiwiZGl2IiwiTG9nb1dyYXBwZXIiLCJwcm9wcyIsInRoZW1lIiwiZmxleGJveGdyaWQiLCJicmVha3BvaW50cyIsInNtIiwibWQiLCJMb2dvSW1hZ2UiLCJpbWciLCJhdHRycyIsInNyYyIsInNyY1NldCIsIndpZHRoIiwiYWx0Iiwic2l0ZVRpdGxlIiwibGFuZyIsInBhZGRpbmdCb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7Ozs7QUFFckIsSUFBTSxzQkFBc0IsMkJBQXRCLEFBQTZCLElBQW5DOztBQUtBLElBQU0seUNBQUEsQUFBcUIsc0JBU08saUJBQUE7U0FDNUIsTUFBQSxBQUFNLE1BQU4sQUFBWSxZQUFaLEFBQXdCLFlBQXhCLEFBQW9DLEtBRFIsQUFDYTtBQVZ6QyxDQUFjLEVBY2MsaUJBQUE7U0FDNUIsTUFBQSxBQUFNLE1BQU4sQUFBWSxZQUFaLEFBQXdCLFlBQXhCLEFBQW9DLEtBRFIsQUFDYTtBQWZ6QyxHQWVrRSxpQkFBQTtTQUNsRSxNQUFBLEFBQU0sTUFBTixBQUFZLFlBQVosQUFBd0IsWUFBeEIsQUFBb0MsS0FEOEIsQUFDekI7QUFoQi9DLEFBQU07O0FBcUJOLElBQU0sdUNBQVksQUFBTyxJQUFQLEFBQVc7T0FBTSxBQUM1QixBQUNMO1VBRmlDLEFBRXpCLEFBQ1I7U0FIaUMsQUFHMUIsQUFDUDtPQUFRLGlCQUFSLEFBQWUsWUFKWCxBQUFZLEFBQWlCO0FBQUEsQUFDakMsQ0FEZ0IsRUFBbEIsQUFhQTs7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLFlBQUgsQUFBRzt5QkFDZixjQUFEOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNHLGNBQUQ7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZLFNBQVEsUUFBUSxFQUFFLE1BQTlCLEFBQTRCO2dCQUE1QjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsbUNBQ0UsQUFBQzs7Z0JBQUQ7a0JBREYsQUFDRSxBQUNBO0FBREE7QUFBQSw2Q0FDSyxPQUFPLEVBQUUsZUFBZCxBQUFZLEFBQWlCO2dCQUE3QjtrQkFOSyxBQUNiLEFBQ0UsQUFDRSxBQUNFLEFBRUU7QUFBQTs7QUFOViIsImZpbGUiOiJMb2dvQmFubmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=