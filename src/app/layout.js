/* eslint-disable new-cap */
import "../../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
// eslint-disable-next-line camelcase
import { Russo_One, Monda, Press_Start_2P } from "next/font/google";
// eslint-disable-next-line camelcase
const russo = Russo_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-russo",
});

const monda = Monda({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-monda",
});

const start = Press_Start_2P({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-start",
});

export const metadata = {
  title: "GAMESPAWN UCR",
  description: "Gamespawn Official Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${russo.variable} ${monda.variable} ${start.variable}`}>
        <Navigation />
        <div className="pt-[6vh]"> {children}</div>
        <Footer />
      </body>
    </html>
  );
}
