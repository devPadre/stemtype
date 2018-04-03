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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
    ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"],
    ["\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  margin-bottom: 15px;\n  font-size: 20px;\n  color: ",
      ";\n\n  a,\n  a:visited {\n    color: inherit;\n    text-decoration: none;\n    text-transform: uppercase;\n    transition: color 0.25s ease;\n  }\n"
    ],
    [
      "\n  margin-bottom: 15px;\n  font-size: 20px;\n  color: ",
      ";\n\n  a,\n  a:visited {\n    color: inherit;\n    text-decoration: none;\n    text-transform: uppercase;\n    transition: color 0.25s ease;\n  }\n"
    ]
  );

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

var MenuListItem = _styledComponents2.default.li(_templateObject2, function(
  props
) {
  return props.theme.colors.black;
});

exports.default = function(_ref) {
  var pageWrapId = _ref.pageWrapId,
    outerContainerId = _ref.outerContainerId,
    isOpen = _ref.isOpen,
    onStateChange = _ref.onStateChange,
    lang = _ref.lang;
  return _react2.default.createElement(
    _slide2.default,
    {
      pageWrapId: pageWrapId,
      outerContainerId: outerContainerId,
      styles: styles,
      customBurgerIcon: false,
      isOpen: isOpen,
      onStateChange: onStateChange
    },
    _react2.default.createElement(
      MenuList,
      null,
      _config2.default.menu.map(function(_ref2, index) {
        var text = _ref2.text,
          route = _ref2.route,
          params = _ref2.params;
        return _react2.default.createElement(
          MenuListItem,
          { key: index },
          _react2.default.createElement(
            _routes.Link,
            {
              route: route,
              params: (0, _extends3.default)({}, params, {
                lang: lang
              })
            },
            _react2.default.createElement("a", null, text)
          )
        );
      })
    )
  );
};
