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
