import localFont from "next/font/local";
import "./globals.css";

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
        {children}
      </body>
      <script> 
        function hasTouch() {
  return 'ontouchstart' in document.documentElement
         || navigator.maxTouchPoints > 0
         || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) { // remove all the :hover stylesheets
  try { // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
      <script/>
    </html>
  );
}
