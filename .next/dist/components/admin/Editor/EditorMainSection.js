"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  width: 1px;\n  position: relative;\n  flex-grow: 1;\n  -webkit-box-direction: normal;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-orient: vertical;\n\n  .markdown-editor {\n    height: calc(100vh - 46px);\n    overflow-y: auto;\n    position: relative;\n    width: 100%;\n    z-index: 0;\n  }\n\n  .markdown-editor-inner {\n    padding: 10vw 4vw;\n    padding-bottom: 66px;\n    max-width: 1000px;\n    margin: 0 auto;\n  }\n\n  footer {\n    align-items: center;\n    border-top: 1px solid #e5eff5;\n    display: flex;\n    flex-direction: row;\n    height: 46px;\n    justify-content: space-between;\n    min-height: 46px;\n    -webkit-box-direction: normal;\n    -webkit-box-orient: horizontal;\n  }\n"], ["\n  width: 1px;\n  position: relative;\n  flex-grow: 1;\n  -webkit-box-direction: normal;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-orient: vertical;\n\n  .markdown-editor {\n    height: calc(100vh - 46px);\n    overflow-y: auto;\n    position: relative;\n    width: 100%;\n    z-index: 0;\n  }\n\n  .markdown-editor-inner {\n    padding: 10vw 4vw;\n    padding-bottom: 66px;\n    max-width: 1000px;\n    margin: 0 auto;\n  }\n\n  footer {\n    align-items: center;\n    border-top: 1px solid #e5eff5;\n    display: flex;\n    flex-direction: row;\n    height: 46px;\n    justify-content: space-between;\n    min-height: 46px;\n    -webkit-box-direction: normal;\n    -webkit-box-orient: horizontal;\n  }\n"]);

exports.default = _styledComponents2.default.section(_templateObject);