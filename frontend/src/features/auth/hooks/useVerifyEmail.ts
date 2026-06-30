"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { AuthService } from "../services/auth.service";

export function useVerifyEmail() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const token = searchParams.get("token");

  useEffect(() => {
    const verify = async () => {
      try {
        if (!token) return;

        await AuthService.verifyEmail(token);

        setSuccess(true);

        setTimeout(() => {
          router.push("/login");
        }, 2000);

      } catch (err) {
        setSuccess(false);
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, [token]);

  return { loading, success };
}