import Link from "next/link";
import Icon from "@/components/icon";
export default function NotFound() {
  return <div className="not-found"><p className="eyebrow">404 · Page not found</p><h1>A little off the path.</h1><p>This page may have moved, or the project link is no longer available.</p><Link className="button primary" href="/projects">Explore projects <Icon name="arrow-right" /></Link><Link className="text-link" href="/">Back to home</Link></div>;
}
