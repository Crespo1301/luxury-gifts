import MockupBanner from "@/components/MockupBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Categories from "@/components/Categories";
import Collection from "@/components/Collection";
import Process from "@/components/Process";
import About from "@/components/About";
import CatalogCTA from "@/components/CatalogCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <MockupBanner />
      <Navbar />
      <main className="relative">
        <Hero />
        <Marquee />
        <Categories />
        <Collection />
        <Process />
        <About />
        <CatalogCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
