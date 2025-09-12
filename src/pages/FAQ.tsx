import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FAQ from "@/components/FAQ";
import TopDestinations from "@/components/TopDestinations";


const FAQPage = () => {
  useEffect(() => {
    // Set page title
    document.title = "FAQ für Yachtcharter - CharterTransparenz";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <FAQ />
      <TopDestinations />
    </div>
  );
};

export default FAQPage;