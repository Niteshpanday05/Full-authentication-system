"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";

import { loginSchema, LoginSchema } from "../schemas/login.schema";
import { useLogin } from "../hooks/useLogin";

export default function LoginForm() {
  const { login } = useLogin();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    
    try {
      setLoading(true);
      await login(data.email, data.password);
    } catch (err: any) {
      console.log(err?.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue to your account
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <Input
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            {...register("email")}
            error={errors.email?.message}
          />

          <PasswordInput
            label="Password"
            placeholder="••••••••"
            {...register("password")}
            error={errors.password?.message}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex h-12 w-full items-center justify-center rounded-lg bg-blue-600 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="px-3 text-sm text-gray-400">
            OR
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        <button
          type="button"
          className="flex h-12 w-full items-center justify-center rounded-lg border border-gray-300 bg-white font-medium text-gray-700 transition hover:bg-gray-50"
        >
          Continue with Google
        </button>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Create Account
          </Link>
        </p>
      </div>
    </section>
  );
}