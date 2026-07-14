import Image from "next/image";
import { HeroData } from "../types/hero.types";
import HeroFloatingCard from "./HeroFloatingCard";


interface Props {
  hero: HeroData;
}


const HeroImage = ({ hero }: Props) => {

  return (

    <div className="relative flex justify-center">


      <div className="
        absolute
        h-96
        w-96
        rounded-full
        bg-blue-200
        blur-3xl
        opacity-40
      "/>


      <div className="relative">


        <Image
          src={hero.image}
          alt={hero.title}
          width={600}
          height={600}
          priority
          className="object-contain"
        />


        <HeroFloatingCard
          card={hero.floatingCard}
        />


      </div>


    </div>

  );
};


export default HeroImage;