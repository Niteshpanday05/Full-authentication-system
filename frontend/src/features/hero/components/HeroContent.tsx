import { HeroData } from "../types/hero.types";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

interface HeroContentProps {
  hero: HeroData;
}

const HeroContent = ({ hero }: HeroContentProps) => {
  return (
    <div>

      <HeroBadge text={hero.badge} />

      <h1 className="mt-6 text-5xl font-black leading-tight lg:text-7xl">
        {hero.title}
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-600">
        {hero.subtitle}
      </p>

      <HeroButtons buttons={hero.buttons} />

      <HeroStats stats={hero.stats} />

    </div>
  );
};

export default HeroContent;