import { Routes, Route, Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "portfolio", label: "Portfolio", path: "/portfolio" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "certificates", label: "Certificates", path: "/certificates" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/bhavyathashetty/",
      icon: "in",
    },
    { name: "GitHub", url: "https://github.com/bhavyathashetty", icon: "gh" },
   
    { name: "Email", url: "mailto:bhavyathashetty@gmail.com", icon: "em" },
  ];

  return (
    <div className="landing-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">BS</div>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer with Social Links */}
      <footer className="footer">
        <div className="social-links-footer">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={link.name}
            >
              {link.icon === "in" && "🔗"}
              {link.icon === "gh" && "💻"}
              {link.icon === "tw" && "𝕏"}
              {link.icon === "em" && "✉️"}
            </a>
          ))}
        </div>
        <p className="copyright">
          &copy; 2024 Bhavyatha Shetty. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-name">Bhavyatha Shetty</h1>
          <p className="hero-title">Full Stack Developer</p>
          <div className="hero-description">
            <p>Building beautiful and functional web applications</p>
            <p>with React, Node.js, and modern technologies</p>
          </div>
          <div className="hero-cta">
            <Link to="/contact" className="cta-button primary">
              Get in Touch
            </Link>
            <Link to="/portfolio" className="cta-button secondary">
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// About Component
const About = () => {
  return (
    <div className="about-page">
      <h2>about.</h2>
      <div className="about-content">
        <div className="about-image">
          <img src={`${process.env.PUBLIC_URL}/my-logo.jpg`} alt="Bhavyatha Shetty" />
        </div>
        <div className="about-text">
          <p>
  Hi, I’m a software developer based in Nashville, Tennessee, focused on building scalable applications.
          </p>
          <p>
       Since 2021, I’ve enjoyed turning complex problems into simple, intuitive, and elegant solutions. In my free time, I love cooking, exploring new food, and traveling.
          </p>
        </div>
      </div>
    </div>
  );
};

// Portfolio Component
const Portfolio = () => {

  const experience = [
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

  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "PostgreSQL", "MySQL"],
    },
    {
      category: "Cloud & DevOps",
      items: [ "AWS"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Visual Studio Code", "Jira", "SendGrid", "Wati"],
    },
  ];

  return (
    <div className="portfolio-page">
      <h2>My Portfolio</h2>


      {/* Experience Section */}
      <section className="portfolio-section">
        <h3>Experience</h3>
        <div className="experience-list">
          {experience.map((exp) => (
            <div key={exp.id} className="portfolio-card">
              <h3>{exp.title}</h3>
              <p className="company-duration">
                {exp.company} • {exp.duration}
              </p>
              <ul className="experience-description">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="portfolio-section">
        <h3>Skills</h3>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.category} className="portfolio-card">
              <h4>{skill.category}</h4>
              <div className="skill-items">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Blog Component
const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "In progress!",
      date: "May 4, 2026",
      excerpt: "....",
    },
  ];

  return (
    <div className="blog-page">
      <h2>My Blog</h2>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.excerpt}</p>
            {/* <button className="read-more">Read More →</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

// Contact Component
const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Get In Touch</h2>
      <div className="contact-content">
        <p className="contact-intro">
          I'm always open to new opportunities and collaborations. Let's
          connect!
        </p>

        <div className="contact-info-section">
          <div className="contact-details-card">
            <div className="contact-details-content">
              <div className="contact-detail-row">
                <div className="detail-info">
                  <span className="detail-label">Email</span>
                  <p>bhavyathashetty@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-info">
                  <span className="detail-label">Phone</span>
                  <p>+1 (629) 275-4340</p>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="detail-info">
                  <span className="detail-label">Location</span>
                  <p>Nashville, Tennessee</p>
                </div>
              </div>
            </div>
          </div>

          <div className="social-connect">
            <h3>Connect With Me</h3>
            <div className="social-links-grid">
              <a
                href="https://linkedin.com/in/bhavyatha-shetty"
                className="social-link-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">💼</div>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/bhavyatha-shetty"
                className="social-link-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="social-icon">💻</div>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h3>Send a Message</h3>
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Tell me about your project or just say hello!"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Certificates / Accomplishments Component
const Certificates = () => {
      const blogPosts = [
    {
      id: 1,
      title: "In progress!",
      date: "May 4, 2026",
      excerpt: "....",
    },
  ];
  return (
  <div className="blog-page">
      <h2>Certificates & Accomplishments</h2>
         <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <h3>{post.title}</h3>
            <p className="blog-date">{post.date}</p>
            <p>{post.excerpt}</p>
            {/* <button className="read-more">Read More →</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
