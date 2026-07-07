"use client";

import { AlertCircle } from "lucide-react";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export default function ErrorState({
  message = "Something went wrong.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 text-center">
      <AlertCircle
        size={48}
        className="mb-4 text-red-500"
      />

      <h3 className="text-lg font-semibold">
        Search Error
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-5 rounded-lg bg-black px-5 py-2 text-white transition hover:opacity-90 dark:bg-white dark:text-black"
        >
          Try Again
        </button>
      )}
    </div>
  );
}