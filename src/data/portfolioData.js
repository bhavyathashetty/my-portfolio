export const navItems = [
  { id: "home", label: "home", path: "/" },
  { id: "about", label: "about", path: "/about" },
  { id: "portfolio", label: "portfolio", path: "/portfolio" },
  { id: "blog", label: "blog", path: "/blog" },
  { id: "certificates", label: "certificates", path: "/certificates" },
  { id: "contact", label: "contact", path: "/contact" },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bhavyathashetty/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/bhavyathashetty",
    icon: "github",
  },
  {
    name: "Gmail",
    url: "mailto:bhavyathashetty@gmail.com",
    icon: "gmail",
  },
];

export const profile = {
  name: "Bhavyatha Shetty",
  initials: "BS",
  title: "Full Stack Developer",
  location: "Nashville, Tennessee",
  email: "bhavyathashetty@gmail.com",
  phone: "+1 (629) 275-4340",
  pronunciation: "BHA-vya-tha SHET-tee",
  pronunciationGuide: "Bhavyatha is pronounced in three parts: BHA, vya, tha.",
  intro:
    "Building beautiful and functional web applications with React, Node.js, and modern technologies",
  aboutLead:
    "Hi, I'm a passionate Full Stack Developer who enjoys building scalable web applications and is currently diving deeper into the world of Artificial Intelligence & Generative AI.",
  aboutBody:
    " In my free time, I love cooking, exploring new food, and traveling.",
};

export const experience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Wybrid Technology Pvt. Ltd",
    duration: "2024 - 2026",
    location: "Mumbai, India",
    description: [
      "Led the backend development team to drive architecture design, code quality standards, and deployment strategies, resulting in a 30% boost in system performance and increased team velocity.",
      "Designed and implemented scalable backend services using Node.js, Express, MongoDB, and AWS services (Lambda, S3, SNS), ensuring high availability and reliability for thousands of users.",
      "Mentored 4+ junior developers and introduced best practices in code reviews, CI/CD, and automated testing, cutting production issues by over 40% and improving onboarding time.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer L-2",
    company: "PACE WISDOM SOLUTIONS",
    duration: "2021 - 2024",
    location: "Bangalore, India",
    description: [
      "Implemented backend features and RESTful APIs based on technical specifications, ensuring timely and reliable feature delivery aligned with sprint goals.",
      "Collaborated closely with team members to debug, test, and optimize existing code, improving system stability and reducing production error rates.",
      "Followed best practices in version control (Git), code reviews, and documentation while actively learning from team mentorship to accelerate personal and team growth.",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: [ "JavaScript","TypeScript", "Python","HTML","CSS"],
  },
  {
    category: "Frontend",
    items: [ "React", "NextJS", "Material UI", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["NodeJS", "ExpressJS", "REST APIs"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS"],
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "In progress!",
    date: "May 4, 2026",
    excerpt: "....",
  },
];

export const certificatePosts = [
  {
    id: 1,
    title: "Introduction to OpenAI Codex",
    date: "May 30, 2026",
    issuer: "LinkedIn",
    url: "https://coursera.org/share/e340cbfc6c6af8e16e7d22e7fc070a16",
  },
   {
    id: 2,
    title: "Python for Everybody Specialization,",
    date: "August 10, 2020",
    issuer: "LinkedIn",
    url: "https://www.coursera.org/account/accomplishments/specialization/XLQYUHEWQW33",
  },
];
