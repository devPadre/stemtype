"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

      return _react2.default.createElement("div", restProps, _react2.default.createElement("div", { id: "disqus_thread" }), _react2.default.createElement("noscript", null, _react2.default.createElement("span", null, "Please enable JavaScript to view the", _react2.default.createElement("a", { href: "http://disqus.com/?ref_noscript" }, "comments powered by Disqus."))), _react2.default.createElement("a", { href: "http://disqus.com", className: "dsq-brlink" }, "Blog comments powered by ", _react2.default.createElement("span", { className: "logo-disqus" }, "Disqus"), "."));
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