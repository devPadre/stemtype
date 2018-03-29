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

var _HrStem = require("../components/HrStem");

var _HrStem2 = _interopRequireDefault(_HrStem);

var _routes = require("../utils/routes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/StemBanner.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  width: 100%;\n  position: relative;\n"], ["\n  width: 100%;\n  position: relative;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n  display: block;\n  position: relative;\n  width: 30%;\n  max-width: 340px;\n  padding-top: 120px;\n  padding-bottom: 10px;\n  margin: 0 auto;\n\n  @media screen and (max-width: ", ") {\n    width: 70%;\n  }\n\n  @media screen and (min-width: ", ") and (max-width: ", ") {\n    width: 50%;\n  }\n"], ["\n  display: block;\n  position: relative;\n  width: 30%;\n  max-width: 340px;\n  padding-top: 120px;\n  padding-bottom: 10px;\n  margin: 0 auto;\n\n  @media screen and (max-width: ", ") {\n    width: 70%;\n  }\n\n  @media screen and (min-width: ", ") and (max-width: ", ") {\n    width: 50%;\n  }\n"]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  position: absolute;\n  left: 0;\n  top: 0px;\n  width: 100%;\n  height: auto;\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0px;\n  width: 100%;\n  height: auto;\n"]);

var LogoBannerContainer = _styledComponents2.default.div(_templateObject);

var LogoWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.md + "em";
});

var LogoImage = _styledComponents2.default.img.attrs({
  src: "/assets/stem.png",
  srcSet: "/assets/stem@2x.png 2x",
  width: "100%",
  alt: _config2.default.siteTitle + " logo"
})(_templateObject3);

exports.default = function (_ref) {
  var lang = _ref.lang;
  return _react2.default.createElement(LogoBannerContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, _react2.default.createElement(_HrStem2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU3RlbUJhbm5lci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkNvbmZpZyIsIkhyU3RlbSIsIkxpbmsiLCJMb2dvQmFubmVyQ29udGFpbmVyIiwiZGl2IiwiTG9nb1dyYXBwZXIiLCJwcm9wcyIsInRoZW1lIiwiZmxleGJveGdyaWQiLCJicmVha3BvaW50cyIsInNtIiwibWQiLCJMb2dvSW1hZ2UiLCJpbWciLCJhdHRycyIsInNyYyIsInNyY1NldCIsIndpZHRoIiwiYWx0Iiwic2l0ZVRpdGxlIiwibGFuZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7Ozs7Ozs7Ozs7QUFFckIsSUFBTSxzQkFBc0IsMkJBQXRCLEFBQTZCLElBQW5DOztBQUtBLElBQU0seUNBQUEsQUFBcUIsc0JBU08saUJBQUE7U0FDNUIsTUFBQSxBQUFNLE1BQU4sQUFBWSxZQUFaLEFBQXdCLFlBQXhCLEFBQW9DLEtBRFIsQUFDYTtBQVZ6QyxDQUFjLEVBY2MsaUJBQUE7U0FDNUIsTUFBQSxBQUFNLE1BQU4sQUFBWSxZQUFaLEFBQXdCLFlBQXhCLEFBQW9DLEtBRFIsQUFDYTtBQWZ6QyxHQWVrRSxpQkFBQTtTQUNsRSxNQUFBLEFBQU0sTUFBTixBQUFZLFlBQVosQUFBd0IsWUFBeEIsQUFBb0MsS0FEOEIsQUFDekI7QUFoQi9DLEFBQU07O0FBcUJOLElBQU0sdUNBQVksQUFBTyxJQUFQLEFBQVc7T0FBTSxBQUM1QixBQUNMO1VBRmlDLEFBRXpCLEFBQ1I7U0FIaUMsQUFHMUIsQUFDUDtPQUFRLGlCQUFSLEFBQWUsWUFKWCxBQUFZLEFBQWlCO0FBQUEsQUFDakMsQ0FEZ0IsRUFBbEIsQUFhQTs7a0JBQWUsZ0JBQUE7TUFBQSxBQUFHLFlBQUgsQUFBRzt5QkFDZixjQUFEOztnQkFBQTtrQkFBQSxBQUNNO0FBRE47QUFBQSxHQUFBLGtCQUNNLEFBQUM7O2dCQUFEO2tCQUZPLEFBQ2IsQUFDTTtBQUFBO0FBQUE7QUFGUiIsImZpbGUiOiJTdGVtQmFubmVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=