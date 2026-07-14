import { Link } from "react-router-dom";
import { profile } from "../data/portfolioData";

const Home = () => {
  const speakName = () => {
    if (!("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(profile.name);
    utterance.lang = "en-US";
    utterance.rate = 0.82;
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
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
          <img src="/my-logo.jpg" alt={profile.name} />
        </div>
      </section>

      <section className="pronunciation-section" aria-labelledby="pronunciation-title">
        <div>
          <p className="eyebrow">say hello</p>
          <h2 id="pronunciation-title">pronounce my name</h2>
        </div>
        <div className="pronunciation-card">
          <p className="name-pronunciation">{profile.pronunciation}</p>
          <p>{profile.pronunciationGuide}</p>
          <button type="button" onClick={speakName}>
            hear it
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
