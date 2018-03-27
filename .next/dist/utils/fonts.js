"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fontfaceobserver = require("fontfaceobserver");

var _fontfaceobserver2 = _interopRequireDefault(_fontfaceobserver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var Fonts = function Fonts() {
  var loader = new _fontfaceobserver2.default("Open Sans");
  loader.load().then(function () {
    if (!document.documentElement.classList.contains("fonts-loaded")) {
      document.documentElement.classList.add("fonts-loaded");
    }
    setCookie("fonts-loaded", true, 365);
  });
};

exports.default = Fonts;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2ZvbnRzLmpzIl0sIm5hbWVzIjpbIkZvbnRGYWNlT2JzZXJ2ZXIiLCJzZXRDb29raWUiLCJjbmFtZSIsImN2YWx1ZSIsImV4ZGF5cyIsImQiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJleHBpcmVzIiwidG9VVENTdHJpbmciLCJkb2N1bWVudCIsImNvb2tpZSIsIkZvbnRzIiwibG9hZGVyIiwibG9hZCIsInRoZW4iLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxTQUFTLEFBQVQsVUFBbUIsQUFBbkIsT0FBMEIsQUFBMUIsUUFBa0MsQUFBbEMsUUFBMEMsQUFDeEM7TUFBSSxJQUFJLElBQUksQUFBSixBQUFSLEFBQ0E7SUFBRSxBQUFGLFFBQVUsRUFBRSxBQUFGLFlBQWMsU0FBUyxBQUFULEtBQWMsQUFBZCxLQUFtQixBQUFuQixLQUF3QixBQUFoRCxBQUNBO01BQUksVUFBVSxhQUFhLEVBQUUsQUFBRixBQUEzQixBQUNBO1dBQVMsQUFBVCxTQUFrQixRQUFRLEFBQVIsTUFBYyxBQUFkLFNBQXVCLEFBQXZCLE1BQTZCLEFBQTdCLFVBQXVDLEFBQXpELEFBQ0Q7OztBQUVELElBQU0sUUFBUSxTQUFSLEFBQVEsUUFBTSxBQUNsQjtNQUFNLFNBQVMsQUFBSSxBQUFKLCtCQUFxQixBQUFyQixBQUFmLEFBQ0E7U0FBTyxBQUFQLE9BQWMsQUFBZCxLQUFtQixZQUFNLEFBQ3ZCO1FBQUksQ0FBQyxTQUFTLEFBQVQsZ0JBQXlCLEFBQXpCLFVBQW1DLEFBQW5DLFNBQTRDLEFBQTVDLEFBQUwsaUJBQWtFLEFBQ2hFO2VBQVMsQUFBVCxnQkFBeUIsQUFBekIsVUFBbUMsQUFBbkMsSUFBdUMsQUFBdkMsQUFDRDtBQUNEO2NBQVUsQUFBVixnQkFBMEIsQUFBMUIsTUFBZ0MsQUFBaEMsQUFDRDtBQUxELEFBTUQ7QUFSRCxBQVVBOztrQkFBZSxBQUFmIiwiZmlsZSI6ImZvbnRzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=