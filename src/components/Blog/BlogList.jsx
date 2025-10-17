import React from "react";
import { Helmet } from "react-helmet";
import { post as post1 } from "./posts/photobooth-benefits";
import { post as post2 } from "./posts/wedding-photo-booth-ideas";
import { post as post3 } from "./posts/corporate-event-trends";
import { post as post4 } from "./posts/photobooth-cost-australia";
import "../../App.css";

const posts = [post1, post2, post3, post4];

const BlogList = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Photo Booth With Shan</title>
        <meta
          name="description"
          content="Read the latest tips, ideas, and guides on photo booth hire in Melbourne — weddings, corporate events, birthdays, and more."
        />
        <link
          rel="canonical"
          href="https://www.photoboothwithshan.com.au/blog"
        />
      </Helmet>

      <section className="blog-list">
        <div className="blog-container">
          <h1 className="blog-title">Photo Booth Blog</h1>

          <div className="blog-grid">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card"
              >
                <h2>{post.title}</h2>
                <p className="post-meta">{post.date}</p>
                <p className="post-excerpt">{post.excerpt}</p>
                <span className="read-more">Read more →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
