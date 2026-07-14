import PageTitle from "../components/PageTitle";
// import { blogPosts } from "../data/portfolioData";

const developerJourney = [
  {
    period: "2021",
    label: "BE",
    title: "Completed BE",
    place: "Engineering foundation",
    description:
      "Built the academic base that shaped how I break down problems, learn systems, and keep improving as a developer.",
    tone: "sky"
  },
  {
    period: "2021",
    label: "PW",
    title: "Started at Pace Wisdom",
    place: "First professional chapter",
    description:
      "Joined as a fresher and learned through real projects, team ownership, tooling, product thinking, and everyday problem solving.",
    tone: "honey"
  },
  {
    period: "2024",
    label: "WY",
    title: "Moved to Wybrid",
    place: "Next challenge",
    description:
      "Switched into a new environment to take on broader challenges and sharpen how I build, communicate, and deliver.",
    tone: "grass"
  },
  {
    period: "Now",
    label: "AI",
    title: "Exploring AI from Nashville",
    place: "Current direction",
    description:
      "Currently in Nashville, exploring how AI can make technology more useful, adaptive, and human-centered.",
    tone: "coral"
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <PageTitle title="blog.">
        <p className="lead-copy">
          A living map of what I am learning, where I have been, and where
          curiosity is taking me next.
        </p>
      </PageTitle>

      <section className="journey-map" aria-labelledby="journey-map-title">
        <div className="journey-map-header">
  
          <p>
            My path has moved through education, first teams, new roles, and
            now AI. 
            {/* Travel keeps that path open: new places help me notice
            better questions and bring fresh context back into my work. */}
          </p>
        </div>

        <ol className="journey-roadmap">
          {developerJourney.map((step) => (
            <li className="roadmap-stop" key={`${step.period}-${step.title}`}>
              <div className={`roadmap-pin ${step.tone}`}>
                <span>{step.label}</span>
              </div>
              <div className="roadmap-card">
                <p className="meta-line">{step.period}</p>
                <h3>{step.title}</h3>
                <p className="roadmap-place">{step.place}</p>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* <aside className="travel-note" aria-label="Travel interest">
          <p className="meta-line">travel thread</p>
          <h3>Exploring places, collecting perspective</h3>
          <p>
            Outside work, I enjoy travelling and discovering new places. It
            keeps me curious, observant, and open to different ways of solving
            problems.
          </p>
        </aside> */}
      </section>

    </div>
  );
};

export default Blog;
