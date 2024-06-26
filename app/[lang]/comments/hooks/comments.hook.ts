"use client";
import { useEffect, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useCommentsContext } from "@/contextes/CommentsContext";
import { createQueryString } from "@/utils/create-query-string.util";
import { Comments } from "@/types";
import { useAuthContext } from "@/contextes/AuthContext";
import { toast } from "react-toastify";

interface CommentsComponentProps {
  comments: Comments;
  searchParams: {
    skip: number;
    limit: number;
  };
  lang: string;
}

export const useComments = ({ comments, searchParams, lang }: CommentsComponentProps) => {
  const [comment, setComment] = useState("");
  const { commentsData, loading, errorFetch, fetchComments, addComment } = useCommentsContext();
  const { user } = useAuthContext();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!comments) toast.error("You must login to add a comment");
    addComment({
      id: commentsData ? commentsData.total + 1 : 1,
      body: comment,
      postId: 1999,
      likes: 200,
      user: {
        fullName: "mohamed",
        id: 1,
        username: "mohamed_32"
      }
    });
    setComment("");
  };
  const router = useRouter();
  useEffect(() => {
    fetchComments(searchParams.skip || 0, comments?.limit || 5);
  }, []);
  // when user click on pagination
  const onPageChange = (page: { selected: number }) => {
    let pageSelected = page.selected + 1;
    let commentsLimit = comments.limit;
    const body = {
      limit: comments.limit,
      skip: pageSelected === 1 ? 0 : pageSelected * commentsLimit
    };
    const params = createQueryString(body);
    fetchComments(body.skip, 5).then((r) => r);
    router.push(`/${lang}/comments?${params}`);
  };

  return {
    comment,
    setComment,
    onSubmit,
    onPageChange,
    commentsData,
    loading,
    errorFetch
  };
};
