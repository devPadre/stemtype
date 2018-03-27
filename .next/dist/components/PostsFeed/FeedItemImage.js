"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactVisibilitySensor = require("react-visibility-sensor");

var _reactVisibilitySensor2 = _interopRequireDefault(_reactVisibilitySensor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/PostsFeed/FeedItemImage.js";

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  ", " display: block;\n"], ["\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  ", " display: block;\n"]),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(["\n          background-image: url(", ");\n        "], ["\n          background-image: url(", ");\n        "]),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(["\n  height: 200px;\n  @media screen and (max-width: ", ") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ", ") and (max-width: ", ") {\n    height: 140px;\n  }\n"], ["\n  height: 200px;\n  @media screen and (max-width: ", ") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ", ") and (max-width: ", ") {\n    height: 140px;\n  }\n"]),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(["\n  height: 250px;\n  width: 100%;\n  @media screen and (max-width: ", ") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ", ") and (max-width: ", ") {\n    height: 200px;\n  }\n"], ["\n  height: 250px;\n  width: 100%;\n  @media screen and (max-width: ", ") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ", ") and (max-width: ", ") {\n    height: 200px;\n  }\n"]);

var BasicItemImage = _styledComponents2.default.div(_templateObject, function (props) {
  return props.visible ? (0, _styledComponents.css)(_templateObject2, function (props) {
    return props.src;
  }) : "";
});

var DefaultItemImage = (0, _styledComponents2.default)(BasicItemImage)(_templateObject3, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.md + "em";
});

var FeaturedItemImage = (0, _styledComponents2.default)(BasicItemImage)(_templateObject4, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.sm + "em";
}, function (props) {
  return props.theme.flexboxgrid.breakpoints.md + "em";
});

var ItemImage = function (_React$Component) {
  (0, _inherits3.default)(ItemImage, _React$Component);

  function ItemImage(props) {
    (0, _classCallCheck3.default)(this, ItemImage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ItemImage.__proto__ || (0, _getPrototypeOf2.default)(ItemImage)).call(this, props));

    _this.onChangeVisibility = function (isVisible) {
      if (isVisible) {
        _this.setState({ isVisible: true });
      }
    };

    _this.state = {
      isVisible: props.lazy ? false : true
    };
    return _this;
  }

  (0, _createClass3.default)(ItemImage, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          featured = _props.featured,
          rest = (0, _objectWithoutProperties3.default)(_props, ["featured"]);

      var Component = featured ? FeaturedItemImage : DefaultItemImage;

      return _react2.default.createElement(_reactVisibilitySensor2.default, { partialVisibility: true, onChange: this.onChangeVisibility, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, _react2.default.createElement(Component, (0, _extends3.default)({}, rest, { visible: this.state.isVisible, __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })));
    }
  }]);

  return ItemImage;
}(_react2.default.Component);

exports.default = ItemImage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdHNGZWVkL0ZlZWRJdGVtSW1hZ2UuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJzdHlsZWQiLCJjc3MiLCJWaXNpYmlsaXR5U2Vuc29yIiwiQmFzaWNJdGVtSW1hZ2UiLCJkaXYiLCJwcm9wcyIsInZpc2libGUiLCJzcmMiLCJEZWZhdWx0SXRlbUltYWdlIiwidGhlbWUiLCJmbGV4Ym94Z3JpZCIsImJyZWFrcG9pbnRzIiwic20iLCJtZCIsIkZlYXR1cmVkSXRlbUltYWdlIiwiSXRlbUltYWdlIiwib25DaGFuZ2VWaXNpYmlsaXR5IiwiaXNWaXNpYmxlIiwic2V0U3RhdGUiLCJzdGF0ZSIsImxhenkiLCJmZWF0dXJlZCIsInJlc3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7Ozs7Ozs7Ozs7OztBQUVQLElBQU0sNENBQUEsQUFBd0IscUJBSzFCLGlCQUFBO2VBQ0EsQUFBTSx1REFFd0IsaUJBQUE7V0FBUyxNQUFULEFBQWU7QUFGN0MsR0FBQSxBQUNJLENBREosR0FEQSxBQUtJO0FBVlIsQUFBTSxDQUFpQjs7QUFhdkIsSUFBTSxtREFBQSxBQUFtQixBQUFPLGtDQUVFLGlCQUFBO1NBQzVCLE1BQUEsQUFBTSxNQUFOLEFBQVksWUFBWixBQUF3QixZQUF4QixBQUFvQyxLQURSLEFBQ2E7QUFIekMsQ0FBbUIsRUFNUyxpQkFBQTtTQUM1QixNQUFBLEFBQU0sTUFBTixBQUFZLFlBQVosQUFBd0IsWUFBeEIsQUFBb0MsS0FEUixBQUNhO0FBUHpDLEdBT2tFLGlCQUFBO1NBQ2xFLE1BQUEsQUFBTSxNQUFOLEFBQVksWUFBWixBQUF3QixZQUF4QixBQUFvQyxLQUQ4QixBQUN6QjtBQVIvQyxBQUFNOztBQWFOLElBQU0sb0RBQUEsQUFBb0IsQUFBTyxrQ0FHQyxpQkFBQTtTQUM1QixNQUFBLEFBQU0sTUFBTixBQUFZLFlBQVosQUFBd0IsWUFBeEIsQUFBb0MsS0FEUixBQUNhO0FBSnpDLENBQW9CLEVBT1EsaUJBQUE7U0FDNUIsTUFBQSxBQUFNLE1BQU4sQUFBWSxZQUFaLEFBQXdCLFlBQXhCLEFBQW9DLEtBRFIsQUFDYTtBQVJ6QyxHQVFrRSxpQkFBQTtTQUNsRSxNQUFBLEFBQU0sTUFBTixBQUFZLFlBQVosQUFBd0IsWUFBeEIsQUFBb0MsS0FEOEIsQUFDekI7QUFUL0MsQUFBTTs7SSxBQWNlO3FDQUNuQjs7cUJBQUEsQUFBWSxPQUFPO3dDQUFBOzs0SUFBQSxBQUNYOztVQURXLEFBT25CLHFCQUFxQixxQkFBYSxBQUNoQztVQUFBLEFBQUksV0FBVyxBQUNiO2NBQUEsQUFBSyxTQUFTLEVBQUUsV0FBaEIsQUFBYyxBQUFhLEFBQzVCO0FBQ0Y7QUFYa0IsQUFFakI7O1VBQUEsQUFBSztpQkFDUSxNQUFBLEFBQU0sT0FBTixBQUFhLFFBSFQsQUFFakIsQUFBYSxBQUNxQjtBQURyQixBQUNYO1dBRUg7Ozs7OzZCQVFRO21CQUN1QixLQUR2QixBQUM0QjtVQUQ1QixBQUNDLGtCQURELEFBQ0M7VUFERCxBQUNjLHVEQUNyQjs7VUFBTSxZQUFZLFdBQUEsQUFBVyxvQkFBN0IsQUFBaUQsQUFFakQ7OzZCQUNFLEFBQUMsaURBQWlCLG1CQUFsQixNQUFvQyxVQUFVLEtBQTlDLEFBQW1EO29CQUFuRDtzQkFBQSxBQUNFO0FBREY7T0FBQSxnQ0FDRSxBQUFDLHNDQUFELEFBQWUsUUFBTSxTQUFTLEtBQUEsQUFBSyxNQUFuQyxBQUF5QztvQkFBekM7c0JBRkosQUFDRSxBQUNFLEFBR0w7QUFISzs7Ozs7O0VBcEIrQixnQkFBTSxBOztrQkFBeEIsQSIsImZpbGUiOiJGZWVkSXRlbUltYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=