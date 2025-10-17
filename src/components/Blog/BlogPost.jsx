import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { post as post1 } from "./posts/photobooth-benefits";
import { post as post2 } from "./posts/wedding-photo-booth-ideas";
import { post as post3 } from "./posts/corporate-event-trends";
import { post as post4 } from "./posts/photobooth-cost-australia";
import "../../App.css";

const posts = [post1, post2, post3, post4];

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-post-wrapper">
        <p className="not-found">Post not found.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link
          rel="canonical"
          href={`https://www.photoboothwithshan.com.au/blog/${post.slug}`}
        />
      </Helmet>

      <section className="blog-post-wrapper">
        <article className="blog-post">
          <h1>{post.title}</h1>
          <p className="post-meta">{post.date}</p>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </section>
    </>
  );
};

export default BlogPost;
