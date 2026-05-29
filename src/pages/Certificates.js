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
            <p>{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
