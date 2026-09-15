export function filterProjects(projects, { type = "all", tag = "all", query = "" } = {}) {
  const term = query.toLowerCase().trim();
  return [...projects]
    .sort((a, b) => Number(b.year) - Number(a.year))
    .filter(project =>
      (type === "all" || project.type === type) &&
      (tag === "all" || project.tags.includes(tag)) &&
      [project.title, project.summary, project.year, ...(project.publications || [project.publication]).filter(Boolean).flatMap(publication => [publication.Title, publication.Venue]), ...project.tags].join(" ").toLowerCase().includes(term)
    );
}
