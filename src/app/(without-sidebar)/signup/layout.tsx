'client-only'
import "~/styles/globals.scss";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Просто услышь",
  description: "Вход в аккаунт",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="grow">
        {children}
    </div>
  );
}

