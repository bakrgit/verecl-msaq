import "server-only";

const dictionaries: any = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default)
};
export const getDictionary = async (locale: string) => dictionaries[locale]();
