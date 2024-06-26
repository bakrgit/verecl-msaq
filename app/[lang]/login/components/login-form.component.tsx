"use client";
import Link from "next/link";
import { useLoginUser } from "@/app/[lang]/login/hooks/login.hook";
import { useRouter } from "next/navigation";

export const LoginFormComponent = ({ dictionary, lang }: any) => {
  // move all login logic separate hook
  const { register, handleSubmit, errors, onSubmit, isLoadingLogin } = useLoginUser();
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
      <div className="bg-amber-100">
        <p className="text-red-600">username: &apos;emilys&apos;, password: &apos;emilyspass&apos;,</p>
      </div>
      <div className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl">
        <Link
          className="text-lg font-bold"
          href="/"
        >
          {dictionary.common.home}
        </Link>
        <div className="mb-2">
          <label className="block text-sm font-semibold leading-7">{dictionary.common.select_language}</label>
          <select
            value={lang}
            onChange={async (e) => {
              const locale = e.target.value;
              router.push(`/${locale === "ar" ? "ar" : "en"}/login`);
            }}
            className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
          >
            <option value="en">{dictionary.common.english}</option>
            <option value="ar">{dictionary.common.arabic}</option>
          </select>
        </div>
        <h1 className="font-semibold tracking-normal">{dictionary.auth.login}</h1>
        <p className="text-xs/4 font-light text-slate-500">{dictionary.auth.login_description}</p>
        <div className="pt-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2"
          >
            <div>
              <label className="block text-xs font-medium leading-7">{dictionary.auth.username}</label>
              <input
                placeholder={dictionary.auth.username as string}
                type="text"
                {...register("username", { required: dictionary.common.required })}
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
              {errors.username && <p className="text-sm font-bold italic text-red-500">{errors.username.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium leading-7">{dictionary.auth.password}</label>
              <input
                placeholder={dictionary.auth.password as string}
                type="password"
                {...register("password", { required: dictionary.common.required })}
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
              {errors.password && <p className="text-sm font-bold italic text-red-500">{errors.password.message}</p>}
            </div>
            {/*{errors.global && <p className="text-sm font-bold italic text-red-500">{errors.global}</p>}*/}
            <div className="flex justify-between text-xs focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1">
              <Link
                href={`/${lang}/register`}
                className="rounded-xl px-2 py-1.5 ring-offset-1 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
                {dictionary.auth.register_title}
              </Link>
              <button
                type="submit"
                disabled={isLoadingLogin}
                className="rounded-full bg-blue-600 px-2.5 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1"
              >
                {isLoadingLogin ? dictionary.common.submitting : dictionary.auth.login}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
