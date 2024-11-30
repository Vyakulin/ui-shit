import localFont from "next/font/local";
import "./globals.css";
import { Header, Footer } from "./components/blocks";
import "./adaptive.css"

const sft = localFont({
  src: './fonts/SF-Pro-Text-Regular.otf',
  variable: '--sft',
});
const sfdb = localFont({
  src: './fonts/SF-Pro-Display-Bold.otf',
  variable: '--sfdb',
});
const sfdsb = localFont({
  src: './fonts/SF-Pro-Display-Semibold.otf',
  variable: '--sfdsb',
});
const sfdm = localFont({
  src: './fonts/SF-Pro-Display-Medium.otf',
  variable: '--sfdm',
});

export const metadata = {
  title: "ui-shit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sfdb.variable} ${sfdsb.variable} ${sfdm.variable} ${sft.variable}`}>
        <div className="all">
          <Header />
          {children}
        </div>
        <Footer />
        <div id="alerts"></div>
      </body>
    </html>
  );
}
