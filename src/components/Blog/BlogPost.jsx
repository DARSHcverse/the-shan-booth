import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { post as post1 } from "./posts/photobooth-benefits";
import { post as post2 } from "./posts/wedding-photo-booth-ideas";
import { post as post3 } from "./posts/corporate-event-trends";
import { post as post4 } from "./posts/photobooth-cost-australia";
import {post as post5} from "./posts/why-choose-photo-booth-with-shan.js";
import {post as post6} from "./posts/photo-booth-trends-melbourne-2025.js";
import {post as post7} from "./posts/open-vs-enclosed-photo-booth.js";
import {post as post8} from "./posts/top 10 props.js";
import "../../App.css";

const posts = [post1, post2, post3, post4, post5, post6, post7, post8];

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
