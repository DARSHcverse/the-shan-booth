import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
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

const BlogPost = () => {
  const { slug } = useParams();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <p>Post not found.</p>
      </>
    );
  }

  const canonical = `https://www.photoboothwithshan.com.au/blog/${post.slug}`;

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={canonical} />

        {/* Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: {
              "@type": "Person",
              name: post.author,
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonical,
            },
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
