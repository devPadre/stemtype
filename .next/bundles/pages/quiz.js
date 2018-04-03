window.__NEXT_REGISTER_PAGE("/quiz", function() {
  var comp = (module.exports = webpackJsonp(
    [9],
    {
      302: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(13),
          i = a(r),
          l = t(0),
          o = a(l),
          d = t(48),
          u = t(12),
          f = a(u),
          s = t(618),
          c = a(s),
          p = (0, i.default)(
            ["\n  display: block;\n  margin-bottom: 30px;\n  ", ";\n"],
            ["\n  display: block;\n  margin-bottom: 30px;\n  ", ";\n"]
          ),
          m = (0, i.default)(
            ["\n  display: block;\n  margin-bottom: 10px;\n"],
            ["\n  display: block;\n  margin-bottom: 10px;\n"]
          ),
          g = f.default.div(p, (0, d.clearFix)()),
          h = (0, f.default)(c.default)(m);
        n.default = function(e) {
          var n = e.className,
            t = e.title,
            a = e.children;
          return o.default.createElement(
            g,
            { className: n },
            o.default.createElement(h, null, t),
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
          i = a(r),
          l = t(1),
          o = a(l),
          d = t(6),
          u = a(d),
          f = t(3),
          s = a(f),
          c = t(4),
          p = a(c),
          m = t(0),
          g = a(m),
          h = t(352),
          x = (function(e) {
            function n() {
              return (
                (0, o.default)(this, n),
                (0, s.default)(
                  this,
                  (n.__proto__ || (0, i.default)(n)).apply(this, arguments)
                )
              );
            }
            return (
              (0, p.default)(n, e),
              (0, u.default)(n, [
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
                    return g.default.createElement(
                      "div",
                      { className: n },
                      t.map(function(e) {
                        return g.default.createElement(
                          h.Tag,
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
          })(g.default.Component);
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
          return (0, l.default)(n).map(function(e) {
            return { value: e, count: n[e] };
          });
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.postsByAuthor = n.postsByCategory = n.postsByTag = n.getPostsByLanguage = void 0),
          (n.getTags = r);
        var i = t(617),
          l = a(i),
          o = t(26),
          d = a(o);
        (n.getPostsByLanguage = function() {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : d.default.defaultLanguage;
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
                    (0, h.default)({}, e, { featured: !0, even: n % 2 })
                  ]),
                  a.length >= 3)
                ) {
                  var t = a.splice(0, 3);
                  r.push([].concat((0, b.default)(t)));
                }
              });
            a.length > 0;

          ) {
            var i = a.splice(0, 3);
            r.push([].concat((0, b.default)(i)));
          }
          return r;
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = t(17),
          l = a(i),
          o = t(1),
          d = a(o),
          u = t(6),
          f = a(u),
          s = t(3),
          c = a(s),
          p = t(4),
          m = a(p),
          g = t(5),
          h = a(g),
          x = t(23),
          b = a(x),
          v = t(13),
          y = a(v),
          k = t(0),
          w = a(k),
          _ = t(12),
          E = a(_),
          M = t(48),
          z = t(83),
          P = a(z),
          C = t(306),
          O = a(C),
          L = t(307),
          j = a(L),
          T = (0, y.default)(
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
          B = (0, y.default)(
            ["\n    margin-left: 0;\n    margin-right: 0;\n  "],
            ["\n    margin-left: 0;\n    margin-right: 0;\n  "]
          ),
          S = (0, y.default)(
            [
              "\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",
              ";\n"
            ],
            [
              "\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",
              ";\n"
            ]
          ),
          N = (0, y.default)(
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
          q = E.default.div(T, P.default.sm(B), (0, M.clearFix)()),
          A = E.default.div(S, P.default.sm(N)),
          R = E.default.div(V),
          D = (function(e) {
            function n() {
              return (
                (0, d.default)(this, n),
                (0, c.default)(
                  this,
                  (n.__proto__ || (0, l.default)(n)).apply(this, arguments)
                )
              );
            }
            return (
              (0, m.default)(n, e),
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
                      return w.default.createElement(
                        R,
                        { key: "featured-" + t.url },
                        w.default.createElement(j.default, {
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
                    return w.default.createElement(
                      q,
                      { key: "simple-" + n },
                      e.map(function(e) {
                        return w.default.createElement(
                          A,
                          { key: e.url },
                          w.default.createElement(O.default, {
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
                    return w.default.createElement(
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
          })(w.default.Component);
        (D.defaultProps = { featured: !0, placeholder: "" }), (n.default = D);
      },
      306: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function r(e) {
          return d.default.createElement(
            v,
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
              y,
              null,
              d.default.createElement(
                p.default,
                { category: e.category },
                e.category
              )
            ),
            d.default.createElement(k, { href: e.href }, e.title)
          );
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = t(13),
          l = a(i),
          o = t(0),
          d = a(o),
          u = t(12),
          f = a(u),
          s = t(37),
          c = t(84),
          p = a(c),
          m = t(85),
          g = a(m),
          h = (0, l.default)(
            ["\n  display: block;\n  width: 100%;\n  text-align: center;\n"],
            ["\n  display: block;\n  width: 100%;\n  text-align: center;\n"]
          ),
          x = (0, l.default)(
            ["\n  margin-top: 10px;\n"],
            ["\n  margin-top: 10px;\n"]
          ),
          b = (0, l.default)(
            [
              "\n  font-size: 15px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",
              ";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ],
            [
              "\n  font-size: 15px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",
              ";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ]
          ),
          v = f.default.div(h),
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
          return d.default.createElement(
            w,
            null,
            d.default.createElement(
              _,
              { even: e.even },
              d.default.createElement(
                c.PostLink,
                { href: e.href },
                d.default.createElement(h.default, {
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
              E,
              null,
              d.default.createElement(
                M,
                null,
                d.default.createElement(
                  m.default,
                  { category: e.category },
                  e.category
                ),
                d.default.createElement(
                  z,
                  { prefetch: !0, href: e.href },
                  e.title
                ),
                e.text && d.default.createElement("p", null, e.text)
              )
            )
          );
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = t(13),
          l = a(i),
          o = t(0),
          d = a(o),
          u = t(12),
          f = a(u),
          s = t(48),
          c = t(37),
          p = t(84),
          m = a(p),
          g = t(85),
          h = a(g),
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
          b = (0, l.default)(
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
          v = (0, l.default)(
            [
              "\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",
              ") {\n    width: 100%;\n  }\n"
            ],
            [
              "\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",
              ") {\n    width: 100%;\n  }\n"
            ]
          ),
          y = (0, l.default)(
            [
              "\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",
              ") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"
            ],
            [
              "\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",
              ") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"
            ]
          ),
          k = (0, l.default)(
            [
              "\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ],
            [
              "\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"
            ]
          ),
          w = f.default.div(x, (0, s.clearFix)(), function(e) {
            return e.theme.flexboxgrid.breakpoints.sm + "em";
          }),
          _ = f.default.div(
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
          z = (0, f.default)(c.PostLink)(k);
        n.default = r;
      },
      308: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(5),
          i = a(r),
          l = t(23),
          o = a(l),
          d = t(17),
          u = a(d),
          f = t(35),
          s = a(f),
          c = t(9),
          p = a(c),
          m = t(115),
          g = a(m),
          h = t(1),
          x = a(h),
          b = t(3),
          v = a(b),
          y = t(6),
          k = a(y),
          w = t(4),
          _ = a(w),
          E = t(0),
          M = a(E),
          z = t(341),
          P = (function(e) {
            if (e && e.__esModule) return e;
            var n = {};
            if (null != e)
              for (var t in e)
                Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
            return (n.default = e), n;
          })(z);
        n.default = function(e, n) {
          return (function(t) {
            function a(e) {
              (0, x.default)(this, a);
              var t = (0, v.default)(
                this,
                (a.__proto__ || (0, u.default)(a)).call(this, e)
              );
              return (
                (t.onLoadOlderClick = function() {
                  var e = 2 * n,
                    a = t.props.url.query.lang,
                    r = t.state[a] ? t.state[a].posts : [];
                  P.fetchAllPublishedPosts(a, e, r.length).then(function(n) {
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
              (0, _.default)(a, t),
              (0, k.default)(a, null, [
                {
                  key: "getInitialProps",
                  value: (function() {
                    function e(e) {
                      return t.apply(this, arguments);
                    }
                    var t = (0, g.default)(
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
                                    P.fetchAllPublishedPosts(r.lang, n)
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
                      P.fetchAllPublishedPosts(a, n).then(function(e) {
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
                      (0, i.default)({}, this.props, {
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
      644: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(13),
          i = a(r),
          l = t(0),
          o = a(l),
          d = t(12),
          u = a(d),
          f = (0, i.default)(
            ["\n  margin: 10px 0 20px 0;\n  text-align: center;\n"],
            ["\n  margin: 10px 0 20px 0;\n  text-align: center;\n"]
          ),
          s = (0, i.default)(
            [
              "\n  display: inline-block;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  padding: 16px 48px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    color: ",
              ";\n  }\n"
            ],
            [
              "\n  display: inline-block;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  padding: 16px 48px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    color: ",
              ";\n  }\n"
            ]
          ),
          c = u.default.div(f),
          p = u.default.button(s, function(e) {
            return e.theme.colors.inversedLinkHover;
          });
        n.default = function(e) {
          var n = e.title,
            t = e.onClick;
          return o.default.createElement(
            c,
            null,
            o.default.createElement(p, { onClick: t }, n)
          );
        };
      },
      737: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(13),
          i = a(r),
          l = t(0),
          o = a(l),
          d = t(12),
          u = a(d),
          f = t(26),
          s = a(f),
          c = t(738),
          p = a(c),
          m = (t(348),
          (0, i.default)(
            ["\n  width: 100%;\n  position: relative;\n"],
            ["\n  width: 100%;\n  position: relative;\n"]
          )),
          g = (0, i.default)(
            [
              "\n  display: block;\n  position: relative;\n  width: 30%;\n  max-width: 340px;\n  padding-top: 120px;\n  padding-bottom: 10px;\n  margin: 0 auto;\n\n  @media screen and (max-width: ",
              ") {\n    width: 70%;\n  }\n\n  @media screen and (min-width: ",
              ") and (max-width: ",
              ") {\n    width: 50%;\n  }\n"
            ],
            [
              "\n  display: block;\n  position: relative;\n  width: 30%;\n  max-width: 340px;\n  padding-top: 120px;\n  padding-bottom: 10px;\n  margin: 0 auto;\n\n  @media screen and (max-width: ",
              ") {\n    width: 70%;\n  }\n\n  @media screen and (min-width: ",
              ") and (max-width: ",
              ") {\n    width: 50%;\n  }\n"
            ]
          ),
          h = (0, i.default)(
            [
              "\n  position: absolute;\n  left: 0;\n  top: 0px;\n  width: 100%;\n  height: auto;\n"
            ],
            [
              "\n  position: absolute;\n  left: 0;\n  top: 0px;\n  width: 100%;\n  height: auto;\n"
            ]
          ),
          x = u.default.div(m);
        u.default.div(
          g,
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
          u.default.img.attrs({
            src: "/assets/stem.png",
            srcSet: "/assets/stem@2x.png 2x",
            width: "100%",
            alt: s.default.siteTitle + " logo"
          })(h);
        n.default = function(e) {
          e.lang;
          return o.default.createElement(
            x,
            null,
            o.default.createElement(p.default, null)
          );
        };
      },
      738: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(13),
          i = a(r),
          l = t(0),
          o = a(l),
          d = t(12),
          u = a(d),
          f = t(48),
          s = (0, i.default)(["\n  ", ";\n"], ["\n  ", ";\n"]),
          c = (0, i.default)(
            [
              '\n  position: relative;\n  margin: 50px 0px;\n  border: none;\n  height: .1rem;\n  background: rgba(0, 0, 0, 0.1);\n\n  &:before {\n    content: "";\n    display: inline-block;\n    background: url(/assets/stem.svg) 5px center no-repeat;\n    width: 20rem;\n    height: 3.8rem;\n    background-size: 20rem;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -1.9rem;\n    margin: auto;\n    background-color: #ffffff;\n  }\n'
            ],
            [
              '\n  position: relative;\n  margin: 50px 0px;\n  border: none;\n  height: .1rem;\n  background: rgba(0, 0, 0, 0.1);\n\n  &:before {\n    content: "";\n    display: inline-block;\n    background: url(/assets/stem.svg) 5px center no-repeat;\n    width: 20rem;\n    height: 3.8rem;\n    background-size: 20rem;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -1.9rem;\n    margin: auto;\n    background-color: #ffffff;\n  }\n'
            ]
          ),
          p = u.default.div(s, (0, f.clearFix)()),
          m = u.default.hr(c);
        n.default = function() {
          return o.default.createElement(
            "div",
            null,
            o.default.createElement(p, null),
            o.default.createElement(m, null)
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
          i = a(r),
          l = t(12),
          o = a(l),
          d = t(37),
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
        n.default = (0, o.default)(d.CategoryLink)(
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
      85: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.default = void 0);
        var r = t(5),
          i = a(r),
          l = t(19),
          o = a(l),
          d = t(17),
          u = a(d),
          f = t(1),
          s = a(f),
          c = t(6),
          p = a(c),
          m = t(3),
          g = a(m),
          h = t(4),
          x = a(h),
          b = t(13),
          v = a(b),
          y = t(0),
          k = a(y),
          w = t(12),
          _ = a(w),
          E = t(353),
          M = a(E),
          z = (0, v.default)(
            [
              "\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  ",
              " display: block;\n"
            ],
            [
              "\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  ",
              " display: block;\n"
            ]
          ),
          P = (0, v.default)(
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
          O = (0, v.default)(
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
          L = _.default.div(z, function(e) {
            return e.visible
              ? (0, w.css)(P, function(e) {
                  return e.src;
                })
              : "";
          }),
          j = (0, _.default)(L)(
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
          T = (0, _.default)(L)(
            O,
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
          B = (function(e) {
            function n(e) {
              (0, s.default)(this, n);
              var t = (0, g.default)(
                this,
                (n.__proto__ || (0, u.default)(n)).call(this, e)
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
                      a = n ? T : j;
                    return k.default.createElement(
                      M.default,
                      {
                        partialVisibility: !0,
                        onChange: this.onChangeVisibility
                      },
                      k.default.createElement(
                        a,
                        (0, i.default)({}, t, { visible: this.state.isVisible })
                      )
                    );
                  }
                }
              ]),
              n
            );
          })(k.default.Component);
        n.default = B;
      },
      966: function(e, n, t) {
        e.exports = t(967);
      },
      967: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(17),
          i = a(r),
          l = t(1),
          o = a(l),
          d = t(6),
          u = a(d),
          f = t(3),
          s = a(f),
          c = t(4),
          p = a(c),
          m = t(13),
          g = a(m),
          h = t(0),
          x = a(h),
          b = t(12),
          v = a(b),
          y = t(241),
          k = t(349),
          w = a(k),
          _ = t(350),
          E = a(_),
          M = t(351),
          z = a(M),
          P = t(302),
          C = (a(P), t(303)),
          O = (a(C), t(304), t(305)),
          L = (a(O), t(354)),
          j = (a(L), t(37), t(308)),
          T = a(j),
          B = t(644),
          S = (a(B), t(968)),
          N = a(S),
          V = t(83),
          q = (a(V), t(26)),
          A = a(q),
          R = t(737),
          D = a(R),
          F = (0, g.default)(
            [
              "\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"
            ],
            [
              "\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"
            ]
          ),
          Q = v.default.div(F),
          W = (function(e) {
            function n() {
              return (
                (0, o.default)(this, n),
                (0, s.default)(
                  this,
                  (n.__proto__ || (0, i.default)(n)).apply(this, arguments)
                )
              );
            }
            return (
              (0, p.default)(n, e),
              (0, u.default)(n, [
                {
                  key: "render",
                  value: function() {
                    var e = this.props,
                      n = e.lang,
                      t = (e.posts,
                      e.hasMore,
                      e.onLoadMore,
                      e.image,
                      e.imageWidth,
                      e.imageHeight,
                      A.default.authors[t],
                      A.default.authors[t]);
                    return x.default.createElement(
                      w.default,
                      { lang: n },
                      x.default.createElement(E.default, null),
                      x.default.createElement(z.default, { lang: n }),
                      x.default.createElement(
                        y.Grid,
                        { style: { overflow: "hidden" } },
                        x.default.createElement(
                          y.Row,
                          null,
                          x.default.createElement(
                            y.Col,
                            {
                              xs: 12,
                              lg: 10,
                              lgOffset: 1,
                              style: { padding: 0 }
                            },
                            x.default.createElement(D.default, null),
                            x.default.createElement(
                              Q,
                              { style: { paddingbottom: "5px" } },
                              x.default.createElement(
                                "h2",
                                null,
                                "Welcome to the STEM Type Quiz!"
                              ),
                              x.default.createElement("div", {
                                style: { paddingBottom: "5px" }
                              })
                            )
                          )
                        ),
                        x.default.createElement(
                          y.Row,
                          null,
                          x.default.createElement(
                            y.Col,
                            { xs: 12, sm: 12, md: 12 },
                            x.default.createElement(N.default, null)
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
        n.default = (0, T.default)(W, 5);
      },
      968: function(e, n, t) {
        "use strict";
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = t(17),
          i = a(r),
          l = t(1),
          o = a(l),
          d = t(6),
          u = a(d),
          f = t(3),
          s = a(f),
          c = t(4),
          p = a(c),
          m = t(0),
          g = a(m),
          h = (function(e) {
            function n() {
              return (
                (0, o.default)(this, n),
                (0, s.default)(
                  this,
                  (n.__proto__ || (0, i.default)(n)).apply(this, arguments)
                )
              );
            }
            return (
              (0, p.default)(n, e),
              (0, u.default)(n, [
                {
                  key: "componentDidMount",
                  value: function() {
                    var e = document.createElement("script");
                    (e.src =
                      "https://www.surveygizmo.com/s3/4283433/STEM-Type-Quiz"),
                      (e.async = !0),
                      document.body.appendChild(e);
                  }
                },
                {
                  key: "render",
                  value: function() {
                    var e = {
                        maxWidth: "85",
                        margin: "0 auto 0 auto",
                        leftmargin: "10px",
                        rightmargin: "10px",
                        width: "80%",
                        height: "425px"
                      },
                      n = { width: "100%", height: "80%", border: "none" };
                    return g.default.createElement(
                      "div",
                      { className: "QuizEmbed" },
                      g.default.createElement(
                        "div",
                        {
                          className: "gizmo_target",
                          "data-rid-id": "4283433",
                          "data-fg": "#252525",
                          "data-bg": "#EDEDED",
                          style: e,
                          "data-auto-scroll": "true"
                        },
                        g.default.createElement("iframe", {
                          title: "embed-test",
                          style: n,
                          src:
                            "https://www.surveygizmo.com/s3/4283433/STEM-Type-Quiz"
                        })
                      )
                    );
                  }
                }
              ]),
              n
            );
          })(m.Component);
        n.default = h;
      }
    },
    [966]
  ));
  return { page: comp.default };
});
