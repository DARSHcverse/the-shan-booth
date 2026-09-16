import React from "react";
import Head from "next/head";
import { allPosts } from "./posts";

const formatDate = (value) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

// Freshest content first so returning readers and crawlers see updates immediately.
const sortedPosts = [...allPosts].sort(
  (a, b) =>
    new Date(b.dateModified || b.date) - new Date(a.dateModified || a.date),
);

const BlogList = () => {
  return (
    <>
      <Head>
        <title>Blog For Photobooth Hire Melbourne | Photo Booth With Shan</title>
        <meta
          name="description"
          content="Read tips, ideas, and guides on photo booth hire in Melbourne — weddings, corporate events, birthdays, and more."
          key="description"
        />
        <link rel="canonical" href="https://www.photoboothwithshan.com.au/blog" />
      </Head>

      <section className="rd rd-landing blog-list">
        <div className="blog-container">
          <h1 className="blog-title">Photo Booth Blog</h1>

          <div className="blog-grid">
            {sortedPosts.map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`} className="blog-card">
                <h2>{p.title}</h2>
                <p className="post-meta">Updated {formatDate(p.dateModified || p.date)}</p>
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
