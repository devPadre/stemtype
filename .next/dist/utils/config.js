"use strict";

module.exports = {
  baseUrl: "http://navy.stemjobs.com",
  siteTitle: "STEM Type",
  description: "STEM Type quiz and content system with NextJS and Firestore",
  copyright: "STEM Jobs | Powered by Redcell Talent",
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
    text: "STEM Types",
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
      title: "STEM Type Quiz"
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
      name: "STEM Jobs",
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
    },
    admin: {
      id: "admin",
      name: "Admin",
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

  },
  categories: {
    advisor: {
      id: "advisor",
      title: "Advisor",
      card: {
        title: "About Advisors",
        avatar: "https://res.cloudinary.com/victorydev/image/upload/v1523372615/stemtype/STEMTYPE_Advisor.png",
        url: "/categories/advisor",
        coverImage: "https://res.cloudinary.com/victorydev/image/upload/c_scale,w_640/v1523387251/advisor_khcybv.jpg",
        thumbImage: "https://res.cloudinary.com/victorydev/image/upload/c_scale,w_370/v1522089918/navy/special-warfare-sm.jpg",
        category: "advisor",
        description: "Advisors are focused on improving the quality of life for people and animals.",
        about: "<p>Advisors are involved in aspects of care ranging all the way from providing personal aid for the elderly, to delivering medical care, to providing counsel and guidance.</p><p>Advisors do operate complex technical equipment, and typically work in healthcare-related facilities, though they may also work in the field.</p>",
        hotJobs: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>",
        hotDegrees: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>"
      }
    },
    designer: {
      id: "designer",
      title: "Designer",
      card: {
        title: "About Designers",
        avatar: "https://res.cloudinary.com/victorydev/image/upload/v1523372616/stemtype/STEMTYPE_Designer.png",
        url: "/categories/designer",
        coverImage: "https://res.cloudinary.com/victorydev/image/upload/c_lfill,h_427,w_640/v1523386613/Designers_xnssrx.jpg",
        category: "designer",
        description: "Designers envision and plan products, solutions, and products.",
        about: "<p>Advisors are involved in aspects of care ranging all the way from providing personal aid for the elderly, to delivering medical care, to providing counsel and guidance.</p><p>Advisors do operate complex technical equipment, and typically work in healthcare-related facilities, though they may also work in the field.</p>",
        hotJobs: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>",
        hotDegrees: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>"
      }
    },
    explorer: {
      id: "explorer",
      title: "Explorer",
      card: {
        title: "About Explorers",
        avatar: "https://res.cloudinary.com/victorydev/image/upload/v1523372615/stemtype/STEMTYPE_Explorer.png",
        url: "/categories/explorer",
        coverImage: "https://res.cloudinary.com/victorydev/image/upload/c_scale,w_640/v1523386617/Explorers_nbhg2x.jpg",
        category: "explorer",
        description: "Explorers use science to make basic discoveries about the world around us.",
        about: "<p>Advisors are involved in aspects of care ranging all the way from providing personal aid for the elderly, to delivering medical care, to providing counsel and guidance.</p><p>Advisors do operate complex technical equipment, and typically work in healthcare-related facilities, though they may also work in the field.</p>",
        hotJobs: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>",
        hotDegrees: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>"
      }
    },
    integrator: {
      id: "integrator",
      title: "Integrator",
      card: {
        title: "About Integrators",
        avatar: "http://res.cloudinary.com/victorydev/image/upload/v1523372615/stemtype/STEMTYPE_Integrator.png",
        url: "/categories/integrator",
        coverImage: "http://res.cloudinary.com/victorydev/image/upload/c_scale,h_426,w_640/v1523388940/integrators_fhebdjs.jpg",
        category: "integrator",
        description: "Integrators range from supervisors of small teams to CEOs of major organizations.",
        about: "<p>Advisors are involved in aspects of care ranging all the way from providing personal aid for the elderly, to delivering medical care, to providing counsel and guidance.</p><p>Advisors do operate complex technical equipment, and typically work in healthcare-related facilities, though they may also work in the field.</p>",
        hotJobs: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>",
        hotDegrees: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>"
      }
    },
    investigator: {
      id: "investigator",
      title: "Investigator",
      card: {
        title: "About Investigators",
        avatar: "https://res.cloudinary.com/victorydev/image/upload/v1523372615/stemtype/STEMTYPE_Investigator.png",
        url: "/categories/investigator",
        coverImage: "https://res.cloudinary.com/victorydev/image/upload/c_scale,w_640/v1523386620/Investigators_ywfh8l.jpg",
        category: "advisor",
        description: "Investigators gather information about situations, evaluate it, and put together a plan of action.",
        about: "<p>Advisors are involved in aspects of care ranging all the way from providing personal aid for the elderly, to delivering medical care, to providing counsel and guidance.</p><p>Advisors do operate complex technical equipment, and typically work in healthcare-related facilities, though they may also work in the field.</p>",
        hotJobs: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>",
        hotDegrees: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>"
      }
    },
    maker: {
      id: "maker",
      title: "Maker",
      card: {
        title: "About Makers",
        avatar: "https://res.cloudinary.com/victorydev/image/upload/v1523372615/stemtype/STEMTYPE_Maker.png",
        url: "/categories/maker",
        coverImage: "https://res.cloudinary.com/victorydev/image/upload/c_scale,w_640/v1523386973/makers_vjx89c.jpg",
        thumbImage: "https://res.cloudinary.com/victorydev/image/upload/c_scale,w_370/v1522089918/navy/special-warfare-sm.jpg",
        category: "advisor",
        description: "Makers are involved in many different aspects of construction.",
        about: "<p>Advisors are involved in aspects of care ranging all the way from providing personal aid for the elderly, to delivering medical care, to providing counsel and guidance.</p><p>Advisors do operate complex technical equipment, and typically work in healthcare-related facilities, though they may also work in the field.</p>",
        hotJobs: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>",
        hotDegrees: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>"
      }
    },
    producer: {
      id: "producer",
      title: "Producer",
      card: {
        title: "About Producers",
        avatar: "https://res.cloudinary.com/victorydev/image/upload/v1523372616/stemtype/STEMTYPE_Producer.png",
        url: "/categories/producer",
        coverImage: "https://res.cloudinary.com/victorydev/image/upload/v1523387382/producers-hfedvy.jpg",
        category: "producer",
        description: "Producers typically use complex machinery in their work, usually in industrial settings.",
        about: "<p>Advisors are involved in aspects of care ranging all the way from providing personal aid for the elderly, to delivering medical care, to providing counsel and guidance.</p><p>Advisors do operate complex technical equipment, and typically work in healthcare-related facilities, though they may also work in the field.</p>",
        hotJobs: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>",
        hotDegrees: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>"
      }
    },
    solver: {
      id: "solver",
      title: "Solver",
      card: {
        title: "About Solvers",
        avatar: "https://res.cloudinary.com/victorydev/image/upload/v1523372615/stemtype/STEMTYPE_Solver.png",
        url: "/categories/solver",
        coverImage: "https://res.cloudinary.com/victorydev/image/upload/c_scale,w_640/v1523386625/Solvers_ykq22f.jpg",
        category: "solver",
        description: "Solvers prepare, repair, and install products and systems.",
        about: "<p>Advisors are involved in aspects of care ranging all the way from providing personal aid for the elderly, to delivering medical care, to providing counsel and guidance.</p><p>Advisors do operate complex technical equipment, and typically work in healthcare-related facilities, though they may also work in the field.</p>",
        hotJobs: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>",
        hotDegrees: "<p><h2>Registered Nurse:</h2> Average Salary $67,490</p><p><h2>Veterinarian:</h2> Average Salary $88,490</p><p><h2>Park Naturalist:</h2> Average Salary $74,930</p>"
      }
    }
  }
};