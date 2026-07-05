// src/components/header/types.ts

export interface NavigationChild {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href?: string;
  megaMenu?: boolean;
  children?: NavigationChild[];
}