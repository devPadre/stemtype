"use strict";

module.exports = {
  baseUrl: "https://navy.stemjobs.com",
  siteTitle: "Stem Type",
  description: "Stem Type quiz and content system with NextJS and Firestore",
  copyright: "Redcell Talent.",
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
      href: "https://facebook.com",
      title: "Facebook"
    },
    vimeo: {
      href: "https://vimeo.com",
      title: "Vimeo"
    },
    stemtype: {
      href: "https://vimeo.com",
      title: "Stem Type Quiz"
    },
    instagram: {
      href: "https://www.instagram.com",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL2NvbmZpZy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiYmFzZVVybCIsInNpdGVUaXRsZSIsImRlc2NyaXB0aW9uIiwiY29weXJpZ2h0IiwibGFuZ3VhZ2VzIiwiZW4iLCJpZCIsInRpdGxlIiwic2hvcnRUaXRsZSIsInJ1IiwiZGVmYXVsdExhbmd1YWdlIiwiZGlzcXVzU2hvcnRuYW1lIiwibWVudSIsInRleHQiLCJyb3V0ZSIsInNvY2lhbCIsImZhY2Vib29rIiwiaHJlZiIsInZpbWVvIiwic3RlbXR5cGUiLCJpbnN0YWdyYW0iLCJhdXRob3JzIiwic3RlbWpvYnMiLCJuYW1lIiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQUEsQUFBTztXQUFVLEFBQ04sQUFDVDthQUZlLEFBRUosQUFDWDtlQUhlLEFBR0YsQUFDYjthQUplLEFBSUosQUFDWDs7O1VBQ00sQUFDRSxBQUNKO2FBRkUsQUFFSyxBQUNQO2tCQUpPLEFBQ0wsQUFHVSxBQUVkO0FBTEksQUFDRjs7VUFJRSxBQUNFLEFBQ0o7YUFGRSxBQUVLLEFBQ1A7a0JBZFcsQUFLSixBQU1MLEFBR1UsQUFHaEI7QUFOTSxBQUNGO0FBUE8sQUFDVDttQkFOYSxBQWlCRSxBQUNqQjttQkFsQmUsQUFrQkUsQUFDakI7O1VBQ0UsQUFDUSxBQUNOO1dBSEUsQUFDSixBQUVTO0FBRlQsQUFDRSxHQUZFO1VBS0osQUFDUSxBQUNOO1dBUEUsQUFLSixBQUVTO0FBRlQsQUFDRTtVQUdGLEFBQ1EsQUFDTjtXQTlCVyxBQW1CVCxBQVNKLEFBRVMsQUFHWDtBQUxFLEFBQ0U7OztZQUtRLEFBQ0YsQUFDTjthQUhJLEFBQ0ksQUFFRCxBQUVUO0FBSlUsQUFDUjs7WUFHSyxBQUNDLEFBQ047YUFQSSxBQUtDLEFBRUUsQUFFVDtBQUpPLEFBQ0w7O1lBR1EsQUFDRixBQUNOO2FBWEksQUFTSSxBQUVELEFBRVQ7QUFKVSxBQUNSOztZQUdTLEFBQ0gsQUFDTjthQWhEVyxBQWlDUCxBQWFLLEFBRUYsQUFHWDtBQUxhLEFBQ1Q7QUFkSSxBQUNOOzs7VUFrQlUsQUFDSixBQUNKO1lBRlEsQUFFRixBQUNOO21CQUhRLEFBR0ssQUFDYjtjQUpRLEFBSUEsQUFDUjs7O2dCQUNZLEFBQ0YsQUFDTjtpQkFISSxBQUNJLEFBRUQsQUFFVDtBQUpVLEFBQ1I7O2dCQUdTLEFBQ0gsQUFDTjtpQkFoRVYsQUFBaUIsQUFtRE4sQUFDRyxBQUtBLEFBS0ssQUFFRjtBQUZFLEFBQ1Q7QUFOSSxBQUNOO0FBTk0sQUFDUjs7QUFGSyxBQUNQO0FBcERhLEFBQ2YiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9kbmljaG9scy9Eb2N1bWVudHMvUHJvamVjdHMvU1RFTUpPQlMvQ2xpZW50cy9SZWRjZWxsL1JlZGNlbGwgRGV2L3N0ZW10eXBlIn0=