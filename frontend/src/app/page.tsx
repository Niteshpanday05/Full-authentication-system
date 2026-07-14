import Navbar from "@/components/navbar/Navbar";
import { Hero } from "@/features/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      

      <main >
        <Hero />
      </main>
    </>
  );
}