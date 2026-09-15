import { profile } from "@/data/profile";
import Icon from "@/components/icon";
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-inner">
    <p>© {new Date().getFullYear()} {profile.name}</p>
    <a href={`mailto:${profile.email}`}><Icon name="mail" size={16} />{profile.email}</a>
    <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
  </div></footer>;
}
