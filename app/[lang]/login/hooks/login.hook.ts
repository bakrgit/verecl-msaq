import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useTransition } from "react";
import { loginUser } from "@/server_actions/auth/login-action";
import { UserLogin } from "@/types";
// @ts-ignore
import { useFormState } from "react-dom";
import { useAuthContext } from "@/contextes/AuthContext";
import { useRouter } from "next/navigation";

interface IFormInput {
  username: string;
  password: string;
}
export const useLoginUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>();
  //transition to show loading state
  const [isLoadingLogin, startTransition] = useTransition();

  // server action for login
  // @ts-ignore
  const [loginStateResponse, loginUserAction] = useFormState(
    // @ts-ignore
    loginUser,
    null
  );
  const router = useRouter();
  // context for save and retrieve user data
  const { login, logout, user } = useAuthContext();
  const onSubmit: SubmitHandler<IFormInput> = async (data: UserLogin) => {
    startTransition(async () => await loginUserAction(data));
  };

  useEffect(() => {
    if (loginStateResponse?.data) {
      login(loginStateResponse?.data);
      toast.success("Login Success");
      router.push("/");
    }
    if (loginStateResponse?.error) {
      logout();
      toast.error(loginStateResponse.error);
    }
  }, [loginStateResponse]);
  // check if user is already logged in redirect to home page
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    loginStateResponse,
    isLoadingLogin
  };
};
