"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { ChevronRight } from "lucide-react";

interface SearchResultItemProps {
  title: string;
  subtitle?: string;
  image?: string;
  href?: string;

  active?: boolean;

  leftIcon?: React.ReactNode;

  rightContent?: React.ReactNode;

  onClick?: () => void;
}

export default function SearchResultItem({
  title,
  subtitle,
  image,
  href,
  active = false,
  leftIcon,
  rightContent,
  onClick,
}: SearchResultItemProps) {
  const content = (
    <div
      className={clsx(
        "flex items-center gap-3 px-4 py-3 transition-colors duration-200",
        active
          ? "bg-blue-50 dark:bg-blue-900/20"
          : "hover:bg-gray-50 dark:hover:bg-neutral-800"
      )}
    >
      {/* Left */}

      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-neutral-800">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        ) : (
          leftIcon
        )}
      </div>

      {/* Center */}

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
          {title}
        </p>

        {subtitle && (
          <p className="truncate text-xs text-gray-500">
            {subtitle}
          </p>
        )}
      </div>

      {/* Right */}

      {rightContent}

      <ChevronRight
        className="text-gray-400"
        size={18}
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full text-left"
    >
      {content}
    </button>
  );
}