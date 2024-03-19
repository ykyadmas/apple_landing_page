import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import SecondHero from "@/components/SecondHero";
import Cards from "@/components/Cards";
import PhotoPage from "@/components/Photo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
  <div>
    <Navbar />
    <Hero />
    <SecondHero />
    <Cards />
    <PhotoPage />
    <Footer />
  </div>
  );
}
