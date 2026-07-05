"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { LOGO } from "./constants";

export default function Logo() {
  return (
    <Link
      href={LOGO.href}
      aria-label={LOGO.name}
      className="group flex items-center gap-3"
    >
      {/* Logo Icon */}
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-indigo-600
          to-violet-600
          text-white
          shadow-md
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:shadow-lg
        "
      >
        <ShoppingBag className="h-5 w-5" />
      </div>

      {/* Logo Text */}
      <div className="hidden sm:block">
        <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
          {LOGO.name}
        </h1>

        <p className="text-xs text-slate-500">
          Premium Store
        </p>
      </div>
    </Link>
  );
}