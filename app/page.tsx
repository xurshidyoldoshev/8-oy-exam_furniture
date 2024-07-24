import BrowseTheRange from "@/components/BrowseTheRange/BrowseTheRange";
import FuniroFurniture from "@/components/FuniroFurniture/FuniroFurniture";
import Hero from "@/components/Hero/Hero";
import OurProducts from "@/components/OurProducts/OurProducts";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  return (
    <>
      <Hero />
      <BrowseTheRange />
      <OurProducts />
      <Slider />
      <FuniroFurniture />
    </>
  );
}
