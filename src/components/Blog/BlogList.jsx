import React from "react";
import Head from "next/head";
import { allPosts } from "./posts";

const BlogList = () => {
  return (
    <>
      <Head>
        <title>Blog For Photobooth Hire Melbourne | Photo Booth With Shan</title>
        <meta
          name="description"
          content="Read tips, ideas, and guides on photo booth hire in Melbourne — weddings, corporate events, birthdays, and more."
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/blog" />
      </Head>

      <section className="blog-list">
        <div className="blog-container">
          <h1 className="blog-title">Photo Booth Blog</h1>

          <div className="blog-grid">
            {allPosts.map((p) => (
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
