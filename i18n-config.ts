const locales = [{ locale: "en" }, { locale: "ar" }];
export const defaultLocale = "ar";

export const i18n = {
  defaultLocale,
  locales: locales.map((locale) => locale.locale)
} as const;

export type Locale = (typeof i18n)["locales"][number];
