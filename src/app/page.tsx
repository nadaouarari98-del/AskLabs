import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import HowItWorks from "@/components/HowItWorks";
import InteractiveDemo from "@/components/InteractiveDemo";
import Roadmap from "@/components/Roadmap";
import KickstarterCTA from "@/components/KickstarterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Vision />
        <HowItWorks />
        <InteractiveDemo />
        <Roadmap />
        <KickstarterCTA />
      </main>
      <Footer />
    </>
  );
}
