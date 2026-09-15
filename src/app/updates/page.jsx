import PageHeading from "@/components/page-heading";
import UpdateList from "@/components/update-list";
import { updates } from "@/data/updates";
import { groupByYear } from "@/lib/content";
export const metadata = { title: "Updates" };
export default function UpdatesPage() {
  return <>
    <PageHeading eyebrow="" title="Updates" description="Achievements and news from my research and beyond." />
    <div className="archive-layout">{groupByYear(updates, "date").map(({ year, entries }) => <section className="archive-year" key={year} aria-labelledby={`year-${year}`}><h2 className="year-label" id={`year-${year}`}>{year}</h2><UpdateList items={entries} /></section>)}</div>
  </>;
}
