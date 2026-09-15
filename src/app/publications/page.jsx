import PageHeading from "@/components/page-heading";
import PublicationComponent from "@/components/publication-component";
import Icon from "@/components/icon";
import { publications } from "@/data/publications";
import { profile } from "@/data/profile";
import { groupByYear } from "@/lib/content";
export const metadata = { title: "Full Publications" };
export default function PublicationsPage() {
  const grouped = groupByYear(publications);
  return <>
    <PageHeading eyebrow="" title="Publications" description="Full peer-reviewed articles and conference papers."><a href={profile.links[0].href} className="button" target="_blank" rel="noreferrer">Google Scholar <Icon name="arrow-up-right" /></a></PageHeading>
    <div className="archive-toolbar"><p> <span>· * Equal contribution</span></p><nav aria-label="Publication years">{grouped.map(({ year }) => <a key={year} href={`#year-${year}`}>{year}</a>)}</nav></div>
    <div className="publication-archive">{grouped.map(({ year, entries }) => <section className="archive-year" key={year} aria-labelledby={`year-${year}`}><h2 className="year-label" id={`year-${year}`}>{year}</h2><div className="publication-list">{entries.map(publication => <PublicationComponent key={publication.Link || publication.Title} publication={publication} />)}</div></section>)}</div>
  </>;
}
