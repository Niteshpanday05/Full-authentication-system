"use client";

import { useState } from "react";

import Input from "./Input";

export default function PasswordInput(props: any) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        type={show ? "text" : "password"}
      />

      <button
        type="button"
        className="absolute right-3 top-8 text-sm"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
    </div>
  );
}