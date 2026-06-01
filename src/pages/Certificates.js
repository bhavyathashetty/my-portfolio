import PageTitle from "../components/PageTitle";
import { certificatePosts } from "../data/portfolioData";

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
    </div>
  );
};

export default Certificates;
