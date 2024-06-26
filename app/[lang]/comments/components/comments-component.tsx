"use client";

import Link from "next/link";

import { useEffect, useState } from "react";
import { Comment, Comments } from "@/types";
import { useComments } from "@/app/[lang]/comments/hooks/comments.hook";
import CustomPagination from "@/components/pagination/pagination.component";
interface CommentsComponentProps {
  comments: Comments;
  searchParams: {
    skip: number;
    limit: number;
  };
  lang: string;
}
export default function CommentsComponent({ comments, searchParams, lang }: CommentsComponentProps) {
  const { comment, setComment, onSubmit, onPageChange, commentsData, loading, errorFetch } = useComments({
    comments,
    searchParams,
    lang
  });

  return (
    <main>
      <section className="bg-white py-8 antialiased dark:bg-gray-900 lg:py-16">
        <div className="mx-auto max-w-2xl px-4">
          <div className="mb-6 flex items-center justify-between">
            <Link
              className="text-lg font-bold"
              href="/"
            >
              الرئيسية
            </Link>
            <h2 className="text-lg font-bold text-gray-900 dark:text-white lg:text-2xl">{10}</h2>
          </div>
          <form
            onSubmit={onSubmit}
            className="mb-6"
          >
            <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-800">
              <label
                htmlFor="comment"
                className="sr-only"
              >
                تعليق
              </label>
              <textarea
                id="comment"
                onChange={(e) => {
                  setComment(e.target.value);
                }}
                value={comment}
                rows={6}
                className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                placeholder="Write a comment..."
                required
              />
              {/*{error && <p className="text-sm font-bold italic text-red-500">{error}</p>}*/}
            </div>
            <button
              type="submit"
              disabled={false}
              className="bg-primary-700 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 inline-flex items-center rounded-lg px-4 py-2.5 text-center text-xs font-medium text-white focus:ring-4"
            >
              {loading ? "جاري الإرسال..." : "إرسال التعليق"}
            </button>
          </form>
          {/*comment maps*/}
          {comments &&
            commentsData?.comments.map((comment: any) => (
              <article
                key={comment.id}
                className="rounded-lg bg-white p-6 text-base dark:bg-gray-900"
              >
                <h1 className="bg-black text-white">{comment.id}</h1>
                <footer className="mb-2 flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="mr-3 inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white">
                      {comment.user.fullName}
                    </p>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">{comment.body}</p>
              </article>
            ))}
          {/* <Pagination*/}
          {comments && commentsData?.comments?.length > 0 && (
            <CustomPagination
              pageCount={comments?.total / comments?.limit}
              onPageChange={onPageChange}
              currentPage={searchParams.skip / comments?.limit}
            />
          )}
        </div>
      </section>
    </main>
  );
}
