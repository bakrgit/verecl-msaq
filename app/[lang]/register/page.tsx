import React from "react";
import RegisterFormComponent from "@/app/[lang]/register/components/register-form.component";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { SEOKeywords } from "@/utils/seo-keywords.util";
export async function generateMetadata({ params: { lang } }: any) {
  const dictionary = await getDictionary(lang);
  return {
    title: `${dictionary.SEO.registerpagetitle}`,
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
const RegisterPage = async ({ params: { lang } }: any) => {
  const dictionary = await getDictionary(lang);
  // this register pages -server component
  return (
    <>
      <RegisterFormComponent
        dictionary={dictionary}
        lang={lang}
      />
    </>
  );
};

export default RegisterPage;
