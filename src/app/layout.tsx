'use client'
import "~/styles/globals.scss";

import { Ubuntu} from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { Sidebar } from "~/components/sidebar/sidebar";
import { useAuthStore } from "~/store/authStore";
import { useEffect } from "react";

const ubuntu = Ubuntu({subsets:['cyrillic'], weight:['300','400','500','700'], variable: '--font-ubuntu',})

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  useEffect(()  => {
    const fetchData = async () => {
      await checkAuth(); // Загружаем пользователя при старте
    }
    void fetchData()
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
