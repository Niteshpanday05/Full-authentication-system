"use client";

import Link from "next/link";
import { MegaMenuItem as Item } from "./types";

interface Props {
  item: Item;
}

export default function MegaMenuItem({ item }: Props) {
  return (
    <Link
      href={item.href}
      className="block rounded-md px-2 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-indigo-600"
    >
      {item.name}
    </Link>
  );
}