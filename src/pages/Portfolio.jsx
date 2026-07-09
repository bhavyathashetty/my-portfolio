import PageTitle from "../components/PageTitle";
import { experience, skills } from "../data/portfolioData";

const Portfolio = () => {
  return (
    <div>
      <PageTitle title="portfolio.">
        <p className="lead-copy">
          Experience, tools, and technical strengths from the portfolio.
        </p>
      </PageTitle>

      <section className="content-section">
        <h2>experience</h2>
        <div className="timeline-list">
          {experience.map((job) => (
            <article className="timeline-item" key={job.id}>
              <div>
                <h3>{job.title}</h3>
                <p className="meta-line">
                  {job.company} / {job.duration} / {job.location}
                </p>
              </div>
              <ul>
                {job.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <h2>skills</h2>
        <div className="skill-grid">
          {skills.map((skill) => (
            <article className="skill-card" key={skill.category}>
              <h3>{skill.category}</h3>
              <div className="skill-list">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
