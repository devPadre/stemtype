"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthStore = exports.User = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _mobxStateTree = require("mobx-state-tree");

var _firebaseInit = require("./firebaseInit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-check

var User = exports.User = _mobxStateTree.types.model("User", {
  uid: _mobxStateTree.types.identifier(),
  authorName: _mobxStateTree.types.string,
  emailVerified: _mobxStateTree.types.boolean,
  phoneNumber: _mobxStateTree.types.maybe(_mobxStateTree.types.string),
  displayName: _mobxStateTree.types.maybe(_mobxStateTree.types.string),
  photoURL: _mobxStateTree.types.maybe(_mobxStateTree.types.string),
  email: _mobxStateTree.types.maybe(_mobxStateTree.types.string),
  isAnonymous: _mobxStateTree.types.boolean
});

var AuthStore = exports.AuthStore = _mobxStateTree.types.model("AuthStore", {
  user: _mobxStateTree.types.optional(_mobxStateTree.types.union(User, _mobxStateTree.types.literal(null)), null),
  isUserPending: _mobxStateTree.types.boolean,
  isAuthor: _mobxStateTree.types.boolean
}).views(function (self) {
  return {
    get blog() {
      return (0, _mobxStateTree.getParent)(self);
    },
    get isAuthenticated() {
      return self.user !== null && self.isAuthor;
    }
  };
}).actions(function (self) {
  return {
    subscribe: function subscribe() {
      var onAuthStateChanged = function onAuthStateChanged(user) {
        if (user) {
          self.verifyIfUserIsAuthor(user).then(function (authorName) {
            if (authorName) {
              self.setUser(user, authorName);
            } else {
              self.setUser(null, null);
            }
          });
        } else {
          // @ts-ignore
          self.setUser(null, null);
        }
      };
      var disposer = _firebaseInit.auth.onAuthStateChanged(onAuthStateChanged);
      (0, _mobxStateTree.addDisposer)(self, disposer);
    },

    verifyIfUserIsAuthor: (0, _mobxStateTree.flow)( /*#__PURE__*/_regenerator2.default.mark(function verifyIfUserIsAuthor(user) {
      var doc;
      return _regenerator2.default.wrap(function verifyIfUserIsAuthor$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (user) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", null);

            case 2:
              _context.prev = 2;
              _context.next = 5;
              return _firebaseInit.firestore.collection("authors").doc(user.uid).get();

            case 5:
              doc = _context.sent;

              if (doc.exists) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", null);

            case 8:
              return _context.abrupt("return", doc.data().name);

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](2);
              return _context.abrupt("return", null);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, verifyIfUserIsAuthor, this, [[2, 11]]);
    })),

    setUser: function setUser(user, authorName) {
      self.isUserPending = false;
      self.isAuthor = !!authorName;
      if (user) {
        self.user = {
          uid: user.uid,
          authorName: authorName,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          isAnonymous: user.isAnonymous
        };
      } else {
        self.user = null;
      }
    },
    signInWithGoogle: function signInWithGoogle() {
      var provider = new _firebaseInit.firebase.auth.GoogleAuthProvider();
      return _firebaseInit.auth.signInWithPopup(provider);
    },
    signOut: function signOut() {
      _firebaseInit.auth.signOut();
    }
  };
});