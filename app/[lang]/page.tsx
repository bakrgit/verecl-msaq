import HomeComponent from "@/components/home/home.component";
import { getDictionary } from "./dictionaries";

interface HomePageProps {
  params: { lang: string };
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
