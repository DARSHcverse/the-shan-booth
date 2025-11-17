import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { post as post1 } from "./posts/photobooth-benefits";
import { post as post2 } from "./posts/wedding-photo-booth-ideas";
import { post as post3 } from "./posts/corporate-event-trends";
import { post as post4 } from "./posts/photobooth-cost-australia";
import { post as post5 } from "./posts/why-choose-photo-booth-with-shan.js";
import { post as post6 } from "./posts/photo-booth-trends-melbourne-2025.js";
import { post as post7 } from "./posts/open-vs-enclosed-photo-booth.js";
import { post as post8 } from "./posts/top 10 props.js";
import { post as post9 } from "./posts/christmas-hire.js";
import "../../App.css";

const posts = [post1, post2, post3, post4, post5, post6, post7, post8, post9];

const BlogPost = () => {
  const { slug } = useParams();

  const normalizedSlug = decodeURIComponent(String(slug || "")).toLowerCase().replace(/\/+$/, "");
  const post = posts.find((p) => (p.slug || "").toLowerCase() === normalizedSlug);

  if (!post) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="blog-post-wrapper">
          <p className="not-found">Post not found.</p>
        </div>
      </>
    );
  }

  // Normalize canonical URL to avoid duplicates (trailing slash, case)
  const canonicalUrl = `https://www.photoboothwithshan.com.au/blog/${(post.slug || "").toLowerCase().replace(/\/+$/, "")}`;

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />

        {/* Article structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "datePublished": post.date,
            "author": {
              "@type": "Organization",
              "name": post.author || "Photo Booth With Shan"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          })}
        </script>

        {/* Breadcrumbs structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.photoboothwithshan.com.au/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.photoboothwithshan.com.au/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": canonicalUrl
              }
            ]
          })}
        </script>
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
