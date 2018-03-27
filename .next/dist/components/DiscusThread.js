"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/components/DiscusThread.js";


var DISQUS_CONFIG = ["shortname", "identifier", "title", "url", "category_id", "onNewComment"];
var __disqusAdded = false;

function copyProps(context, props) {
  var prefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";

  (0, _keys2.default)(props).forEach(function (prop) {
    context[prefix + prop] = props[prop];
  });

  if (typeof props.onNewComment === "function") {
    context[prefix + "config"] = function config() {
      this.callbacks.onNewComment = [function handleNewComment(comment) {
        props.onNewComment(comment);
      }];
    };
  }
}

var DisqusThread = function (_React$Component) {
  (0, _inherits3.default)(DisqusThread, _React$Component);

  function DisqusThread() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DisqusThread);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DisqusThread.__proto__ || (0, _getPrototypeOf2.default)(DisqusThread)).call.apply(_ref, [this].concat(args))), _this), _this.addDisqusScript = function () {
      if (__disqusAdded) {
        return;
      }

      var child = _this.disqus = document.createElement("script");
      var parent = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0];

      child.async = true;
      child.type = "text/javascript";
      child.src = "//" + _this.props.shortname + ".disqus.com/embed.js";

      parent.appendChild(child);
      __disqusAdded = true;
    }, _this.loadDisqus = function () {
      var props = {};

      // Extract Disqus props that were supplied to this component
      DISQUS_CONFIG.forEach(function (prop) {
        if (!!_this.props[prop]) {
          props[prop] = _this.props[prop];
        }
      });

      // Always set URL
      if (!props.url || !props.url.length) {
        props.url = window.location.href;
      }

      // If Disqus has already been added, reset it
      if (typeof window.DISQUS !== "undefined") {
        window.DISQUS.reset({
          reload: true,
          config: function config() {
            copyProps(this.page, props);

            // Disqus needs hashbang URL, see https://help.disqus.com/customer/portal/articles/472107
            this.page.url = this.page.url.replace(/#/, "") + "#!newthread";
          }
        });
      } else {
        // Otherwise add Disqus to the page
        copyProps(window, props, "disqus_");
        _this.addDisqusScript();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DisqusThread, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadDisqus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.loadDisqus();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          onNewComment = _props.onNewComment,
          restProps = (0, _objectWithoutProperties3.default)(_props, ["onNewComment"]);

      return _react2.default.createElement("div", (0, _extends3.default)({}, restProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement("div", { id: "disqus_thread", __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement("noscript", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, "Please enable JavaScript to view the", _react2.default.createElement("a", { href: "http://disqus.com/?ref_noscript", __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, "comments powered by Disqus."))), _react2.default.createElement("a", { href: "http://disqus.com", className: "dsq-brlink", __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Blog comments powered by ", _react2.default.createElement("span", { className: "logo-disqus", __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Disqus"), "."));
    }
  }]);

  return DisqusThread;
}(_react2.default.Component);

DisqusThread.defaultProps = {
  shortname: null,
  identifier: null,
  title: null,
  url: null,
  category_id: null,
  onNewComment: null
};

exports.default = DisqusThread;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRGlzY3VzVGhyZWFkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiRElTUVVTX0NPTkZJRyIsIl9fZGlzcXVzQWRkZWQiLCJjb3B5UHJvcHMiLCJjb250ZXh0IiwicHJvcHMiLCJwcmVmaXgiLCJmb3JFYWNoIiwicHJvcCIsIm9uTmV3Q29tbWVudCIsImNvbmZpZyIsImNhbGxiYWNrcyIsImhhbmRsZU5ld0NvbW1lbnQiLCJjb21tZW50IiwiRGlzcXVzVGhyZWFkIiwiYWRkRGlzcXVzU2NyaXB0IiwiY2hpbGQiLCJkaXNxdXMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJwYXJlbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFzeW5jIiwidHlwZSIsInNyYyIsInNob3J0bmFtZSIsImFwcGVuZENoaWxkIiwibG9hZERpc3F1cyIsInVybCIsImxlbmd0aCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIkRJU1FVUyIsInJlc2V0IiwicmVsb2FkIiwicGFnZSIsInJlcGxhY2UiLCJyZXN0UHJvcHMiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJpZGVudGlmaWVyIiwidGl0bGUiLCJjYXRlZ29yeV9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLGdCQUFnQixDQUFBLEFBQ3BCLGFBRG9CLEFBRXBCLGNBRm9CLEFBR3BCLFNBSG9CLEFBSXBCLE9BSm9CLEFBS3BCLGVBTEYsQUFBc0IsQUFNcEI7QUFFRixJQUFJLGdCQUFKLEFBQW9COztBQUVwQixTQUFBLEFBQVMsVUFBVCxBQUFtQixTQUFuQixBQUE0QixPQUFvQjtNQUFiLEFBQWEsNkVBQUosQUFBSSxBQUM5Qzs7c0JBQUEsQUFBWSxPQUFaLEFBQW1CLFFBQVEsZ0JBQVEsQUFDakM7WUFBUSxTQUFSLEFBQWlCLFFBQVEsTUFBekIsQUFBeUIsQUFBTSxBQUNoQztBQUZELEFBSUE7O01BQUksT0FBTyxNQUFQLEFBQWEsaUJBQWpCLEFBQWtDLFlBQVksQUFDNUM7WUFBUSxTQUFSLEFBQWlCLFlBQVksU0FBQSxBQUFTLFNBQVMsQUFDN0M7V0FBQSxBQUFLLFVBQUwsQUFBZSxnQkFDYixTQUFBLEFBQVMsaUJBQVQsQUFBMEIsU0FBUyxBQUNqQztjQUFBLEFBQU0sYUFBTixBQUFtQixBQUNwQjtBQUhILEFBQThCLEFBSy9CLE9BTCtCO0FBRGhDLEFBT0Q7QUFDRjs7O0lBRUssQTs7Ozs7Ozs7Ozs7Ozs7d05BOEJKLEEsa0JBQWtCLFlBQU0sQUFDdEI7VUFBQSxBQUFJLGVBQWUsQUFDakI7QUFDRDtBQUVEOztVQUFNLFFBQVMsTUFBQSxBQUFLLFNBQVMsU0FBQSxBQUFTLGNBQXRDLEFBQTZCLEFBQXVCLEFBQ3BEO1VBQU0sU0FDSixTQUFBLEFBQVMscUJBQVQsQUFBOEIsUUFBOUIsQUFBc0MsTUFDdEMsU0FBQSxBQUFTLHFCQUFULEFBQThCLFFBRmhDLEFBRUUsQUFBc0MsQUFFeEM7O1lBQUEsQUFBTSxRQUFOLEFBQWMsQUFDZDtZQUFBLEFBQU0sT0FBTixBQUFhLEFBQ2I7WUFBQSxBQUFNLE1BQU0sT0FBTyxNQUFBLEFBQUssTUFBWixBQUFrQixZQUE5QixBQUEwQyxBQUUxQzs7YUFBQSxBQUFPLFlBQVAsQUFBbUIsQUFDbkI7c0JBQUEsQUFBZ0IsQUFDakI7QSxhQUVELEEsYUFBYSxZQUFNLEFBQ2pCO1VBQU0sUUFBTixBQUFjLEFBRWQ7O0FBQ0E7b0JBQUEsQUFBYyxRQUFRLGdCQUFRLEFBQzVCO1lBQUksQ0FBQyxDQUFDLE1BQUEsQUFBSyxNQUFYLEFBQU0sQUFBVyxPQUFPLEFBQ3RCO2dCQUFBLEFBQU0sUUFBUSxNQUFBLEFBQUssTUFBbkIsQUFBYyxBQUFXLEFBQzFCO0FBQ0Y7QUFKRCxBQU1BOztBQUNBO1VBQUksQ0FBQyxNQUFELEFBQU8sT0FBTyxDQUFDLE1BQUEsQUFBTSxJQUF6QixBQUE2QixRQUFRLEFBQ25DO2NBQUEsQUFBTSxNQUFNLE9BQUEsQUFBTyxTQUFuQixBQUE0QixBQUM3QjtBQUVEOztBQUNBO1VBQUksT0FBTyxPQUFQLEFBQWMsV0FBbEIsQUFBNkIsYUFBYSxBQUN4QztlQUFBLEFBQU8sT0FBUCxBQUFjO2tCQUFNLEFBQ1YsQUFDUjtrQkFBUSxTQUFBLEFBQVMsU0FBUyxBQUN4QjtzQkFBVSxLQUFWLEFBQWUsTUFBZixBQUFxQixBQUVyQjs7QUFDQTtpQkFBQSxBQUFLLEtBQUwsQUFBVSxNQUFNLEtBQUEsQUFBSyxLQUFMLEFBQVUsSUFBVixBQUFjLFFBQWQsQUFBc0IsS0FBdEIsQUFBMkIsTUFBM0MsQUFBaUQsQUFDbEQ7QUFQSCxBQUFvQixBQVNyQjtBQVRxQixBQUNsQjtBQUZKLGFBVU8sQUFDTDtBQUNBO2tCQUFBLEFBQVUsUUFBVixBQUFrQixPQUFsQixBQUF5QixBQUN6QjtjQUFBLEFBQUssQUFDTjtBQUNGO0E7Ozs7O3dDQTlFbUIsQUFDbEI7V0FBQSxBQUFLLEFBQ047Ozs7eUNBRW9CLEFBQ25CO1dBQUEsQUFBSyxBQUNOOzs7OzZCQUVRO21CQUNnQyxLQURoQyxBQUNxQztVQURyQyxBQUNDLHNCQURELEFBQ0M7VUFERCxBQUNrQiw0REFFekI7OzZCQUNFLGNBQUEsa0NBQUEsQUFBUzs7b0JBQVQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsUUFBQSx5Q0FDTyxJQUFMLEFBQVE7b0JBQVI7c0JBREYsQUFDRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBRUUsd0RBQUEsY0FBQSxPQUFHLE1BQUgsQUFBUTtvQkFBUjtzQkFBQTtBQUFBO1NBTE4sQUFFRSxBQUNFLEFBRUUsQUFLSixrREFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRLHFCQUFvQixXQUE1QixBQUFzQztvQkFBdEM7c0JBQUE7QUFBQTtTQUMyQiw2Q0FBQSxjQUFBLFVBQU0sV0FBTixBQUFnQjtvQkFBaEI7c0JBQUE7QUFBQTtTQUQzQixBQUMyQixXQVovQixBQUNFLEFBVUUsQUFLTDs7Ozs7RUE1QndCLGdCQUFNLEE7O0FBa0ZqQyxhQUFBLEFBQWE7YUFBZSxBQUNmLEFBQ1g7Y0FGMEIsQUFFZCxBQUNaO1NBSDBCLEFBR25CLEFBQ1A7T0FKMEIsQUFJckIsQUFDTDtlQUwwQixBQUtiLEFBQ2I7Z0JBTkYsQUFBNEIsQUFNWixBQUdoQjtBQVQ0QixBQUMxQjs7a0JBUUYsQUFBZSIsImZpbGUiOiJEaXNjdXNUaHJlYWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==