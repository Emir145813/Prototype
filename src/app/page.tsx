import AbouUS from "@/components/AbouUS";
import Carusel from "@/components/Carusel";
import ContactUS from "@/components/ContactUS";
import Coworkers from "@/components/Coworkers";
import HeroPage from "@/components/HeroPage";
import Plans from "@/components/Plans";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroPage/>
      <Coworkers/>
      <Services/>
      <ContactUS/>
      <AbouUS/>
      <Carusel/>
      <Plans/>
    </>
  );
}
