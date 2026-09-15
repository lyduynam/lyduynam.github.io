import Link from "next/link";
import { profile } from "@/data/profile";
import { updates } from "@/data/updates";
import { publications } from "@/data/publications";
import { newestFirst } from "@/lib/content";
import SafeImage from "@/components/safe-image";
import Icon from "@/components/icon";
import UpdateList from "@/components/update-list";
import PublicationComponent from "@/components/publication-component";

export default function Home() {
  return <div className="home-page">
    <section className="home-intro" aria-labelledby="intro-title">
      <div className="intro-copy"><p className="eyebrow">HCI · Extended Reality · Intelligent Interfaces</p>
        <h1 id="intro-title">Hi, I’m <span>Nam.</span></h1>
        <p className="intro-affiliation">{profile.role} at {profile.institution}</p>
        <p className="intro-bio">{profile.bio}</p>
        <div className="intro-links"><Link className="text-link" href="/about">More about me <Icon name="arrow-right" size={16} /></Link><span className="link-divider" aria-hidden="true" />{profile.links.map(link => <a key={link.label} className="text-link muted-link" href={link.href} target="_blank" rel="noreferrer">{link.label} <Icon name="arrow-up-right" size={14} /></a>)}{profile.cv && <a className="text-link muted-link" href={profile.cv} target="_blank" rel="noreferrer">CV <Icon name="file" size={14} /></a>}</div>
      </div>
      <div className="intro-profile"><SafeImage src={profile.avatar} fallback="/images/profile-monogram.svg" alt={profile.avatar.endsWith("profile-monogram.svg") ? "Nam’s initials" : "Duy-Nam Ly"} className="profile-avatar" width={200} height={200} eager /><p>{profile.name}</p><span>Research. Build. Explore.</span></div>
    </section>
    <section className="home-section" aria-labelledby="recent-updates-title"><div className="section-heading"><h2 id="recent-updates-title">Recent updates</h2><Link className="text-link" href="/updates">All updates <Icon name="arrow-right" size={16} /></Link></div><UpdateList items={newestFirst(updates, "date").slice(0, 3)} compact /></section>
    <section className="home-section" aria-labelledby="recent-publications-title"><div className="section-heading"><h2 id="recent-publications-title">Recent publications</h2><Link className="text-link" href="/publications">Full publications <Icon name="arrow-right" size={16} /></Link></div><div className="recent-publications">{newestFirst(publications).slice(0, 3).map(publication => <PublicationComponent key={publication.Link || publication.Title} publication={publication} compact />)}</div></section>
  </div>;
}
