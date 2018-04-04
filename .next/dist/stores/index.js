"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlogStore = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _mobxStateTree = require("mobx-state-tree");

var _authStore = require("./authStore");

var _uiStore = require("./uiStore");

var _postsStore = require("./postsStore");

var _authorsStore = require("./authorsStore");

var _categoriesStore = require("./categoriesStore");

var _firebaseInit = require("./firebaseInit");

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-check

var BlogStore = exports.BlogStore = _mobxStateTree.types.model("BlogStore", {
  ui: _mobxStateTree.types.optional(_uiStore.UIStore, {
    languages: _config2.default.languages
  }),
  auth: _mobxStateTree.types.optional(_authStore.AuthStore, {
    user: null,
    isUserPending: true,
    isAuthor: false
  }),
  posts: _mobxStateTree.types.optional(_postsStore.PostsStore, {
    posts: {},
    arePostsLoaded: false,
    sortBy: "newest",
    status: "all",
    author: "all",
    language: "all",
    category: "all"
  }),
  authors: _mobxStateTree.types.optional(_authorsStore.AuthorsStore, {
    authors: _config2.default.authors
  }),
  categories: _mobxStateTree.types.optional(_categoriesStore.CategoriesStore, {
    categories: {},
    areCategoriesLoaded: false
  })
}).actions(function (self) {
  return {
    backup: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function backup() {
      var _this = this;

      var collections, result, _loop, i;

      return _regenerator2.default.wrap(function backup$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              collections = ["posts", "categories"];
              result = {};
              _loop = /*#__PURE__*/_regenerator2.default.mark(function _loop(i) {
                var collectionId, collectionSnapshot, collectionData;
                return _regenerator2.default.wrap(function _loop$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        collectionId = collections[i];
                        _context.next = 3;
                        return _firebaseInit.firestore.collection(collectionId).get();

                      case 3:
                        collectionSnapshot = _context.sent;
                        collectionData = [];

                        collectionSnapshot.forEach(function (doc) {
                          collectionData.push(doc.data());
                        });
                        result[collectionId] = collectionData;

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _loop, _this);
              });
              i = 0;

            case 4:
              if (!(i < collections.length)) {
                _context2.next = 9;
                break;
              }

              return _context2.delegateYield(_loop(i), "t0", 6);

            case 6:
              i++;
              _context2.next = 4;
              break;

            case 9:
              return _context2.abrupt("return", result);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, backup, this);
    }))
  };
});