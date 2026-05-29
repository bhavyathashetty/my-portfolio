import { Link } from "react-router-dom";
import { profile } from "../data/portfolioData";

const Home = () => {
  return (
    <section className="home-hero split-hero">
      <div className="hero-copy">
        <p className="eyebrow">{profile.title}</p>
        <h1>{profile.name}</h1>
        <p className="hero-lead">{profile.intro}</p>
        <div className="hero-actions">
          <Link to="/portfolio" className="text-button">
            view my work
          </Link>
          <Link to="/contact" className="text-button muted">
            get in touch
          </Link>
        </div>
      </div>
      <div className="portrait-wrap" aria-label={profile.name}>
        <img src={`${process.env.PUBLIC_URL}/my-logo.jpg`} alt={profile.name} />
      </div>
    </section>
  );
};

export default Home;
