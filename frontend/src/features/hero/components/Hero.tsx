import { HERO_DATA } from "../constants/hero.constants";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";


const Hero = () => {

  const hero = HERO_DATA;


  return (

    <section className="
      overflow-hidden
      bg-gradient-to-br
      from-white
      via-gray-50
      to-blue-50
    ">


      <div className="
        mx-auto
        max-w-7xl
        px-6
        py-20
      ">


        <div className="
          grid
          items-center
          gap-16
          lg:grid-cols-2
        ">


          <HeroContent hero={hero}/>


          <HeroImage hero={hero}/>


        </div>


      </div>


    </section>

  );
};


export default Hero;