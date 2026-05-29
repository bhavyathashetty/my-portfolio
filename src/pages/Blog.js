import PageTitle from "../components/PageTitle";
import { blogPosts } from "../data/portfolioData";

const Blog = () => {
  return (
    <div>
      <PageTitle title="blog." />
      <div className="post-list">
        {blogPosts.map((post) => (
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

export default Blog;
