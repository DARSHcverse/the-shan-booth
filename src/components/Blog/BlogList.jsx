import React from "react";
import { Helmet } from "react-helmet";
import * as post1 from "./posts/photobooth-benefits";
import * as post2 from "./posts/wedding-photo-booth-ideas";
import * as post3 from "./posts/corporate-event-trends";
import * as post4 from "./posts/photobooth-cost-australia";
import * as post5 from "./posts/why-choose-photo-booth-with-shan";
import * as post6 from "./posts/photo-booth-trends-melbourne-2025";
import * as post7 from "./posts/open-vs-enclosed-photo-booth";
import * as post8 from "./posts/top-10-props";
import * as post9 from "./posts/christmas-hire";
import "../../App.css";

const posts = [post1.post, post2.post, post3.post, post4.post, post5.post, post6.post, post7.post, post8.post, post9.post];

const BlogList = () => {
  return (
    <>
      <Helmet>
        <title>Blog For Photobooth Hire Melbourne | Photo Booth With Shan</title>
        <meta
          name="description"
          content="Read tips, ideas, and guides on photo booth hire in Melbourne — weddings, corporate events, birthdays, and more."
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/blog" />
      </Helmet>

      <section className="blog-list">
        <div className="blog-container">
          <h1 className="blog-title">Photo Booth Blog</h1>

          <div className="blog-grid">
            {posts.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <h2>{p.title}</h2>
                <p className="post-meta">{p.date}</p>
                <p className="post-excerpt">{p.excerpt}</p>
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
