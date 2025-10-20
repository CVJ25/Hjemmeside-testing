import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-8xl md:text-9xl font-bold text-primary/20">404</h1>
              <h2 className="text-3xl md:text-4xl font-bold">Siden ble ikke funnet</h2>
              <p className="text-lg text-muted-foreground">
                Beklager, siden du leter etter eksisterer ikke eller har blitt flyttet.
              </p>
            </div>
            
            <Link to="/">
              <Button size="lg" className="gap-2">
                <Home className="w-4 h-4" />
                Tilbake til forsiden
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
