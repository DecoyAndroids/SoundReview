'client-only'
import "~/styles/globals.scss";


import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Просто услышь",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex grow ">
        {children}
    </div>
  );
}
