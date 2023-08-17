import "./globals.css";

import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
import "react-toastify/dist/ReactToastify.css";
import QueryProvider from "@/components/QueryProvider";
import ReactQueryDev from "@/components/ReactQueryDev";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aamir Khan",
  description:
    "I can help you build a product , feature or website Look through some of my work and experience!",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <Script src='https://smtpjs.com/v3/smtp.js'></Script>
      </head>
      <QueryProvider>
        <Provider>
          <body className={inter.className}>{children}</body>
          <Analytics />
        </Provider>
        <ReactQueryDev />
      </QueryProvider>
    </html>
  );
}
