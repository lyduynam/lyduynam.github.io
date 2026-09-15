import { Suspense } from "react";
import PageHeading from "@/components/page-heading";
import ProjectGrid from "@/components/project-grid";
export const metadata = { title: "Projects" };
export default function ProjectsPage() {
  return <><PageHeading eyebrow="" title="Selected Projects" description="My work lies at the intersection of XR, AI, and HRI." /><Suspense fallback={<p className="loading-state">Loading projects…</p>}><ProjectGrid /></Suspense></>;
}
