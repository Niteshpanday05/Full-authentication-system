"use client";

import { MegaMenuCategory } from "./types";
import MegaMenuItem from "./MegaMenuItem";

interface Props {
  category: MegaMenuCategory;
}

export default function MegaMenuColumn({ category }: Props) {
  return (
    <div className="space-y-3">
      <h3 className="text-base font-semibold text-slate-900">
        {category.title}
      </h3>

      <div className="space-y-1">
        {category.items.map((item) => (
          <MegaMenuItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}