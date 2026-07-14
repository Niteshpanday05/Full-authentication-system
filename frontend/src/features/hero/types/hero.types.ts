/**
 * Hero CTA button.
 */
export interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

/**
 * Hero statistics.
 */
export interface HeroStat {
  id: number;
  value: string;
  label: string;
}

/**
 * Floating product card.
 */
export interface HeroFloatingCard {
  title: string;
  price: string;
  image: string;
}

/**
 * Hero section data returned from the backend.
 */
export interface HeroData {
  badge: string;
  title: string;
  subtitle: string;
  image: string;

  buttons: HeroButton[];

  stats: HeroStat[];

  floatingCard: HeroFloatingCard;
}