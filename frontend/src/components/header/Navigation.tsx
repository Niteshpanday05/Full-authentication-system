"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { NAVIGATION } from "./constants";
import MegaMenu from "./MegaMenu/MegaMenu";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden xl:flex items-center gap-8"
      aria-label="Main Navigation"
    >
      {NAVIGATION.map((item) => {
        const isActive = item.href === pathname;

        // Navigation item with Mega Menu
        if (item.megaMenu) {
          return (
            <div
              key={item.label}
              className="relative group"
            >
              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-1
                  font-medium
                  text-slate-700
                  transition-colors
                  duration-200
                  hover:text-indigo-600
                "
              >
                <span>{item.label}</span>

                <ChevronDown
                  className="
                    h-4
                    w-4
                    transition-transform
                    duration-200
                    group-hover:rotate-180
                  "
                />
              </button>

              <MegaMenu />
            </div>
          );
        }

        // Normal Navigation Link
        return (
          <Link
            key={item.label}
            href={item.href!}
            className={`
              relative
              font-medium
              transition-colors
              duration-200
              hover:text-indigo-600
              ${
                isActive
                  ? "text-indigo-600"
                  : "text-slate-700"
              }
            `}
          >
            {item.label}

            {isActive && (
              <span
                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  w-full
                  rounded-full
                  bg-indigo-600
                "
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}