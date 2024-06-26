import { fetcher } from "@/utils/fetcher.util";
import { createQueryString } from "@/utils/create-query-string.util";

export const getComments = async (body: any) => {
  const params = createQueryString(body);
  try {
    const res: any = await fetcher({
      url: `comments?${params}`
    });

    const data: any = await res.json();
    return data;
  } catch (error) {}
};
