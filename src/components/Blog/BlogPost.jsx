import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { allPosts } from "./posts";

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

  const canonical = `https://www.photoboothwithshan.com.au/blog/${post.slug}`;

  const defaultImage = "/images/glam.png";

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
        <meta property="og:image" content={post.image || defaultImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image || defaultImage} />

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
      </Head>

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
