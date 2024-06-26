import { LoginFormComponent } from "@/app/[lang]/login/components/login-form.component";
import React from "react";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { SEOKeywords } from "@/utils/seo-keywords.util";

interface LoginPageProps {
  params: { lang: string };
}
export async function generateMetadata({ params: { lang } }: LoginPageProps) {
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
const LoginPage = async ({ params: { lang } }: LoginPageProps) => {
  const dictionary = await getDictionary(lang);

  // this login pages -server component
  return (
    <>
      <LoginFormComponent
        dictionary={dictionary}
        lang={lang}
      />
    </>
  );
};

export default LoginPage;
