import Link from "next/link";
import SafeImage from "@/components/safe-image";
import Icon from "@/components/icon";
export default function ProjectCard({ project }) {
  return <article className="project-card" data-project-type={project.type}>
    <Link href={`/projects/${project.slug}`} className="project-card-link">
      <div className="project-image">
        <SafeImage
          src={project.cover}
          alt={project.imageAlt || project.title}
        />

        {project.publications?.length > 0 && (
          <div className="card-venues">
            {project.publications.map((publication) => (
              <span className="card-venue" key={publication.Link || publication.Title}>
                {publication.Venue}
              </span>
            ))}
          </div>
        )}
        {
          project.note?
           <div className="card-venues">
            <span className="card-venue">
                {project.note}
              </span>
          </div>
          :null
        }

        <span className="project-open" aria-hidden="true">
          <Icon name="arrow-up-right" />
        </span>
      </div>      <div className="project-card-content"><div className="project-meta"><span>{project.type === "research" ? "Research" : "Other project"}</span><span>{project.year}</span></div><h2>{project.title}</h2><p>{project.summary}</p><div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
    </Link>
  </article>;
}
