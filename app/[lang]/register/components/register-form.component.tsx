"use client";

import Link from "next/link";
import { useRegisterForm } from "@/app/[lang]/register/hooks/register.hook";
import { useRouter } from "next/navigation";

const RegisterFormComponent = ({ dictionary, lang }: any) => {
  // register hook
  const { register, handleSubmit, errors, onSubmit, isLoadingRegister } = useRegisterForm();
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50">
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
              router.push(`/${locale === "ar" ? "ar" : "en"}/register`);
            }}
            className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
          >
            <option value="en">{dictionary.common.english}</option>
            <option value="ar">{dictionary.common.arabic}</option>
          </select>
        </div>
        <h1 className="font-semibold tracking-normal"> {dictionary.auth.register_title}</h1>
        <p className="text-xs/4 font-light text-slate-500">{dictionary.auth.register_description}</p>
        <div className="pt-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2"
          >
            <div>
              <label className="block text-xs font-medium leading-7">{dictionary.auth.first_name}</label>
              <input
                placeholder={dictionary.auth.first_name as string}
                type="text"
                {...register("firstName", { required: dictionary.common.required })}
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
              {errors.firstName && <p className="text-sm font-bold italic text-red-500">{errors.firstName.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium leading-7">{dictionary.auth.last_name}</label>
              <input
                placeholder={dictionary.auth.last_name as string}
                type="text"
                {...register("lastName", { required: dictionary.common.required })}
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
              {errors.lastName && <p className="text-sm font-bold italic text-red-500">{errors.lastName.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-medium leading-7">{dictionary.auth.email}</label>
              <input
                placeholder={dictionary.auth.email as string}
                type="email"
                {...register("email", { required: dictionary.common.required })}
                className="w-full rounded-xl border-0 px-2.5 py-2 text-xs ring-1 ring-inset ring-slate-200 focus:outline-none focus:ring-blue-600"
              />
              {errors.email && <p className="text-sm font-bold italic text-red-500">{errors.email.message}</p>}
            </div>
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
                href={`/${lang}/login`}
                className="rounded-xl px-2 py-1.5 ring-offset-1 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
                {dictionary.auth.login}
              </Link>
              <button
                type="submit"
                disabled={isLoadingRegister}
                className="rounded-full bg-blue-600 px-2.5 py-2 text-white transition hover:bg-blue-700 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1"
              >
                {isLoadingRegister ? dictionary.common.submitting : dictionary.auth.register}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFormComponent;
