"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPostLink = getPostLink;
exports.PostLink = PostLink;
exports.getTagLink = getTagLink;
exports.TagLink = TagLink;
exports.getCategoryLink = getCategoryLink;
exports.CategoryLink = CategoryLink;
exports.getAuthorLink = getAuthorLink;
exports.getIndexLink = getIndexLink;
exports.AuthorLink = AuthorLink;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = require("lodash.values");

var _lodash2 = _interopRequireDefault(_lodash);

var _routes = require("./routes");

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/utils/links.js";


var linkify = function linkify(text) {
  return (text || "").toLowerCase().replace(/ /g, "_");
};

function getPostLink(href) {
  var currentLang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config2.default.defaultLanguage;

  var languages = (0, _lodash2.default)(_config2.default.languages).filter(function (language) {
    return language.id !== _config2.default.defaultLanguage;
  });

  var linkLanguage = _config2.default.defaultLanguage;

  for (var i = 0; i < languages.length; i = +1) {
    if (href.indexOf("/" + languages[i].id + "/")) {
      linkLanguage = languages[i].id;
      break;
    }
  }

  var isNotDefault = linkLanguage !== _config2.default.defaultLanguage;
  var newHref = href;
  if (currentLang === _config2.default.defaultLanguage && isNotDefault) {
    newHref = href.split("/" + linkLanguage + "/").join("/");
  } else {
    newHref = href.split("/" + linkLanguage + "/").join("/");
    newHref = "/posts/" + currentLang + "/" + newHref.replace("/posts/", "");
  }
  return {
    href: "/post?fullUrl=" + newHref,
    as: newHref
  };
}
function PostLink(_ref) {
  var href = _ref.href,
      children = _ref.children,
      className = _ref.className,
      prefetch = _ref.prefetch;

  return _react2.default.createElement(_routes.Link, { prefetch: prefetch, href: "/post?fullUrl=" + href, as: href, __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement("a", { className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, children));
}

function getTagLink(tag) {
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config2.default.defaultLanguage;

  return {
    route: "tag",
    params: {
      tag: linkify(tag),
      lang: lang
    }
  };
}
function TagLink(_ref2) {
  var tag = _ref2.tag,
      lang = _ref2.lang,
      children = _ref2.children,
      className = _ref2.className;

  return _react2.default.createElement(_routes.Link, (0, _extends3.default)({}, getTagLink(tag, lang), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }), _react2.default.createElement("a", { className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, children));
}

function getCategoryLink(category) {
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config2.default.defaultLanguage;

  return {
    route: "category",
    params: {
      category: linkify(category),
      lang: lang
    }
  };
}
function CategoryLink(_ref3) {
  var category = _ref3.category,
      lang = _ref3.lang,
      children = _ref3.children,
      className = _ref3.className;

  return _react2.default.createElement(_routes.Link, (0, _extends3.default)({}, getCategoryLink(category, lang), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    }
  }), _react2.default.createElement("a", { className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, children));
}

function getAuthorLink(author) {
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config2.default.defaultLanguage;

  return {
    route: "author",
    params: {
      author: linkify(author),
      lang: lang
    }
  };
}

function getIndexLink() {
  var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _config2.default.defaultLanguage;

  return {
    route: "index",
    params: {
      lang: lang
    }
  };
}

function AuthorLink(_ref4) {
  var author = _ref4.author,
      lang = _ref4.lang,
      children = _ref4.children,
      className = _ref4.className;

  return _react2.default.createElement(_routes.Link, (0, _extends3.default)({}, getAuthorLink(author, lang), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  }), _react2.default.createElement("a", { className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    }
  }, children));
}

exports.default = {
  PostLink: PostLink,
  TagLink: TagLink,
  CategoryLink: CategoryLink,

  AuthorLink: AuthorLink
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2xpbmtzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidmFsdWVzIiwiTGluayIsIkNvbmZpZyIsImxpbmtpZnkiLCJ0ZXh0IiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZ2V0UG9zdExpbmsiLCJocmVmIiwiY3VycmVudExhbmciLCJkZWZhdWx0TGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJmaWx0ZXIiLCJsYW5ndWFnZSIsImlkIiwibGlua0xhbmd1YWdlIiwiaSIsImxlbmd0aCIsImluZGV4T2YiLCJpc05vdERlZmF1bHQiLCJuZXdIcmVmIiwic3BsaXQiLCJqb2luIiwiYXMiLCJQb3N0TGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicHJlZmV0Y2giLCJnZXRUYWdMaW5rIiwidGFnIiwibGFuZyIsInJvdXRlIiwicGFyYW1zIiwiVGFnTGluayIsImdldENhdGVnb3J5TGluayIsImNhdGVnb3J5IiwiQ2F0ZWdvcnlMaW5rIiwiZ2V0QXV0aG9yTGluayIsImF1dGhvciIsImdldEluZGV4TGluayIsIkF1dGhvckxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7O1FBT08sQUFBUztRQTJCVCxBQUFTO1FBUVQsQUFBUztRQVNULEFBQVM7UUFRVCxBQUFTO1FBU1QsQUFBUztRQVFULEFBQVM7UUFVVCxBQUFTO1FBU1QsQUFBUzs7Ozs7O0FBL0ZoQixBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTSxVQUFVLFNBQVYsQUFBVSxjQUFBO1NBQVEsQ0FBQyxRQUFELEFBQVMsSUFBVCxBQUFhLGNBQWIsQUFBMkIsUUFBM0IsQUFBbUMsTUFBM0MsQUFBUSxBQUF5QztBQUFqRSxBQUVBOztBQUFPLHFCQUFBLEFBQXFCLE1BQTRDO01BQXRDLEFBQXNDLGtGQUF4QixpQkFBTyxBQUFpQixBQUN0RTs7TUFBTSxrQ0FBbUIsaUJBQVAsQUFBYyxXQUFkLEFBQXlCLE9BQ3pDLG9CQUFBO1dBQVks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QWlCLEFBQ25FOzs7V0FBTyxBQUNFLEFBQ1A7O2NBQ1UsUUFERixBQUNFLEFBQVEsQUFDaEI7WUFKSixBQUFPLEFBRUcsQUFLWDtBQUxXLEFBQ047QUFIRyxBQUNMO0FBUUo7O0FBQU8sd0JBQXFEO01BQS9CLEFBQStCLDJFQUF4QixpQkFBTyxBQUFpQixBQUMxRDs7O1dBQU8sQUFDRSxBQUNQOztZQUZGLEFBQU8sQUFFRyxBQUlYO0FBSlcsQUFDTjtBQUhHLEFBQ0w7QUFPSjs7QUFBTywyQkFBMkQ7TUFBckMsQUFBcUMsZUFBckMsQUFBcUM7TUFBN0IsQUFBNkIsYUFBN0IsQUFBNkI7TUFBdkIsQUFBdUIsaUJBQXZCLEFBQXVCO01BQWIsQUFBYSxrQkFBYixBQUFhLEFBQ2hFOzt5QkFDRSxBQUFDLHVEQUFTLGNBQUEsQUFBYyxRQUF4QixBQUFVLEFBQXNCOztnQkFBaEM7a0JBQUEsQUFDRTtBQURGO0FBQUEsSUFBQSxrQkFDRSxjQUFBLE9BQUcsV0FBSCxBQUFjO2dCQUFkO2tCQUFBLEFBQTBCO0FBQTFCO0tBRkosQUFDRSxBQUNFLEFBR0w7QUFFRDs7O1lBQWUsQUFFYjtXQUZhLEFBR2I7Z0JBSGEsQUFLYjs7Y0FMRixBQUFlO0FBQUEsQUFDYiIsImZpbGUiOiJsaW5rcy5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvZG5pY2hvbHMvRG9jdW1lbnRzL1Byb2plY3RzL1NURU1KT0JTL0NsaWVudHMvUmVkY2VsbC9SZWRjZWxsIERldi9zdGVtdHlwZSJ9