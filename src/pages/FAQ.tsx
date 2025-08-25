import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import FAQ from "@/components/FAQ";


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
      
    </div>
  );
};

export default FAQPage;