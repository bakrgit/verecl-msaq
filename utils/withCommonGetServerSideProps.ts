// import { GetServerSidePropsContext } from "next";
// import { GetServerSidePropsResult } from "next/types";
//
// import { getServerSession } from "next-auth";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";
//
// import i18nextConfig from "@/next-i18next.config.js";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { AppStore, storeWrapper } from "@/store";
// import { setAccessToken } from "@/store/slices/app-slice";
//
// interface ExtendedGetServerSidePropsContext extends GetServerSidePropsContext {
//   store: AppStore;
//   accessToken: string | null;
// }
//
// export function withCommonGetServerSideProps(
//   namespaces: string[],
//   getServerSidePropsFunc?: (
//     context: ExtendedGetServerSidePropsContext
//   ) => GetServerSidePropsResult<any> | Promise<GetServerSidePropsResult<any>>
// ) {
//   return storeWrapper.getServerSideProps((store) => async (context) => {
//     const { req, res, locale } = context;
//
//     const session = await getServerSession(req, res, authOptions);
//     const accessToken = session?.access_token ?? null;
//
//     store.dispatch(setAccessToken(accessToken));
//
//     const prefLocale = req.cookies.NEXT_LOCALE as string | undefined;
//
//     const appLocale = prefLocale ?? locale ?? i18nextConfig.i18n.defaultLocale;
//
//     res.setHeader("Set-Cookie", [
//       `NEXT_LOCALE=${appLocale}; Path=/; SameSite=Strict;${process.env.NODE_ENV === "production" ? " Secure;" : ""}`
//     ]);
//
//     const locales = {
//       ...(await serverSideTranslations(appLocale, namespaces, i18nextConfig, ["ar", "en"]))
//     };
//
//     if (getServerSidePropsFunc) {
//       const additionalProps = await getServerSidePropsFunc({
//         ...context,
//         store,
//         accessToken
//       });
//
//       if (typeof additionalProps === "object" && "props" in additionalProps && additionalProps) {
//         return {
//           props: {
//             ...locales,
//             ...additionalProps.props
//           }
//         };
//       }
//
//       return additionalProps;
//     }
//
//     return {
//       props: {
//         ...locales
//       }
//     };
//   });
// }
