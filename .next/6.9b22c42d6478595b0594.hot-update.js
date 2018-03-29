webpackHotUpdate(6,{

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  baseUrl: "https://navy.stemtype.com",
  siteTitle: "Stem Type",
  description: "Stem Type quiz and content system with NextJS and Firestore",
  copyright: "Redcell Talent | Powered by Redcell Talent",
  languages: {
    en: {
      id: "en",
      title: "English",
      shortTitle: "Eng"
    },
    ru: {
      id: "ru",
      title: "Русский",
      shortTitle: "Рус"
    }
  },
  defaultLanguage: "en",
  disqusShortname: "redcelltalent",
  menu: [{
    text: "Home",
    route: "index"
  }, {
    text: "Stem Types",
    route: "stemtype"
  }, {
    text: "Quiz",
    route: "quiz"
  }],
  social: {
    facebook: {
      href: "https://www.facebook.com/stemjobs/",
      title: "Facebook"
    },
    youtube: {
      href: "https://www.youtube.com/channel/UCaA3j4Wtd3L9dJTC5T8RVaA",
      title: "Youtube"
    },
    vimeo: {
      href: "https://youtube.com",
      title: "Vimeo"
    },
    stemtype: {
      href: "https://vimeo.com",
      title: "Stem Type Quiz"
    },
    twitter: {
      href: "https://twitter.com/stem_jobs",
      title: "Twitter"
    },
    instagram: {
      href: "https://twitter.com/stem_jobs",
      title: "Instagram"
    }
  },
  authors: {
    stemjobs: {
      id: "stemjobs",
      name: "Stem Jobs",
      description: "STEM Jobs connects today’s students with the in-demand careers of tomorrow in science, technology, engineering and math. We provide comprehensive solutions for teachers to help their pupils realize that STEM exists in everything, particularly in the sports, tech, entertainment and music they consume daily.",
      avatar: "/assets/authors/stemjobs.svg",
      social: {
        facebook: {
          href: "https://www.facebook.com/stemjobs",
          title: "Facebook"
        },
        instagram: {
          href: "https://www.instagram.com/",
          title: "Instagram"
        }
      }
    }

  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiYmFzZVVybCIsInNpdGVUaXRsZSIsImRlc2NyaXB0aW9uIiwiY29weXJpZ2h0IiwibGFuZ3VhZ2VzIiwiZW4iLCJpZCIsInRpdGxlIiwic2hvcnRUaXRsZSIsInJ1IiwiZGVmYXVsdExhbmd1YWdlIiwiZGlzcXVzU2hvcnRuYW1lIiwibWVudSIsInRleHQiLCJyb3V0ZSIsInNvY2lhbCIsImZhY2Vib29rIiwiaHJlZiIsInlvdXR1YmUiLCJ2aW1lbyIsInN0ZW10eXBlIiwidHdpdHRlciIsImluc3RhZ3JhbSIsImF1dGhvcnMiLCJzdGVtam9icyIsIm5hbWUiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBQSxBQUFPO1dBQVUsQUFDTixBQUNUO2FBRmUsQUFFSixBQUNYO2VBSGUsQUFHRixBQUNiO2FBSmUsQUFJSixBQUNYOzs7VUFDTSxBQUNFLEFBQ0o7YUFGRSxBQUVLLEFBQ1A7a0JBSk8sQUFDTCxBQUdVLEFBRWQ7QUFMSSxBQUNGOztVQUlFLEFBQ0UsQUFDSjthQUZFLEFBRUssQUFDUDtrQkFkVyxBQUtKLEFBTUwsQUFHVSxBQUdoQjtBQU5NLEFBQ0Y7QUFQTyxBQUNUO21CQU5hLEFBaUJFLEFBQ2pCO21CQWxCZSxBQWtCRSxBQUNqQjs7VUFDRSxBQUNRLEFBQ047V0FIRSxBQUNKLEFBRVM7QUFGVCxBQUNFLEdBRkU7VUFLSixBQUNRLEFBQ047V0FQRSxBQUtKLEFBRVM7QUFGVCxBQUNFO1VBR0YsQUFDUSxBQUNOO1dBOUJXLEFBbUJULEFBU0osQUFFUyxBQUdYO0FBTEUsQUFDRTs7O1lBS1EsQUFDRixBQUNOO2FBSEksQUFDSSxBQUVELEFBRVQ7QUFKVSxBQUNSOztZQUdPLEFBQ0QsQUFDTjthQVBJLEFBS0csQUFFQSxBQUVUO0FBSlMsQUFDUDs7WUFHSyxBQUNDLEFBQ047YUFYSSxBQVNDLEFBRUUsQUFFVDtBQUpPLEFBQ0w7O1lBR1EsQUFDRixBQUNOO2FBZkksQUFhSSxBQUVELEFBRVQ7QUFKVSxBQUNSOztZQUdPLEFBQ0QsQUFDTjthQW5CSSxBQWlCRyxBQUVBLEFBRVQ7QUFKUyxBQUNQOztZQUdTLEFBQ0gsQUFDTjthQXhEVyxBQWlDUCxBQXFCSyxBQUVGLEFBR1g7QUFMYSxBQUNUO0FBdEJJLEFBQ047OztVQTBCVSxBQUNKLEFBQ0o7WUFGUSxBQUVGLEFBQ047bUJBSFEsQUFHSyxBQUNiO2NBSlEsQUFJQSxBQUNSOzs7Z0JBQ1ksQUFDRixBQUNOO2lCQUhJLEFBQ0ksQUFFRCxBQUVUO0FBSlUsQUFDUjs7Z0JBR1MsQUFDSCxBQUNOO2lCQXhFVixBQUFpQixBQTJETixBQUNHLEFBS0EsQUFLSyxBQUVGO0FBRkUsQUFDVDtBQU5JLEFBQ047QUFOTSxBQUNSOztBQUZLLEFBQ1A7QUE1RGEsQUFDZiIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2RuaWNob2xzL0RvY3VtZW50cy9Qcm9qZWN0cy9TVEVNSk9CUy9DbGllbnRzL1JlZGNlbGwvUmVkY2VsbCBEZXYvc3RlbXR5cGUifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/utils/config.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/dnichols/Documents/Projects/STEMJOBS/Clients/Redcell/Redcell Dev/stemtype/utils/config.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi45YjIyYzQyZDY0Nzg1OTViMDU5NC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vdXRpbHMvY29uZmlnLmpzPzczYzZkYjYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGJhc2VVcmw6IFwiaHR0cHM6Ly9uYXZ5LnN0ZW10eXBlLmNvbVwiLFxuICBzaXRlVGl0bGU6IFwiU3RlbSBUeXBlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIlN0ZW0gVHlwZSBxdWl6IGFuZCBjb250ZW50IHN5c3RlbSB3aXRoIE5leHRKUyBhbmQgRmlyZXN0b3JlXCIsXG4gIGNvcHlyaWdodDogXCJSZWRjZWxsIFRhbGVudCB8IFBvd2VyZWQgYnkgUmVkY2VsbCBUYWxlbnRcIixcbiAgbGFuZ3VhZ2VzOiB7XG4gICAgZW46IHtcbiAgICAgIGlkOiBcImVuXCIsXG4gICAgICB0aXRsZTogXCJFbmdsaXNoXCIsXG4gICAgICBzaG9ydFRpdGxlOiBcIkVuZ1wiXG4gICAgfSxcbiAgICBydToge1xuICAgICAgaWQ6IFwicnVcIixcbiAgICAgIHRpdGxlOiBcItCg0YPRgdGB0LrQuNC5XCIsXG4gICAgICBzaG9ydFRpdGxlOiBcItCg0YPRgVwiXG4gICAgfVxuICB9LFxuICBkZWZhdWx0TGFuZ3VhZ2U6IFwiZW5cIixcbiAgZGlzcXVzU2hvcnRuYW1lOiBcInJlZGNlbGx0YWxlbnRcIixcbiAgbWVudTogW1xuICAgIHtcbiAgICAgIHRleHQ6IFwiSG9tZVwiLFxuICAgICAgcm91dGU6IFwiaW5kZXhcIlxuICAgIH0sXG4gICAge1xuICAgICAgdGV4dDogXCJTdGVtIFR5cGVzXCIsXG4gICAgICByb3V0ZTogXCJzdGVtdHlwZVwiXG4gICAgICB9LFxuICAgIHtcbiAgICAgIHRleHQ6IFwiUXVpelwiLFxuICAgICAgcm91dGU6IFwicXVpelwiXG4gICAgICB9XG4gIF0sXG4gIHNvY2lhbDoge1xuICAgIGZhY2Vib29rOiB7XG4gICAgICBocmVmOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zdGVtam9icy9cIixcbiAgICAgIHRpdGxlOiBcIkZhY2Vib29rXCJcbiAgICB9LFxuICAgIHlvdXR1YmU6IHtcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ2FBM2o0V3RkM0w5ZEpUQzVUOFJWYUFcIixcbiAgICAgIHRpdGxlOiBcIllvdXR1YmVcIlxuICAgIH0sXG4gICAgdmltZW86IHtcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly95b3V0dWJlLmNvbVwiLFxuICAgICAgdGl0bGU6IFwiVmltZW9cIlxuICAgIH0sXG4gICAgc3RlbXR5cGU6IHtcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly92aW1lby5jb21cIixcbiAgICAgIHRpdGxlOiBcIlN0ZW0gVHlwZSBRdWl6XCJcbiAgICB9LFxuICAgIHR3aXR0ZXI6IHtcbiAgICAgIGhyZWY6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zdGVtX2pvYnNcIixcbiAgICAgIHRpdGxlOiBcIlR3aXR0ZXJcIlxuICAgIH0sXG4gICAgaW5zdGFncmFtOiB7XG4gICAgICBocmVmOiBcImh0dHBzOi8vdHdpdHRlci5jb20vc3RlbV9qb2JzXCIsXG4gICAgICB0aXRsZTogXCJJbnN0YWdyYW1cIlxuICAgIH1cbiAgfSxcbiAgYXV0aG9yczoge1xuICAgIHN0ZW1qb2JzOiB7XG4gICAgICBpZDogXCJzdGVtam9ic1wiLFxuICAgICAgbmFtZTogXCJTdGVtIEpvYnNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIlNURU0gSm9icyBjb25uZWN0cyB0b2RheeKAmXMgc3R1ZGVudHMgd2l0aCB0aGUgaW4tZGVtYW5kIGNhcmVlcnMgb2YgdG9tb3Jyb3cgaW4gc2NpZW5jZSwgdGVjaG5vbG9neSwgZW5naW5lZXJpbmcgYW5kIG1hdGguIFdlIHByb3ZpZGUgY29tcHJlaGVuc2l2ZSBzb2x1dGlvbnMgZm9yIHRlYWNoZXJzIHRvIGhlbHAgdGhlaXIgcHVwaWxzIHJlYWxpemUgdGhhdCBTVEVNIGV4aXN0cyBpbiBldmVyeXRoaW5nLCBwYXJ0aWN1bGFybHkgaW4gdGhlIHNwb3J0cywgdGVjaCwgZW50ZXJ0YWlubWVudCBhbmQgbXVzaWMgdGhleSBjb25zdW1lIGRhaWx5LlwiLFxuICAgICAgYXZhdGFyOiBcIi9hc3NldHMvYXV0aG9ycy9zdGVtam9icy5zdmdcIixcbiAgICAgIHNvY2lhbDoge1xuICAgICAgICBmYWNlYm9vazoge1xuICAgICAgICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3N0ZW1qb2JzXCIsXG4gICAgICAgICAgdGl0bGU6IFwiRmFjZWJvb2tcIlxuICAgICAgICB9LFxuICAgICAgICBpbnN0YWdyYW06IHtcbiAgICAgICAgICBocmVmOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vXCIsXG4gICAgICAgICAgdGl0bGU6IFwiSW5zdGFncmFtXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICB9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vdXRpbHMvY29uZmlnLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUpBOztBQU1BO0FBQ0E7QUFHQTtBQUxBO0FBTkE7QUFZQTtBQUNBOztBQUdBO0FBQUE7QUFEQTtBQUtBO0FBQUE7QUFEQTtBQUtBO0FBR0E7QUFKQTs7O0FBT0E7QUFFQTtBQUhBOztBQUtBO0FBRUE7QUFIQTs7QUFLQTtBQUVBO0FBSEE7O0FBS0E7QUFFQTtBQUhBOztBQUtBO0FBRUE7QUFIQTs7QUFLQTtBQUdBO0FBSkE7QUFyQkE7OztBQTRCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFFQTtBQUhBOztBQUtBO0FBQUE7QUFEQTtBQUxBO0FBTEE7QUFDQTtBQUZBO0FBM0RBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=