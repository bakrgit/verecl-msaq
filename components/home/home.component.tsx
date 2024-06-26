"use client";
import Link from "next/link";
import { useAuthContext } from "@/contextes/AuthContext";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contextes/ThemeContext";
import { useEffect, useState } from "react";

export default function HomeComponent({ dictionary, lang }: any) {
  const { logout, user } = useAuthContext();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  // Prevent rendering on the server
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <main>
      <button
        className="rounded bg-black px-4 py-2 text-white dark:bg-white dark:text-black"
        onClick={toggleTheme}
      >
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <br />
      {lang === "en" ? (
        <button
          onClick={() => router.push(`/ar`)}
          className="group relative border-2 bg-pink-400 p-2"
        >
          {dictionary.common.arabic}
        </button>
      ) : (
        <button
          className="group relative border-2 bg-pink-400 p-2"
          onClick={() => router.push(`/en`)}
        >
          {dictionary.common.english}
        </button>
      )}
      <br />
      <code>
        {user ? "auth user" : "not auth user"}
        <pre>
          {JSON.stringify(
            {
              email: user?.email,
              username: user?.username,
              firstName: user?.firstName,
              lastName: user?.lastName,
              id: user?.id
            },
            null,
            2
          )}
        </pre>
      </code>
      {user ? (
        <button
          onClick={() => logout()}
          className="group relative m-1  rounded bg-red-700 p-2 text-white"
        >
          {dictionary.auth.logout}
        </button>
      ) : (
        <Link
          href={`/${lang}/login`}
          className="m-1 rounded bg-green-700 p-2 text-white"
        >
          {dictionary.auth.login}
        </Link>
      )}
      <br />
      <Link
        className="m-1 rounded bg-blue-700 p-2 text-white dark:bg-black"
        href="/comments"
      >
        {dictionary.comments.comments}
      </Link>
      <br />
      <br />
      <Link
        className="m-1 rounded bg-red-700 p-2 text-white dark:bg-black"
        href="/finance-dashboard"
      >
        {dictionary.common.new_design}
      </Link>
    </main>
  );
}
