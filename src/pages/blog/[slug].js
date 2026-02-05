import BlogPost from "../../components/Blog/BlogPost";
import { allPosts } from "../../components/Blog/posts";

export default function BlogPostPage({ slug }) {
  return <BlogPost slug={slug} />;
}

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}
