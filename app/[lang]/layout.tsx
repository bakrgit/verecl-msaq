import React from "react";
import "./globals.css";
import { ToastProvider } from "@/contextes";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/contextes/AuthContext";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { SEOKeywords } from "@/utils/seo-keywords.util";
import { CommentsProvider } from "@/contextes/CommentsContext";
import { ThemeProvider } from "@/contextes/ThemeContext";

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: string };
}

export async function generateMetadata({ params: { lang } }: RootLayoutProps) {
  const dictionary = await getDictionary(lang);
  return {
    title: `${dictionary.SEO.title}`,
    description: "شركه مساق",
    keywords: SEOKeywords,
    openGraph: {
      title: "تجربه",
      locale: lang === "en" ? "en-US" : "ar_EG",
      type: "website",
      description: "تست",
      images: [
        {
          url: "/assets/images/Logo.jpg",
          alt: "Logo"
        }
      ]
    },
    twitter: {
      title: "تجربه",
      images: [{ url: "/assets/images/Logo.jpg" }],
      description: `تجربه`,
      card: "summary_large_image"
    }
  };
}
const RootLayout: React.FC<RootLayoutProps> = ({ children, params: { lang } }) => {
  return (
    <html lang={lang}>
      <body>
        <ThemeProvider>
          <AuthProvider>
            <CommentsProvider>
              <ToastProvider dir={lang === "ar" ? "rtl" : "ltr"}>
                <main>{children}</main>
              </ToastProvider>
            </CommentsProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
