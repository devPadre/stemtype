
          window.__NEXT_REGISTER_PAGE('/category', function() {
            var comp = module.exports=webpackJsonp([9],{249:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(4),i=a(r),l=n(18),o=a(l),d=n(15),u=a(d),f=n(1),s=a(f),c=n(7),p=a(c),g=n(2),h=a(g),m=n(3),x=a(m),E=n(14),b=a(E),v=n(0),_=a(v),y=n(13),T=a(y),k=n(375),R=a(k),O=(0,b.default)(["\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  "," display: block;\n"],["\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(0, 0, 0, 0.05);\n  "," display: block;\n"]),N=(0,b.default)(["\n          background-image: url(",");\n        "],["\n          background-image: url(",");\n        "]),I=(0,b.default)(["\n  height: 200px;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 140px;\n  }\n"],["\n  height: 200px;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 140px;\n  }\n"]),A=(0,b.default)(["\n  height: 250px;\n  width: 100%;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 200px;\n  }\n"],["\n  height: 250px;\n  width: 100%;\n  @media screen and (max-width: ",") {\n    heigth: 250px;\n  }\n  @media screen and (min-width: ",") and (max-width: ",") {\n    height: 200px;\n  }\n"]),w=T.default.div(O,function(e){return e.visible?(0,y.css)(N,function(e){return e.src}):""}),P=(0,T.default)(w)(I,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.md+"em"}),C=(0,T.default)(w)(A,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"},function(e){return e.theme.flexboxgrid.breakpoints.md+"em"}),M=function(e){function t(e){(0,s.default)(this,t);var n=(0,h.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return n.onChangeVisibility=function(e){e&&n.setState({isVisible:!0})},n.state={isVisible:!e.lazy},n}return(0,x.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=e.featured,n=(0,o.default)(e,["featured"]),a=t?C:P;return _.default.createElement(R.default,{partialVisibility:!0,onChange:this.onChangeVisibility},_.default.createElement(a,(0,i.default)({},n,{visible:this.state.isVisible})))}}]),t}(_.default.Component);t.default=M},251:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(15),i=a(r),l=n(1),o=a(l),d=n(7),u=a(d),f=n(2),s=a(f),c=n(3),p=a(c),g=n(0),h=a(g),m=n(359),x=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){window.GA_INITIALIZED||((0,m.initGA)(),window.GA_INITIALIZED=!0),(0,m.logPageView)(),(0,m.logEvent)()}},{key:"render",value:function(){return h.default.createElement("div",null,this.props.children)}}]),t}(h.default.Component);t.default=x},320:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),i=a(r),l=n(0),o=a(l),d=n(52),u=n(13),f=a(u),s=n(646),c=a(s),p=(0,i.default)(["\n  display: block;\n  margin-bottom: 30px;\n  ",";\n"],["\n  display: block;\n  margin-bottom: 30px;\n  ",";\n"]),g=(0,i.default)(["\n  display: block;\n  margin-bottom: 10px;\n"],["\n  display: block;\n  margin-bottom: 10px;\n"]),h=f.default.div(p,(0,d.clearFix)()),m=(0,f.default)(c.default)(g);t.default=function(e){var t=e.className,n=e.title,a=e.children;return o.default.createElement(h,{className:t},o.default.createElement(m,null,n),a)}},321:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(15),i=a(r),l=n(1),o=a(l),d=n(7),u=a(d),f=n(2),s=a(f),c=n(3),p=a(c),g=n(0),h=a(g),m=n(374),x=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.tags,a=e.lang;return h.default.createElement("div",{className:t},n.map(function(e){return h.default.createElement(m.Tag,{key:e.value,tag:e.value,lang:a,style:{fontSize:10}},"#",e.value)}))}}]),t}(h.default.Component);t.default=x},322:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.reduce(function(e,t){return t.tags?((t.tags||[]).forEach(function(t){e[t]?e[t]=e[t]+1:e[t]=1}),e):e},{});return(0,l.default)(t).map(function(e){return{value:e,count:t[e]}})}Object.defineProperty(t,"__esModule",{value:!0}),t.postsByAuthor=t.postsByCategory=t.postsByTag=t.getPostsByLanguage=void 0,t.getTags=r;var i=n(645),l=a(i),o=n(27),d=a(o);t.getPostsByLanguage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.default.defaultLanguage;return e.filter(function(e){return e.language===t})},t.postsByTag=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];return e.filter(function(e){return-1!==e.tags.indexOf(t)})},t.postsByCategory=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];return e.filter(function(e){return e.category.toLowerCase()===t.toLowerCase()})},t.postsByAuthor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];return e.filter(function(e){return e.author.toLowerCase()===t.toLowerCase()})}},323:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=a(r),l=n(35),o=a(l),d=n(15),u=a(d),f=n(40),s=a(f),c=n(9),p=a(c),g=n(121),h=a(g),m=n(1),x=a(m),E=n(2),b=a(E),v=n(7),_=a(v),y=n(3),T=a(y),k=n(0),R=a(k),O=n(358),N=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(O);t.default=function(e,t){return function(n){function a(e){(0,x.default)(this,a);var n=(0,b.default)(this,(a.__proto__||(0,u.default)(a)).call(this,e));return n.onLoadOlderClick=function(){var e=2*t,a=n.props.url.query.lang,r=n.state[a]?n.state[a].posts:[];N.fetchAllPublishedPosts(a,e,r.length).then(function(t){n.setState(function(n){return(0,p.default)({},a,{posts:[].concat((0,o.default)(n[a].posts),(0,o.default)(t)),hasMore:t.length===e})})})},n.state=e,n}return(0,T.default)(a,n),(0,_.default)(a,null,[{key:"getInitialProps",value:function(){function e(e){return n.apply(this,arguments)}var n=(0,h.default)(s.default.mark(function e(n){var a,r=n.query;return s.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.fetchAllPublishedPosts(r.lang,t);case 2:return a=e.sent,e.abrupt("return",(0,p.default)({},r.lang,{posts:a,hasMore:a.length===t}));case 4:case"end":return e.stop()}},e,this)}));return e}()}]),(0,_.default)(a,[{key:"componentWillReceiveProps",value:function(e){var n=this,a=e.url.query.lang,r=this.props.url.query.lang;this.state[a]||a===r||(this.setState(function(e){return(0,p.default)({},a,e[r])}),N.fetchAllPublishedPosts(a,t).then(function(e){n.setState((0,p.default)({},a,{posts:e,hasMore:e.length===t}))}))}},{key:"render",value:function(){var t=this.props.url.query.lang,n=this.state[t]?this.state[t].posts:[],a=!!this.state[t]&&this.state[t].hasMore;return R.default.createElement(e,(0,i.default)({},this.props,{lang:t,posts:n,hasMore:a,onLoadMore:this.onLoadOlderClick}))}}]),a}(R.default.Component)}},360:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=[],a=[],r=[];for(t?e.length<=2?n=[].concat((0,E.default)(e)):e.forEach(function(e,t){t%4==0?n.push(e):a.push(e)}):a=[].concat((0,E.default)(e)),n.forEach(function(e,t){if(r.push([(0,m.default)({},e,{featured:!0,even:t%2})]),a.length>=3){var n=a.splice(0,3);r.push([].concat((0,E.default)(n)))}});a.length>0;){var i=a.splice(0,3);r.push([].concat((0,E.default)(i)))}return r}Object.defineProperty(t,"__esModule",{value:!0});var i=n(15),l=a(i),o=n(1),d=a(o),u=n(7),f=a(u),s=n(2),c=a(s),p=n(3),g=a(p),h=n(4),m=a(h),x=n(35),E=a(x),b=n(14),v=a(b),_=n(0),y=a(_),T=n(13),k=a(T),R=n(52),O=n(86),N=a(O),I=n(361),A=a(I),w=n(362),P=a(w),C=(0,v.default)(["\n  margin-left: -15px;\n  margin-right: -15px;\n  ",";\n  ",";\n"],["\n  margin-left: -15px;\n  margin-right: -15px;\n  ",";\n  ",";\n"]),M=(0,v.default)(["\n    margin-left: 0;\n    margin-right: 0;\n  "],["\n    margin-left: 0;\n    margin-right: 0;\n  "]),L=(0,v.default)(["\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",";\n"],["\n  float: left;\n  width: 33.333333%;\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n\n  ",";\n"]),S=(0,v.default)(["\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "],["\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n  "]),D=(0,v.default)(["\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"],["\n  width: 100%;\n  position: relative;\n  min-height: 1px;\n  margin-bottom: 30px;\n"]),U=k.default.div(C,N.default.sm(M),(0,R.clearFix)()),z=k.default.div(L,N.default.sm(S)),F=k.default.div(D),G=function(e){function t(){return(0,d.default)(this,t),(0,c.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,f.default)(t,[{key:"renderRow",value:function(e,t){if(this.props.featured&&1===e.length&&e[0].featured){var n=e[0];return y.default.createElement(F,{key:"featured-"+n.url},y.default.createElement(P.default,{key:n.url,lazy:t>0,title:n.title,image:n.thumbImage,text:n.thumbText,even:n.even,tags:n.tags,date:n.date,category:n.category,href:n.url}))}return y.default.createElement(U,{key:"simple-"+t},e.map(function(e){return y.default.createElement(z,{key:e.url},y.default.createElement(A.default,{lazy:t>0,title:e.title,image:e.thumbImage,text:e.thumbText,even:e.even,tags:e.tags,date:e.date,category:e.category,href:e.url}))}))}},{key:"render",value:function(){var e=this;if(0===this.props.posts.length)return null;var t=r(this.props.posts,this.props.featured);return y.default.createElement("div",null,t.map(function(t,n){return e.renderRow(t,n)}))}}]),t}(y.default.Component);G.defaultProps={featured:!0,placeholder:""},t.default=G},361:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return d.default.createElement(b,null,d.default.createElement(s.PostLink,{href:e.href},d.default.createElement(h.default,{src:e.image,lazy:e.lazy}),d.default.createElement("span",{style:{display:"none"}},e.title)),d.default.createElement(v,null,d.default.createElement(p.default,{category:e.category},e.category)),d.default.createElement(_,{href:e.href},e.title))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),l=a(i),o=n(0),d=a(o),u=n(13),f=a(u),s=n(42),c=n(89),p=a(c),g=n(249),h=a(g),m=(0,l.default)(["\n  display: block;\n  width: 100%;\n  text-align: center;\n"],["\n  display: block;\n  width: 100%;\n  text-align: center;\n"]),x=(0,l.default)(["\n  margin-top: 10px;\n"],["\n  margin-top: 10px;\n"]),E=(0,l.default)(["\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"],["\n  font-size: 18px;\n  font-weight: 400;\n  margin-top: 10px;\n  padding-right: 10px;\n  padding-left: 10px;\n  display: block;\n  text-decoration: none;\n  color: ",";\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]),b=f.default.div(m),v=f.default.div(x),_=(0,f.default)(s.PostLink)(E,function(e){return e.theme.colors.black});t.default=r},362:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return d.default.createElement(y,null,d.default.createElement(T,{even:e.even},d.default.createElement(c.PostLink,{href:e.href},d.default.createElement(m.default,{featured:!0,src:e.image,lazy:e.lazy}),d.default.createElement("span",{style:{display:"none"}},e.title))),d.default.createElement(k,null,d.default.createElement(R,null,d.default.createElement(g.default,{category:e.category},e.category),d.default.createElement(O,{prefetch:!0,href:e.href},e.title),e.text&&d.default.createElement("p",null,e.text))))}Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),l=a(i),o=n(0),d=a(o),u=n(13),f=a(u),s=n(52),c=n(42),p=n(89),g=a(p),h=n(249),m=a(h),x=(0,l.default)(["\n  display: block;\n  ",";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"],["\n  display: block;\n  ",";\n  margin-left: -15px;\n  margin-right: -15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    margin-left: 0;\n    margin-right: 0;\n  }\n"]),E=(0,l.default)(["\n  width: 45%;\n  float: ",";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"],["\n  width: 45%;\n  float: ",";\n  padding-left: 15px;\n  padding-right: 15px;\n  box-sizing: border-box;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n    float: left;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"]),b=(0,l.default)(["\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n  }\n"],["\n  width: 55%;\n  float: left;\n\n  @media screen and (max-width: ",") {\n    width: 100%;\n  }\n"]),v=(0,l.default)(["\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"],["\n  display: block;\n  padding-left: 15px;\n  padding-right: 15px;\n\n  p {\n    line-height: 1.8em;\n    font-size: 14px;\n  }\n\n  @media screen and (max-width: ",") {\n    padding-top: 20px;\n    >  {\n      padding-left: 35px;\n      padding-right: 35px;\n    }\n  }\n"]),_=(0,l.default)(["\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"],["\n  font-size: 24px;\n  font-weight: 400;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n  color: #000;\n\n  &:hover {\n    text-decoration: underline;\n  }\n"]),y=f.default.div(x,(0,s.clearFix)(),function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),T=f.default.div(E,function(e){return e.even?"right":"left"},function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),k=f.default.div(b,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),R=f.default.div(v,function(e){return e.theme.flexboxgrid.breakpoints.sm+"em"}),O=(0,f.default)(c.PostLink)(_);t.default=r},363:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),i=a(r),l=n(1),o=a(l),d=n(7),u=a(d),f=n(2),s=a(f),c=n(3),p=a(c),g=n(0),h=a(g),m=n(6),x=a(m),E=n(364),b=a(E),v=n(326),_=a(v),y=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=404===e?"This page could not be found":b.default[e]||"An unexpected error has occurred";return h.default.createElement("div",{style:T.error},h.default.createElement(_.default,null,h.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})),h.default.createElement("div",null,h.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?h.default.createElement("h1",{style:T.h1},e):null,h.default.createElement("div",{style:T.desc},h.default.createElement("h2",{style:T.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t?t.statusCode:n?n.statusCode:null}}}]),t}(h.default.Component);y.propTypes={statusCode:x.default.number},t.default=y;var T={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},364:function(e,t){e.exports={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Switch Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required",CONTINUE:100,SWITCHING_PROTOCOLS:101,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,MOVED_PERMANENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,SWITCH_PROXY:306,TEMPORARY_REDIRECT:307,PERMANENT_REDIRECT:308,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,REQUEST_ENTITY_TOO_LARGE:413,REQUEST_URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,REQUESTED_RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,MISDIRECTED_REQUEST:421,UNPROCESSABLE_ENTITY:422,UPGRADE_REQUIRED:426,PRECONDITION_REQUIRED:428,LOCKED:423,FAILED_DEPENDENCY:424,TOO_MANY_REQUESTS:429,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,LOOP_DETECTED:508,NOT_EXTENDED:510,NETWORK_AUTHENTICATION_REQUIRED:511}},648:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),i=a(r),l=n(0),o=a(l),d=n(13),u=a(d),f=n(52),s=(0,i.default)(["\n  ",";\n"],["\n  ",";\n"]),c=(0,i.default)(['\n  position: relative;\n  margin: 45px 0px;\n  border: none;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.1);\n\n  &:before {\n    content: "";\n    display: inline-block;\n    background: url(/assets/delimeter.svg) 21px center no-repeat;\n    width: 117px;\n    height: 25px;\n    background-size: 90px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -12px;\n    margin: auto;\n    background-color: #ffffff;\n  }\n'],['\n  position: relative;\n  margin: 45px 0px;\n  border: none;\n  height: 1px;\n  background: rgba(0, 0, 0, 0.1);\n\n  &:before {\n    content: "";\n    display: inline-block;\n    background: url(/assets/delimeter.svg) 21px center no-repeat;\n    width: 117px;\n    height: 25px;\n    background-size: 90px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -12px;\n    margin: auto;\n    background-color: #ffffff;\n  }\n']),p=u.default.div(s,(0,f.clearFix)()),g=u.default.hr(c);t.default=function(){return o.default.createElement("div",null,o.default.createElement(p,null),o.default.createElement(g,null))}},89:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),i=a(r),l=n(13),o=a(l),d=n(42),u=(0,i.default)(["\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 15px;\n  cursor: pointer;\n  transition: color 0.25s ease;\n  text-decoration: underline;\n  color: ",";\n\n  &:hover,\n  &:focus,\n  &:visited {\n    color: ",";\n    text-decoration: underline;\n    transition: color 0.25s ease;\n  }\n\n  &:hover {\n    color: ",";\n  }\n"],["\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 15px;\n  cursor: pointer;\n  transition: color 0.25s ease;\n  text-decoration: underline;\n  color: ",";\n\n  &:hover,\n  &:focus,\n  &:visited {\n    color: ",";\n    text-decoration: underline;\n    transition: color 0.25s ease;\n  }\n\n  &:hover {\n    color: ",";\n  }\n"]);t.default=(0,o.default)(d.CategoryLink)(u,function(e){return e.theme.colors.black},function(e){return e.theme.colors.text},function(e){return e.theme.colors.inversedLinkHover})},984:function(e,t,n){e.exports=n(985)},985:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15),i=a(r),l=n(1),o=a(l),d=n(7),u=a(d),f=n(2),s=a(f),c=n(3),p=a(c),g=n(14),h=a(g),m=n(0),x=a(m),E=n(13),b=a(E),v=n(253),_=n(371),y=a(_),T=n(372),k=a(T),R=n(373),O=a(R),N=n(320),I=a(N),A=n(321),w=a(A),P=n(322),C=(n(42),n(360)),M=a(C),L=n(363),S=a(L),D=n(986),U=a(D),z=n(376),F=(a(z),n(323)),G=a(F),H=n(648),q=(a(H),n(251)),B=a(q),j=n(27),V=a(j),Q=(0,h.default)(["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"],["\n  text-align: center;\n  display: block;\n\n  h2 {\n    margin-top: 0;\n    margin-bottom: 10px;\n  }\n\n  h1 {\n    margin-top: 10px;\n    margin-bottom: 40px;\n    text-transform: uppercase;\n  }\n"]),Y=b.default.div(Q),W=function(e){function t(){return(0,o.default)(this,t),(0,s.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.url.query.category,t=this.props.lang;if(!e||!V.default.categories[e])return x.default.createElement(S.default,{statusCode:404});var n=(0,P.postsByCategory)(this.props.posts,e);return x.default.createElement(B.default,null,x.default.createElement(y.default,{lang:t},x.default.createElement(k.default,null),x.default.createElement(O.default,{lang:t}),x.default.createElement(v.Grid,{style:{overflow:"hidden"}},x.default.createElement(v.Row,null,x.default.createElement(v.Col,{xs:12},x.default.createElement(Y,null,x.default.createElement(U.default,{category:e,categoryInfo:V.default.categories[e]}),x.default.createElement("div",{style:{padding:20}})))),x.default.createElement(v.Row,null,x.default.createElement(v.Col,{xs:12,sm:12,md:9},x.default.createElement(M.default,{posts:n,featured:!1})),x.default.createElement(v.Col,{xs:!1,sm:!1,md:3},x.default.createElement("div",{style:{paddingLeft:20}},x.default.createElement(I.default,{title:"Tags"},x.default.createElement(w.default,{tags:(0,P.getTags)(n),lang:t}))))))))}}]),t}(x.default.Component);t.default=(0,G.default)(W)},986:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),i=a(r),l=n(0),o=a(l),d=n(13),u=a(d),f=n(319),s=(a(f),n(644)),c=(a(s),n(42)),p=a(c),g=n(987),h=a(g),m=(0,i.default)(["\n  position: relative;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"],["\n  position: relative;\n  padding-top: 5px;\n  padding-bottom: 5px;\n"]),x=(0,i.default)(["\n  margin-top: 55px;\n  margin-bottom: -5px;\n  border-top: 1px solid #ebebeb;\n  text-align: center;\n  min-height: 150px;\n"],["\n  margin-top: 55px;\n  margin-bottom: -5px;\n  border-top: 1px solid #ebebeb;\n  text-align: center;\n  min-height: 150px;\n"]),E=(0,i.default)(["\n  display: block;\n  margin-bottom: 10px;\n"],["\n  display: block;\n  margin-bottom: 10px;\n"]),b=(0,i.default)(["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  font-size: 28px;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ",";\n  }\n"],["\n  color: rgba(0, 0, 0, 0.7);\n  text-decoration: none;\n  font-size: 28px;\n  transition: color 0.25s ease;\n  &:hover {\n    color: ",";\n  }\n"]),v=(0,i.default)(["\n  color: rgba(0, 0, 0, 0.5);\n  display: block;\n  font-size: 14px;\n  margin-top: 10px;\n"],["\n  color: rgba(0, 0, 0, 0.5);\n  display: block;\n  font-size: 14px;\n  margin-top: 10px;\n"]),_=(0,i.default)(["\n  margin-top: -60px;\n"],["\n  margin-top: -60px;\n"]),y=u.default.div(m),T=u.default.div(x),k=u.default.div(E),R=(0,u.default)(p.default.CategoryLink)(b,function(e){return e.theme.colors.inversedLinkHover}),O=u.default.div(v),N=(0,u.default)(h.default)(_);t.default=function(e){var t=e.category,n=e.categoryInfo,a=e.className;return o.default.createElement(y,{className:a},o.default.createElement(T,null,o.default.createElement(R,{category:t},o.default.createElement(N,{alt:n.title,src:n.card.avatar,height:70,width:70})),o.default.createElement(k,null,o.default.createElement(R,{category:t},n.title),n.card.description&&o.default.createElement(O,null,n.card.description))))}},987:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(14),i=a(r),l=n(0),o=a(l),d=n(13),u=a(d),f=n(319),s=a(f),c=(0,i.default)(["\n  position: relative;\n  display: inline-block;\n  border: 22px solid #fff;\n\n  svg {\n    fill: #ebebeb;\n    width: ","px;\n    height: ","px;\n    top: -10px;\n    left: -10px;\n    transition: all 0.25s ease;\n    position: absolute;\n  }\n\n  &:hover {\n    svg {\n      fill: ",";\n      transform: rotate(90deg);\n    }\n  }\n\n  img {\n    display: inline-block;\n    border-radius: 50%;\n  }\n"],["\n  position: relative;\n  display: inline-block;\n  border: 22px solid #fff;\n\n  svg {\n    fill: #ebebeb;\n    width: ","px;\n    height: ","px;\n    top: -10px;\n    left: -10px;\n    transition: all 0.25s ease;\n    position: absolute;\n  }\n\n  &:hover {\n    svg {\n      fill: ",";\n      transform: rotate(90deg);\n    }\n  }\n\n  img {\n    display: inline-block;\n    border-radius: 50%;\n  }\n"]),p=u.default.div(c,function(e){return e.width+20},function(e){return e.height+20},function(e){return e.theme.colors.inversedLinkHover});t.default=function(e){var t=e.src,n=e.width,a=e.height,r=e.alt,i=e.className;return o.default.createElement(p,{height:a,width:n,className:i},o.default.createElement("img",{alt:r,src:t,height:a,width:n}),o.default.createElement(s.default.Avatar,null))}}},[984]);
            return { page: comp.default }
          })
        