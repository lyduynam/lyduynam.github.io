import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { ResearchDetail, ShowcaseDetail } from "@/components/project-detail";
import Icon from "@/components/icon";

export const dynamicParams = false;
export function generateStaticParams() { return projects.map(project => ({ slug: project.slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.summary, openGraph: { title: project.publication?.Title || project.title, description: project.summary, type: "article" } };
}
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <div className="project-detail-page"><Link className="back-link" href="/projects"><Icon name="arrow-left" size={16} />All projects</Link>{project.type === "research" ? <ResearchDetail project={project} /> : <ShowcaseDetail project={project} />}<div className="detail-bottom"><p>Keep exploring</p><Link className="text-link" href="/projects">Back to all projects <Icon name="arrow-right" /></Link></div></div>;
}
