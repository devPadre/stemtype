window.__NEXT_REGISTER_PAGE("/author", function() {
  var comp = (module.exports = webpackJsonp(
    [10],
    {
      302: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(13),
          i = a(r),
          l = n(0),
          o = a(l),
          d = n(48),
          u = n(12),
          f = a(u),
          s = n(618),
          c = a(s),
          p = (0, i.default)(
            ["\n  display: block;\n  margin-bottom: 30px;\n  ", ";\n"],
            ["\n  display: block;\n  margin-bottom: 30px;\n  ", ";\n"]
          ),
          h = (0, i.default)(
            ["\n  display: block;\n  margin-bottom: 10px;\n"],
            ["\n  display: block;\n  margin-bottom: 10px;\n"]
          ),
          g = f.default.div(p, (0, d.clearFix)()),
          m = (0, f.default)(c.default)(h);
        t.default = function(e) {
          var t = e.className,
            n = e.title,
            a = e.children;
          return o.default.createElement(
            g,
            { className: t },
            o.default.createElement(m, null, n),
            a
          );
        };
      },
      303: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n(17),
          i = a(r),
          l = n(1),
          o = a(l),
          d = n(6),
          u = a(d),
          f = n(3),
          s = a(f),
          c = n(4),
          p = a(c),
          h = n(0),
          g = a(h),
          m = n(352),
          x = (function(e) {
            function t() {
              return (
                (0, o.default)(this, t),
                (0, s.default)(
                  this,
                  (t.__proto__ || (0, i.default)(t)).apply(this, arguments)
                )
              );
            }
            return (
              (0, p.default)(t, e),
              (0, u.default)(t, [
                {
                  key: "shouldComponentUpdate",
                  value: function() {
                    return !1;
                  }
                },
                {
                  key: "render",
                  value: function() {
                    var e = this.props,
                      t = e.className,
                      n = e.tags,
                      a = e.lang;
                    return g.default.createElement(
                      "div",
                      { className: t },
                      n.map(function(e) {
                        return g.default.createElement(
                          m.Tag,
                          {
                            key: e.value,
                            tag: e.value,
                            lang: a,
                            style: { fontSize: 10 }
                          },
                          "#",
                          e.value
                        );
                      })
                    );
                  }
                }
              ]),
              t
            );
          })(g.default.Component);
        t.default = x;
      },
      304: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t = e.reduce(function(e, t) {
              return t.tags
                ? ((t.tags || []).forEach(function(t) {
                    e[t] ? (e[t] = e[t] + 1) : (e[t] = 1);
                  }),
                  e)
                : e;
            }, {});
          return (0, l.default)(t).map(function(e) {
            return { value: e, count: t[e] };
          });
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.postsByAuthor = t.postsByCategory = t.postsByTag = t.getPostsByLanguage = void 0),
          (t.getTags = r);
        var i = n(617),
          l = a(i),
          o = n(26),
          d = a(o);
        (t.getPostsByLanguage = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : d.default.defaultLanguage;
          return e.filter(function(e) {
            return e.language === t;
          });
        }),
          (t.postsByTag = function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments[1];
            return e.filter(function(e) {
              return -1 !== e.tags.indexOf(t);
            });
          }),
          (t.postsByCategory = function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments[1];
            return e.filter(function(e) {
              return e.category.toLowerCase() === t.toLowerCase();
            });
          }),
          (t.postsByAuthor = function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              t = arguments[1];
            return e.filter(function(e) {
              return e.author.toLowerCase() === t.toLowerCase();
            });
          });
      },
      305: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, t) {
          var n = [],
            a = [],
            r = [];
          for (
            t
              ? e.length <= 2
                ? (n = [].concat((0, E.default)(e)))
                : e.forEach(function(e, t) {
                    t % 4 == 0 ? n.push(e) : a.push(e);
                  })
              : (a = [].concat((0, E.default)(e))),
              n.forEach(function(e, t) {
                if (
                  (r.push([
                    (0, m.default)({}, e, { featured: !0, even: t % 2 })
                  ]),
                  a.length >= 3)
                ) {
                  var n = a.splice(0, 3);
                  r.push([].concat((0, E.default)(n)));
                }
              });
            a.length > 0;

          ) {
            var i = a.splice(0, 3);
            r.push([].concat((0, E.default)(i)));
          }
          return r;
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(17),
          l = a(i),
          o = n(1),
          d = a(o),
          u = n(6),
          f = a(u),
          s = n(3),
          c = a(s),
          p = n(4),
          h = a(p),
          g = n(5),
          m = a(g),
          x = n(23),
          E = a(x),
          b = n(13),
          v = a(b),
          _ = n(0),
          y = a(_),
          T = n(12),
          R = a(T),
          O = n(48),
          k = n(83),
          N = a(k),
          A = n(306),
          I = a(A),
          w = n(307),
          P = a(w),
          C = (0, v.default)(
            [
              "\n  margin-left: -15px;\n  margin-right: -15px;\n  ",
              ";\n  ",
              ";\n"
            ],
            [
              "\n  margin-left: -15px;\n  margin-right: -15px;\n  ",
              ";\n  ",
              ";\n"
            ]
          ),
          M = (0, v.default)(
            ["\n    margin-left: 0;\n    margin-right: 0;\n  "],
            ["\n    margin-left: 0;\n    margin-right: 0;\n  "]
          ),
          L = (0, v.default)(
            [
              "\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",
              ";\n"
            ],
            [
              "\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",
              ";\n"
            ]
          ),
          S = (0, v.default)(
            [
              "\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "
            ],
            [
              "\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "
            ]
          ),
          D = (0, v.default)(
            [
              "\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"
            ],
            [
              "\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"
            ]
          ),
          U = R.default.div(C, N.default.sm(M), (0, O.clearFix)()),
          z = R.default.div(L, N.default.sm(S)),
          F = R.default.div(D),
          H = (function(e) {
            function t() {
              return (
                (0, d.default)(this, t),
                (0, c.default)(
                  this,
                  (t.__proto__ || (0, l.default)(t)).apply(this, arguments)
                )
              );
            }
            return (
              (0, h.default)(t, e),
              (0, f.default)(t, [
                {
                  key: "renderRow",
                  value: function(e, t) {
                    if (
                      this.props.featured &&
                      1 === e.length &&
                      e[0].featured
                    ) {
                      var n = e[0];
                      return y.default.createElement(
                        F,
                        { key: "featured-" + n.url },
                        y.default.createElement(P.default, {
                          key: n.url,
                          lazy: t > 0,
                          title: n.title,
                          image: n.thumbImage,
                          text: n.thumbText,
                          even: n.even,
                          tags: n.tags,
                          date: n.date,
                          category: n.category,
                          href: n.url
                        })
                      );
                    }
                    return y.default.createElement(
                      U,
                      { key: "simple-" + t },
                      e.map(function(e) {
                        return y.default.createElement(
                          z,
                          { key: e.url },
                          y.default.createElement(I.default, {
                            lazy: t > 0,
                            title: e.title,
                            image: e.thumbImage,
                            text: e.thumbText,
                            even: e.even,
                            tags: e.tags,
                            date: e.date,
                            category: e.category,
                            href: e.url
                          })
                        );
                      })
                    );
                  }
                },
                {
                  key: "render",
                  value: function() {
                    var e = this;
                    if (0 === this.props.posts.length) return null;
                    var t = r(this.props.posts, this.props.featured);
                    return y.default.createElement(
                      "div",
                      null,
                      t.map(function(t, n) {
                        return e.renderRow(t, n);
                      })
                    );
                  }
                }
              ]),
              t
            );
          })(y.default.Component);
        (H.defaultProps = { featured: !0, placeholder: "" }), (t.default = H);
      },
      306: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e) {
          return d.default.createElement(
            b,
            null,
            d.default.createElement(
              s.PostLink,
              { href: e.href },
              d.default.createElement(g.default, {
                src: e.image,
                lazy: e.lazy
              }),
              d.default.createElement(
                "span",
                { style: { display: "none" } },
                e.title
              )
            ),
            d.default.createElement(
              v,
              null,
              d.default.createElement(
                p.default,
                { category: e.category },
                e.category
              )
            ),
            d.default.createElement(_, { href: e.href }, e.title)
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(13),
          l = a(i),
          o = n(0),
          d = a(o),
          u = n(12),
          f = a(u),
          s = n(37),
          c = n(84),
          p = a(c),
          h = n(85),
          g = a(h),
          m = (0, l.default)(
            ["\n  display: block;\n  width: 100%;\n  text-align: center;\n"],
            ["\n  display: block;\n  width: 100%;\n  text-align: center;\n"]
          ),
          x = (0, l.default)(
            ["\n  margin-top: 10px;\n"],
            ["\n  margin-top: 10px;\n"]
          ),
          E = (0, l.default)(
            [
              "\n  font-size: 15px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",
              ";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ],
            [
              "\n  font-size: 15px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",
              ";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ]
          ),
          b = f.default.div(m),
          v = f.default.div(x),
          _ = (0, f.default)(s.PostLink)(E, function(e) {
            return e.theme.colors.black;
          });
        t.default = r;
      },
      307: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e) {
          return d.default.createElement(
            y,
            null,
            d.default.createElement(
              T,
              { even: e.even },
              d.default.createElement(
                c.PostLink,
                { href: e.href },
                d.default.createElement(m.default, {
                  featured: !0,
                  src: e.image,
                  lazy: e.lazy
                }),
                d.default.createElement(
                  "span",
                  { style: { display: "none" } },
                  e.title
                )
              )
            ),
            d.default.createElement(
              R,
              null,
              d.default.createElement(
                O,
                null,
                d.default.createElement(
                  h.default,
                  { category: e.category },
                  e.category
                ),
                d.default.createElement(
                  k,
                  { prefetch: !0, href: e.href },
                  e.title
                ),
                e.text && d.default.createElement("p", null, e.text)
              )
            )
          );
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = n(13),
          l = a(i),
          o = n(0),
          d = a(o),
          u = n(12),
          f = a(u),
          s = n(48),
          c = n(37),
          p = n(84),
          h = a(p),
          g = n(85),
          m = a(g),
          x = (0, l.default)(
            [
              "\n  display: block;\n  ",
              ";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",
              ") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"
            ],
            [
              "\n  display: block;\n  ",
              ";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",
              ") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"
            ]
          ),
          E = (0, l.default)(
            [
              "\n  width: 45%;\n  float: ",
              ";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",
              ") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"
            ],
            [
              "\n  width: 45%;\n  float: ",
              ";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",
              ") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"
            ]
          ),
          b = (0, l.default)(
            [
              "\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",
              ") {\n    width: 100%;\n  }\n"
            ],
            [
              "\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",
              ") {\n    width: 100%;\n  }\n"
            ]
          ),
          v = (0, l.default)(
            [
              "\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",
              ") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"
            ],
            [
              "\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",
              ") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"
            ]
          ),
          _ = (0, l.default)(
            [
              "\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ],
            [
              "\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ]
          ),
          y = f.default.div(x, (0, s.clearFix)(), function(e) {
            return e.theme.flexboxgrid.breakpoints.sm + "em";
          }),
          T = f.default.div(
            E,
            function(e) {
              return e.even ? "right" : "left";
            },
            function(e) {
              return e.theme.flexboxgrid.breakpoints.sm + "em";
            }
          ),
          R = f.default.div(b, function(e) {
            return e.theme.flexboxgrid.breakpoints.sm + "em";
          }),
          O = f.default.div(v, function(e) {
            return e.theme.flexboxgrid.breakpoints.sm + "em";
          }),
          k = (0, f.default)(c.PostLink)(_);
        t.default = r;
      },
      308: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(5),
          i = a(r),
          l = n(23),
          o = a(l),
          d = n(17),
          u = a(d),
          f = n(35),
          s = a(f),
          c = n(9),
          p = a(c),
          h = n(115),
          g = a(h),
          m = n(1),
          x = a(m),
          E = n(3),
          b = a(E),
          v = n(6),
          _ = a(v),
          y = n(4),
          T = a(y),
          R = n(0),
          O = a(R),
          k = n(341),
          N = (function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return (t.default = e), t;
          })(k);
        t.default = function(e, t) {
          return (function(n) {
            function a(e) {
              (0, x.default)(this, a);
              var n = (0, b.default)(
                this,
                (a.__proto__ || (0, u.default)(a)).call(this, e)
              );
              return (
                (n.onLoadOlderClick = function() {
                  var e = 2 * t,
                    a = n.props.url.query.lang,
                    r = n.state[a] ? n.state[a].posts : [];
                  N.fetchAllPublishedPosts(a, e, r.length).then(function(t) {
                    n.setState(function(n) {
                      return (0,
                      p.default)({}, a, { posts: [].concat((0, o.default)(n[a].posts), (0, o.default)(t)), hasMore: t.length === e });
                    });
                  });
                }),
                (n.state = e),
                n
              );
            }
            return (
              (0, T.default)(a, n),
              (0, _.default)(a, null, [
                {
                  key: "getInitialProps",
                  value: (function() {
                    function e(e) {
                      return n.apply(this, arguments);
                    }
                    var n = (0, g.default)(
                      s.default.mark(function e(n) {
                        var a,
                          r = n.query;
                        return s.default.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    N.fetchAllPublishedPosts(r.lang, t)
                                  );
                                case 2:
                                  return (
                                    (a = e.sent),
                                    e.abrupt(
                                      "return",
                                      (0, p.default)({}, r.lang, {
                                        posts: a,
                                        hasMore: a.length === t
                                      })
                                    )
                                  );
                                case 4:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return e;
                  })()
                }
              ]),
              (0, _.default)(a, [
                {
                  key: "componentWillReceiveProps",
                  value: function(e) {
                    var n = this,
                      a = e.url.query.lang,
                      r = this.props.url.query.lang;
                    this.state[a] ||
                      a === r ||
                      (this.setState(function(e) {
                        return (0, p.default)({}, a, e[r]);
                      }),
                      N.fetchAllPublishedPosts(a, t).then(function(e) {
                        n.setState(
                          (0, p.default)({}, a, {
                            posts: e,
                            hasMore: e.length === t
                          })
                        );
                      }));
                  }
                },
                {
                  key: "render",
                  value: function() {
                    var t = this.props.url.query.lang,
                      n = this.state[t] ? this.state[t].posts : [],
                      a = !!this.state[t] && this.state[t].hasMore;
                    return O.default.createElement(
                      e,
                      (0, i.default)({}, this.props, {
                        lang: t,
                        posts: n,
                        hasMore: a,
                        onLoadMore: this.onLoadOlderClick
                      })
                    );
                  }
                }
              ]),
              a
            );
          })(O.default.Component);
        };
      },
      619: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(17),
          i = a(r),
          l = n(1),
          o = a(l),
          d = n(6),
          u = a(d),
          f = n(3),
          s = a(f),
          c = n(4),
          p = a(c),
          h = n(0),
          g = a(h),
          m = n(7),
          x = a(m),
          E = n(620),
          b = a(E),
          v = n(342),
          _ = a(v),
          y = (function(e) {
            function t() {
              return (
                (0, o.default)(this, t),
                (0, s.default)(
                  this,
                  (t.__proto__ || (0, i.default)(t)).apply(this, arguments)
                )
              );
            }
            return (
              (0, p.default)(t, e),
              (0, u.default)(
                t,
                [
                  {
                    key: "render",
                    value: function() {
                      var e = this.props.statusCode,
                        t =
                          404 === e
                            ? "This page could not be found"
                            : b.default[e] ||
                              "An unexpected error has occurred";
                      return g.default.createElement(
                        "div",
                        { style: T.error },
                        g.default.createElement(
                          _.default,
                          null,
                          g.default.createElement("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0"
                          })
                        ),
                        g.default.createElement(
                          "div",
                          null,
                          g.default.createElement("style", {
                            dangerouslySetInnerHTML: {
                              __html: "body { margin: 0 }"
                            }
                          }),
                          e
                            ? g.default.createElement("h1", { style: T.h1 }, e)
                            : null,
                          g.default.createElement(
                            "div",
                            { style: T.desc },
                            g.default.createElement(
                              "h2",
                              { style: T.h2 },
                              t,
                              "."
                            )
                          )
                        )
                      );
                    }
                  }
                ],
                [
                  {
                    key: "getInitialProps",
                    value: function(e) {
                      var t = e.res,
                        n = e.err;
                      return {
                        statusCode: t ? t.statusCode : n ? n.statusCode : null
                      };
                    }
                  }
                ]
              ),
              t
            );
          })(g.default.Component);
        (y.propTypes = { statusCode: x.default.number }), (t.default = y);
        var T = {
          error: {
            color: "#000",
            background: "#fff",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          },
          desc: {
            display: "inline-block",
            textAlign: "left",
            lineHeight: "49px",
            height: "49px",
            verticalAlign: "middle"
          },
          h1: {
            display: "inline-block",
            borderRight: "1px solid rgba(0, 0, 0,.3)",
            margin: 0,
            marginRight: "20px",
            padding: "10px 23px 10px 0",
            fontSize: "24px",
            fontWeight: 500,
            verticalAlign: "top"
          },
          h2: {
            fontSize: "14px",
            fontWeight: "normal",
            lineHeight: "inherit",
            margin: 0,
            padding: 0
          }
        };
      },
      620: function(e, t) {
        e.exports = {
          100: "Continue",
          101: "Switching Protocols",
          200: "OK",
          201: "Created",
          202: "Accepted",
          203: "Non-Authoritative Information",
          204: "No Content",
          205: "Reset Content",
          206: "Partial Content",
          207: "Multi Status",
          208: "Already Reported",
          226: "IM Used",
          300: "Multiple Choices",
          301: "Moved Permanently",
          302: "Found",
          303: "See Other",
          304: "Not Modified",
          305: "Use Proxy",
          306: "Switch Proxy",
          307: "Temporary Redirect",
          308: "Permanent Redirect",
          400: "Bad Request",
          401: "Unauthorized",
          402: "Payment Required",
          403: "Forbidden",
          404: "Not Found",
          405: "Method Not Allowed",
          406: "Not Acceptable",
          407: "Proxy Authentication Required",
          408: "Request Time-out",
          409: "Conflict",
          410: "Gone",
          411: "Length Required",
          412: "Precondition Failed",
          413: "Request Entity Too Large",
          414: "Request-URI Too Large",
          415: "Unsupported Media Type",
          416: "Requested Range not Satisfiable",
          417: "Expectation Failed",
          418: "I'm a teapot",
          421: "Misdirected Request",
          422: "Unprocessable Entity",
          423: "Locked",
          424: "Failed Dependency",
          426: "Upgrade Required",
          428: "Precondition Required",
          429: "Too Many Requests",
          431: "Request Header Fields Too Large",
          451: "Unavailable For Legal Reasons",
          500: "Internal Server Error",
          501: "Not Implemented",
          502: "Bad Gateway",
          503: "Service Unavailable",
          504: "Gateway Time-out",
          505: "HTTP Version not Supported",
          506: "Variant Also Negotiates",
          507: "Insufficient Storage",
          508: "Loop Detected",
          510: "Not Extended",
          511: "Network Authentication Required",
          CONTINUE: 100,
          SWITCHING_PROTOCOLS: 101,
          OK: 200,
          CREATED: 201,
          ACCEPTED: 202,
          NON_AUTHORITATIVE_INFORMATION: 203,
          NO_CONTENT: 204,
          RESET_CONTENT: 205,
          PARTIAL_CONTENT: 206,
          MULTI_STATUS: 207,
          ALREADY_REPORTED: 208,
          IM_USED: 226,
          MULTIPLE_CHOICES: 300,
          MOVED_PERMANENTLY: 301,
          FOUND: 302,
          SEE_OTHER: 303,
          NOT_MODIFIED: 304,
          USE_PROXY: 305,
          SWITCH_PROXY: 306,
          TEMPORARY_REDIRECT: 307,
          PERMANENT_REDIRECT: 308,
          BAD_REQUEST: 400,
          UNAUTHORIZED: 401,
          PAYMENT_REQUIRED: 402,
          FORBIDDEN: 403,
          NOT_FOUND: 404,
          METHOD_NOT_ALLOWED: 405,
          NOT_ACCEPTABLE: 406,
          PROXY_AUTHENTICATION_REQUIRED: 407,
          REQUEST_TIMEOUT: 408,
          CONFLICT: 409,
          GONE: 410,
          LENGTH_REQUIRED: 411,
          PRECONDITION_FAILED: 412,
          REQUEST_ENTITY_TOO_LARGE: 413,
          REQUEST_URI_TOO_LONG: 414,
          UNSUPPORTED_MEDIA_TYPE: 415,
          REQUESTED_RANGE_NOT_SATISFIABLE: 416,
          EXPECTATION_FAILED: 417,
          IM_A_TEAPOT: 418,
          MISDIRECTED_REQUEST: 421,
          UNPROCESSABLE_ENTITY: 422,
          UPGRADE_REQUIRED: 426,
          PRECONDITION_REQUIRED: 428,
          LOCKED: 423,
          FAILED_DEPENDENCY: 424,
          TOO_MANY_REQUESTS: 429,
          REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
          UNAVAILABLE_FOR_LEGAL_REASONS: 451,
          INTERNAL_SERVER_ERROR: 500,
          NOT_IMPLEMENTED: 501,
          BAD_GATEWAY: 502,
          SERVICE_UNAVAILABLE: 503,
          GATEWAY_TIMEOUT: 504,
          HTTP_VERSION_NOT_SUPPORTED: 505,
          VARIANT_ALSO_NEGOTIATES: 506,
          INSUFFICIENT_STORAGE: 507,
          LOOP_DETECTED: 508,
          NOT_EXTENDED: 510,
          NETWORK_AUTHENTICATION_REQUIRED: 511
        };
      },
      621: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(13),
          i = a(r),
          l = n(0),
          o = a(l),
          d = n(12),
          u = a(d),
          f = n(343),
          s = a(f),
          c = (0, i.default)(
            [
              "\n  position: relative;\n  display: inline-block;\n  border: 22px solid #fff;\n\n  svg {\n    fill: #ebebeb;\n    width: ",
              "px;\n    height: ",
              "px;\n    top: -10px;\n    left: -10px;\n    transition: all 0.25s ease;\n    position: absolute;\n  }\n\n  &:hover {\n    svg {\n      fill: ",
              ";\n      transform: rotate(90deg);\n    }\n  }\n\n  img {\n    display: inline-block;\n    border-radius: 50%;\n  }\n"
            ],
            [
              "\n  position: relative;\n  display: inline-block;\n  border: 22px solid #fff;\n\n  svg {\n    fill: #ebebeb;\n    width: ",
              "px;\n    height: ",
              "px;\n    top: -10px;\n    left: -10px;\n    transition: all 0.25s ease;\n    position: absolute;\n  }\n\n  &:hover {\n    svg {\n      fill: ",
              ";\n      transform: rotate(90deg);\n    }\n  }\n\n  img {\n    display: inline-block;\n    border-radius: 50%;\n  }\n"
            ]
          ),
          p = u.default.div(
            c,
            function(e) {
              return e.width + 20;
            },
            function(e) {
              return e.height + 20;
            },
            function(e) {
              return e.theme.colors.inversedLinkHover;
            }
          );
        t.default = function(e) {
          var t = e.src,
            n = e.width,
            a = e.height,
            r = e.alt,
            i = e.className;
          return o.default.createElement(
            p,
            { height: a, width: n, className: i },
            o.default.createElement("img", {
              alt: r,
              src: t,
              height: a,
              width: n
            }),
            o.default.createElement(s.default.Avatar, null)
          );
        };
      },
      643: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(13),
          i = a(r),
          l = n(0),
          o = a(l),
          d = n(12),
          u = a(d),
          f = n(343),
          s = a(f),
          c = n(632),
          p = a(c),
          h = n(37),
          g = a(h),
          m = n(621),
          x = a(m),
          E = (0, i.default)(
            [
              "\n  position: relative;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"
            ],
            [
              "\n  position: relative;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"
            ]
          ),
          b = (0, i.default)(
            [
              "\n  margin-top: 55px;\n  margin-bottom: -5px;\n  border-top: 1px solid #ebebeb;\n  text-align: center;\n  min-height: 150px;\n"
            ],
            [
              "\n  margin-top: 55px;\n  margin-bottom: -5px;\n  border-top: 1px solid #ebebeb;\n  text-align: center;\n  min-height: 150px;\n"
            ]
          ),
          v = (0, i.default)(
            ["\n  display: block;\n  margin-bottom: 10px;\n"],
            ["\n  display: block;\n  margin-bottom: 10px;\n"]
          ),
          _ = (0, i.default)(
            [
              "\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  font-size: 16px;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ",
              ";\n  }\n"
            ],
            [
              "\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  font-size: 16px;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ",
              ";\n  }\n"
            ]
          ),
          y = (0, i.default)(
            [
              "\n  color: rgba(0, 0, 0, 0.5);\n  display: block;\n  font-size: 14px;\n  margin-top: 10px;\n"
            ],
            [
              "\n  color: rgba(0, 0, 0, 0.5);\n  display: block;\n  font-size: 14px;\n  margin-top: 10px;\n"
            ]
          ),
          T = (0, i.default)(
            ["\n  display: block;\n  margin-top: 10px;\n"],
            ["\n  display: block;\n  margin-top: 10px;\n"]
          ),
          R = (0, i.default)(
            [
              "\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n  margin-right: 5px;\n"
            ],
            [
              "\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 20px;\n  margin-right: 5px;\n"
            ]
          ),
          O = (0, i.default)(
            ["\n  margin-top: -60px;\n"],
            ["\n  margin-top: -60px;\n"]
          ),
          k = u.default.div(E),
          N = u.default.div(b),
          A = u.default.div(v),
          I = (0, u.default)(g.default.AuthorLink)(_, function(e) {
            return e.theme.colors.inversedLinkHover;
          }),
          w = u.default.div(y),
          P = u.default.div(T),
          C = (0, u.default)(p.default)(R),
          M = (0, u.default)(x.default)(O);
        t.default = function(e) {
          var t = e.author,
            n = e.authorInfo,
            a = e.className;
          return o.default.createElement(
            k,
            { className: a },
            o.default.createElement(
              N,
              null,
              o.default.createElement(
                I,
                { author: t },
                o.default.createElement(M, {
                  alt: n.name,
                  src: n.avatar,
                  height: 70,
                  width: 70
                })
              ),
              o.default.createElement(
                A,
                null,
                o.default.createElement(I, { author: t }, n.name),
                n.description &&
                  o.default.createElement(w, null, n.description),
                o.default.createElement(
                  P,
                  null,
                  o.default.createElement(
                    C,
                    { href: n.social.facebook.href },
                    o.default.createElement(s.default.Facebook, null)
                  ),
                  o.default.createElement(
                    C,
                    { href: n.social.instagram.href },
                    o.default.createElement(s.default.Instagram, null)
                  )
                )
              )
            )
          );
        };
      },
      84: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(13),
          i = a(r),
          l = n(12),
          o = a(l),
          d = n(37),
          u = (0, i.default)(
            [
              "\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 12px;\n  cursor: pointer;\n  transition: color 0.25s ease;\n  text-decoration: underline;\n  color: ",
              ";\n\n  &:hover,\n  &:focus,\n  &:visited {\n    color: ",
              ";\n    text-decoration: underline;\n    transition: color 0.25s ease;\n  }\n\n  &:hover {\n    color: ",
              ";\n  }\n"
            ],
            [
              "\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 12px;\n  cursor: pointer;\n  transition: color 0.25s ease;\n  text-decoration: underline;\n  color: ",
              ";\n\n  &:hover,\n  &:focus,\n  &:visited {\n    color: ",
              ";\n    text-decoration: underline;\n    transition: color 0.25s ease;\n  }\n\n  &:hover {\n    color: ",
              ";\n  }\n"
            ]
          );
        t.default = (0, o.default)(d.CategoryLink)(
          u,
          function(e) {
            return e.theme.colors.black;
          },
          function(e) {
            return e.theme.colors.text;
          },
          function(e) {
            return e.theme.colors.inversedLinkHover;
          }
        );
      },
      85: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var r = n(5),
          i = a(r),
          l = n(19),
          o = a(l),
          d = n(17),
          u = a(d),
          f = n(1),
          s = a(f),
          c = n(6),
          p = a(c),
          h = n(3),
          g = a(h),
          m = n(4),
          x = a(m),
          E = n(13),
          b = a(E),
          v = n(0),
          _ = a(v),
          y = n(12),
          T = a(y),
          R = n(353),
          O = a(R),
          k = (0, b.default)(
            [
              "\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  ",
              " display: block;\n"
            ],
            [
              "\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  ",
              " display: block;\n"
            ]
          ),
          N = (0, b.default)(
            ["\n          background-image: url(", ");\n        "],
            ["\n          background-image: url(", ");\n        "]
          ),
          A = (0, b.default)(
            [
              "\n  height: 200px;\n  @media screen and (max-width: ",
              ") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",
              ") and (max-width: ",
              ") {\n    height: 140px;\n  }\n"
            ],
            [
              "\n  height: 200px;\n  @media screen and (max-width: ",
              ") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",
              ") and (max-width: ",
              ") {\n    height: 140px;\n  }\n"
            ]
          ),
          I = (0, b.default)(
            [
              "\n  height: 250px;\n  width: 100%;\n  @media screen and (max-width: ",
              ") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",
              ") and (max-width: ",
              ") {\n    height: 200px;\n  }\n"
            ],
            [
              "\n  height: 250px;\n  width: 100%;\n  @media screen and (max-width: ",
              ") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",
              ") and (max-width: ",
              ") {\n    height: 200px;\n  }\n"
            ]
          ),
          w = T.default.div(k, function(e) {
            return e.visible
              ? (0, y.css)(N, function(e) {
                  return e.src;
                })
              : "";
          }),
          P = (0, T.default)(w)(
            A,
            function(e) {
              return e.theme.flexboxgrid.breakpoints.sm + "em";
            },
            function(e) {
              return e.theme.flexboxgrid.breakpoints.sm + "em";
            },
            function(e) {
              return e.theme.flexboxgrid.breakpoints.md + "em";
            }
          ),
          C = (0, T.default)(w)(
            I,
            function(e) {
              return e.theme.flexboxgrid.breakpoints.sm + "em";
            },
            function(e) {
              return e.theme.flexboxgrid.breakpoints.sm + "em";
            },
            function(e) {
              return e.theme.flexboxgrid.breakpoints.md + "em";
            }
          ),
          M = (function(e) {
            function t(e) {
              (0, s.default)(this, t);
              var n = (0, g.default)(
                this,
                (t.__proto__ || (0, u.default)(t)).call(this, e)
              );
              return (
                (n.onChangeVisibility = function(e) {
                  e && n.setState({ isVisible: !0 });
                }),
                (n.state = { isVisible: !e.lazy }),
                n
              );
            }
            return (
              (0, x.default)(t, e),
              (0, p.default)(t, [
                {
                  key: "render",
                  value: function() {
                    var e = this.props,
                      t = e.featured,
                      n = (0, o.default)(e, ["featured"]),
                      a = t ? C : P;
                    return _.default.createElement(
                      O.default,
                      {
                        partialVisibility: !0,
                        onChange: this.onChangeVisibility
                      },
                      _.default.createElement(
                        a,
                        (0, i.default)({}, n, { visible: this.state.isVisible })
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(_.default.Component);
        t.default = M;
      },
      925: function(e, t, n) {
        e.exports = n(926);
      },
      926: function(e, t, n) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n(17),
          i = a(r),
          l = n(1),
          o = a(l),
          d = n(6),
          u = a(d),
          f = n(3),
          s = a(f),
          c = n(4),
          p = a(c),
          h = n(13),
          g = a(h),
          m = n(0),
          x = a(m),
          E = n(12),
          b = a(E),
          v = n(241),
          _ = n(349),
          y = a(_),
          T = n(26),
          R = a(T),
          O = n(350),
          k = a(O),
          N = n(351),
          A = a(N),
          I = n(302),
          w = a(I),
          P = n(303),
          C = a(P),
          M = n(304),
          L = (n(37), n(305)),
          S = a(L),
          D = n(619),
          U = a(D),
          z = n(643),
          F = a(z),
          H = n(354),
          q = (a(H), n(308)),
          B = a(q),
          G = (0, g.default)(
            [
              "\n  text-align: center;\n  display: block;\n  margin-bottom: 20px;\n"
            ],
            [
              "\n  text-align: center;\n  display: block;\n  margin-bottom: 20px;\n"
            ]
          ),
          V = b.default.div(G),
          j = (function(e) {
            function t() {
              return (
                (0, o.default)(this, t),
                (0, s.default)(
                  this,
                  (t.__proto__ || (0, i.default)(t)).apply(this, arguments)
                )
              );
            }
            return (
              (0, p.default)(t, e),
              (0, u.default)(t, [
                {
                  key: "render",
                  value: function() {
                    var e = this.props.url.query.author,
                      t = this.props,
                      n = t.lang;
                    t.hasMore, t.onLoadMore;
                    if (!e || !R.default.authors[e])
                      return x.default.createElement(U.default, {
                        statusCode: 404
                      });
                    var a = (0, M.postsByAuthor)(this.props.posts, e);
                    return x.default.createElement(
                      y.default,
                      { lang: n },
                      x.default.createElement(k.default, null),
                      x.default.createElement(A.default, { lang: n }),
                      x.default.createElement("div", {
                        style: { padding: 20 }
                      }),
                      x.default.createElement(
                        v.Grid,
                        { style: { overflow: "hidden" } },
                        x.default.createElement(
                          v.Row,
                          null,
                          x.default.createElement(
                            v.Col,
                            { xs: 12 },
                            x.default.createElement(
                              V,
                              null,
                              x.default.createElement(F.default, {
                                author: e,
                                authorInfo: R.default.authors[e]
                              })
                            )
                          )
                        ),
                        x.default.createElement(
                          v.Row,
                          null,
                          x.default.createElement(
                            v.Col,
                            { xs: 12, sm: 12, md: 9 },
                            x.default.createElement(S.default, {
                              posts: a,
                              featured: !1
                            })
                          ),
                          x.default.createElement(
                            v.Col,
                            { xs: !1, sm: !1, md: 3 },
                            x.default.createElement(
                              "div",
                              { style: { paddingLeft: 20 } },
                              x.default.createElement(
                                w.default,
                                { title: "Tags" },
                                x.default.createElement(C.default, {
                                  tags: (0, M.getTags)(a),
                                  lang: n
                                })
                              )
                            )
                          )
                        )
                      )
                    );
                  }
                }
              ]),
              t
            );
          })(x.default.Component);
        t.default = (0, B.default)(j);
      }
    },
    [925]
  ));
  return { page: comp.default };
});
