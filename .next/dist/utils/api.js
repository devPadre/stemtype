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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2FwaS5qcyJdLCJuYW1lcyI6WyJDb25maWciLCJwcm9qZWN0SWQiLCJwcm9jZXNzIiwiZW52IiwiRl9QUk9KRUNUX0lEIiwiYXBpQmFzZSIsImNvbnZlcnRQb3N0Q29udGVudFJlc3BvbnNlVG9Qb3N0IiwianNvbiIsIm5hbWUiLCJkb2N1bWVudCIsImZpZWxkcyIsIm1hcFZhbHVlIiwibWV0YUZpZWxkcyIsIm1ldGEiLCJ0aXRsZSIsInN0cmluZ1ZhbHVlIiwidGV4dCIsImF1dGhvciIsImRhdGUiLCJmZWF0dXJlZCIsImJvb2xlYW5WYWx1ZSIsImhhc1RyYW5zbGF0aW9uIiwiY2F0ZWdvcnkiLCJsYW5ndWFnZSIsIm9nSW1hZ2UiLCJ0YWdzIiwiYXJyYXlWYWx1ZSIsInZhbHVlcyIsIm1hcCIsInZhbHVlIiwidGh1bWJJbWFnZSIsInRodW1iVGV4dCIsImZ1bGxzY3JlZW5WaWRlbyIsInVybCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInN0cnVjdHVyZWRRdWVyeSIsInNlbGVjdCIsImZpZWxkUGF0aCIsImZyb20iLCJjb2xsZWN0aW9uSWQiLCJ3aGVyZSIsImZpZWxkRmlsdGVyIiwiZmllbGQiLCJvcCIsInJlcyIsImZldGNoUHVibGlzaGVkUG9zdCIsImlkIiwiY29uc29sZSIsImxvZyIsImZldGNoRHJhZnRQb3N0IiwibGFuZyIsImRlZmF1bHRMYW5ndWFnZSIsImxpbWl0Iiwib2Zmc2V0IiwidW5kZWZpbmVkIiwib3JkZXJCeSIsImRpcmVjdGlvbiIsIml0ZW0iLCJmaWx0ZXIiLCJfIiwiZmV0Y2hBbGxQdWJsaXNoZWRQb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLEFBQU8sQUFBWTs7Ozs7O0FBRW5CLElBQU0sWUFBWSxRQUFBLEFBQVEsSUFBMUIsQUFBOEI7QUFDOUIsSUFBTSxpRUFBQSxBQUErRCxZQUFyRTs7QUFFQSxTQUFBLEFBQVMsaUNBQVQsQUFBMEMsTUFBMEI7TUFBcEIsQUFBb0Is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QUFBO2VBQUE7NkJBQUE7bUJBQ2EsTUFBQSxBQUFTLGdDQUR0QixBQUNhLEFBQW9DOztlQUFoRDtBQURELDRCQUFBOzZCQUFBO21CQUVjLElBRmQsQUFFYyxBQUFJOztlQUFqQjtBQUZELDZCQUdMOztvQkFBQSxBQUFRLElBSEgsQUFHTCxBQUFZOzt3QkFDTCxBQUNMLEFBQ1k7QUFEWixBQUNFLGFBRkcsRUFKRixBQUlFLEFBSUw7O2VBUkc7ZUFBQTs2QkFBQTs7QUFBQTtpQkFBQTtBQUFQOztrQkFBQSxBQUFzQixvQkFBdEI7NkJBQUE7QUFBQTtBQVlBOzswRUFBQTt1RkFBTyxvQkFBQTtRQUFBLEFBQ0wsMkVBQU8saUJBREYsQUFDUztRQURULEFBRUwsNEVBRkssQUFFRztRQUZILEFBR0wsNkVBSEssQUFHSTthQUhKO29FQUFBO2dCQUFBOzJDQUFBO2VBQUE7NkJBQUE7eUJBS2EsQUFDYjtzQkFDSCxBQUNVLEFBQ1I7Ozs7NEJBR2MsQ0FDTixFQUFFLFdBREksQUFDTixBQUFhLHFCQUNiLEVBQUUsV0FKUyxBQUNQLEFBQ0UsQUFFTixBQUFhLEFBR2pCO0FBTlEsQUFDTjt3QkFLSSxDQUFDLEVBQUUsY0FQTSxBQU9ULEFBQUMsQUFBZ0IsQUFDdkI7Ozs7bUNBQ2UsQUFDSixBQUNNLEFBRWI7QUFITyxBQUNMOzBCQUZTLEFBSVAsQUFDSjs7cUNBZFcsQUFRUixBQUNRLEFBS0osQUFDUSxBQUluQjtBQUxXLEFBQ0w7QUFOUyxBQUNYO0FBRkcsQUFDTDt5QkFVSyxTQW5CUSxBQW1CQyxBQUNoQjswQkFBUSxVQXBCTyxBQW9CRyxBQUNsQjs7MkJBRVcsRUFBRSxXQURYLEFBQ1MsQUFBYSxBQUNwQjsrQkFsQ1AsQUFLYSxBQUVoQixBQUVRLEFBQWUsQUFDRixBQXFCTixBQUNQLEFBRWE7QUFGYixBQUNFLG1CQUZLO0FBckJNLEFBQ2Y7QUFGaUIsQUFDbkIsZUFESTtBQUZSLEFBQ0UsYUFIYzs7ZUFBWjtBQUxELDRCQUFBOzZCQUFBO21CQXlDYyxJQXpDZCxBQXlDYyxBQUFJOztlQUFqQjtBQXpDRCw2QkFBQTttREEwQ0UsQUFDSixJQUFJLGdCQUFBO3FCQUFRLGlDQUFSLEFBQVEsQUFBaUM7QUFEekMsYUFBQSxFQUFBLEFBRUosT0FBTyxhQUFBO3FCQUFBLEFBQUs7QUE1Q1YsQUEwQ0U7O2VBMUNGO2VBQUE7NkJBQUE7O0FBQUE7aUJBQUE7QUFBUDs7a0JBQUEsQUFBc0IseUJBQXRCOzZCQUFBO0FBQUEiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=