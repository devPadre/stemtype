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
  menu: [
    {
      text: "Home",
      route: "index"
    },
    {
      text: "Stem Types",
      route: "stemtype"
    },
    {
      text: "Quiz",
      route: "quiz"
    }
  ],
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
      description:
        "STEM Jobs connects today’s students with the in-demand careers of tomorrow in science, technology, engineering and math. We provide comprehensive solutions for teachers to help their pupils realize that STEM exists in everything, particularly in the sports, tech, entertainment and music they consume daily.",
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
