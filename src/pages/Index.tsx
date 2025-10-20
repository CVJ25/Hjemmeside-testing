import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        <ProcessSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
