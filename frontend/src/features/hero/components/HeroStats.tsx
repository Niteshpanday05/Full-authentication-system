import { HeroStat } from "../types/hero.types";

interface HeroStatsProps {
  stats: HeroStat[];
}

const HeroStats = ({ stats }: HeroStatsProps) => {
  return (
    <div className="mt-12 grid grid-cols-3 gap-6">

      {stats.map((stat) => (
        <div key={stat.id}>

          <h3 className="text-3xl font-bold text-gray-900">
            {stat.value}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {stat.label}
          </p>

        </div>
      ))}

    </div>
  );
};

export default HeroStats;