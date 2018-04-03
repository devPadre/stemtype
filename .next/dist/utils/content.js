"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postsByAuthor = exports.postsByCategory = exports.postsByTag = exports.getPostsByLanguage = undefined;
exports.getTags = getTags;

var _lodash = require("lodash.keys");

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var getPostsByLanguage = (exports.getPostsByLanguage = function getPostsByLanguage() {
  var posts =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var lang =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : _config2.default.defaultLanguage;

  return posts.filter(function(post) {
    return post.language === lang;
  });
});

function getTags() {
  var posts =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var map = posts.reduce(function(acc, item) {
    if (!item.tags) {
      return acc;
    }
    var tags = item.tags || [];
    tags.forEach(function(tag) {
      if (acc[tag]) {
        acc[tag] = acc[tag] + 1;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {});
  return (0, _lodash2.default)(map).map(function(key) {
    return { value: key, count: map[key] };
  });
}

var postsByTag = (exports.postsByTag = function postsByTag() {
  var posts =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var tag = arguments[1];

  return posts.filter(function(post) {
    return post.tags.indexOf(tag) !== -1;
  });
});

var postsByCategory = (exports.postsByCategory = function postsByCategory() {
  var posts =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var category = arguments[1];

  return posts.filter(function(post) {
    return post.category.toLowerCase() === category.toLowerCase();
  });
});

var postsByAuthor = (exports.postsByAuthor = function postsByAuthor() {
  var posts =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var author = arguments[1];

  return posts.filter(function(post) {
    return post.author.toLowerCase() === author.toLowerCase();
  });
});
