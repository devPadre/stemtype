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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPostsByLanguage = exports.getPostsByLanguage = function getPostsByLanguage() {
  var posts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config2.default.defaultLanguage;

  return posts.filter(function (post) {
    return post.language === lang;
  });
};

function getTags() {
  var posts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var map = posts.reduce(function (acc, item) {
    if (!item.tags) {
      return acc;
    }
    var tags = item.tags || [];
    tags.forEach(function (tag) {
      if (acc[tag]) {
        acc[tag] = acc[tag] + 1;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {});
  return (0, _lodash2.default)(map).map(function (key) {
    return { value: key, count: map[key] };
  });
}

var postsByTag = exports.postsByTag = function postsByTag() {
  var posts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var tag = arguments[1];

  return posts.filter(function (post) {
    return post.tags.indexOf(tag) !== -1;
  });
};

var postsByCategory = exports.postsByCategory = function postsByCategory() {
  var posts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var category = arguments[1];

  return posts.filter(function (post) {
    return post.category.toLowerCase() === category.toLowerCase();
  });
};

var postsByAuthor = exports.postsByAuthor = function postsByAuthor() {
  var posts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var author = arguments[1];

  return posts.filter(function (post) {
    return post.author.toLowerCase() === author.toLowerCase();
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2NvbnRlbnQuanMiXSwibmFtZXMiOlsia2V5cyIsIkNvbmZpZyIsImdldFBvc3RzQnlMYW5ndWFnZSIsInBvc3RzIiwibGFuZyIsImRlZmF1bHRMYW5ndWFnZSIsImZpbHRlciIsInBvc3QiLCJsYW5ndWFnZSIsImdldFRhZ3MiLCJtYXAiLCJyZWR1Y2UiLCJhY2MiLCJpdGVtIiwidGFncyIsImZvckVhY2giLCJ0YWciLCJ2YWx1ZSIsImtleSIsImNvdW50IiwicG9zdHNCeVRhZyIsImluZGV4T2YiLCJwb3N0c0J5Q2F0ZWdvcnkiLCJjYXRlZ29yeSIsInRvTG93ZXJDYXNlIiwicG9zdHNCeUF1dGhvciIsImF1dGhvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O1FBVU8sQUFBUzs7QUFWaEIsQUFBTzs7OztBQUNQLEFBQU8sQUFBWSxBQUVuQjs7Ozs7O0FBQU8sSUFBTSxrREFBcUIsU0FBckIsQUFBcUIscUJBRzdCO01BRkgsQUFFRyw0RUFGSyxBQUVMO01BREgsQUFDRywyRUFESSxpQkFBTyxBQUNYLEFBQ0g7O2VBQU8sQUFBTSxPQUFPLGdCQUFBO1dBQVEsS0FBQSxBQUFLLGFBQWIsQUFBMEI7QUFBOUMsQUFBTyxBQUNSLEdBRFE7QUFKRixBQU9QOztBQUFPLG1CQUE2QjtNQUFaLEFBQVksNEVBQUosQUFBSSxBQUNsQzs7TUFBTSxZQUFNLEFBQU0sT0FBTyxVQUFBLEFBQUMsS0FBRCxBQUFNLE1BQVMsQUFDdEM7UUFBSSxDQUFDLEtBQUwsQUFBVSxNQUFNLEFBQ2Q7YUFBQSxBQUFPLEFBQ1I7QUFDRDtRQUFNLE9BQU8sS0FBQSxBQUFLLFFBQWxCLEFBQTBCLEFBQzFCO1NBQUEsQUFBSyxRQUFRLGVBQU8sQUFDbEI7VUFBSSxJQUFKLEFBQUksQUFBSSxNQUFNLEFBQ1o7WUFBQSxBQUFJLE9BQU8sSUFBQSxBQUFJLE9BQWYsQUFBc0IsQUFDdkI7QUFGRCxhQUVPLEFBQ0w7WUFBQSxBQUFJLE9BQUosQUFBVyxBQUNaO0FBQ0Y7QUFORCxBQU9BO1dBQUEsQUFBTyxBQUNSO0FBYlcsR0FBQSxFQUFaLEFBQVksQUFhVCxBQUNIOytCQUFPLEFBQUssS0FBTCxBQUFVLElBQUksZUFBTyxBQUMxQjtXQUFPLEVBQUUsT0FBRixBQUFTLEtBQUssT0FBTyxJQUE1QixBQUFPLEFBQXFCLEFBQUksQUFDakM7QUFGRCxBQUFPLEFBR1IsR0FIUTtBQUtUOztBQUFPLElBQU0sa0NBQWEsU0FBYixBQUFhLGFBQXFCO01BQXBCLEFBQW9CLDRFQUFaLEFBQVk7TUFBUixBQUFRLGdCQUM3Qzs7ZUFBTyxBQUFNLE9BQU8sZ0JBQUE7V0FBUSxLQUFBLEFBQUssS0FBTCxBQUFVLFFBQVYsQUFBa0IsU0FBUyxDQUFuQyxBQUFvQztBQUF4RCxBQUFPLEFBQ1IsR0FEUTtBQURGLEFBSVA7O0FBQU8sSUFBTSw0Q0FBa0IsU0FBbEIsQUFBa0Isa0JBQTBCO01BQXpCLEFBQXlCLDRFQUFqQixBQUFpQjtNQUFiLEFBQWEscUJBQ3ZEOztlQUFPLEFBQU0sT0FDWCxnQkFBQTtXQUFRLEtBQUEsQUFBSyxTQUFMLEFBQWMsa0JBQWtCLFNBQXhDLEFBQXdDLEFBQVM7QUFEbkQsQUFBTyxBQUdSLEdBSFE7QUFERixBQU1QOztBQUFPLElBQU0sd0NBQWdCLFNBQWhCLEFBQWdCLGdCQUF3QjtNQUF2QixBQUF1Qiw0RUFBZixBQUFlO01BQVgsQUFBVyxtQkFDbkQ7O2VBQU8sQUFBTSxPQUNYLGdCQUFBO1dBQVEsS0FBQSxBQUFLLE9BQUwsQUFBWSxrQkFBa0IsT0FBdEMsQUFBc0MsQUFBTztBQUQvQyxBQUFPLEFBR1IsR0FIUTtBQURGIiwiZmlsZSI6ImNvbnRlbnQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==