
          window.__NEXT_REGISTER_PAGE('/tag', function() {
            var comp = module.exports=webpackJsonp([14],{1002:function(e,t,n){e.exports=n(1003)},1003:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(16),i=a(r),l=n(1),o=a(l),u=n(7),d=a(u),f=n(2),s=a(f),c=n(3),p=a(c),g=n(14),h=a(g),m=n(0),x=a(m),b=n(13),v=a(b),y=n(252),k=n(367),_=a(k),w=n(368),E=a(w),M=n(369),P=a(M),z=n(318),C=a(z),L=n(319),O=a(L),j=n(320),B=n(42),T=n(358),q=a(T),V=n(372),A=a(V),R=n(321),S=a(R),N=(0,h.default)(["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n  }\n"],["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n  }\n"]),F=v.default.div(N),I=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.props.lang,t=this.props.url.query.tag,n=(0,j.postsByTag)(this.props.posts,t,e);return x.default.createElement(_.default,{lang:e},x.default.createElement(E.default,null),x.default.createElement(P.default,{lang:e}),x.default.createElement(A.default,{current:e,getLink:function(e){return(0,B.getTagLink)(t,e.id)}}),x.default.createElement(y.Grid,{style:{overflow:"hidden"}},x.default.createElement(y.Row,null,x.default.createElement(y.Col,{xs:12},x.default.createElement(F,null,x.default.createElement("h2",null,"Browsing by tag"),x.default.createElement("h1",null,"#",t)))),x.default.createElement(y.Row,null,x.default.createElement(y.Col,{xs:12,sm:12,md:9},x.default.createElement(q.default,{posts:n,featured:!1})),x.default.createElement(y.Col,{xs:!1,sm:!1,md:3},x.default.createElement("div",{style:{paddingLeft:20}},x.default.createElement(C.default,{title:"Tags"},x.default.createElement(O.default,{tags:(0,j.getTags)(n),lang:e})))))))}}]),t}(x.default.Component);t.default=(0,S.default)(I)},249:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(4),i=a(r),l=n(18),o=a(l),u=n(16),d=a(u),f=n(1),s=a(f),c=n(7),p=a(c),g=n(2),h=a(g),m=n(3),x=a(m),b=n(14),v=a(b),y=n(0),k=a(y),_=n(13),w=a(_),E=n(371),M=a(E),P=(0,v.default)(["\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  "," display: block;\n"],["\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  "," display: block;\n"]),z=(0,v.default)(["\n          background-image: url(",");\n        "],["\n          background-image: url(",");\n        "]),C=(0,v.default)(["\n  height: 200px;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 140px;\n  }\n"],["\n  height: 200px;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 140px;\n  }\n"]),L=(0,v.default)(["\n  height: 250px;\n  width: 100%;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 200px;\n  }\n"],["\n  height: 250px;\n  width: 100%;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 200px;\n  }\n"]),O=w.default.div(P,function(e){return e.visible?(0,_.css)(z,function(e){return e.src}):""}),j=(0,w.default)(O)(C,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.md+"em"}),B=(0,w.default)(O)(L,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.md+"em"}),T=function(e){function t(e){(0,s.default)(this,t);var n=(0,h.default)(this,(t.__proto__||(0,d.default)(t)).call(this,e));return n.onChangeVisibility=function(e){e&&n.setState({isVisible:!0})},n.state={isVisible:!e.lazy},n}return(0,x.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=e.featured,n=(0,o.default)(e,["featured"]),a=t?B:j;return k.default.createElement(M.default,{partialVisibility:!0,onChange:this.onChangeVisibility},k.default.createElement(a,(0,i.default)({},n,{visible:this.state.isVisible})))}}]),t}(k.default.Component);t.default=T},318:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),i=a(r),l=n(0),o=a(l),u=n(52),d=n(13),f=a(d),s=n(641),c=a(s),p=(0,i.default)(["\n  display: block;\n  margin-bottom: 30px;\n  ",";\n"],["\n  display: block;\n  margin-bottom: 30px;\n  ",";\n"]),g=(0,i.default)(["\n  display: block;\n  margin-bottom: 10px;\n"],["\n  display: block;\n  margin-bottom: 10px;\n"]),h=f.default.div(p,(0,u.clearFix)()),m=(0,f.default)(c.default)(g);t.default=function(e){var t=e.className,n=e.title,a=e.children;return o.default.createElement(h,{className:t},o.default.createElement(m,null,n),a)}},319:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(16),i=a(r),l=n(1),o=a(l),u=n(7),d=a(u),f=n(2),s=a(f),c=n(3),p=a(c),g=n(0),h=a(g),m=n(370),x=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,d.default)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.tags,a=e.lang;return h.default.createElement("div",{className:t},n.map(function(e){return h.default.createElement(m.Tag,{key:e.value,tag:e.value,lang:a,style:{fontSize:10}},"#",e.value)}))}}]),t}(h.default.Component);t.default=x},320:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.reduce(function(e,t){return t.tags?((t.tags||[]).forEach(function(t){e[t]?e[t]=e[t]+1:e[t]=1}),e):e},{});return(0,l.default)(t).map(function(e){return{value:e,count:t[e]}})}Object.defineProperty(t,"__esModule",{value:!0}),t.postsByAuthor=t.postsByCategory=t.postsByTag=t.getPostsByLanguage=void 0,t.getTags=r;var i=n(640),l=a(i),o=n(27),u=a(o);t.getPostsByLanguage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.default.defaultLanguage;return e.filter(function(e){return e.language===t})},t.postsByTag=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];return e.filter(function(e){return-1!==e.tags.indexOf(t)})},t.postsByCategory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];return e.filter(function(e){return e.category.toLowerCase()===t.toLowerCase()})},t.postsByAuthor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];return e.filter(function(e){return e.author.toLowerCase()===t.toLowerCase()})}},321:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=a(r),l=n(35),o=a(l),u=n(16),d=a(u),f=n(40),s=a(f),c=n(9),p=a(c),g=n(121),h=a(g),m=n(1),x=a(m),b=n(2),v=a(b),y=n(7),k=a(y),_=n(3),w=a(_),E=n(0),M=a(E),P=n(355),z=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(P);t.default=function(e,t){return function(n){function a(e){(0,x.default)(this,a);var n=(0,v.default)(this,(a.__proto__||(0,d.default)(a)).call(this,e));return n.onLoadOlderClick=function(){var e=2*t,a=n.props.url.query.lang,r=n.state[a]?n.state[a].posts:[];z.fetchAllPublishedPosts(a,e,r.length).then(function(t){n.setState(function(n){return(0,p.default)({},a,{posts:[].concat((0,o.default)(n[a].posts),(0,o.default)(t)),hasMore:t.length===e})})})},n.state=e,n}return(0,w.default)(a,n),(0,k.default)(a,null,[{key:"getInitialProps",value:function(){function e(e){return n.apply(this,arguments)}var n=(0,h.default)(s.default.mark(function e(n){var a,r=n.query;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.fetchAllPublishedPosts(r.lang,t);case 2:return a=e.sent,e.abrupt("return",(0,p.default)({},r.lang,{posts:a,hasMore:a.length===t}));case 4:case"end":return e.stop()}},e,this)}));return e}()}]),(0,k.default)(a,[{key:"componentWillReceiveProps",value:function(e){var n=this,a=e.url.query.lang,r=this.props.url.query.lang;this.state[a]||a===r||(this.setState(function(e){return(0,p.default)({},a,e[r])}),z.fetchAllPublishedPosts(a,t).then(function(e){n.setState((0,p.default)({},a,{posts:e,hasMore:e.length===t}))}))}},{key:"render",value:function(){var t=this.props.url.query.lang,n=this.state[t]?this.state[t].posts:[],a=!!this.state[t]&&this.state[t].hasMore;return M.default.createElement(e,(0,i.default)({},this.props,{lang:t,posts:n,hasMore:a,onLoadMore:this.onLoadOlderClick}))}}]),a}(M.default.Component)}},358:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=[],a=[],r=[];for(t?e.length<=2?n=[].concat((0,b.default)(e)):e.forEach(function(e,t){t%4==0?n.push(e):a.push(e)}):a=[].concat((0,b.default)(e)),n.forEach(function(e,t){if(r.push([(0,m.default)({},e,{featured:!0,even:t%2})]),a.length>=3){var n=a.splice(0,3);r.push([].concat((0,b.default)(n)))}});a.length>0;){var i=a.splice(0,3);r.push([].concat((0,b.default)(i)))}return r}Object.defineProperty(t,"__esModule",{value:!0});var i=n(16),l=a(i),o=n(1),u=a(o),d=n(7),f=a(d),s=n(2),c=a(s),p=n(3),g=a(p),h=n(4),m=a(h),x=n(35),b=a(x),v=n(14),y=a(v),k=n(0),_=a(k),w=n(13),E=a(w),M=n(52),P=n(86),z=a(P),C=n(359),L=a(C),O=n(360),j=a(O),B=(0,y.default)(["\n  margin-left: -15px;\n  margin-right: -15px;\n  ",";\n  ",";\n"],["\n  margin-left: -15px;\n  margin-right: -15px;\n  ",";\n  ",";\n"]),T=(0,y.default)(["\n    margin-left: 0;\n    margin-right: 0;\n  "],["\n    margin-left: 0;\n    margin-right: 0;\n  "]),q=(0,y.default)(["\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",";\n"],["\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",";\n"]),V=(0,y.default)(["\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "],["\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "]),A=(0,y.default)(["\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"],["\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"]),R=E.default.div(B,z.default.sm(T),(0,M.clearFix)()),S=E.default.div(q,z.default.sm(V)),N=E.default.div(A),F=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,f.default)(t,[{key:"renderRow",value:function(e,t){if(this.props.featured&&1===e.length&&e[0].featured){var n=e[0];return _.default.createElement(N,{key:"featured-"+n.url},_.default.createElement(j.default,{key:n.url,lazy:t>0,title:n.title,image:n.thumbImage,text:n.thumbText,even:n.even,tags:n.tags,date:n.date,category:n.category,href:n.url}))}return _.default.createElement(R,{key:"simple-"+t},e.map(function(e){return _.default.createElement(S,{key:e.url},_.default.createElement(L.default,{lazy:t>0,title:e.title,image:e.thumbImage,text:e.thumbText,even:e.even,tags:e.tags,date:e.date,category:e.category,href:e.url}))}))}},{key:"render",value:function(){var e=this;if(0===this.props.posts.length)return null;var t=r(this.props.posts,this.props.featured);return _.default.createElement("div",null,t.map(function(t,n){return e.renderRow(t,n)}))}}]),t}(_.default.Component);F.defaultProps={featured:!0,placeholder:""},t.default=F},359:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return u.default.createElement(v,null,u.default.createElement(s.PostLink,{href:e.href},u.default.createElement(h.default,{src:e.image,lazy:e.lazy}),u.default.createElement("span",{style:{display:"none"}},e.title)),u.default.createElement(y,null,u.default.createElement(p.default,{category:e.category},e.category)),u.default.createElement(k,{href:e.href},e.title))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),l=a(i),o=n(0),u=a(o),d=n(13),f=a(d),s=n(42),c=n(89),p=a(c),g=n(249),h=a(g),m=(0,l.default)(["\n  display: block;\n  width: 100%;\n  text-align: center;\n"],["\n  display: block;\n  width: 100%;\n  text-align: center;\n"]),x=(0,l.default)(["\n  margin-top: 10px;\n"],["\n  margin-top: 10px;\n"]),b=(0,l.default)(["\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"],["\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]),v=f.default.div(m),y=f.default.div(x),k=(0,f.default)(s.PostLink)(b,function(e){return e.theme.colors.black});t.default=r},360:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return u.default.createElement(_,null,u.default.createElement(w,{even:e.even},u.default.createElement(c.PostLink,{href:e.href},u.default.createElement(m.default,{featured:!0,src:e.image,lazy:e.lazy}),u.default.createElement("span",{style:{display:"none"}},e.title))),u.default.createElement(E,null,u.default.createElement(M,null,u.default.createElement(g.default,{category:e.category},e.category),u.default.createElement(P,{prefetch:!0,href:e.href},e.title),e.text&&u.default.createElement("p",null,e.text))))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),l=a(i),o=n(0),u=a(o),d=n(13),f=a(d),s=n(52),c=n(42),p=n(89),g=a(p),h=n(249),m=a(h),x=(0,l.default)(["\n  display: block;\n  ",";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"],["\n  display: block;\n  ",";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"]),b=(0,l.default)(["\n  width: 45%;\n  float: ",";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"],["\n  width: 45%;\n  float: ",";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"]),v=(0,l.default)(["\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n  }\n"],["\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n  }\n"]),y=(0,l.default)(["\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"],["\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"]),k=(0,l.default)(["\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"],["\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]),_=f.default.div(x,(0,s.clearFix)(),function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),w=f.default.div(b,function(e){return e.even?"right":"left"},function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),E=f.default.div(v,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),M=f.default.div(y,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),P=(0,f.default)(c.PostLink)(k);t.default=r},89:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),i=a(r),l=n(13),o=a(l),u=n(42),d=(0,i.default)(["\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 15px;\n  cursor: pointer;\n  transition: color 0.25s ease;\n  text-decoration: underline;\n  color: ",";\n\n  &:hover,\n  &:focus,\n  &:visited {\n    color: ",";\n    text-decoration: underline;\n    transition: color 0.25s ease;\n  }\n\n  &:hover {\n    color: ",";\n  }\n"],["\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 15px;\n  cursor: pointer;\n  transition: color 0.25s ease;\n  text-decoration: underline;\n  color: ",";\n\n  &:hover,\n  &:focus,\n  &:visited {\n    color: ",";\n    text-decoration: underline;\n    transition: color 0.25s ease;\n  }\n\n  &:hover {\n    color: ",";\n  }\n"]);t.default=(0,o.default)(u.CategoryLink)(d,function(e){return e.theme.colors.black},function(e){return e.theme.colors.text},function(e){return e.theme.colors.inversedLinkHover})}},[1002]);
            return { page: comp.default }
          })
        