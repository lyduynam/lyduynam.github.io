import Link from "next/link";
import { formatDate } from "@/lib/content";
export default function UpdateList({ items, compact = false }) {
  return <ul className={`update-list${compact ? " compact" : ""}`}>{items.map(item => <li key={item.id} className="update-item">
    <time dateTime={item.date}>{formatDate(item.date)}</time>
    <div className="update-copy">{!compact && <span className="update-category">{item.category}</span>}
      <h3>{item.href ? (item.href.startsWith("/") ? <Link href={item.href}>{item.title}</Link> : <a href={item.href} target="_blank" rel="noreferrer">{item.title}</a>) : item.title}</h3>
      {!compact && item.text && <p>{item.text}</p>}
    </div>
  </li>)}</ul>;
}
