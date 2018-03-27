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
exports.getStemTypeLink = getStemTypeLink;
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

function getStemTypeLink(author, children) {
  var lang = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config2.default.defaultLanguage;

  return {
    route: "stemtype",
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
      lineNumber: 107
    }
  }), _react2.default.createElement("a", { className: className, __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    }
  }, children));
}

exports.default = {
  PostLink: PostLink,
  TagLink: TagLink,
  CategoryLink: CategoryLink,

  AuthorLink: AuthorLink
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2xpbmtzLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwidmFsdWVzIiwiTGluayIsIkNvbmZpZyIsImxpbmtpZnkiLCJ0ZXh0IiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwiZ2V0UG9zdExpbmsiLCJocmVmIiwiY3VycmVudExhbmciLCJkZWZhdWx0TGFuZ3VhZ2UiLCJsYW5ndWFnZXMiLCJmaWx0ZXIiLCJsYW5ndWFnZSIsImlkIiwibGlua0xhbmd1YWdlIiwiaSIsImxlbmd0aCIsImluZGV4T2YiLCJpc05vdERlZmF1bHQiLCJuZXdIcmVmIiwic3BsaXQiLCJqb2luIiwiYXMiLCJQb3N0TGluayIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwicHJlZmV0Y2giLCJnZXRUYWdMaW5rIiwidGFnIiwibGFuZyIsInJvdXRlIiwicGFyYW1zIiwiVGFnTGluayIsImdldENhdGVnb3J5TGluayIsImNhdGVnb3J5IiwiQ2F0ZWdvcnlMaW5rIiwiZ2V0QXV0aG9yTGluayIsImF1dGhvciIsImdldEluZGV4TGluayIsImdldFN0ZW1UeXBlTGluayIsIkF1dGhvckxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7O1FBT08sQUFBUztRQTJCVCxBQUFTO1FBUVQsQUFBUztRQVNULEFBQVM7UUFRVCxBQUFTO1FBU1QsQUFBUztRQVFULEFBQVM7UUFVVCxBQUFTO1FBU1QsQUFBUztRQVNULEFBQVM7Ozs7OztBQXhHaEIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CLElBQU0sVUFBVSxTQUFWLEFBQVUsY0FBQTtTQUFRLENBQUMsUUFBRCxBQUFTLElBQVQsQUFBYSxjQUFiLEFBQTJCLFFBQTNCLEFBQW1DLE1BQTNDLEFBQVEsQUFBeUM7QUFBakUsQUFFQTs7QUFBTyxxQkFBQSxBQUFxQixNQUE0QztNQUF0QyxBQUFzQyxrRkFBeEIsaUJBQU8sQUFBaUIsQUFDdEU7O01BQU0sa0NBQW1CLGlCQUFQLEFBQWMs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O01BQS9CLEFBQStCLDJFQUF4QixpQkFBTyxBQUFpQixBQUNuRTs7O1dBQU8sQUFDRSxBQUNQOztjQUNVLFFBREYsQUFDRSxBQUFRLEFBQ2hCO1lBSkosQUFBTyxBQUVHLEFBS1g7QUFMVyxBQUNOO0FBSEcsQUFDTDtBQVFKOztBQUFPLHdCQUFxRDtNQUEvQixBQUErQiwyRUFBeEIsaUJBQU8sQUFBaUIsQUFDMUQ7OztXQUFPLEFBQ0UsQUFDUDs7WUFGRixBQUFPLEFBRUcsQUFJWDtBQUpXLEFBQ047QUFIRyxBQUNMO0FBT0o7O0FBQU8seUJBQUEsQUFBeUIsUUFBekIsQUFBaUMsVUFBeUM7TUFBL0IsQUFBK0IsMkVBQXhCLGlCQUFPLEFBQWlCLEFBQy9FOzs7V0FBTyxBQUNFLEFBQ1A7O1lBRkYsQUFBTyxBQUVHLEFBSVg7QUFKVyxBQUNOO0FBSEcsQUFDTDtBQU9KOztBQUFPLDJCQUEyRDtNQUFyQyxBQUFxQyxlQUFyQyxBQUFxQztNQUE3QixBQUE2QixhQUE3QixBQUE2QjtNQUF2QixBQUF1QixpQkFBdkIsQUFBdUI7TUFBYixBQUFhLGtCQUFiLEFBQWEsQUFDaEU7O3lCQUNFLEFBQUMsdURBQVMsY0FBQSxBQUFjLFFBQXhCLEFBQVUsQUFBc0I7O2dCQUFoQztrQkFBQSxBQUNFO0FBREY7QUFBQSxJQUFBLGtCQUNFLGNBQUEsT0FBRyxXQUFILEFBQWM7Z0JBQWQ7a0JBQUEsQUFBMEI7QUFBMUI7S0FGSixBQUNFLEFBQ0UsQUFHTDtBQUVEOzs7WUFBZSxBQUViO1dBRmEsQUFHYjtnQkFIYSxBQUtiOztjQUxGLEFBQWU7QUFBQSxBQUNiIiwiZmlsZSI6ImxpbmtzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=