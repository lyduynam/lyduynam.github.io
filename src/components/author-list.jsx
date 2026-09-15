import Link from "next/link";
import { getScholarUrl } from "@/data/authors";

export default function AuthorList({ authors = [] }) {
  return <span className="authors">{authors.map((author, index) => {
    const mine = /duy-nam ly|ly, duy-nam/i.test(author);
    const scholarUrl = getScholarUrl(author);
    const name = scholarUrl
      ? <Link className={mine ? "author-self" : "author-link"} href={scholarUrl} target="_blank" rel="noreferrer">{author}</Link>
      : <span className={mine ? "author-self" : undefined}>{author}</span>;
    return <span key={`${author}-${index}`}>{index > 0 && ", "}{name}</span>;
  })}</span>;
}
