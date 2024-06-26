import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useEffect, useState, useTransition } from "react";
// @ts-ignore
import { useFormState } from "react-dom";
import { loginUser } from "@/server_actions/auth/login-action";
import { useAuthContext } from "@/contextes/AuthContext";
import { useRouter } from "next/navigation";

interface IFormInput {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<IFormInput>();
  //transition to show loading state
  const [isLoadingRegister, startTransition] = useTransition();
  // server action for simulate register
  // @ts-ignore
  const [registerStateResponse, registerUserAction] = useFormState(
    // @ts-ignore
    loginUser,
    null
  );
  const router = useRouter();

  // context for save and retrieve user data
  const { login, logout, user } = useAuthContext();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { username, password, firstName, lastName, email } = data;

    // Perform validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      setError("email", { type: "manual", message: "Email is invalid" });
      return;
    }
    startTransition(async () => await registerUserAction({ username: "michaelw", password: "michaelwpass" }));
  };
  useEffect(() => {
    if (registerStateResponse?.data) {
      login(registerStateResponse?.data);
      toast.success("Register Success");
      router.push("/");
    }
    if (registerStateResponse?.error) {
      logout();
      toast.error(registerStateResponse.error);
      router.push("/");
    }
  }, [registerStateResponse]);
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
    isLoadingRegister
  };
};
