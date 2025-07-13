export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Playground",
    href: "/playground",
  },
  {
    id: 4,
    name: "Work",
    href: "#work",
  },
  {
    id: 5,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Mustafa Rampurawala",
    position: "CEO of Matrix Software Solutions",
    img: "assets/mustafa.jpeg",
    review:
      "Haider has shown consistent growth since joining the team. His initiative, problem-solving approach, and dedication to quality make him a promising developer. I’m confident he’ll go far in this field.",
  },
  {
    id: 2,
    name: "Sahil Akoliya",
    position: "UI/UX Designer at Matrix Software Solutions",
    img: "assets/sahil.jpeg",
    review:
      "Working with Haider has been smooth and productive. He quickly translates designs into responsive and pixel-perfect interfaces. His frontend skills and eagerness to learn make him a solid asset to the team.",
  },
  {
    id: 3,
    name: "Huzaifa Rampurawala",
    position: "Senior Frontend Developer at Matrix Software Solutions",
    img: "assets/huzaifa.jpeg",
    review:
      "Haider communicates effectively and always ensures frontend and backend integrations go smoothly. He handles tasks responsibly and is quick at debugging and resolving issues when they arise.",
  },
  {
    id: 4,
    name: "Krunal Ankoliya",
    position: "Backend Developer at Matrix Software Solutions",
    img: "assets/krunal.jpeg",
    review:
      "Haider is a reliable teammate who always delivers clean and efficient code. His understanding of React and attention to user experience has improved many of our internal tools. A great person to collaborate with.",
  },
];

// export const clientReviews = [
//   {
//     id: 1,
//     name: "Emily Johnson",
//     position: "Marketing Director at GreenLeaf",
//     img: "assets/review1.png",
//     review:
//       "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
//   },
//   {
//     id: 2,
//     name: "Mark Rogers",
//     position: "Founder of TechGear Shop",
//     img: "assets/review2.png",
//     review:
//       "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
//   },
//   {
//     id: 3,
//     name: "John Dohsas",
//     position: "Project Manager at UrbanTech ",
//     img: "assets/review3.png",
//     review:
//       "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
//   },
//   {
//     id: 4,
//     name: "Ether Smith",
//     position: "CEO of BrightStar Enterprises",
//     img: "assets/review4.png",
//     review:
//       "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
//   },
// ];

export const myProjects = [
  {
    title: "HostHaven - Vacation Rental Site",
    desc: "A responsive vacation rental platform built with React.js and Tailwind CSS, featuring Mapbox integration, secure user authentication, and an intuitive admin panel.",
    subdesc:
      "Created a full-stack vacation rental web app using React.js and Tailwind CSS. HostHaven includes interactive Mapbox-powered maps for location-based property browsing, secure authentication for hosts and guests, and a robust admin panel for managing listings, users, and bookings. Designed with a responsive UI and scalable structure, the app delivers a smooth experience across devices and simplifies rental management for both travelers and property owners.",
    // href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/hos.mp4",
    logo: "/assets/hosthaven.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Next Js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Mongo DB",
        path: "/assets/mongodb.svg",
      },
      {
        id: 3,
        name: "Node Js",
        path: "/assets/nodejs.svg",
      },
    ],
  },
  {
    title: "Ghadi's - School Management App",
    desc: " School management app design with Next.js and Tailwind. Admin, teacher, student, and parent dashboards with responsive tables and animated charts.",
    subdesc:
      "Build a responsive school management app using Next.js and Tailwind CSS, featuring dashboards for admins, teachers, students, and parents. It includes dynamic tables, animated charts, role-based authentication, and optimized performance with SSR/ISR for seamless functionality across devices.",
    // href: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
    texture: "/textures/project/schoolmanagement.mp4",
    logo: "/assets/logo.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Next Js",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 3,
        name: "Prisma",
        path: "/assets/prisma.png",
      },
    ],
  },
  {
    title: "CarDekho",
    desc: "A dynamic web application built using Next.js 14, leveraging cutting-edge features like server-side rendering (SSR) and the app router for optimal performance and user experience.",
    subdesc:
      "A sleek web application built with Next.js 14, featuring advanced search, custom filters, and SEO optimization. Utilizes server-side rendering and a clean file structure for high performance and user-friendly interactions.",
    href: "https://car-showcase-page.vercel.app/",
    texture: "/textures/project/carshowcase.mp4",
    logo: "/assets/carlogo.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "NextJs",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
    ],
  },
  {
    title: "BookStore",
    desc: "This project is a dynamic web application for a virtual bookstore. It provides users with an interactive experience, allowing them to browse books and change the color scheme of the interface. The color-changing effects can enhance the user experience and make the website visually appealing.",
    subdesc:
      "Browse a collection of books with descriptions and cover images Change the color scheme of the bookstore interface using scroll options.Enhance user experience with dynamic and visually appealing color transitions.",
    href: "https://haiderghadi.github.io/Bookstore/",
    texture: "/textures/project/bookstore.mp4",
    logo: "/assets/bookstore.jpg",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Html5",
        path: "/assets/html.png",
      },
      {
        id: 2,
        name: "CSS",
        path: "assets/css.png",
      },
      {
        id: 3,
        name: "Javascript",
        path: "/assets/js.png",
      },
    ],
  },
  {
    title: "Anime Vault",
    desc: "The Anime Explorer App is a sleek platform for discovering and browsing anime. It features an infinite scroll for a seamless viewing experience, ensuring users can explore extensive anime lists without interruptions.",
    subdesc:
      "Built with Framer Motion, the app provides smooth and engaging animations, enhancing interactivity and visual appeal. Utilizing server actions for efficient data fetching, the app ensures fast, dynamic updates while maintaining optimal performance. Designed for anime enthusiasts, it combines modern aesthetics with powerful functionality for an enjoyable user experience.",
    href: "https://anime-vault-git-feat-framer-motion-js-mastery-pro.vercel.app/",
    texture: "/textures/project/anime.mp4",
    logo: "/assets/animelogo.jpg",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Next Js",
        path: "/assets/nextjs.png",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Matrix Software Solutions",
    pos: "React Developer",
    duration: "Jan 2024 - June 2025",
    title:
      "Working on building and maintaining responsive web applications using React.js, JavaScript, and modern frontend tools.I focus on writing clean UI code, fixing bugs, and adding new features that improve user experience.Still learning every day — and excited to grow deeper into real-world development.",
    icon: "/assets/matrix.jpeg",
    animation: "salute",
  },
  {
    id: 2,
    name: "Lucky Web Services",
    pos: "Web Developer Intern",
    duration: "Oct 2023 - Dec 2023",
    title:
      "Designed and implemented a responsive web application optimized for multiple devices and browsers.Developed dynamic user interfaces using ReactJS (Next.js) and enhanced styling with TailwindCSS and Sass.Built a high-performance e-commerce platform focused on clean UI, reducing dependency for faster load times using pure CSS.Implemented secure user authentication using Auth.js, ensuring reliable access control.",
    icon: "/assets/developer.png",
    animation: "victory",
  },
  {
    id: 3,
    name: "CodeClause",
    pos: "Web Developer Intern",
    duration: "Aug 2023 - Sept 2023",
    title:
      "Learned and practiced web development fundamentals, including HTML, CSS, and JavaScript.Collaborated with senior developers on Git version control and front-end projects.Maintained responsive website compatibility across devices and browsers.",
    icon: "/assets/codeclause.png",
    animation: "clapping",
  },
];
