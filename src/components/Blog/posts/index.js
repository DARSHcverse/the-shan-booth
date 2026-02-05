import * as post1 from "./photobooth-benefits";
import * as post2 from "./wedding-photo-booth-ideas";
import * as post3 from "./corporate-event-trends";
import * as post4 from "./photobooth-cost-australia";
import * as post5 from "./why-choose-photo-booth-with-shan";
import * as post6 from "./photo-booth-trends-melbourne-2025";
import * as post7 from "./open-vs-enclosed-photo-booth";
import * as post8 from "./top-10-props";
import * as post9 from "./christmas-hire";

export const allPosts = [
  post1.post,
  post2.post,
  post3.post,
  post4.post,
  post5.post,
  post6.post,
  post7.post,
  post8.post,
  post9.post,
];

export const postsBySlug = Object.fromEntries(
  allPosts.map((post) => [post.slug, post])
);
