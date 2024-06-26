import axios from "axios";

export const axiosBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT
});

axiosBase.interceptors.request.use(
  async (config: any) => {
    const session: any = undefined;
    if (typeof window) {
      config.headers = {
        "Accept-Language": "en",
        ...config.headers
      };
      if (session) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${session?.user?.token}`
        };
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
