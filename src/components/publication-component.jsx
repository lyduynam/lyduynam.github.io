import Link from "next/link";
import AuthorList from "@/components/author-list";
import Bibtex from "@/components/bibtex";
import SafeImage from "@/components/safe-image";
import Icon from "@/components/icon";
import { getPublicationProject } from "@/data/projects";
export default function PublicationComponent({ publication, compact = false }) {
  const project = getPublicationProject(publication.Link);
  return <article className={`publication-item${compact ? " compact" : ""}`}>
    {compact && project && <Link href={`/projects/${project.slug}`} className="publication-thumbnail" tabIndex={-1} aria-hidden="true"><SafeImage src={project.cover} alt="" /></Link>}
    <div className="publication-content">
      <div className="publication-meta"><span className="venue-badge">{publication.Venue || publication.Year}</span>{!compact && <span className="publication-year">{publication.Year}</span>}</div>
      <h3>{publication.Link ? <a href={publication.Link} target="_blank" rel="noreferrer">{publication.Title}</a> : publication.Title}</h3>
      <p className="author-line"><AuthorList authors={publication.Authors} /></p>
      {!compact && <p className="publication-journal">{publication.Publication}</p>}
      <div className="publication-actions">
        {publication.Link && <a className="text-link" href={publication.Link} target="_blank" rel="noreferrer">Paper <Icon name="arrow-up-right" size={14} /></a>}
        {publication.PDF && <a className="text-link" href={publication.PDF} target="_blank" rel="noreferrer">PDF <Icon name="file" size={14} /></a>}
        {publication.Demo && <a className="text-link" href={publication.Demo} target="_blank" rel="noreferrer">Video <Icon name="play" size={14} /></a>}
        {project && <Link className="text-link" href={`/projects/${project.slug}`}>Project <Icon name="arrow-right" size={14} /></Link>}
        {!compact && <Bibtex value={publication.BibTex} />}
      </div>
    </div>
  </article>;
}
