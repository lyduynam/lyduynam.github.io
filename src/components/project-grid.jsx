"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { projects, projectTags } from "@/data/projects";
import { filterProjects } from "@/lib/project-filters";
import ProjectCard from "@/components/project-card";
import Icon from "@/components/icon";
export default function ProjectGrid() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const type = params.get("type") || "all";
  const tag = params.get("tag") || "all";
  const query = params.get("q") || "";
  function setFilter(key, value) {
    const next = new URLSearchParams(params.toString());
    if (!value || value === "all") next.delete(key); else next.set(key, value);
    // Native history integrates with Next navigation and avoids a server
    // round-trip while typing. Reloads and copied URLs retain the filters.
    window.history.replaceState(null, "", `${pathname}${next.size ? `?${next}` : ""}`);
  }
  function reset() { startTransition(() => router.replace(pathname, { scroll: false })); }
  const filtered = filterProjects(projects, { type, tag, query });
  const hasFilters = type !== "all" || tag !== "all" || query !== "";
  return <div>
    <div className="project-toolbar"><div className="type-filters" role="group" aria-label="Project type">{[["all", "All work"], ["research", "Research"], ["other", "Other"]].map(([value, label]) => <button key={value} type="button" aria-pressed={type === value} onClick={() => setFilter("type", value)}>{label}<span>{value === "all" ? projects.length : projects.filter(project => project.type === value).length}</span></button>)}</div><label className="project-search"><Icon name="search" size={17} /><span className="sr-only">Search projects</span><input type="search" value={query} onChange={event => setFilter("q", event.target.value)} placeholder="Search projects…" autoComplete="off" /></label></div>
    <div className="topic-filters" role="group" aria-label="Filter projects by tag"><span className="filter-label">Topics</span><button type="button" aria-pressed={tag === "all"} onClick={() => setFilter("tag", "all")}>All topics</button>{projectTags.map(topic => <button key={topic} type="button" aria-pressed={tag === topic} onClick={() => setFilter("tag", tag === topic ? "all" : topic)}>{topic}</button>)}</div>
    <div className="results-bar"><p role="status" aria-live="polite">{filtered.length} {filtered.length === 1 ? "project" : "projects"}{tag !== "all" ? ` · ${tag}` : ""}</p>{hasFilters && <button type="button" className="text-button" onClick={reset}>Clear filters <Icon name="close" size={13} /></button>}</div>
    <div aria-busy={pending}>{filtered.length ? <div className="project-grid">{filtered.map(project => <ProjectCard key={project.slug} project={project} />)}</div> : <div className="empty-state"><Icon name="search" size={30} /><h2>No projects found</h2><p>Try another topic or a different search term.</p><button type="button" className="button" onClick={reset}>Clear filters</button></div>}</div>
  </div>;
}
