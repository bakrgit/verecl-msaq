import HomeComponent from "@/components/home/home.component";
import { getDictionary } from "./dictionaries";
import { SEOKeywords } from "@/utils/seo-keywords.util";

interface HomePageProps {
  params: { lang: string };
}

export async function generateMetadata({ params: { lang } }: HomePageProps) {
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
const HomePage = async ({ params: { lang } }: HomePageProps) => {
  const dictionary = await getDictionary(lang);

  //this main pages - server component
  return (
    <>
      <HomeComponent
        dictionary={dictionary}
        lang={lang}
      />
    </>
  );
};

export default HomePage;
