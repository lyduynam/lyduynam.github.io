import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/icon";
import SafeImage from "@/components/safe-image";
import { blogs } from "@/data/blogs";
import { formatDate } from "@/lib/content";

export function generateStaticParams() {
  return blogs.map(blog => ({ slug: blog.slug }));
}

export function generateMetadata({ params }) {
  const blog = blogs.find(item => item.slug === params.slug);
  return blog ? { title: blog.title, description: blog.excerpt } : {};
}

export default function BlogDetailPage({ params }) {
  const blog = blogs.find(item => item.slug === params.slug);
  if (!blog) notFound();
  return <article className="blog-detail-page">
    <Link href="/blogs" className="blog-back"><Icon name="arrow-left" size={15} /> All blogs</Link>
    <header className="blog-detail-header">
      {blog.cover && <figure className="blog-detail-cover"><SafeImage src={blog.cover} alt={blog.coverAlt || blog.title} eager /><figcaption>{blog.coverCaption || ""}</figcaption></figure>}
      <div className="blog-detail-meta"><span className="blog-category">{blog.category}</span><time dateTime={blog.date}>{formatDate(blog.date)}</time><span>{blog.readTime}</span></div>
      <h1>{blog.title}</h1>
      <p className="blog-lede">{blog.intro || blog.excerpt}</p>
      <div className="tags">{blog.tags?.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
    </header>
    <div className="blog-content">
      {blog.sections?.map((section, index) => <section key={`${section.heading}-${index}`}>
        {section.heading && <h2>{section.heading}</h2>}
        {section.paragraphs?.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
        {section.bullets?.length > 0 && <ul>{section.bullets.map((bullet, bulletIndex) => <li key={bulletIndex}>{bullet}</li>)}</ul>}
        {section.quote && <blockquote>{section.quote}{section.quoteAuthor && <cite>— {section.quoteAuthor}</cite>}</blockquote>}
        {section.image && <figure className="blog-inline-image"><SafeImage src={section.image} alt={section.imageAlt || section.heading || blog.title} /><figcaption>{section.imageCaption || ""}</figcaption></figure>}
      </section>)}
    </div>
  </article>;
}
