window.__NEXT_REGISTER_PAGE("/category", function() {
  var comp = (module.exports = webpackJsonp(
    [13],
    {
      302: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(13),
          l = a(r),
          i = t(0),
          o = a(i),
          u = t(48),
          d = t(12),
          f = a(d),
          s = t(618),
          c = a(s),
          p = (0, l.default)(
            ["\n  display: block;\n  margin-bottom: 30px;\n  ", ";\n"],
            ["\n  display: block;\n  margin-bottom: 30px;\n  ", ";\n"]
          ),
          g = (0, l.default)(
            ["\n  display: block;\n  margin-bottom: 10px;\n"],
            ["\n  display: block;\n  margin-bottom: 10px;\n"]
          ),
          h = f.default.div(p, (0, u.clearFix)()),
          m = (0, f.default)(c.default)(g);
        n.default = function(e) {
          var n = e.className,
            t = e.title,
            a = e.children;
          return o.default.createElement(
            h,
            { className: n },
            o.default.createElement(m, null, t),
            a
          );
        };
      },
      303: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var r = t(17),
          l = a(r),
          i = t(1),
          o = a(i),
          u = t(6),
          d = a(u),
          f = t(3),
          s = a(f),
          c = t(4),
          p = a(c),
          g = t(0),
          h = a(g),
          m = t(352),
          x = (function(e) {
            function n() {
              return (
                (0, o.default)(this, n),
                (0, s.default)(
                  this,
                  (n.__proto__ || (0, l.default)(n)).apply(this, arguments)
                )
              );
            }
            return (
              (0, p.default)(n, e),
              (0, d.default)(n, [
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
                      n = e.className,
                      t = e.tags,
                      a = e.lang;
                    return h.default.createElement(
                      "div",
                      { className: n },
                      t.map(function(e) {
                        return h.default.createElement(
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
              n
            );
          })(h.default.Component);
        n.default = x;
      },
      304: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            n = e.reduce(function(e, n) {
              return n.tags
                ? ((n.tags || []).forEach(function(n) {
                    e[n] ? (e[n] = e[n] + 1) : (e[n] = 1);
                  }),
                  e)
                : e;
            }, {});
          return (0, i.default)(n).map(function(e) {
            return { value: e, count: n[e] };
          });
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.postsByAuthor = n.postsByCategory = n.postsByTag = n.getPostsByLanguage = void 0),
          (n.getTags = r);
        var l = t(617),
          i = a(l),
          o = t(26),
          u = a(o);
        (n.getPostsByLanguage = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : u.default.defaultLanguage;
          return e.filter(function(e) {
            return e.language === n;
          });
        }),
          (n.postsByTag = function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n = arguments[1];
            return e.filter(function(e) {
              return -1 !== e.tags.indexOf(n);
            });
          }),
          (n.postsByCategory = function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n = arguments[1];
            return e.filter(function(e) {
              return e.category.toLowerCase() === n.toLowerCase();
            });
          }),
          (n.postsByAuthor = function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : [],
              n = arguments[1];
            return e.filter(function(e) {
              return e.author.toLowerCase() === n.toLowerCase();
            });
          });
      },
      305: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e, n) {
          var t = [],
            a = [],
            r = [];
          for (
            n
              ? e.length <= 2
                ? (t = [].concat((0, b.default)(e)))
                : e.forEach(function(e, n) {
                    n % 4 == 0 ? t.push(e) : a.push(e);
                  })
              : (a = [].concat((0, b.default)(e))),
              t.forEach(function(e, n) {
                if (
                  (r.push([
                    (0, m.default)({}, e, { featured: !0, even: n % 2 })
                  ]),
                  a.length >= 3)
                ) {
                  var t = a.splice(0, 3);
                  r.push([].concat((0, b.default)(t)));
                }
              });
            a.length > 0;

          ) {
            var l = a.splice(0, 3);
            r.push([].concat((0, b.default)(l)));
          }
          return r;
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var l = t(17),
          i = a(l),
          o = t(1),
          u = a(o),
          d = t(6),
          f = a(d),
          s = t(3),
          c = a(s),
          p = t(4),
          g = a(p),
          h = t(5),
          m = a(h),
          x = t(23),
          b = a(x),
          v = t(13),
          y = a(v),
          k = t(0),
          _ = a(k),
          w = t(12),
          E = a(w),
          M = t(48),
          P = t(83),
          z = a(P),
          C = t(306),
          L = a(C),
          O = t(307),
          j = a(O),
          B = (0, y.default)(
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
          T = (0, y.default)(
            ["\n    margin-left: 0;\n    margin-right: 0;\n  "],
            ["\n    margin-left: 0;\n    margin-right: 0;\n  "]
          ),
          q = (0, y.default)(
            [
              "\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",
              ";\n"
            ],
            [
              "\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",
              ";\n"
            ]
          ),
          S = (0, y.default)(
            [
              "\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "
            ],
            [
              "\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "
            ]
          ),
          V = (0, y.default)(
            [
              "\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"
            ],
            [
              "\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"
            ]
          ),
          A = E.default.div(B, z.default.sm(T), (0, M.clearFix)()),
          R = E.default.div(q, z.default.sm(S)),
          F = E.default.div(V),
          N = (function(e) {
            function n() {
              return (
                (0, u.default)(this, n),
                (0, c.default)(
                  this,
                  (n.__proto__ || (0, i.default)(n)).apply(this, arguments)
                )
              );
            }
            return (
              (0, g.default)(n, e),
              (0, f.default)(n, [
                {
                  key: "renderRow",
                  value: function(e, n) {
                    if (
                      this.props.featured &&
                      1 === e.length &&
                      e[0].featured
                    ) {
                      var t = e[0];
                      return _.default.createElement(
                        F,
                        { key: "featured-" + t.url },
                        _.default.createElement(j.default, {
                          key: t.url,
                          lazy: n > 0,
                          title: t.title,
                          image: t.thumbImage,
                          text: t.thumbText,
                          even: t.even,
                          tags: t.tags,
                          date: t.date,
                          category: t.category,
                          href: t.url
                        })
                      );
                    }
                    return _.default.createElement(
                      A,
                      { key: "simple-" + n },
                      e.map(function(e) {
                        return _.default.createElement(
                          R,
                          { key: e.url },
                          _.default.createElement(L.default, {
                            lazy: n > 0,
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
                    var n = r(this.props.posts, this.props.featured);
                    return _.default.createElement(
                      "div",
                      null,
                      n.map(function(n, t) {
                        return e.renderRow(n, t);
                      })
                    );
                  }
                }
              ]),
              n
            );
          })(_.default.Component);
        (N.defaultProps = { featured: !0, placeholder: "" }), (n.default = N);
      },
      306: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e) {
          return u.default.createElement(
            v,
            null,
            u.default.createElement(
              s.PostLink,
              { href: e.href },
              u.default.createElement(h.default, {
                src: e.image,
                lazy: e.lazy
              }),
              u.default.createElement(
                "span",
                { style: { display: "none" } },
                e.title
              )
            ),
            u.default.createElement(
              y,
              null,
              u.default.createElement(
                p.default,
                { category: e.category },
                e.category
              )
            ),
            u.default.createElement(k, { href: e.href }, e.title)
          );
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var l = t(13),
          i = a(l),
          o = t(0),
          u = a(o),
          d = t(12),
          f = a(d),
          s = t(37),
          c = t(84),
          p = a(c),
          g = t(85),
          h = a(g),
          m = (0, i.default)(
            ["\n  display: block;\n  width: 100%;\n  text-align: center;\n"],
            ["\n  display: block;\n  width: 100%;\n  text-align: center;\n"]
          ),
          x = (0, i.default)(
            ["\n  margin-top: 10px;\n"],
            ["\n  margin-top: 10px;\n"]
          ),
          b = (0, i.default)(
            [
              "\n  font-size: 15px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",
              ";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ],
            [
              "\n  font-size: 15px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",
              ";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ]
          ),
          v = f.default.div(m),
          y = f.default.div(x),
          k = (0, f.default)(s.PostLink)(b, function(e) {
            return e.theme.colors.black;
          });
        n.default = r;
      },
      307: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e) {
          return u.default.createElement(
            _,
            null,
            u.default.createElement(
              w,
              { even: e.even },
              u.default.createElement(
                c.PostLink,
                { href: e.href },
                u.default.createElement(m.default, {
                  featured: !0,
                  src: e.image,
                  lazy: e.lazy
                }),
                u.default.createElement(
                  "span",
                  { style: { display: "none" } },
                  e.title
                )
              )
            ),
            u.default.createElement(
              E,
              null,
              u.default.createElement(
                M,
                null,
                u.default.createElement(
                  g.default,
                  { category: e.category },
                  e.category
                ),
                u.default.createElement(
                  P,
                  { prefetch: !0, href: e.href },
                  e.title
                ),
                e.text && u.default.createElement("p", null, e.text)
              )
            )
          );
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var l = t(13),
          i = a(l),
          o = t(0),
          u = a(o),
          d = t(12),
          f = a(d),
          s = t(48),
          c = t(37),
          p = t(84),
          g = a(p),
          h = t(85),
          m = a(h),
          x = (0, i.default)(
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
          b = (0, i.default)(
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
          v = (0, i.default)(
            [
              "\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",
              ") {\n    width: 100%;\n  }\n"
            ],
            [
              "\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",
              ") {\n    width: 100%;\n  }\n"
            ]
          ),
          y = (0, i.default)(
            [
              "\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",
              ") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"
            ],
            [
              "\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",
              ") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"
            ]
          ),
          k = (0, i.default)(
            [
              "\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ],
            [
              "\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ]
          ),
          _ = f.default.div(x, (0, s.clearFix)(), function(e) {
            return e.theme.flexboxgrid.breakpoints.sm + "em";
          }),
          w = f.default.div(
            b,
            function(e) {
              return e.even ? "right" : "left";
            },
            function(e) {
              return e.theme.flexboxgrid.breakpoints.sm + "em";
            }
          ),
          E = f.default.div(v, function(e) {
            return e.theme.flexboxgrid.breakpoints.sm + "em";
          }),
          M = f.default.div(y, function(e) {
            return e.theme.flexboxgrid.breakpoints.sm + "em";
          }),
          P = (0, f.default)(c.PostLink)(k);
        n.default = r;
      },
      308: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(5),
          l = a(r),
          i = t(23),
          o = a(i),
          u = t(17),
          d = a(u),
          f = t(35),
          s = a(f),
          c = t(9),
          p = a(c),
          g = t(115),
          h = a(g),
          m = t(1),
          x = a(m),
          b = t(3),
          v = a(b),
          y = t(6),
          k = a(y),
          _ = t(4),
          w = a(_),
          E = t(0),
          M = a(E),
          P = t(341),
          z = (function(e) {
            if (e && e.__esModule) return e;
            var n = {};
            if (null != e)
              for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
            return (n.default = e), n;
          })(P);
        n.default = function(e, n) {
          return (function(t) {
            function a(e) {
              (0, x.default)(this, a);
              var t = (0, v.default)(
                this,
                (a.__proto__ || (0, d.default)(a)).call(this, e)
              );
              return (
                (t.onLoadOlderClick = function() {
                  var e = 2 * n,
                    a = t.props.url.query.lang,
                    r = t.state[a] ? t.state[a].posts : [];
                  z.fetchAllPublishedPosts(a, e, r.length).then(function(n) {
                    t.setState(function(t) {
                      return (0,
                      p.default)({}, a, { posts: [].concat((0, o.default)(t[a].posts), (0, o.default)(n)), hasMore: n.length === e });
                    });
                  });
                }),
                (t.state = e),
                t
              );
            }
            return (
              (0, w.default)(a, t),
              (0, k.default)(a, null, [
                {
                  key: "getInitialProps",
                  value: (function() {
                    function e(e) {
                      return t.apply(this, arguments);
                    }
                    var t = (0, h.default)(
                      s.default.mark(function e(t) {
                        var a,
                          r = t.query;
                        return s.default.wrap(
                          function(e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    z.fetchAllPublishedPosts(r.lang, n)
                                  );
                                case 2:
                                  return (
                                    (a = e.sent),
                                    e.abrupt(
                                      "return",
                                      (0, p.default)({}, r.lang, {
                                        posts: a,
                                        hasMore: a.length === n
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
              (0, k.default)(a, [
                {
                  key: "componentWillReceiveProps",
                  value: function(e) {
                    var t = this,
                      a = e.url.query.lang,
                      r = this.props.url.query.lang;
                    this.state[a] ||
                      a === r ||
                      (this.setState(function(e) {
                        return (0, p.default)({}, a, e[r]);
                      }),
                      z.fetchAllPublishedPosts(a, n).then(function(e) {
                        t.setState(
                          (0, p.default)({}, a, {
                            posts: e,
                            hasMore: e.length === n
                          })
                        );
                      }));
                  }
                },
                {
                  key: "render",
                  value: function() {
                    var n = this.props.url.query.lang,
                      t = this.state[n] ? this.state[n].posts : [],
                      a = !!this.state[n] && this.state[n].hasMore;
                    return M.default.createElement(
                      e,
                      (0, l.default)({}, this.props, {
                        lang: n,
                        posts: t,
                        hasMore: a,
                        onLoadMore: this.onLoadOlderClick
                      })
                    );
                  }
                }
              ]),
              a
            );
          })(M.default.Component);
        };
      },
      622: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(13),
          l = a(r),
          i = t(0),
          o = a(i),
          u = t(12),
          d = a(u),
          f = t(48),
          s = (0, l.default)(["\n  ", ";\n"], ["\n  ", ";\n"]),
          c = (0, l.default)(
            [
              '\n  position: relative;\n  margin: 45px 0px;\n  border: none;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.1);\n\n  &:before {\n    content: "";\n    display: inline-block;\n    background: url(/assets/delimeter.svg) 21px center no-repeat;\n    width: 117px;\n    height: 25px;\n    background-size: 90px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -12px;\n    margin: auto;\n    background-color: #ffffff;\n  }\n'
            ],
            [
              '\n  position: relative;\n  margin: 45px 0px;\n  border: none;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.1);\n\n  &:before {\n    content: "";\n    display: inline-block;\n    background: url(/assets/delimeter.svg) 21px center no-repeat;\n    width: 117px;\n    height: 25px;\n    background-size: 90px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -12px;\n    margin: auto;\n    background-color: #ffffff;\n  }\n'
            ]
          ),
          p = d.default.div(s, (0, f.clearFix)()),
          g = d.default.hr(c);
        n.default = function() {
          return o.default.createElement(
            "div",
            null,
            o.default.createElement(p, null),
            o.default.createElement(g, null)
          );
        };
      },
      84: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(13),
          l = a(r),
          i = t(12),
          o = a(i),
          u = t(37),
          d = (0, l.default)(
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
        n.default = (0, o.default)(u.CategoryLink)(
          d,
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
      85: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var r = t(5),
          l = a(r),
          i = t(19),
          o = a(i),
          u = t(17),
          d = a(u),
          f = t(1),
          s = a(f),
          c = t(6),
          p = a(c),
          g = t(3),
          h = a(g),
          m = t(4),
          x = a(m),
          b = t(13),
          v = a(b),
          y = t(0),
          k = a(y),
          _ = t(12),
          w = a(_),
          E = t(353),
          M = a(E),
          P = (0, v.default)(
            [
              "\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  ",
              " display: block;\n"
            ],
            [
              "\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  ",
              " display: block;\n"
            ]
          ),
          z = (0, v.default)(
            ["\n          background-image: url(", ");\n        "],
            ["\n          background-image: url(", ");\n        "]
          ),
          C = (0, v.default)(
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
          L = (0, v.default)(
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
          O = w.default.div(P, function(e) {
            return e.visible
              ? (0, _.css)(z, function(e) {
                  return e.src;
                })
              : "";
          }),
          j = (0, w.default)(O)(
            C,
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
          B = (0, w.default)(O)(
            L,
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
          T = (function(e) {
            function n(e) {
              (0, s.default)(this, n);
              var t = (0, h.default)(
                this,
                (n.__proto__ || (0, d.default)(n)).call(this, e)
              );
              return (
                (t.onChangeVisibility = function(e) {
                  e && t.setState({ isVisible: !0 });
                }),
                (t.state = { isVisible: !e.lazy }),
                t
              );
            }
            return (
              (0, x.default)(n, e),
              (0, p.default)(n, [
                {
                  key: "render",
                  value: function() {
                    var e = this.props,
                      n = e.featured,
                      t = (0, o.default)(e, ["featured"]),
                      a = n ? B : j;
                    return k.default.createElement(
                      M.default,
                      {
                        partialVisibility: !0,
                        onChange: this.onChangeVisibility
                      },
                      k.default.createElement(
                        a,
                        (0, l.default)({}, t, { visible: this.state.isVisible })
                      )
                    );
                  }
                }
              ]),
              n
            );
          })(k.default.Component);
        n.default = T;
      },
      956: function(e, n, t) {
        e.exports = t(957);
      },
      957: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(17),
          l = a(r),
          i = t(1),
          o = a(i),
          u = t(6),
          d = a(u),
          f = t(3),
          s = a(f),
          c = t(4),
          p = a(c),
          g = t(13),
          h = a(g),
          m = t(0),
          x = a(m),
          b = t(12),
          v = a(b),
          y = t(241),
          k = t(349),
          _ = a(k),
          w = t(350),
          E = a(w),
          M = t(351),
          P = a(M),
          z = t(302),
          C = a(z),
          L = t(303),
          O = a(L),
          j = t(304),
          B = (t(37), t(305)),
          T = a(B),
          q = t(354),
          S = (a(q), t(308)),
          V = a(S),
          A = t(622),
          R = a(A),
          F = (0, h.default)(
            [
              "\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"
            ],
            [
              "\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"
            ]
          ),
          N = v.default.div(F),
          I = (function(e) {
            function n() {
              return (
                (0, o.default)(this, n),
                (0, s.default)(
                  this,
                  (n.__proto__ || (0, l.default)(n)).apply(this, arguments)
                )
              );
            }
            return (
              (0, p.default)(n, e),
              (0, d.default)(n, [
                {
                  key: "render",
                  value: function() {
                    var e = this.props.url.query.category,
                      n = this.props.lang,
                      t = (0, j.postsByCategory)(this.props.posts, e);
                    return x.default.createElement(
                      _.default,
                      { lang: n },
                      x.default.createElement(E.default, null),
                      x.default.createElement(P.default, { lang: n }),
                      x.default.createElement(R.default, null),
                      x.default.createElement("div", {
                        style: { padding: 20 }
                      }),
                      x.default.createElement(
                        y.Grid,
                        { style: { overflow: "hidden" } },
                        x.default.createElement(
                          y.Row,
                          null,
                          x.default.createElement(
                            y.Col,
                            { xs: 12 },
                            x.default.createElement(
                              N,
                              null,
                              x.default.createElement(
                                "h2",
                                null,
                                "Browsing by Stem Type"
                              ),
                              x.default.createElement("h1", null, e)
                            )
                          )
                        ),
                        x.default.createElement(
                          y.Row,
                          null,
                          x.default.createElement(
                            y.Col,
                            { xs: 12, sm: 12, md: 9 },
                            x.default.createElement(T.default, {
                              posts: t,
                              featured: !1
                            })
                          ),
                          x.default.createElement(
                            y.Col,
                            { xs: !1, sm: !1, md: 3 },
                            x.default.createElement(
                              "div",
                              { style: { paddingLeft: 20 } },
                              x.default.createElement(
                                C.default,
                                { title: "Tags" },
                                x.default.createElement(O.default, {
                                  tags: (0, j.getTags)(t),
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
              n
            );
          })(x.default.Component);
        n.default = (0, V.default)(I);
      }
    },
    [956]
  ));
  return { page: comp.default };
});