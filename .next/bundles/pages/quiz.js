
          window.__NEXT_REGISTER_PAGE('/quiz', function() {
            var comp = module.exports=webpackJsonp([11],{249:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(4),i=a(r),l=t(18),o=a(l),u=t(15),d=a(u),f=t(1),s=a(f),c=t(7),p=a(c),m=t(2),g=a(m),h=t(3),x=a(h),b=t(14),v=a(b),y=t(0),w=a(y),_=t(13),k=a(_),E=t(375),M=a(E),z=(0,v.default)(["\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  "," display: block;\n"],["\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  "," display: block;\n"]),P=(0,v.default)(["\n          background-image: url(",");\n        "],["\n          background-image: url(",");\n        "]),C=(0,v.default)(["\n  height: 200px;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 140px;\n  }\n"],["\n  height: 200px;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 140px;\n  }\n"]),O=(0,v.default)(["\n  height: 250px;\n  width: 100%;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 200px;\n  }\n"],["\n  height: 250px;\n  width: 100%;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 200px;\n  }\n"]),L=k.default.div(z,function(e){return e.visible?(0,_.css)(P,function(e){return e.src}):""}),j=(0,k.default)(L)(C,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.md+"em"}),T=(0,k.default)(L)(O,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.md+"em"}),I=function(e){function n(e){(0,s.default)(this,n);var t=(0,g.default)(this,(n.__proto__||(0,d.default)(n)).call(this,e));return t.onChangeVisibility=function(e){e&&t.setState({isVisible:!0})},t.state={isVisible:!e.lazy},t}return(0,x.default)(n,e),(0,p.default)(n,[{key:"render",value:function(){var e=this.props,n=e.featured,t=(0,o.default)(e,["featured"]),a=n?T:j;return w.default.createElement(M.default,{partialVisibility:!0,onChange:this.onChangeVisibility},w.default.createElement(a,(0,i.default)({},t,{visible:this.state.isVisible})))}}]),n}(w.default.Component);n.default=I},251:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(15),i=a(r),l=t(1),o=a(l),u=t(7),d=a(u),f=t(2),s=a(f),c=t(3),p=a(c),m=t(0),g=a(m),h=t(359),x=function(e){function n(){return(0,o.default)(this,n),(0,s.default)(this,(n.__proto__||(0,i.default)(n)).apply(this,arguments))}return(0,p.default)(n,e),(0,d.default)(n,[{key:"componentDidMount",value:function(){window.GA_INITIALIZED||((0,h.initGA)(),window.GA_INITIALIZED=!0),(0,h.logPageView)(),(0,h.logEvent)()}},{key:"render",value:function(){return g.default.createElement("div",null,this.props.children)}}]),n}(g.default.Component);n.default=x},320:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(14),i=a(r),l=t(0),o=a(l),u=t(52),d=t(13),f=a(d),s=t(646),c=a(s),p=(0,i.default)(["\n  display: block;\n  margin-bottom: 30px;\n  ",";\n"],["\n  display: block;\n  margin-bottom: 30px;\n  ",";\n"]),m=(0,i.default)(["\n  display: block;\n  margin-bottom: 10px;\n"],["\n  display: block;\n  margin-bottom: 10px;\n"]),g=f.default.div(p,(0,u.clearFix)()),h=(0,f.default)(c.default)(m);n.default=function(e){var n=e.className,t=e.title,a=e.children;return o.default.createElement(g,{className:n},o.default.createElement(h,null,t),a)}},321:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=t(15),i=a(r),l=t(1),o=a(l),u=t(7),d=a(u),f=t(2),s=a(f),c=t(3),p=a(c),m=t(0),g=a(m),h=t(374),x=function(e){function n(){return(0,o.default)(this,n),(0,s.default)(this,(n.__proto__||(0,i.default)(n)).apply(this,arguments))}return(0,p.default)(n,e),(0,d.default)(n,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this.props,n=e.className,t=e.tags,a=e.lang;return g.default.createElement("div",{className:n},t.map(function(e){return g.default.createElement(h.Tag,{key:e.value,tag:e.value,lang:a,style:{fontSize:10}},"#",e.value)}))}}]),n}(g.default.Component);n.default=x},322:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=e.reduce(function(e,n){return n.tags?((n.tags||[]).forEach(function(n){e[n]?e[n]=e[n]+1:e[n]=1}),e):e},{});return(0,l.default)(n).map(function(e){return{value:e,count:n[e]}})}Object.defineProperty(n,"__esModule",{value:!0}),n.postsByAuthor=n.postsByCategory=n.postsByTag=n.getPostsByLanguage=void 0,n.getTags=r;var i=t(645),l=a(i),o=t(27),u=a(o);n.getPostsByLanguage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u.default.defaultLanguage;return e.filter(function(e){return e.language===n})},n.postsByTag=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];return e.filter(function(e){return-1!==e.tags.indexOf(n)})},n.postsByCategory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];return e.filter(function(e){return e.category.toLowerCase()===n.toLowerCase()})},n.postsByAuthor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];return e.filter(function(e){return e.author.toLowerCase()===n.toLowerCase()})}},323:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(4),i=a(r),l=t(35),o=a(l),u=t(15),d=a(u),f=t(40),s=a(f),c=t(9),p=a(c),m=t(121),g=a(m),h=t(1),x=a(h),b=t(2),v=a(b),y=t(7),w=a(y),_=t(3),k=a(_),E=t(0),M=a(E),z=t(358),P=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(z);n.default=function(e,n){return function(t){function a(e){(0,x.default)(this,a);var t=(0,v.default)(this,(a.__proto__||(0,d.default)(a)).call(this,e));return t.onLoadOlderClick=function(){var e=2*n,a=t.props.url.query.lang,r=t.state[a]?t.state[a].posts:[];P.fetchAllPublishedPosts(a,e,r.length).then(function(n){t.setState(function(t){return(0,p.default)({},a,{posts:[].concat((0,o.default)(t[a].posts),(0,o.default)(n)),hasMore:n.length===e})})})},t.state=e,t}return(0,k.default)(a,t),(0,w.default)(a,null,[{key:"getInitialProps",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,g.default)(s.default.mark(function e(t){var a,r=t.query;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.fetchAllPublishedPosts(r.lang,n);case 2:return a=e.sent,e.abrupt("return",(0,p.default)({},r.lang,{posts:a,hasMore:a.length===n}));case 4:case"end":return e.stop()}},e,this)}));return e}()}]),(0,w.default)(a,[{key:"componentWillReceiveProps",value:function(e){var t=this,a=e.url.query.lang,r=this.props.url.query.lang;this.state[a]||a===r||(this.setState(function(e){return(0,p.default)({},a,e[r])}),P.fetchAllPublishedPosts(a,n).then(function(e){t.setState((0,p.default)({},a,{posts:e,hasMore:e.length===n}))}))}},{key:"render",value:function(){var n=this.props.url.query.lang,t=this.state[n]?this.state[n].posts:[],a=!!this.state[n]&&this.state[n].hasMore;return M.default.createElement(e,(0,i.default)({},this.props,{lang:n,posts:t,hasMore:a,onLoadMore:this.onLoadOlderClick}))}}]),a}(M.default.Component)}},360:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,n){var t=[],a=[],r=[];for(n?e.length<=2?t=[].concat((0,b.default)(e)):e.forEach(function(e,n){n%4==0?t.push(e):a.push(e)}):a=[].concat((0,b.default)(e)),t.forEach(function(e,n){if(r.push([(0,h.default)({},e,{featured:!0,even:n%2})]),a.length>=3){var t=a.splice(0,3);r.push([].concat((0,b.default)(t)))}});a.length>0;){var i=a.splice(0,3);r.push([].concat((0,b.default)(i)))}return r}Object.defineProperty(n,"__esModule",{value:!0});var i=t(15),l=a(i),o=t(1),u=a(o),d=t(7),f=a(d),s=t(2),c=a(s),p=t(3),m=a(p),g=t(4),h=a(g),x=t(35),b=a(x),v=t(14),y=a(v),w=t(0),_=a(w),k=t(13),E=a(k),M=t(52),z=t(86),P=a(z),C=t(361),O=a(C),L=t(362),j=a(L),T=(0,y.default)(["\n  margin-left: -15px;\n  margin-right: -15px;\n  ",";\n  ",";\n"],["\n  margin-left: -15px;\n  margin-right: -15px;\n  ",";\n  ",";\n"]),I=(0,y.default)(["\n    margin-left: 0;\n    margin-right: 0;\n  "],["\n    margin-left: 0;\n    margin-right: 0;\n  "]),A=(0,y.default)(["\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",";\n"],["\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",";\n"]),B=(0,y.default)(["\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "],["\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "]),S=(0,y.default)(["\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"],["\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"]),N=E.default.div(T,P.default.sm(I),(0,M.clearFix)()),D=E.default.div(A,P.default.sm(B)),V=E.default.div(S),q=function(e){function n(){return(0,u.default)(this,n),(0,c.default)(this,(n.__proto__||(0,l.default)(n)).apply(this,arguments))}return(0,m.default)(n,e),(0,f.default)(n,[{key:"renderRow",value:function(e,n){if(this.props.featured&&1===e.length&&e[0].featured){var t=e[0];return _.default.createElement(V,{key:"featured-"+t.url},_.default.createElement(j.default,{key:t.url,lazy:n>0,title:t.title,image:t.thumbImage,text:t.thumbText,even:t.even,tags:t.tags,date:t.date,category:t.category,href:t.url}))}return _.default.createElement(N,{key:"simple-"+n},e.map(function(e){return _.default.createElement(D,{key:e.url},_.default.createElement(O.default,{lazy:n>0,title:e.title,image:e.thumbImage,text:e.thumbText,even:e.even,tags:e.tags,date:e.date,category:e.category,href:e.url}))}))}},{key:"render",value:function(){var e=this;if(0===this.props.posts.length)return null;var n=r(this.props.posts,this.props.featured);return _.default.createElement("div",null,n.map(function(n,t){return e.renderRow(n,t)}))}}]),n}(_.default.Component);q.defaultProps={featured:!0,placeholder:""},n.default=q},361:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return u.default.createElement(v,null,u.default.createElement(s.PostLink,{href:e.href},u.default.createElement(g.default,{src:e.image,lazy:e.lazy}),u.default.createElement("span",{style:{display:"none"}},e.title)),u.default.createElement(y,null,u.default.createElement(p.default,{category:e.category},e.category)),u.default.createElement(w,{href:e.href},e.title))}Object.defineProperty(n,"__esModule",{value:!0});var i=t(14),l=a(i),o=t(0),u=a(o),d=t(13),f=a(d),s=t(42),c=t(89),p=a(c),m=t(249),g=a(m),h=(0,l.default)(["\n  display: block;\n  width: 100%;\n  text-align: center;\n"],["\n  display: block;\n  width: 100%;\n  text-align: center;\n"]),x=(0,l.default)(["\n  margin-top: 10px;\n"],["\n  margin-top: 10px;\n"]),b=(0,l.default)(["\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"],["\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]),v=f.default.div(h),y=f.default.div(x),w=(0,f.default)(s.PostLink)(b,function(e){return e.theme.colors.black});n.default=r},362:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return u.default.createElement(_,null,u.default.createElement(k,{even:e.even},u.default.createElement(c.PostLink,{href:e.href},u.default.createElement(h.default,{featured:!0,src:e.image,lazy:e.lazy}),u.default.createElement("span",{style:{display:"none"}},e.title))),u.default.createElement(E,null,u.default.createElement(M,null,u.default.createElement(m.default,{category:e.category},e.category),u.default.createElement(z,{prefetch:!0,href:e.href},e.title),e.text&&u.default.createElement("p",null,e.text))))}Object.defineProperty(n,"__esModule",{value:!0});var i=t(14),l=a(i),o=t(0),u=a(o),d=t(13),f=a(d),s=t(52),c=t(42),p=t(89),m=a(p),g=t(249),h=a(g),x=(0,l.default)(["\n  display: block;\n  ",";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"],["\n  display: block;\n  ",";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"]),b=(0,l.default)(["\n  width: 45%;\n  float: ",";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"],["\n  width: 45%;\n  float: ",";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"]),v=(0,l.default)(["\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n  }\n"],["\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n  }\n"]),y=(0,l.default)(["\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"],["\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"]),w=(0,l.default)(["\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"],["\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]),_=f.default.div(x,(0,s.clearFix)(),function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),k=f.default.div(b,function(e){return e.even?"right":"left"},function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),E=f.default.div(v,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),M=f.default.div(y,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),z=(0,f.default)(c.PostLink)(w);n.default=r},669:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(14),i=a(r),l=t(0),o=a(l),u=t(13),d=a(u),f=(0,i.default)(["\n  margin: 10px 0 20px 0;\n  text-align: center;\n"],["\n  margin: 10px 0 20px 0;\n  text-align: center;\n"]),s=(0,i.default)(["\n  display: inline-block;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  padding: 16px 48px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"],["\n  display: inline-block;\n  margin-top: 0px;\n  margin-bottom: 10px;\n  padding: 16px 48px;\n  border: 1px solid #ebebeb;\n  color: #454545;\n  font-size: 11px;\n  text-transform: uppercase;\n  font-weight: 400;\n  letter-spacing: 0.095em;\n  text-decoration: none;\n  transition: all 0.25s ease;\n  cursor: pointer;\n  outline: none;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"]),c=d.default.div(f),p=d.default.button(s,function(e){return e.theme.colors.inversedLinkHover});n.default=function(e){var n=e.title,t=e.onClick;return o.default.createElement(c,null,o.default.createElement(p,{onClick:t},n))}},762:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(14),i=a(r),l=t(0),o=a(l),u=t(13),d=a(u),f=t(27),s=a(f),c=t(763),p=a(c),m=(t(370),(0,i.default)(["\n  width: 100%;\n  position: relative;\n"],["\n  width: 100%;\n  position: relative;\n"])),g=(0,i.default)(["\n  display: block;\n  position: relative;\n  width: 30%;\n  max-width: 340px;\n  padding-top: 120px;\n  padding-bottom: 10px;\n  margin: 0 auto;\n\n  @media screen and (max-width: ",") {\n    width: 70%;\n  }\n\n  @media screen and (min-width: ",") and (max-width: ",") {\n    width: 50%;\n  }\n"],["\n  display: block;\n  position: relative;\n  width: 30%;\n  max-width: 340px;\n  padding-top: 120px;\n  padding-bottom: 10px;\n  margin: 0 auto;\n\n  @media screen and (max-width: ",") {\n    width: 70%;\n  }\n\n  @media screen and (min-width: ",") and (max-width: ",") {\n    width: 50%;\n  }\n"]),h=(0,i.default)(["\n  position: absolute;\n  left: 0;\n  top: 0px;\n  width: 100%;\n  height: auto;\n"],["\n  position: absolute;\n  left: 0;\n  top: 0px;\n  width: 100%;\n  height: auto;\n"]),x=d.default.div(m);d.default.div(g,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.md+"em"}),d.default.img.attrs({src:"/assets/stem.png",srcSet:"/assets/stem@2x.png 2x",width:"100%",alt:s.default.siteTitle+" logo"})(h);n.default=function(e){e.lang;return o.default.createElement(x,null,o.default.createElement(p.default,null))}},763:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(14),i=a(r),l=t(0),o=a(l),u=t(13),d=a(u),f=t(52),s=(0,i.default)(["\n  ",";\n"],["\n  ",";\n"]),c=(0,i.default)(['\n  position: relative;\n  margin: 50px 0px;\n  border: none;\n  height: .1rem;\n  background: rgba(0, 0, 0, 0.1);\n\n  &:before {\n    content: "";\n    display: inline-block;\n    background: url(/assets/stem.svg) 5px center no-repeat;\n    width: 20rem;\n    height: 3.8rem;\n    background-size: 20rem;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -1.9rem;\n    margin: auto;\n    background-color: #ffffff;\n  }\n'],['\n  position: relative;\n  margin: 50px 0px;\n  border: none;\n  height: .1rem;\n  background: rgba(0, 0, 0, 0.1);\n\n  &:before {\n    content: "";\n    display: inline-block;\n    background: url(/assets/stem.svg) 5px center no-repeat;\n    width: 20rem;\n    height: 3.8rem;\n    background-size: 20rem;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -1.9rem;\n    margin: auto;\n    background-color: #ffffff;\n  }\n']),p=d.default.div(s,(0,f.clearFix)()),m=d.default.hr(c);n.default=function(){return o.default.createElement("div",null,o.default.createElement(p,null),o.default.createElement(m,null))}},89:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(14),i=a(r),l=t(13),o=a(l),u=t(42),d=(0,i.default)(["\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 15px;\n  cursor: pointer;\n  transition: color 0.25s ease;\n  text-decoration: underline;\n  color: ",";\n\n  &:hover,\n  &:focus,\n  &:visited {\n    color: ",";\n    text-decoration: underline;\n    transition: color 0.25s ease;\n  }\n\n  &:hover {\n    color: ",";\n  }\n"],["\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 15px;\n  cursor: pointer;\n  transition: color 0.25s ease;\n  text-decoration: underline;\n  color: ",";\n\n  &:hover,\n  &:focus,\n  &:visited {\n    color: ",";\n    text-decoration: underline;\n    transition: color 0.25s ease;\n  }\n\n  &:hover {\n    color: ",";\n  }\n"]);n.default=(0,o.default)(u.CategoryLink)(d,function(e){return e.theme.colors.black},function(e){return e.theme.colors.text},function(e){return e.theme.colors.inversedLinkHover})},996:function(e,n,t){e.exports=t(997)},997:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(15),i=a(r),l=t(1),o=a(l),u=t(7),d=a(u),f=t(2),s=a(f),c=t(3),p=a(c),m=t(14),g=a(m),h=t(0),x=a(h),b=t(13),v=a(b),y=t(253),w=t(371),_=a(w),k=t(372),E=a(k),M=t(373),z=a(M),P=t(320),C=(a(P),t(321)),O=(a(C),t(322),t(360)),L=(a(O),t(376)),j=(a(L),t(42),t(323)),T=a(j),I=t(669),A=(a(I),t(998)),B=a(A),S=t(86),N=(a(S),t(27)),D=a(N),V=t(762),q=a(V),R=t(251),F=a(R),G=(0,g.default)(["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"],["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"]),Q=v.default.div(G),W=function(e){function n(){return(0,o.default)(this,n),(0,s.default)(this,(n.__proto__||(0,i.default)(n)).apply(this,arguments))}return(0,p.default)(n,e),(0,d.default)(n,[{key:"render",value:function(){var e=this.props,n=e.lang,t=(e.posts,e.hasMore,e.onLoadMore,e.image,e.imageWidth,e.imageHeight,D.default.authors[t],D.default.authors[t]);return x.default.createElement(F.default,null,x.default.createElement(_.default,{lang:n},x.default.createElement(E.default,null),x.default.createElement(z.default,{lang:n}),x.default.createElement(y.Grid,{style:{overflow:"hidden"}},x.default.createElement(y.Row,null,x.default.createElement(y.Col,{xs:12,lg:10,lgOffset:1,style:{padding:0}},x.default.createElement(q.default,null),x.default.createElement(Q,{style:{paddingbottom:"5px"}},x.default.createElement("h2",null,"Welcome to the STEM Type Quiz!"),x.default.createElement("div",{style:{paddingBottom:"5px"}})))),x.default.createElement(y.Row,null,x.default.createElement(y.Col,{xs:12,sm:12,md:12},x.default.createElement(B.default,null))))))}}]),n}(x.default.Component);n.default=(0,T.default)(W,5)},998:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var r=t(15),i=a(r),l=t(1),o=a(l),u=t(7),d=a(u),f=t(2),s=a(f),c=t(3),p=a(c),m=t(0),g=a(m),h=function(e){function n(){return(0,o.default)(this,n),(0,s.default)(this,(n.__proto__||(0,i.default)(n)).apply(this,arguments))}return(0,p.default)(n,e),(0,d.default)(n,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="https://www.surveygizmo.com/s3/4283433/STEM-Type-Quiz",e.async=!0,document.body.appendChild(e)}},{key:"render",value:function(){var e={maxWidth:"100%",margin:"0 auto 0 auto",leftmargin:"10px",rightmargin:"10px",width:"90%",height:"500px"},n={position:"relative",width:"100%",height:"100%",border:"none"};return g.default.createElement("div",{className:"QuizEmbed"},g.default.createElement("div",{className:"gizmo_target","data-rid-id":"4283433","data-fg":"#252525","data-bg":"#EDEDED",style:e,"data-auto-scroll":"true"},g.default.createElement("iframe",{title:"stem-type",style:n,src:"https://www.surveygizmo.com/s3/4283433/STEM-Type-Quiz",sandbox:"allow-top-navigation allow-scripts allow-forms allow-popups allow-same-origin"})))}}]),n}(m.Component);n.default=h}},[996]);
            return { page: comp.default }
          })
        