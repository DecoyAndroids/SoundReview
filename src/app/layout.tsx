'use client'
import "axios/styles/globals.scss";

import { Ubuntu} from "next/font/google";
import { type Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Sidebar } from "axios/components/sidebar/sidebar";
import { useAuthStore } from "axios/store/authStore";
import { useEffect } from "react";

const ubuntu = Ubuntu({subsets:['cyrillic'], weight:['300','400','500','700'], variable: '--font-ubuntu',})

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  useEffect(() => {
    checkAuth(); // Загружаем пользователя при старте
  }, [checkAuth]);
  return (
    <html lang="en" className={`${ubuntu.variable}`}>
      <body className="font-ubuntu">
        <Sidebar/>
        <SpeedInsights/>
        <Analytics/>
        {children}
      </body>
      
    </html>
  );
}
