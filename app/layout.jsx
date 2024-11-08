import "./globals.css";
import localFont from 'next/font/local';

const sfPro = localFont({
  src: [
    {
      path: './fonts/SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'display',
    },
    {
      path: './fonts/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'display',
    },
    {
      path: './fonts/SF-Pro-Display-Semibold.otf',
      weight: '600',
      style: 'display',
    },
    {
      path: './fonts/SF-Pro-Text-Regular.otf',
      weight: '400',
      style: 'text',
    },
  ],
});

export const metadata = {
  title: "ui-shit",
  description: "ui library of shit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sfPro.className}>
        {children}
      </body>
    </html>
  );
}
