import React from "react";
import { Helmet } from "react-helmet";
import { post as post1 } from "./posts/photobooth-benefits";
import { post as post2 } from "./posts/wedding-photo-booth-ideas";
import { post as post3 } from "./posts/corporate-event-trends";
import { post as post4 } from "./posts/photobooth-cost-australia";
import { post as post5} from "./posts/why-choose-photo-booth-with-shan.js";
import { post as post6} from "./posts/photo-booth-trends-melbourne-2025.js";
import { post as post7} from "./posts/open-vs-enclosed-photo-booth.js";
import { post as post8} from "./posts/top 10 props.js";
import "../../App.css";

const posts = [post1, post2, post3, post4, post5, post6, post7, post8];

const BlogList = () => {
  return (
    <>
      <Helmet>
        <title>Blog For Photobooth Hire Melbourne | Photo Booth With Shan</title>
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
