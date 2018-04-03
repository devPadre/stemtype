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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  position: relative;\n  margin: 0 auto;\n  max-width: 1200px;\n  padding: 24px 4vw 3vw;\n"
    ],
    [
      "\n  position: relative;\n  margin: 0 auto;\n  max-width: 1200px;\n  padding: 24px 4vw 3vw;\n"
    ]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  -webkit-box-pack: justify;\n  flex-shrink: 0;\n  justify-content: space-between;\n  margin: 0 0 2vw;\n  display: flex;\n  align-items: center;\n"
    ],
    [
      "\n  -webkit-box-pack: justify;\n  flex-shrink: 0;\n  justify-content: space-between;\n  margin: 0 0 2vw;\n  display: flex;\n  align-items: center;\n"
    ]
  ),
  _templateObject3 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  letter-spacing: 0.4px;\n  margin: 0;\n  min-height: 35px;\n  padding: 0;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n"
    ],
    [
      "\n  letter-spacing: 0.4px;\n  margin: 0;\n  min-height: 35px;\n  padding: 0;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n"
    ]
  ),
  _templateObject4 = (0, _taggedTemplateLiteral3.default)(
    ["\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n"],
    ["\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n"]
  );

var AdminPageSection = _styledComponents2.default.section(_templateObject);

var AdminPageHeaderContainer = _styledComponents2.default.div(_templateObject2);

var Title = _styledComponents2.default.h1(_templateObject3);

var Actions = _styledComponents2.default.div(_templateObject4);

AdminPageSection.Header = function(_ref) {
  var children = _ref.children,
    renderActions = _ref.renderActions;
  return _react2.default.createElement(
    AdminPageHeaderContainer,
    null,
    _react2.default.createElement(Title, null, children),
    renderActions
      ? _react2.default.createElement(Actions, null, renderActions())
      : null
  );
};

exports.default = AdminPageSection;
