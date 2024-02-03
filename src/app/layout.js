import { Inter } from "next/font/google";
import Script from "next/script"
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar";
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Parvez Rabbi | Portfolio site of Web Development",
  description: "Front End Web Developer | Web Developer | MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>

        <div id="gap">
          <Navbar />
          {children}
          <Footer />
        </div>

        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></Script>
      </body>
    </html>
  );
}
