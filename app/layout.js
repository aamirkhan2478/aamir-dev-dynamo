import "./globals.css";

import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
import "react-toastify/dist/ReactToastify.css";
import QueryProvider from "@/components/QueryProvider";
import ReactQueryDev from "@/components/ReactQueryDev";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aamir Khan",
  description:
    "I can help you build a product , feature or website Look through some of my work and experience!",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <QueryProvider>
        <Provider>
          <body className={inter.className}>{children}</body>
        </Provider>
        <ReactQueryDev />
      </QueryProvider>
    </html>
  );
}
