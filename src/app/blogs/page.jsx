import PageHeading from "@/components/page-heading";
import BlogCard from "@/components/blog-card";
import { blogs } from "@/data/blogs";
import { newestFirst } from "@/lib/content";

export const metadata = { title: "Blogs" };

export default function BlogsPage() {
  const posts = newestFirst(blogs, "date");
  return <>
    <PageHeading eyebrow="Personal notes" title="Blogs" description="Reflections on research, building, and the experiences behind my work." />
    {posts.length ? <div className="blog-list">{posts.map(blog => <BlogCard key={blog.slug} blog={blog} />)}</div> : <div className="empty-state blog-empty"><h2>No posts yet</h2><p>New notes will appear here soon.</p></div>}
  </>;
}
