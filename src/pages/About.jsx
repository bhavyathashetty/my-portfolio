import PageTitle from "../components/PageTitle";
import { profile } from "../data/portfolioData";

const aboutHighlights = [
  "🌍 I love traveling and exploring new places",
  "🍜 Food enthusiast — always excited to try new cuisines",
  "📸 Capturing moments and experiences",
  "🎧 Listening to music while thinking about the next build"
];

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero split-hero">
        <PageTitle title="about.">
          <p className="lead-copy">{profile.aboutLead}</p>
          <p>{profile.aboutBody}</p>
        </PageTitle>

        <div className="portrait-wrap large">
          <img src="/my-logo.jpg" alt={profile.name} />
        </div>
      </section>

      <section className="about-highlights" aria-label="About me highlights">
        <h2>also me</h2>
        <div className="about-highlight-grid">
          {aboutHighlights.map((highlight) => (
            <article className="about-highlight-card" key={highlight}>
              {highlight}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
