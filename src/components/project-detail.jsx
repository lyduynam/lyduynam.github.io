import Link from "next/link";
import AuthorList from "@/components/author-list";
import Bibtex from "@/components/bibtex";
import SafeImage from "@/components/safe-image";
import YouTubeEmbed from "@/components/youtube-embed";
import Icon from "@/components/icon";
import { getYouTubeId } from "@/lib/youtube";

function ResourceLink({ href, children, primary = false }) {
  const className = `button${primary ? " primary" : ""}`;
  return href.startsWith("/") ? <Link href={href} className={className}>{children}</Link> : <a href={href} className={className} target={href.startsWith("#") ? undefined : "_blank"} rel={href.startsWith("#") ? undefined : "noreferrer"}>{children}</a>;
}
function Resources({ project }) {
  const papers = project.paperUrl ? [project.paperUrl] : (project.publications?.map(publication => publication.Link).filter(link => link && link !== "Under Review") || (project.publication?.Link && project.publication.Link !== "Under Review" ? [project.publication.Link] : []));
  const pdf = project.pdfUrl || project.publication?.PDF;
  const video = getYouTubeId(project.youtubeUrl);
  return <div className="project-resources">
    {papers.map((paper, index) => <ResourceLink key={paper} href={paper} ><Icon name="file" size={16} />{papers.length > 1 ? `Paper ${index + 1}` : "Paper"}</ResourceLink>)}
    {pdf && <ResourceLink href={pdf}>PDF <Icon name="arrow-up-right" size={15} /></ResourceLink>}
    {video && <ResourceLink href="#video"><Icon name="play" size={16} />Video</ResourceLink>}
    {project.codeUrl && <ResourceLink href={project.codeUrl}><Icon name="code" size={17} />Code</ResourceLink>}
    {project.liveUrl && <ResourceLink href={project.liveUrl} primary>Visit project <Icon name="arrow-up-right" size={16} /></ResourceLink>}
  </div>;
}
function Gallery({ gallery }) {
  if (!gallery?.length) return null;
  return <section className="detail-section"><h2>Gallery</h2><div className="project-gallery">{gallery.map((item, index) => <figure key={`${item.src}-${index}`}><SafeImage src={item.src} alt={item.alt || "Project image"} />{item.caption && <figcaption>{item.caption}</figcaption>}</figure>)}</div></section>;
}
function StorySections({ sections }) {
  return sections?.map((section, index) => <section className="detail-section" key={`${section.heading}-${index}`}><h2>{section.heading}</h2>{section.paragraphs?.map((paragraph, i) => <p key={i}>{paragraph}</p>)}{section.bullets?.length > 0 && <ul>{section.bullets.map((item, i) => <li key={i}>{item}</li>)}</ul>}</section>);
}
function TopicLinks({ tags }) {
  return <div className="tags">{tags.map(tag => <Link className="tag" key={tag} href={`/projects?tag=${encodeURIComponent(tag)}`}>{tag}</Link>)}</div>;
}

export function ResearchDetail({ project }) {
  const publication = project.publication;
  const publications = project.publications?.length ? project.publications : (publication ? [publication] : []);
  return <article className="research-detail">
    <header className="research-header">
      <div className="detail-kicker"><span className="eyebrow">Research project</span><span className="venue-badge">{project.note}</span></div>
      <h1>{publication?.Title || project.title}</h1>
      {(project.authors || publication?.Authors) && <p className="detail-authors"><AuthorList authors={project.authors || publication.Authors} /></p>}
      {project.affiliations?.length > 0 && <p className="detail-affiliations">{project.affiliations.join(" · ")}</p>}
      {publication?.Authors?.some(author => author.includes("*")) && <p className="contribution-note">* Equal contribution</p>}
      <Resources project={project} />
    </header>
    <figure className="detail-hero"><SafeImage src={project.cover} alt={project.imageAlt || project.title} eager />{project.coverCaption && <figcaption>{project.coverCaption}</figcaption>}</figure>
    <div className="research-body">
      <section className="detail-section"><h2>{project.abstract ? "Abstract" : "Overview"}</h2><p>{project.abstract || project.overview || project.summary}</p><TopicLinks tags={project.tags} /></section>
      <YouTubeEmbed url={project.youtubeUrl} title={project.title} caption={project.videoCaption} />
      <StorySections sections={project.sections} />
      <Gallery gallery={project.gallery} />
      {publications.length > 0 && <section className="detail-section publication-details"><h2>{publications.length > 1 ? "Publications" : "Publication"}</h2>{publications.map(item => <div className="publication-detail-entry" key={item.Link || item.Title}><p className="publication-detail-title">{item.Title}</p><p>{item.Publication}</p><div className="publication-detail-meta"><span>{item.Venue}</span><span>{item.Year}</span>{item.Pages && <span>Pages {item.Pages}</span>}</div>{item.Link && item.Link !== "Under Review" && <a href={item.Link} className="text-link" target="_blank" rel="noreferrer">View publication <Icon name="arrow-up-right" size={15} /></a>}</div>)}</section>}
      {(project.bibtex || publications.some(item => item.BibTex)) && <section className="detail-section"><h2>{publications.length > 1 ? "Citations" : "Citation"}</h2>{project.bibtex ? <Bibtex value={project.bibtex} defaultOpen /> : publications.filter(item => item.BibTex).map(item => <div className="publication-citation" key={item.Link || item.Title}><Bibtex value={item.BibTex} defaultOpen /></div>)}</section>}
      {project.acknowledgments && <section className="detail-section"><h2>Acknowledgments</h2><p>{project.acknowledgments}</p></section>}
    </div>
  </article>;
}
export function ShowcaseDetail({ project }) {
  return <article className="showcase-detail">
    <header className="showcase-header"><p className="eyebrow">Other project · {project.year}</p><h1>{project.title}</h1><p className="showcase-summary">{project.summary}</p><TopicLinks tags={project.tags} /><Resources project={project} /></header>
    <figure className="detail-hero"><SafeImage src={project.cover} alt={project.imageAlt || project.title} eager />{project.coverCaption && <figcaption>{project.coverCaption}</figcaption>}</figure>
    <div className="showcase-body"><aside className="showcase-facts">{project.role && <div><h2>My role</h2><p>{project.role}</p></div>}<div><h2>Year</h2><p>{project.year}</p></div>{project.tools?.length > 0 && <div><h2>Tools</h2><p>{project.tools.join(" · ")}</p></div>}</aside><div className="showcase-story"><section className="detail-section"><h2>The project</h2><p>{project.overview || project.summary}</p></section><YouTubeEmbed url={project.youtubeUrl} title={project.title} caption={project.videoCaption} /><StorySections sections={project.sections} /><Gallery gallery={project.gallery} /></div></div>
  </article>;
}
