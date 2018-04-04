"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPostLink = getPostLink;
exports.PostLink = PostLink;
exports.getTypeLink = getTypeLink;
exports.TypeLink = TypeLink;
exports.getTagLink = getTagLink;
exports.TagLink = TagLink;
exports.getCategoryLink = getCategoryLink;
exports.CategoryLink = CategoryLink;
exports.getAuthorLink = getAuthorLink;
exports.getIndexLink = getIndexLink;
exports.AuthorLink = AuthorLink;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lodash = require("lodash.values");

var _lodash2 = _interopRequireDefault(_lodash);

var _routes = require("./routes");

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

  return _react2.default.createElement(_routes.Link, { prefetch: prefetch, href: "/post?fullUrl=" + href, as: href }, _react2.default.createElement("a", { className: className }, children));
}
function getTypeLink(category) {
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config2.default.defaultLanguage;

  return {
    route: "category",
    params: {
      category: linkify(category),
      lang: lang
    }
  };
}
function TypeLink(_ref2) {
  var category = _ref2.category,
      lang = _ref2.lang,
      children = _ref2.children,
      className = _ref2.className;

  return _react2.default.createElement(_routes.Link, getTypeLink(category, lang), _react2.default.createElement("a", { className: className }, children));
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
function TagLink(_ref3) {
  var tag = _ref3.tag,
      lang = _ref3.lang,
      children = _ref3.children,
      className = _ref3.className;

  return _react2.default.createElement(_routes.Link, getTagLink(tag, lang), _react2.default.createElement("a", { className: className }, children));
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
function CategoryLink(_ref4) {
  var category = _ref4.category,
      lang = _ref4.lang,
      children = _ref4.children,
      className = _ref4.className;

  return _react2.default.createElement(_routes.Link, getCategoryLink(category, lang), _react2.default.createElement("a", { className: className }, children));
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

function AuthorLink(_ref5) {
  var author = _ref5.author,
      lang = _ref5.lang,
      children = _ref5.children,
      className = _ref5.className;

  return _react2.default.createElement(_routes.Link, getAuthorLink(author, lang), _react2.default.createElement("a", { className: className }, children));
}

exports.default = {
  PostLink: PostLink,
  TagLink: TagLink,
  CategoryLink: CategoryLink,
  TypeLink: TypeLink,
  AuthorLink: AuthorLink
};