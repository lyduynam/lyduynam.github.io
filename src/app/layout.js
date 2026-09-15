import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: { default: "Duy-Nam Ly · HCI & XR Researcher", template: "%s | Duy-Nam Ly" },
  description: "Duy-Nam Ly (Nam) — research and projects in Human-Computer Interaction, extended reality, and intelligent user interfaces.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body id="top">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header />
    <main id="main-content" className="container main-content" tabIndex={-1}>{children}</main>
    <Footer />
  </body></html>;
}
