import Link from "next/link";
import SafeImage from "@/components/safe-image";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card" data-project-type={project.type}>
      <Link href={`/projects/${project.slug}`} className="project-card-link">
        <div className="project-image">
          <SafeImage src={project.cover} alt={project.imageAlt || project.title} />
        </div>
        <div className="project-card-content">
          <div className="project-meta"><span>{project.note && <span className="">{project.note}</span>}</span></div>
          <h2>{project.title}</h2>
        
        </div>
      </Link>
    </article>
  );
}
