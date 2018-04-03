"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoriesStore = exports.Category = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _mobxStateTree = require("mobx-state-tree");

var _firebaseInit = require("./firebaseInit");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// @ts-check

var Category = (exports.Category = _mobxStateTree.types.model("Category", {
  id: _mobxStateTree.types.identifier(),
  title: _mobxStateTree.types.string
}));

var CategoriesStore = (exports.CategoriesStore = _mobxStateTree.types
  .model("CategoriesStore", {
    categories: _mobxStateTree.types.map(Category),
    areCategoriesLoaded: _mobxStateTree.types.boolean
  })
  .views(function(self) {
    return {
      get blog() {
        return (0, _mobxStateTree.getParent)(self);
      },
      get allCategories() {
        return self.categories.values();
      }
    };
  })
  .actions(function(self) {
    var fetchCategories = (0, _mobxStateTree.flow)(
      /*#__PURE__*/ _regenerator2.default.mark(function fetchCategories() {
        var querySnapshot;
        return _regenerator2.default.wrap(
          function fetchCategories$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _firebaseInit.firestore.collection("categories").get();

                case 3:
                  querySnapshot = _context.sent;

                  querySnapshot.forEach(function(doc) {
                    var category = doc.data();
                    self.categories.put(category);
                  });
                  self.areCategoriesLoaded = true;
                  _context.next = 10;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          },
          fetchCategories,
          this,
          [[0, 8]]
        );
      })
    );

    return {
      fetchCategories: fetchCategories
    };
  }));
