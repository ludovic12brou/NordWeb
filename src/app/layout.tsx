import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NordWeb - Votre Partenaire Web de Confiance",
  description: "NordWeb - Solutions professionnelles de création et gestion de sites web pour entreprises. Transformez votre présence en ligne avec notre expertise.",
  keywords: "création site web, gestion site web, développement web, design web, site web professionnel, entreprise web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased bg-[#091E30] text-gray-100 font-primary`}
      >
        {children}
      </body>
    </html>
  );
}
