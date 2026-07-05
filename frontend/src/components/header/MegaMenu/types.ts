// src/components/header/MegaMenu/types.ts

export interface MegaMenuItem {
  id: number;
  name: string;
  href: string;
}

export interface MegaMenuCategory {
  id: number;
  title: string;
  items: MegaMenuItem[];
}