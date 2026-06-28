"use client";

import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/store/hooks";
import { setCredentials } from "../store/authSlice";
import { AuthService } from "../services/auth.service";
import { tokenManager } from "@/lib/token-manager";

export function useLogin() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const data = await AuthService.login({
      email,
      password,
    });

    tokenManager.setToken(data.access);

    localStorage.setItem("refresh", data.refresh);

    dispatch(
      setCredentials({
        user: data.user,
      })
    );

    router.push("/dashboard");
  };

  return {
    login,
  };
}