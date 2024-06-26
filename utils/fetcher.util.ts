import { cookies } from "next/headers";

export const fetcher = async ({ url, options, method = "Get" }: { url: string; options?: any; method?: string }) => {
  const cookieStore = cookies();
  // @ts-ignore
  const userCookie = cookieStore.get("user") ? JSON.parse(cookieStore.get("user").value) : null;
  if (!userCookie) {
    return;
  }
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}${url}` as string, {
    method,
    headers: {
      ...options?.headers,
      Authorization: "Bearer " + userCookie?.token || ""
    },
    ...options
  });
};
