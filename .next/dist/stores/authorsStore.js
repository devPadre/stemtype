"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthorsStore = exports.Author = undefined;

var _mobxStateTree = require("mobx-state-tree");

var _firebaseInit = require("./firebaseInit");

var Author = exports.Author = _mobxStateTree.types.model("Author", {
  id: _mobxStateTree.types.identifier(),
  name: _mobxStateTree.types.string,
  avatar: _mobxStateTree.types.string,
  description: _mobxStateTree.types.string
});

var AuthorsStore = exports.AuthorsStore = _mobxStateTree.types.model("AuthorsStore", {
  authors: _mobxStateTree.types.map(Author)
}).views(function (self) {
  return {
    get blog() {
      return (0, _mobxStateTree.getParent)(self);
    },
    get allAuthors() {
      return self.authors.values();
    },
    get currentAuthor() {
      if (!self.blog.auth.isAuthor || !self.blog.auth.user) {
        return null;
      }
      var authorName = self.blog.auth.user.authorName;
      return self.allAuthors.find(function (author) {
        return author.id === authorName;
      }) || null;
    }
  };
});