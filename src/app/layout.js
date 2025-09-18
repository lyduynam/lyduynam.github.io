import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/header";
import CoverImage from "../components/cover-image";
import Menu from "../components/menu";
import MenuMobile from "@/components/menu-mobile";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nam's Portfolio",
  description: "Duy-Nam Ly's Portfolio",
  icons: {
    icon: "/favicon.svg", // or .png, .svg
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <CoverImage />
        <div className="main-container">
          <div className="flex sm:flex-row flex-col-reverse sm:space-x-24  justify-between  mt-[4em]  h-full px-24">
            <div className="w-full sm:w-[20%]  ">
              <Menu />
            </div>
            <div className="w-full sm:w-[65%]  ">
              {children}
            </div>
            <div className="w-full sm:w-[15%]  ">
              <div className="sm:hidden block  ">
                <MenuMobile />
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
