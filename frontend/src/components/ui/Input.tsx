"use client";

import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium">
          {label}
        </label>

        <input
          ref={ref}
          className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          {...props}
        />

        {error && (
          <span className="text-sm text-red-500">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;