import PageTitle from "../components/PageTitle";
import { badgePosts, certificatePosts } from "../data/portfolioData";

const Certificates = () => {
  return (
    <div>
      <PageTitle title="certificates." />
      <div className="post-list">
        {certificatePosts.map((post) => (
          <article className="post-card" key={post.id}>
            <p className="meta-line">{post.date}</p>
            <h2>{post.title}</h2>
            {post.issuer && <p>{post.issuer}</p>}
            {post.url && (
              <a
                className="text-button"
                href={post.url}
                target="_blank"
                rel="noreferrer"
              >
                View certificate
              </a>
            )}
          </article>
        ))}
      </div>

      <section className="badge-section" aria-labelledby="badges-title">
        <h2 id="badges-title">badges.</h2>
        <div className="badge-grid">
          {badgePosts.map((badge) => (
            <article className="post-card badge-card" key={badge.id}>
              {badge.date && <p className="meta-line">{badge.date}</p>}
              <h3>{badge.title}</h3>
              {badge.issuer && <p>{badge.issuer}</p>}
              {badge.url && (
                <a
                  className="text-button"
                  href={badge.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View badge
                </a>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Certificates;
