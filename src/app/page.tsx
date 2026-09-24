import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Subsidiaries from "@/components/Subsidiaries";
import Founder from "@/components/Founder";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Subsidiaries />
        <Founder />
        <Vision />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
