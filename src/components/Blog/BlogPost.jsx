import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { allPosts } from "./posts";

const formatDate = (value) =>
  new Date(`${value}T00:00:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const BlogPost = ({ slug: slugProp }) => {
  const router = useRouter();
  const slug = slugProp || router.query.slug;

  if (!slug) {
    return null;
  }

  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <p>Post not found.</p>
      </>
    );
  }

  const SITE_URL = "https://www.photoboothwithshan.com.au";
  const canonical = `${SITE_URL}/blog/${post.slug}`;

  // Absolute URL required by Open Graph / Twitter for previews to render.
  const rawImage = post.image || "/images/glam.png";
  const ogImage = rawImage.startsWith("http") ? rawImage : `${SITE_URL}${rawImage}`;

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} key="description" />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={ogImage} />

      </Head>

      {/* Schema (rendered outside next/head so Google reliably receives it) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            dateModified: post.dateModified || post.date,
            image: ogImage,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "The Shan Booth",
              url: SITE_URL,
              logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/images/logo.png`,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonical,
            },
          }),
        }}
      />

      <section className="rd rd-landing blog-post-wrapper">
        <article className="blog-post">
          <h1>{post.title}</h1>
          <p className="post-meta">
            Published {formatDate(post.date)}
            {post.dateModified && post.dateModified !== post.date && (
              <> · Updated {formatDate(post.dateModified)}</>
            )}
          </p>

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
