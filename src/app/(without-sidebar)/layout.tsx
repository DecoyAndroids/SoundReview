import "~/styles/globals.scss";
import { Ubuntu} from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { AuthCheckerOnLayout } from "~/app/actions/authCheckerOnLayout";
import { type Metadata } from "next";
const ubuntu = Ubuntu({subsets:['cyrillic'], weight:['300','400','500','700'], variable: '--font-ubuntu',})

export const metadata: Metadata = {
  title: "Просто услышь",
  description: "Главная страница",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {


  
  return (
    <html lang="en" className={`${ubuntu.variable}`}>
      <body className="font-ubuntu">
        <AuthCheckerOnLayout/>
        <SpeedInsights/>
        <Analytics/>
        {children}
      </body>
      
    </html>
  );
}
