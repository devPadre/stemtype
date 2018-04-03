window.__NEXT_REGISTER_PAGE("/_hocs/LazyPostsFetcher", function() {
  var comp = (module.exports = webpackJsonp(
    [19],
    {
      877: function(t, e, n) {
        t.exports = n(878);
      },
      878: function(t, e, n) {
        "use strict";
        function r(t) {
          return t && t.__esModule ? t : { default: t };
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var u = n(5),
          s = r(u),
          a = n(23),
          l = r(a),
          o = n(17),
          i = r(o),
          f = n(35),
          c = r(f),
          d = n(9),
          h = r(d),
          p = n(115),
          v = r(p),
          g = n(1),
          y = r(g),
          P = n(3),
          _ = r(P),
          M = n(6),
          b = r(M),
          k = n(4),
          m = r(k),
          q = n(0),
          O = r(q),
          w = n(341),
          x = (function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
              for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return (e.default = t), e;
          })(w);
        e.default = function(t, e) {
          return (function(n) {
            function r(t) {
              (0, y.default)(this, r);
              var n = (0, _.default)(
                this,
                (r.__proto__ || (0, i.default)(r)).call(this, t)
              );
              return (
                (n.onLoadOlderClick = function() {
                  var t = 2 * e,
                    r = n.props.url.query.lang,
                    u = n.state[r] ? n.state[r].posts : [];
                  x.fetchAllPublishedPosts(r, t, u.length).then(function(e) {
                    n.setState(function(n) {
                      return (0,
                      h.default)({}, r, { posts: [].concat((0, l.default)(n[r].posts), (0, l.default)(e)), hasMore: e.length === t });
                    });
                  });
                }),
                (n.state = t),
                n
              );
            }
            return (
              (0, m.default)(r, n),
              (0, b.default)(r, null, [
                {
                  key: "getInitialProps",
                  value: (function() {
                    function t(t) {
                      return n.apply(this, arguments);
                    }
                    var n = (0, v.default)(
                      c.default.mark(function t(n) {
                        var r,
                          u = n.query;
                        return c.default.wrap(
                          function(t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.next = 2),
                                    x.fetchAllPublishedPosts(u.lang, e)
                                  );
                                case 2:
                                  return (
                                    (r = t.sent),
                                    t.abrupt(
                                      "return",
                                      (0, h.default)({}, u.lang, {
                                        posts: r,
                                        hasMore: r.length === e
                                      })
                                    )
                                  );
                                case 4:
                                case "end":
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    );
                    return t;
                  })()
                }
              ]),
              (0, b.default)(r, [
                {
                  key: "componentWillReceiveProps",
                  value: function(t) {
                    var n = this,
                      r = t.url.query.lang,
                      u = this.props.url.query.lang;
                    this.state[r] ||
                      r === u ||
                      (this.setState(function(t) {
                        return (0, h.default)({}, r, t[u]);
                      }),
                      x.fetchAllPublishedPosts(r, e).then(function(t) {
                        n.setState(
                          (0, h.default)({}, r, {
                            posts: t,
                            hasMore: t.length === e
                          })
                        );
                      }));
                  }
                },
                {
                  key: "render",
                  value: function() {
                    var e = this.props.url.query.lang,
                      n = this.state[e] ? this.state[e].posts : [],
                      r = !!this.state[e] && this.state[e].hasMore;
                    return O.default.createElement(
                      t,
                      (0, s.default)({}, this.props, {
                        lang: e,
                        posts: n,
                        hasMore: r,
                        onLoadMore: this.onLoadOlderClick
                      })
                    );
                  }
                }
              ]),
              r
            );
          })(O.default.Component);
        };
      }
    },
    [877]
  ));
  return { page: comp.default };
});
