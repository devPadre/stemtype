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

var _reactStyledFlexboxgrid = require("react-styled-flexboxgrid");

var _routes = require("../../utils/routes");

var _SocialLink = require("../SocialLink");

var _SocialLink2 = _interopRequireDefault(_SocialLink);

var _LogoLink = require("../LogoLink");

var _LogoLink2 = _interopRequireDefault(_LogoLink);

var _media = require("../../utils/media");

var _media2 = _interopRequireDefault(_media);

var _Icons = require("../Icons");

var _Icons2 = _interopRequireDefault(_Icons);

var _config = require("../../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var _templateObject = (0, _taggedTemplateLiteral3.default)(
    ["\n  min-height: 48px;\n  width: 100%;\n  background-color: ", ";\n"],
    ["\n  min-height: 48px;\n  width: 100%;\n  background-color: ", ";\n"]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  color: ",
      ";\n  font-size: 24px;\n  margin-top: 20px;\n  margin-left: 10px;\n  cursor: pointer;\n  display: none;\n\n  ",
      ";\n"
    ],
    [
      "\n  color: ",
      ";\n  font-size: 24px;\n  margin-top: 20px;\n  margin-left: 10px;\n  cursor: pointer;\n  display: none;\n\n  ",
      ";\n"
    ]
  ),
  _templateObject3 = (0, _taggedTemplateLiteral3.default)(
    ["display: inline-block;"],
    ["display: inline-block;"]
  ),
  _templateObject4 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    float: left;\n  }\n\n  li {\n    display: inline-block;\n    margin-right: 30px;\n    position: relative;\n    list-style: none;\n  }\n\n  a {\n    color: ",
      ";\n    font-weight: 400;\n    transition: 0.25s;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 11px;\n    font-weight: 400;\n    line-height: 80px;\n    letter-spacing: 2px;\n    display: block;\n    text-transform: uppercase;\n  }\n\n  a:hover,\n  a:focus {\n    color: ",
      ";\n  }\n\n  ",
      ";\n"
    ],
    [
      "\n  ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    float: left;\n  }\n\n  li {\n    display: inline-block;\n    margin-right: 30px;\n    position: relative;\n    list-style: none;\n  }\n\n  a {\n    color: ",
      ";\n    font-weight: 400;\n    transition: 0.25s;\n    text-decoration: none;\n    cursor: pointer;\n    font-size: 11px;\n    font-weight: 400;\n    line-height: 80px;\n    letter-spacing: 2px;\n    display: block;\n    text-transform: uppercase;\n  }\n\n  a:hover,\n  a:focus {\n    color: ",
      ";\n  }\n\n  ",
      ";\n"
    ]
  ),
  _templateObject5 = (0, _taggedTemplateLiteral3.default)(
    ["display: none;"],
    ["display: none;"]
  ),
  _templateObject6 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  font-size: ",
      "};\n  padding: 14px 0;\n  margin-right: 10px;\n  &:last-child {\n    margin-right: 0;\n  }\n"
    ],
    [
      "\n  font-size: ",
      "};\n  padding: 14px 0;\n  margin-right: 10px;\n  &:last-child {\n    margin-right: 0;\n  }\n"
    ]
  ),
  _templateObject7 = (0, _taggedTemplateLiteral3.default)(
    ["\n  padding: 16px 0;\n  margin-right: 0px;\n"],
    ["\n  padding: 16px 0;\n  margin-right: 0px;\n"]
  );

var HeaderContainer = _styledComponents2.default.div(_templateObject, function(
  props
) {
  return props.theme.colors.black;
});

var ToggleMenuIcon = _styledComponents2.default.div(
  _templateObject2,
  function(props) {
    return props.theme.colors.inversedText;
  },
  _media2.default.md(_templateObject3)
);

var Navigation = _styledComponents2.default.nav.attrs({
  role: "navigation"
})(
  _templateObject4,
  function(props) {
    return props.theme.colors.inversedLink;
  },
  function(props) {
    return props.theme.colors.inversedLinkHover;
  },
  _media2.default.md(_templateObject5)
);

var NavigationMenu = function NavigationMenu(_ref) {
  var lang = _ref.lang;
  return _react2.default.createElement(
    "ul",
    null,
    _config2.default.menu.map(function(_ref2, index) {
      var text = _ref2.text,
        route = _ref2.route,
        params = _ref2.params;
      return _react2.default.createElement(
        "li",
        { key: "menu-" + index },
        _react2.default.createElement(
          _routes.Link,
          {
            route: route,
            params: (0, _extends3.default)({}, params, { lang: lang })
          },
          _react2.default.createElement("a", null, text)
        )
      );
    })
  );
};

var HeaderRoot = function HeaderRoot(_ref3) {
  var children = _ref3.children;
  return _react2.default.createElement(
    "header",
    null,
    _react2.default.createElement(HeaderContainer, null, children)
  );
};

var HeaderSocialLink = _SocialLink2.default.extend(_templateObject6, function(
  props
) {
  return props.size || "20px";
});

var HeaderLogoLink = _LogoLink2.default.extend(_templateObject7);

exports.default = function(_ref4) {
  var onToggleMobileNavigation = _ref4.onToggleMobileNavigation,
    lang = _ref4.lang;
  return _react2.default.createElement(
    HeaderRoot,
    null,
    _react2.default.createElement(
      _reactStyledFlexboxgrid.Grid,
      null,
      _react2.default.createElement(
        _reactStyledFlexboxgrid.Row,
        { style: { margin: 0 } },
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 4, xsOffset: 0, sm: 4, smOffset: 0 },
          _react2.default.createElement(
            ToggleMenuIcon,
            null,
            _react2.default.createElement(_Icons2.default.Burger, {
              onClick: onToggleMobileNavigation
            })
          ),
          _react2.default.createElement(
            Navigation,
            null,
            _react2.default.createElement(NavigationMenu, { lang: lang })
          )
        ),
        _react2.default.createElement(
          _reactStyledFlexboxgrid.Col,
          { xs: 6, sm: 6 },
          _react2.default.createElement(
            HeaderLogoLink,
            { href: _config2.default.social.facebook.href },
            _react2.default.createElement(_Icons2.default.StemLogo, null)
          )
        )
      )
    )
  );
};
