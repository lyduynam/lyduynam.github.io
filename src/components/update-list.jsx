import Link from "next/link";
import Icon from "@/components/icon";
import { formatDate } from "@/lib/content";
export default function UpdateList({ items, compact = false }) {
  return <ul className={`update-list${compact ? " compact" : ""}`}>{items.map(item => <li key={item.id} className="update-item">
    <time dateTime={item.date}>{formatDate(item.date)}</time>
    <div className="update-copy"><span className="update-category">{item.category}</span>
      <h3>{item.href ? (item.href.startsWith("/") ? <Link href={item.href}>{item.title}<Icon name="arrow-up-right" size={16} /></Link> : <a href={item.href} target="_blank" rel="noreferrer">{item.title}<Icon name="arrow-up-right" size={16} /></a>) : item.title}</h3>
      {!compact && item.text && <p>{item.text}</p>}
    </div>
  </li>)}</ul>;
}
