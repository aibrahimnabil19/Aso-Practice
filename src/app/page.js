import Image from "next/image";
import Hero from "../components/Hero";
import Styles from "@/components/Styles";
import StylesCard from "@/components/StylesCard";

export default function Home() {
  return (
    <div>

      <Hero/>
      <Styles/>
      <StylesCard/>

    </div>
  );
}
