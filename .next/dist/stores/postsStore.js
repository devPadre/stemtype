"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostsStore = exports.Post = exports.PostContent = exports.PostMeta = exports.PostsOrder = exports.PostStatus = exports.createMeta = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _mobxStateTree = require("mobx-state-tree");

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

var _lodash = require("lodash.sortby");

var _lodash2 = _interopRequireDefault(_lodash);

var _config = require("../utils/config");

var _config2 = _interopRequireDefault(_config);

var _firebaseInit = require("./firebaseInit");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createMeta = (exports.createMeta = function createMeta() {
  var meta =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _extends3.default)(
    {
      url: "",
      category: "",
      author: "",
      language: _config2.default.defaultLanguage,
      featured: false,
      tags: [],
      hasTranslation: false,
      date: (0, _moment2.default)().format("YYYY-MM-DD"),
      thumbImage: "",
      thumbText: ""
    },
    meta
  );
});
// @ts-check

var PostStatus = (exports.PostStatus = {
  Draft: "draft",
  Published: "published",
  PendingCorrections: "pending_corrections"
});

var PostsOrder = (exports.PostsOrder = {
  Newest: "newest",
  Oldest: "oldest",
  ByPublication: "by_publication"
});

var PostMeta = (exports.PostMeta = _mobxStateTree.types.model("PostMeta", {
  url: _mobxStateTree.types.string,
  featured: _mobxStateTree.types.maybe(_mobxStateTree.types.boolean),
  language: _mobxStateTree.types.string,
  author: _mobxStateTree.types.string,
  category: _mobxStateTree.types.string,
  date: _mobxStateTree.types.string,
  tags: _mobxStateTree.types.array(_mobxStateTree.types.string),
  hasTranslation: _mobxStateTree.types.boolean,
  thumbImage: _mobxStateTree.types.string,
  thumbText: _mobxStateTree.types.string,
  fullscreenVideo: _mobxStateTree.types.maybe(_mobxStateTree.types.string),
  ogImage: _mobxStateTree.types.maybe(_mobxStateTree.types.string)
}));

var PostContent = (exports.PostContent = _mobxStateTree.types.model(
  "PostContent",
  {
    title: _mobxStateTree.types.string,
    text: _mobxStateTree.types.string,
    changed: _mobxStateTree.types.number,
    meta: _mobxStateTree.types.maybe(PostMeta)
  }
));

var Post = (exports.Post = _mobxStateTree.types.model("Post", {
  id: _mobxStateTree.types.identifier(),
  changed: _mobxStateTree.types.number,
  status: _mobxStateTree.types.enumeration("Status", [
    PostStatus.Draft,
    PostStatus.Published
  ]),
  published: _mobxStateTree.types.maybe(PostContent),
  draft: _mobxStateTree.types.maybe(PostContent)
}));

var PostsStore = (exports.PostsStore = _mobxStateTree.types
  .model("PostsStore", {
    posts: _mobxStateTree.types.map(Post),
    arePostsLoaded: _mobxStateTree.types.boolean,
    sortBy: _mobxStateTree.types.enumeration("sortBy", [
      PostsOrder.Newest,
      PostsOrder.Oldest,
      PostsOrder.ByPublication
    ]),
    status: _mobxStateTree.types.string,
    author: _mobxStateTree.types.string,
    language: _mobxStateTree.types.string,
    category: _mobxStateTree.types.string
  })
  .views(function(self) {
    return {
      get blog() {
        return (0, _mobxStateTree.getParent)(self);
      },
      get filteredPosts() {
        var posts = self.posts.values().filter(function(post) {
          return post;
        });

        if (self.status !== "all") {
          if (self.status === PostStatus.Draft) {
            posts = posts.filter(function(post) {
              return post.status === PostStatus.Draft && !post.published;
            });
          } else if (self.status === PostStatus.Published) {
            posts = posts.filter(function(post) {
              return post.status === PostStatus.Published && post.published;
            });
          } else {
            posts = posts.filter(function(post) {
              return post.status === PostStatus.Draft && post.published;
            });
          }
        }

        if (self.author !== "all") {
          posts = posts.filter(function(post) {
            if (post.status === PostStatus.Draft) {
              return post.draft.meta.author === self.author;
            } else {
              return post.published.meta.author === self.author;
            }
          });
        }

        if (self.category !== "all") {
          posts = posts.filter(function(post) {
            if (post.status === PostStatus.Draft) {
              return post.draft.meta.category === self.category;
            } else {
              return post.published.meta.category === self.category;
            }
          });
        }

        if (self.language !== "all") {
          posts = posts.filter(function(post) {
            if (post.status === PostStatus.Draft) {
              return post.draft.meta.language === self.language;
            } else {
              return post.published.meta.language === self.language;
            }
          });
        }

        return (0, _lodash2.default)(posts, function(post) {
          if (self.sortBy === PostsOrder.Newest) {
            return -post.changed;
          } else if (self.sortBy === PostsOrder.Oldest) {
            return post.changed;
          } else if (self.sortBy === PostsOrder.ByPublication) {
            return post.draft.meta.date;
          }
          return true;
        });
      },
      getPostForEditor: function getPostForEditor(postId) {
        var post = self.posts.get(postId);
        if (!post) {
          return null;
        }
        return (0, _extends3.default)({}, post, post.published, post.draft);
      }
    };
  })
  .actions(function(self) {
    return {
      changeFilters: function changeFilters() {
        var filters =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};

        if (filters.sortBy) {
          self.sortBy = filters.sortBy;
        }
        if (filters.status) {
          self.status = filters.status;
        }
        if (filters.author) {
          self.author = filters.author;
        }
        if (filters.language) {
          self.language = filters.language;
        }
        if (filters.category) {
          self.category = filters.category;
        }
      },
      resetFilters: function resetFilters() {
        self.status = "all";
        self.author = "all";
        self.language = "all";
        self.category = "all";
      },

      getPost: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function getPost(id) {
          var doc, post;
          return _regenerator2.default.wrap(
            function getPost$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.next = 2;
                    return _firebaseInit.firestore
                      .collection("posts")
                      .doc(id)
                      .get();

                  case 2:
                    doc = _context.sent;

                    if (doc.exists) {
                      _context.next = 5;
                      break;
                    }

                    throw new Error("Couldn't get post " + id);

                  case 5:
                    post = doc.data();
                    return _context.abrupt("return", post);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            },
            getPost,
            this
          );
        })
      ),

      fetchAllPosts: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function fetchAllPosts() {
          var querySnapshot;
          return _regenerator2.default.wrap(
            function fetchAllPosts$(_context2) {
              while (1) {
                switch ((_context2.prev = _context2.next)) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return _firebaseInit.firestore.collection("posts").get();

                  case 3:
                    querySnapshot = _context2.sent;

                    querySnapshot.forEach(function(doc) {
                      var post = doc.data();
                      self.posts.put(post);
                    });
                    self.arePostsLoaded = true;
                    _context2.next = 10;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2["catch"](0);

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            },
            fetchAllPosts,
            this,
            [[0, 8]]
          );
        })
      ),

      fetchPost: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function fetchPost(id) {
          var post;
          return _regenerator2.default.wrap(
            function fetchPost$(_context3) {
              while (1) {
                switch ((_context3.prev = _context3.next)) {
                  case 0:
                    _context3.next = 2;
                    return self.getPost(id);

                  case 2:
                    post = _context3.sent;

                    self.posts.set(id, post);
                    return _context3.abrupt("return", post);

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            },
            fetchPost,
            this
          );
        })
      ),

      savePost: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function savePost(
          id,
          title,
          text
        ) {
          var post, now, updatedPost;
          return _regenerator2.default.wrap(
            function savePost$(_context4) {
              while (1) {
                switch ((_context4.prev = _context4.next)) {
                  case 0:
                    if (id) {
                      _context4.next = 2;
                      break;
                    }

                    return _context4.abrupt(
                      "return",
                      self.saveNewPost(title, text)
                    );

                  case 2:
                    _context4.next = 4;
                    return self.getPost(id);

                  case 4:
                    post = _context4.sent;
                    now = _moment2.default.now();
                    updatedPost = (0, _extends3.default)({}, post, {
                      changed: now,
                      status: PostStatus.Draft,
                      draft: (0, _extends3.default)({}, post.draft, {
                        title: title,
                        text: text,
                        changed: now
                      })
                    });

                    self.posts.set(updatedPost.id, updatedPost);

                    _context4.next = 10;
                    return _firebaseInit.firestore
                      .collection("posts")
                      .doc(id)
                      .update(updatedPost);

                  case 10:
                    return _context4.abrupt("return", id);

                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }
            },
            savePost,
            this
          );
        })
      ),

      saveNewPost: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function saveNewPost(
          title,
          text
        ) {
          var newDraftRef, id, now, currentAuthor, newPost;
          return _regenerator2.default.wrap(
            function saveNewPost$(_context5) {
              while (1) {
                switch ((_context5.prev = _context5.next)) {
                  case 0:
                    newDraftRef = _firebaseInit.firestore
                      .collection("posts")
                      .doc();
                    id = newDraftRef.id;
                    now = _moment2.default.now();
                    currentAuthor = self.blog.authors.currentAuthor;
                    newPost = {
                      id: id,
                      changed: now,
                      status: PostStatus.Draft,
                      draft: {
                        title: title || "(Untitled)",
                        text: text || "",
                        changed: now,
                        meta: createMeta({
                          author: currentAuthor ? currentAuthor.id : ""
                        })
                      }
                    };

                    // @ts-ignore

                    self.posts.set(id, newPost);

                    _context5.next = 8;
                    return newDraftRef.set(newPost);

                  case 8:
                    return _context5.abrupt("return", id);

                  case 9:
                  case "end":
                    return _context5.stop();
                }
              }
            },
            saveNewPost,
            this
          );
        })
      ),

      updateMeta: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function updateMeta(
          id,
          values
        ) {
          var post, now, updatedPost;
          return _regenerator2.default.wrap(
            function updateMeta$(_context6) {
              while (1) {
                switch ((_context6.prev = _context6.next)) {
                  case 0:
                    _context6.next = 2;
                    return self.getPost(id);

                  case 2:
                    post = _context6.sent;
                    now = _moment2.default.now();
                    updatedPost = (0, _extends3.default)({}, post, {
                      changed: now,
                      status: PostStatus.Draft,
                      draft: (0, _extends3.default)({}, post.draft, {
                        changed: now,
                        meta: (0, _extends3.default)(
                          {},
                          post.draft.meta,
                          values
                        )
                      })
                    });

                    self.posts.set(updatedPost.id, updatedPost);

                    _context6.next = 8;
                    return _firebaseInit.firestore
                      .collection("posts")
                      .doc(id)
                      .update(updatedPost);

                  case 8:
                    return _context6.abrupt("return", id);

                  case 9:
                  case "end":
                    return _context6.stop();
                }
              }
            },
            updateMeta,
            this
          );
        })
      ),

      deleteDraftPost: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function deleteDraftPost(id) {
          var post;
          return _regenerator2.default.wrap(
            function deleteDraftPost$(_context7) {
              while (1) {
                switch ((_context7.prev = _context7.next)) {
                  case 0:
                    _context7.next = 2;
                    return self.getPost(id);

                  case 2:
                    post = _context7.sent;

                    if (!post.published) {
                      _context7.next = 5;
                      break;
                    }

                    throw new Error("Couldn't delete published post");

                  case 5:
                    _context7.next = 7;
                    return _firebaseInit.firestore
                      .collection("posts")
                      .doc(id)
                      .delete();

                  case 7:
                    self.posts.delete(id);

                    return _context7.abrupt("return", id);

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            },
            deleteDraftPost,
            this
          );
        })
      ),

      publishPost: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function publishPost(id) {
          var post, now, content, updatedPost;
          return _regenerator2.default.wrap(
            function publishPost$(_context8) {
              while (1) {
                switch ((_context8.prev = _context8.next)) {
                  case 0:
                    _context8.next = 2;
                    return self.getPost(id);

                  case 2:
                    post = _context8.sent;
                    now = Date.now();
                    content = (0, _extends3.default)({}, post.draft, {
                      changed: now
                    });
                    updatedPost = (0, _extends3.default)({}, post, {
                      changed: now,
                      status: PostStatus.Published,
                      draft: (0, _extends3.default)({}, content),
                      published: (0, _extends3.default)({}, content)
                    });
                    _context8.next = 8;
                    return _firebaseInit.firestore
                      .collection("posts")
                      .doc(id)
                      .update(updatedPost);

                  case 8:
                    self.posts.set(id, updatedPost);

                    return _context8.abrupt("return", updatedPost);

                  case 10:
                  case "end":
                    return _context8.stop();
                }
              }
            },
            publishPost,
            this
          );
        })
      ),

      unpublishPost: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function unpublishPost(id) {
          var post, now, updatedPost;
          return _regenerator2.default.wrap(
            function unpublishPost$(_context9) {
              while (1) {
                switch ((_context9.prev = _context9.next)) {
                  case 0:
                    _context9.next = 2;
                    return self.getPost(id);

                  case 2:
                    post = _context9.sent;
                    now = Date.now();
                    updatedPost = (0, _extends3.default)({}, post, {
                      changed: now,
                      status: PostStatus.Draft,
                      draft: (0, _extends3.default)({}, post.draft, {
                        changed: now
                      }),
                      published: null
                    });
                    _context9.next = 7;
                    return _firebaseInit.firestore
                      .collection("posts")
                      .doc(id)
                      .update(updatedPost);

                  case 7:
                    self.posts.set(id, updatedPost);

                    return _context9.abrupt("return", updatedPost);

                  case 9:
                  case "end":
                    return _context9.stop();
                }
              }
            },
            unpublishPost,
            this
          );
        })
      ),

      discardDraftChanges: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function discardDraftChanges(
          id
        ) {
          var post, updatedPost;
          return _regenerator2.default.wrap(
            function discardDraftChanges$(_context10) {
              while (1) {
                switch ((_context10.prev = _context10.next)) {
                  case 0:
                    _context10.next = 2;
                    return self.getPost(id);

                  case 2:
                    post = _context10.sent;
                    updatedPost = (0, _extends3.default)({}, post, {
                      status: PostStatus.Published,
                      draft: post.published,
                      published: post.published
                    });
                    _context10.next = 6;
                    return _firebaseInit.firestore
                      .collection("posts")
                      .doc(id)
                      .update(updatedPost);

                  case 6:
                    self.posts.set(id, updatedPost);

                    return _context10.abrupt("return", updatedPost);

                  case 8:
                  case "end":
                    return _context10.stop();
                }
              }
            },
            discardDraftChanges,
            this
          );
        })
      ),

      verifyDraftIsValid: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function verifyDraftIsValid(
          id
        ) {
          var post, draft, meta;
          return _regenerator2.default.wrap(
            function verifyDraftIsValid$(_context11) {
              while (1) {
                switch ((_context11.prev = _context11.next)) {
                  case 0:
                    _context11.next = 2;
                    return self.getPost(id);

                  case 2:
                    post = _context11.sent;
                    draft = post.draft;
                    meta = post.draft.meta;

                    if (
                      !(
                        !draft.title ||
                        !draft.text ||
                        !meta ||
                        !meta.url ||
                        !meta.language ||
                        !meta.author ||
                        !meta.category ||
                        !meta.date ||
                        !meta.thumbImage ||
                        !meta.thumbText ||
                        !meta.thumbText
                      )
                    ) {
                      _context11.next = 7;
                      break;
                    }

                    return _context11.abrupt("return", false);

                  case 7:
                    return _context11.abrupt("return", true);

                  case 8:
                  case "end":
                    return _context11.stop();
                }
              }
            },
            verifyDraftIsValid,
            this
          );
        })
      ),

      copyPost: (0, _mobxStateTree.flow)(
        /*#__PURE__*/ _regenerator2.default.mark(function copyPost(copyId) {
          var post, newDraftRef, id, now, newPost;
          return _regenerator2.default.wrap(
            function copyPost$(_context12) {
              while (1) {
                switch ((_context12.prev = _context12.next)) {
                  case 0:
                    _context12.next = 2;
                    return self.getPost(copyId);

                  case 2:
                    post = _context12.sent;
                    newDraftRef = _firebaseInit.firestore
                      .collection("posts")
                      .doc();
                    id = newDraftRef.id;
                    now = _moment2.default.now();
                    newPost = {
                      id: id,
                      changed: now,
                      status: PostStatus.Draft,
                      draft: (0, _extends3.default)({}, post.draft, {
                        title: post.draft.title + " (Copy)",
                        changed: now
                      })
                    };

                    // @ts-ignore

                    self.posts.set(id, newPost);

                    _context12.next = 10;
                    return newDraftRef.set(newPost);

                  case 10:
                    return _context12.abrupt("return", id);

                  case 11:
                  case "end":
                    return _context12.stop();
                }
              }
            },
            copyPost,
            this
          );
        })
      )
    };
  }));
