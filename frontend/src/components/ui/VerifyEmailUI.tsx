"use client";

import { useVerifyEmail } from "@/features/auth/hooks/useVerifyEmail"

export default function VerifyEmailUI() {
  const { loading, success } = useVerifyEmail();

  if (loading) {
    return (
      <div className="text-center mt-20">
        Verifying your email...
      </div>
    );
  }

  if (success) {
    return (
      <div className="text-center mt-20 text-green-600">
        Email verified successfully!
        Redirecting to login...
      </div>
    );
  }

  return (
    <div className="text-center mt-20 text-red-600">
      Invalid or expired verification link
    </div>
  );
}