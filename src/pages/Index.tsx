import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Fleet from "@/components/Fleet";
import Territories from "@/components/Territories";
import VideoBanner from "@/components/VideoBanner";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Fleet />
      <Territories />
      <VideoBanner />
      <Partners />
      <FAQ />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
