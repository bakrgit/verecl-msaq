"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Comment, Comments } from "@/types";
import { getComments } from "@/app/[lang]/comments/api/get-comments.api";

interface CommentsContextType {
  commentsData: Comments | any;
  loading: boolean;
  errorFetch: Error | null;
  fetchComments: (page: number, limit: number) => Promise<void>;
  addComment: (comment: Comment) => void;
}

const CommentsContext = createContext<CommentsContextType | undefined>(undefined);

export const CommentsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [commentsData, setCommentsData] = useState<Comments | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorFetch, setError] = useState<Error | null>(null);

  const fetchComments = async (skip: number = 0, limit: number = 5) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://dummyjson.com/comments?skip=${skip}&limit=${limit}`);
      const data: Comments = await response.json();

      setCommentsData((prevData) => data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  const addComment = (comment: Comment) => {
    setCommentsData((prevState) => {
      if (!prevState) return null;
      return {
        ...prevState,
        comments: [comment, ...prevState.comments],
        total: Number(prevState.total) + 1
      };
    });
  };

  return (
    <CommentsContext.Provider value={{ commentsData, loading, errorFetch, fetchComments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
};

export const useCommentsContext = (): CommentsContextType => {
  const context = useContext(CommentsContext);
  if (context === undefined) {
    throw new Error("useCommentsContext must be used within a CommentsProvider");
  }
  return context;
};
