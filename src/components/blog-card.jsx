import Link from "next/link";
import SafeImage from "@/components/safe-image";
import { formatDate } from "@/lib/content";

export default function BlogCard({ blog }) {
  return <article className="blog-card">
    <Link href={`/blogs/${blog.slug}`} className="blog-card-media" aria-label={`Read ${blog.title}`}><SafeImage src={blog.cover || "/images/project-fallback.svg"} alt={blog.coverAlt || "Blog illustration"} /></Link>
    <div className="blog-card-meta">
      <time dateTime={blog.date}>{formatDate(blog.date)}</time>
    </div>
    <div className="blog-card-content">
      <h2><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></h2>
      <p>{blog.excerpt}</p>
    </div>
  </article>;
}
