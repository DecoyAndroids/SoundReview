'client-only'
import "axios/styles/globals.scss";

import { Ubuntu, Ubuntu_Mono, Ubuntu_Sans } from "next/font/google";
import { type Metadata } from "next";

const ubuntu = Ubuntu({subsets:['cyrillic'], weight:['300','400','500','700'], variable: '--font-ubuntu',})

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
        {children}
    </div>
  );
}
