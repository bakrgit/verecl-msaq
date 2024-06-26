"use serve";
import { UserLogin } from "@/types";
import { axiosBase } from "@/utils/axios";

// send userdata to login in server action
export const loginUser = async (prevState: string | undefined, body: UserLogin) => {
  try {
    const res = await axiosBase.post("auth/login", body);
    // if status is between 200 and 300 (success) return data
    if (res.status >= 200 && res.status < 300) {
      return {
        data: res.data
      };
    }
  } catch (error: any) {
    return {
      // if status is not between 200 and 300 (error) return error message
      error: error?.response?.data?.message
    };
  }
};
