"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAllPublishedPosts = exports.fetchDraftPost = exports.fetchPublishedPost = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

require("isomorphic-unfetch");

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projectId = process.env.F_PROJECT_ID;
var apiBase = "https://firestore.googleapis.com/v1beta1/projects/" + projectId + "/databases/(default)";

function convertPostContentResponseToPost(json) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "published";

  if (!json || !json.document) {
    return null;
  }
  var fields = json.document.fields[name].mapValue.fields;
  var metaFields = fields.meta.mapValue.fields;
  return {
    title: fields.title ? fields.title.stringValue : "",
    text: fields.text ? fields.text.stringValue : "",
    author: metaFields.author ? metaFields.author.stringValue : "",
    date: metaFields.date ? metaFields.date.stringValue : "",
    featured: metaFields.featured ? metaFields.featured.booleanValue : false,
    hasTranslation: metaFields.hasTranslation ? metaFields.hasTranslation.booleanValue : false,
    category: metaFields.category ? metaFields.category.stringValue : "",
    language: metaFields.language ? metaFields.language.stringValue : "",
    ogImage: metaFields.ogImage ? metaFields.ogImage.stringValue : "",
    tags: metaFields.tags && metaFields.tags.arrayValue && metaFields.tags.arrayValue.values ? metaFields.tags.arrayValue.values.map(function (value) {
      return value.stringValue;
    }) : [],
    thumbImage: metaFields.thumbImage ? metaFields.thumbImage.stringValue : "",
    thumbText: metaFields.thumbText ? metaFields.thumbText.stringValue : "",
    fullscreenVideo: metaFields.fullscreenVideo ? metaFields.fullscreenVideo.stringValue : "",
    typeurl: metaFields.typeurl ? metaFields.typeurl.stringValue : "",
    url: metaFields.url ? metaFields.url.stringValue : ""
  };
}

var fetchPublishedPost = exports.fetchPublishedPost = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(url) {
    var res, json;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(apiBase + "/documents:runQuery?fields=document%2Ffields", {
              method: "POST",
              body: (0, _stringify2.default)({
                structuredQuery: {
                  select: {
                    fields: [{ fieldPath: "published" }]
                  },
                  from: [{ collectionId: "posts" }],
                  where: {
                    fieldFilter: {
                      field: { fieldPath: "published.meta.url" },
                      op: "EQUAL",
                      value: { stringValue: url }
                    }
                  }
                }
              })
            });

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;
            return _context.abrupt("return", convertPostContentResponseToPost(json[0]));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchPublishedPost(_x2) {
    return _ref.apply(this, arguments);
  };
}();

var fetchDraftPost = exports.fetchDraftPost = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(id) {
    var res, json;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(apiBase + "/documents/posts/" + id);

          case 2:
            res = _context2.sent;
            _context2.next = 5;
            return res.json();

          case 5:
            json = _context2.sent;

            console.log(json);
            return _context2.abrupt("return", convertPostContentResponseToPost({
              document: json
            }, "draft"));

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchDraftPost(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

var fetchAllPublishedPosts = exports.fetchAllPublishedPosts = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _config2.default.defaultLanguage;
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var res, json;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch(apiBase + "/documents:runQuery?fields=document%2Ffields", {
              method: "POST",
              body: (0, _stringify2.default)({
                structuredQuery: {
                  select: {
                    fields: [{ fieldPath: "published.title" }, { fieldPath: "published.meta" }]
                  },
                  from: [{ collectionId: "posts" }],
                  where: {
                    fieldFilter: {
                      field: {
                        fieldPath: "published.meta.language"
                      },
                      op: "EQUAL",
                      value: {
                        stringValue: lang
                      }
                    }
                  },
                  limit: limit || undefined,
                  offset: offset || undefined,
                  orderBy: [{
                    field: { fieldPath: "published.meta.date" },
                    direction: "DESCENDING"
                  }]
                }
              })
            });

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            json = _context3.sent;
            return _context3.abrupt("return", json.map(function (item) {
              return convertPostContentResponseToPost(item);
            }).filter(function (_) {
              return _;
            }));

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function fetchAllPublishedPosts() {
    return _ref3.apply(this, arguments);
  };
}();