"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "@/data/profile";
import Icon from "@/components/icon";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const toggle = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const next = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    setTheme(next);
  }, []);
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("theme", next);
    setTheme(next);
  }
  useEffect(() => {
    function onEscape(event) {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    }
    function onOutside(event) { if (!header.current?.contains(event.target)) setOpen(false); }
    document.addEventListener("keydown", onEscape);
    document.addEventListener("pointerdown", onOutside);
    return () => { document.removeEventListener("keydown", onEscape); document.removeEventListener("pointerdown", onOutside); };
  }, [open]);
  return <header className="site-header" ref={header}>
    <div className="container header-inner">
      <Link href="/" className="brand" aria-label="Duy-Nam Ly — Home" onClick={() => setOpen(false)}><span className="brand-mark" aria-hidden="true">n.</span><span>{profile.name}</span></Link>
      <button ref={toggle} className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} /></button>
      <nav id="main-navigation" className={`main-navigation${open ? " is-open" : ""}`} aria-label="Main navigation">
        {navigation.map(({ href, label, external }) => {
          const active = !external && (pathname === href || (href !== "/" && pathname.startsWith(`${href}/`)));
          return external
            ? <a key={href} href={href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>{label}</a>
            : <Link key={href} href={href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>;
        })}
        <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}><Icon name={theme === "dark" ? "sun" : "moon"} size={16} /><span>{theme === "dark" ? "Light" : "Dark"}</span></button>
      </nav>
    </div>
  </header>;
}
