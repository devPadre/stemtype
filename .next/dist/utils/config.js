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