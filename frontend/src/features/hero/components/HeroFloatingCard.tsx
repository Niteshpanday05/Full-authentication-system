import Image from "next/image";
import { HeroFloatingCard as FloatingCardType } from "../types/hero.types";


interface Props {
  card: FloatingCardType;
}


const HeroFloatingCard = ({ card }: Props) => {
  return (
    <div className="
      absolute 
      bottom-5 
      left-0
      hidden
      rounded-2xl
      bg-white
      p-4
      shadow-xl
      lg:flex
      items-center
      gap-4
    ">

      <div className="relative h-14 w-14 overflow-hidden rounded-lg">

        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />

      </div>


      <div>

        <p className="font-semibold">
          {card.title}
        </p>

        <p className="font-bold text-blue-600">
          {card.price}
        </p>

      </div>

    </div>
  );
};


export default HeroFloatingCard;