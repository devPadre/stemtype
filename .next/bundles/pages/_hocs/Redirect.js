window.__NEXT_REGISTER_PAGE("/_hocs/Redirect", function() {
  var comp = (module.exports = webpackJsonp(
    [18],
    {
      887: function(e, t, u) {
        e.exports = u(888);
      },
      888: function(e, t, u) {
        "use strict";
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var o = u(17),
          l = n(o),
          r = u(1),
          f = n(r),
          d = u(6),
          a = n(d),
          i = u(3),
          p = n(i),
          s = u(4),
          c = n(s),
          _ = u(0),
          h = u(62),
          v = n(h),
          y = (function(e) {
            function t() {
              return (
                (0, f.default)(this, t),
                (0, p.default)(
                  this,
                  (t.__proto__ || (0, l.default)(t)).apply(this, arguments)
                )
              );
            }
            return (
              (0, c.default)(t, e),
              (0, a.default)(t, [
                {
                  key: "componentDidMount",
                  value: function() {
                    v.default.push(this.props.to);
                  }
                },
                {
                  key: "render",
                  value: function() {
                    return null;
                  }
                }
              ]),
              t
            );
          })(_.Component);
        t.default = y;
      }
    },
    [887]
  ));
  return { page: comp.default };
});
