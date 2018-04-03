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
      "\n  0%   { \n    -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(0deg);  /* IE 9 */\n    transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(360deg);  /* IE 9 */\n    transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n"
    ],
    [
      "\n  0%   { \n    -webkit-transform: rotate(0deg);  /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(0deg);  /* IE 9 */\n    transform: rotate(0deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n  100% {\n    -webkit-transform: rotate(360deg);  /* Chrome, Opera 15+, Safari 3.1+ */\n    -ms-transform: rotate(360deg);  /* IE 9 */\n    transform: rotate(360deg);  /* Firefox 16+, IE 10+, Opera */\n  }\n"
    ]
  ),
  _templateObject2 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n\n  ",
      ";\n"
    ],
    [
      "\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n\n  ",
      ";\n"
    ]
  ),
  _templateObject3 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n          visibility: hidden;\n\n          -webkit-transform: translateY(\n            -100%\n          ); /* Chrome, Opera 15+, Safari 3.1+ */\n          -ms-transform: translateY(-100%); /* IE 9 */\n          transform: translateY(-100%); /* Firefox 16+, IE 10+, Opera */\n\n          -webkit-transition: all 0.3s 1s ease-out;\n          transition: all 0.3s 1s ease-out;\n        "
    ],
    [
      "\n          visibility: hidden;\n\n          -webkit-transform: translateY(\n            -100%\n          ); /* Chrome, Opera 15+, Safari 3.1+ */\n          -ms-transform: translateY(-100%); /* IE 9 */\n          transform: translateY(-100%); /* Firefox 16+, IE 10+, Opera */\n\n          -webkit-transition: all 0.3s 1s ease-out;\n          transition: all 0.3s 1s ease-out;\n        "
    ]
  ),
  _templateObject4 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  position: fixed;\n  top: 0;\n  width: 51%;\n  height: 100%;\n  background: #222222;\n  z-index: 1000;\n  -webkit-transform: translateX(0); /* Chrome, Opera 15+, Safari 3.1+ */\n  -ms-transform: translateX(0); /* IE 9 */\n  transform: translateX(0); /* Firefox 16+, IE 10+, Opera */\n"
    ],
    [
      "\n  position: fixed;\n  top: 0;\n  width: 51%;\n  height: 100%;\n  background: #222222;\n  z-index: 1000;\n  -webkit-transform: translateX(0); /* Chrome, Opera 15+, Safari 3.1+ */\n  -ms-transform: translateX(0); /* IE 9 */\n  transform: translateX(0); /* Firefox 16+, IE 10+, Opera */\n"
    ]
  ),
  _templateObject5 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #3498db;\n\n  -webkit-animation: ",
      " 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: ",
      ' 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n  z-index: 1001;\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    right: 5px;\n    bottom: 5px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #e74c3c;\n\n    -webkit-animation: ',
      " 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n    animation: ",
      ' 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #f9c922;\n\n    -webkit-animation: ',
      " 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n    animation: ",
      " 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n  }\n\n  ",
      ";\n"
    ],
    [
      "\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 150px;\n  height: 150px;\n  margin: -75px 0 0 -75px;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: #3498db;\n\n  -webkit-animation: ",
      " 2s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n  animation: ",
      ' 2s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n  z-index: 1001;\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 5px;\n    left: 5px;\n    right: 5px;\n    bottom: 5px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #e74c3c;\n\n    -webkit-animation: ',
      " 3s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n    animation: ",
      ' 3s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    border-top-color: #f9c922;\n\n    -webkit-animation: ',
      " 1.5s linear infinite; /* Chrome, Opera 15+, Safari 5+ */\n    animation: ",
      " 1.5s linear infinite; /* Chrome, Firefox 16+, IE 10+, Opera */\n  }\n\n  ",
      ";\n"
    ]
  ),
  _templateObject6 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n          opacity: 0;\n          -webkit-transition: all 0.3s ease-out;\n          transition: all 0.3s ease-out;\n        "
    ],
    [
      "\n          opacity: 0;\n          -webkit-transition: all 0.3s ease-out;\n          transition: all 0.3s ease-out;\n        "
    ]
  ),
  _templateObject7 = (0, _taggedTemplateLiteral3.default)(
    ["\n  left: 0;\n  ", ";\n"],
    ["\n  left: 0;\n  ", ";\n"]
  ),
  _templateObject8 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n          -webkit-transform: translateX(\n            -100%\n          ); /* Chrome, Opera 15+, Safari 3.1+ */\n          -ms-transform: translateX(-100%); /* IE 9 */\n          transform: translateX(-100%); /* Firefox 16+, IE 10+, Opera */\n\n          -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n        "
    ],
    [
      "\n          -webkit-transform: translateX(\n            -100%\n          ); /* Chrome, Opera 15+, Safari 3.1+ */\n          -ms-transform: translateX(-100%); /* IE 9 */\n          transform: translateX(-100%); /* Firefox 16+, IE 10+, Opera */\n\n          -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n        "
    ]
  ),
  _templateObject9 = (0, _taggedTemplateLiteral3.default)(
    ["\n  right: 0;\n  ", ";\n"],
    ["\n  right: 0;\n  ", ";\n"]
  ),
  _templateObject10 = (0, _taggedTemplateLiteral3.default)(
    [
      "\n          -webkit-transform: translateX(\n            100%\n          ); /* Chrome, Opera 15+, Safari 3.1+ */\n          -ms-transform: translateX(100%); /* IE 9 */\n          transform: translateX(100%); /* Firefox 16+, IE 10+, Opera */\n\n          -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n        "
    ],
    [
      "\n          -webkit-transform: translateX(\n            100%\n          ); /* Chrome, Opera 15+, Safari 3.1+ */\n          -ms-transform: translateX(100%); /* IE 9 */\n          transform: translateX(100%); /* Firefox 16+, IE 10+, Opera */\n\n          -webkit-transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n          transition: all 0.7s 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\n        "
    ]
  );

var spin = (0, _styledComponents.keyframes)(_templateObject);

var Container = _styledComponents2.default.div(_templateObject2, function(
  props
) {
  return props.loaded ? (0, _styledComponents.css)(_templateObject3) : "";
});

var Section = _styledComponents2.default.div(_templateObject4);

var Loader = _styledComponents2.default.div(
  _templateObject5,
  spin,
  spin,
  spin,
  spin,
  spin,
  spin,
  function(props) {
    return props.loaded ? (0, _styledComponents.css)(_templateObject6) : "";
  }
);

var LeftSection = Section.extend(_templateObject7, function(props) {
  return (// @ts-ignore
    props.loaded ? (0, _styledComponents.css)(_templateObject8) : "" );
});

var RightSection = Section.extend(_templateObject9, function(props) {
  return (// @ts-ignore
    props.loaded ? (0, _styledComponents.css)(_templateObject10) : "" );
});

function SplashLoader(_ref) {
  var loaded = _ref.loaded;

  return _react2.default.createElement(
    Container,
    { loaded: loaded },
    _react2.default.createElement(Loader, { loaded: loaded }),
    _react2.default.createElement(LeftSection, { loaded: loaded }),
    _react2.default.createElement(RightSection, { loaded: loaded })
  );
}

SplashLoader.defaultProps = {
  loaded: false
};

exports.default = SplashLoader;
