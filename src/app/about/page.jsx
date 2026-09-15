import Link from "next/link";
import PageHeading from "@/components/page-heading";
import Icon from "@/components/icon";
import { profile, interests, education, experience, skills, academicActivities, otherActivities } from "@/data/profile";
export const metadata = { title: "About Me" };
const sections = [ ["research-interests", "Research interests"], ["education", "Education"], ["experience", "Experience"], ["skills", "Skills"], ["academic-activities", "Academic activities"], ["other-activities", "Other activities"] ];
function Timeline({ items }) {
  return <div className="timeline">{items.map((item, index) => <article className="timeline-item" key={`${item.title}-${index}`}><div className="timeline-heading"><h3>{item.title}</h3><span>{item.period}</span></div><p className="timeline-organization">{item.organization}</p>{item.details?.map(detail => <p key={detail} className="timeline-detail">{detail}</p>)}{item.href && <Link href={item.href} className="text-link">View publications <Icon name="arrow-right" size={15} /></Link>}</article>)}</div>;
}
export default function AboutPage() {
  return <>
    <PageHeading eyebrow="" title="About me" description={profile.bio}><div className="profile-links">{profile.links.map(link => <a key={link.label} className="text-link muted-link" href={link.href} target="_blank" rel="noreferrer">{link.label} <Icon name="arrow-up-right" size={14} /></a>)}{profile.cv && <a className="text-link muted-link" href={profile.cv} target="_blank" rel="noreferrer">CV <Icon name="file" size={14} /></a>}</div></PageHeading>
    <div className="about-layout"><aside className="about-sidebar"><nav aria-label="About me sections"><p className="eyebrow">On this page</p>{sections.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav></aside><div className="about-content">
      <section className="about-section" id="research-interests"><h2>Research interests</h2><div className="interest-list">{interests.map((interest, index) => <article key={interest.short}><span className="interest-number">0{index + 1}</span><div><h3>{interest.title}</h3><p>{interest.description}</p></div></article>)}</div></section>
      <section className="about-section" id="education"><h2>Education</h2><Timeline items={education} /></section>
      <section className="about-section" id="experience"><h2>Experience</h2><Timeline items={experience} /></section>
      <section className="about-section" id="skills"><h2>Skills</h2><div className="skill-groups">{skills.map(group => <div key={group.title}><h3>{group.title}</h3><div className="tags">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div></section>
      <section className="about-section" id="academic-activities"><h2>Academic activities</h2>{academicActivities.length ? <Timeline items={academicActivities} /> : <p className="empty-note">Academic activities will be added here.</p>}</section>
      <section className="about-section" id="other-activities"><h2>Other activities</h2>{otherActivities.length ? <Timeline items={otherActivities} /> : <p className="empty-note">More from outside my research, coming soon.</p>}</section>
    </div></div>
  </>;
}
