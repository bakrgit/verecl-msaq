import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";
import { i18n, defaultLocale } from "@/i18n-config";

let headers = { "accept-language": "en-US,en;q=0.5" };
let languages = new Negotiator({ headers }).languages();

export function middleware(request: any) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;
  // Redirect if there is no locale
  const locale = match(languages, i18n.locales, defaultLocale);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)"
    // Optional: only run on root (/) URL
    // '/'
  ]
};
