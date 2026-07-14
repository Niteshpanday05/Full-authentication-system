import Link from "next/link";
import { HeroButton } from "../types/hero.types";

interface HeroButtonsProps {
  buttons: HeroButton[];
}

const HeroButtons = ({ buttons }: HeroButtonsProps) => {
  return (
    <div className="mt-8 flex flex-wrap gap-4">

      {buttons.map((button) => (
        <Link
          key={button.label}
          href={button.href}
          className={
            button.variant === "primary"
              ? "rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700 transition"
              : "rounded-xl border border-gray-300 px-7 py-3 font-semibold text-gray-700 hover:bg-gray-100 transition"
          }
        >
          {button.label}
        </Link>
      ))}

    </div>
  );
};

export default HeroButtons;