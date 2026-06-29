"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";

import {
  registerSchema,
  RegisterSchema,
} from "../schemas/register.schema";
import { useRegister } from "../hooks/useRegister";

export default function RegisterForm() {
  const { register: registerUser } = useRegister();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });
const onSubmit = async (data: any) => {
  console.log("SUBMIT WORKS");
  console.log("DATA:", data);

  const res = await fetch("http://localhost:8000/api/v1/auth/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log("STATUS:", res.status);
};
  return (
    
    <section className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
  THIS IS MY REGISTER FORM
</h1>
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create your account to get started
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <Input
            label="First Name"
            placeholder="John"
            {...register("first_name")}
            error={errors.first_name?.message}
          />

          <Input
            label="Last Name"
            placeholder="Doe"
            {...register("last_name")}
            error={errors.last_name?.message}
          />

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

          <PasswordInput
            label="Confirm Password"
            placeholder="••••••••"
            {...register("confirm_password")}
            error={errors.confirm_password?.message}
          />

          <button
            type="submit"
            disabled={loading}
            className="flex h-12 w-full items-center justify-center rounded-lg bg-blue-600 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}