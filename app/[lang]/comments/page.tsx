import React from "react";
import CommentsComponent from "@/app/[lang]/comments/components/comments-component";
import { getComments } from "@/app/[lang]/comments/api/get-comments.api";
import { Comment, Comments } from "@/types";
import Cookies from "js-cookie";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { SEOKeywords } from "@/utils/seo-keywords.util";

interface Props {
  searchParams: {
    skip: number;
    limit: number;
  };
  params: {
    lang: string;
  };
}
export async function generateMetadata({ params: { lang } }: any) {
  const dictionary = await getDictionary(lang);
  return {
    title: `مساق - تعليقات`,
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
const CommentsPage = async ({ searchParams, params: { lang } }: Props) => {
  // get comments from the server and revalidate when add new comment
  const comments: Comments = await getComments({
    skip: searchParams.skip || 0,
    limit: searchParams.limit || 5
  });
  // this comments pages -server component
  return (
    <>
      <CommentsComponent
        comments={comments}
        searchParams={searchParams}
        lang={lang}
      />
    </>
  );
};

export default CommentsPage;
