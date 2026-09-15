import Link from "next/link";
import Icon from "@/components/icon";
import SafeImage from "@/components/safe-image";
import { formatDate } from "@/lib/content";

export default function BlogCard({ blog }) {
  return <article className="blog-card">
    <Link href={`/blogs/${blog.slug}`} className="blog-card-media" aria-label={`Read ${blog.title}`}><SafeImage src={blog.cover || "/images/project-fallback.svg"} alt={blog.coverAlt || "Blog illustration"} /></Link>
    <div className="blog-card-meta">
      <span className="blog-category">{blog.category}</span>
      <time dateTime={blog.date}>{formatDate(blog.date)}</time>
      <span>{blog.readTime}</span>
    </div>
    <div className="blog-card-content">
      <h2><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></h2>
      <p>{blog.excerpt}</p>
      <div className="tags">{blog.tags?.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
      <Link className="text-link blog-read-link" href={`/blogs/${blog.slug}`}>Read note <Icon name="arrow-right" size={15} /></Link>
    </div>
  </article>;
}
