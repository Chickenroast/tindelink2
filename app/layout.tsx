import Navbarr from "./components/navbar/Navbar";
import "./globals.css";

import { GeistSans } from "geist/font/sans";

let title = "Tindelink";
let description = "This is a application for meet your job";

export const metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>
        <div className="flex flex-col space-y-20 bg-black">
          <div>
            <Navbarr />
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
