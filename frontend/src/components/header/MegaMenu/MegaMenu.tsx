"use client";

import MegaMenuBanner from "./MegaMenuBanner";
import MegaMenuColumn from "./MegaMenuColumn";
import { megaMenuData } from "./data";

export default function MegaMenu() {
  return (
    <div
      className="
        absolute
        left-0
        top-full
        hidden
        w-screen
        border-t
        border-slate-200
        bg-white
        shadow-2xl
        group-hover:block
      "
    >
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-10 p-10">
        {megaMenuData.map((category) => (
          <MegaMenuColumn
            key={category.id}
            category={category}
          />
        ))}

        <MegaMenuBanner />
      </div>
    </div>
  );
}