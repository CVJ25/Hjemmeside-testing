import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const Kontakt = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="relative mb-12">
            <div className="aurora-glow" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
            <p className="text-xl text-muted-foreground">
              La oss lage noe som fungerer
            </p>
          </div>

          <div className="max-w-4xl space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">E-post</h3>
                  <p className="text-muted-foreground">
                    Kontakt meg på e-post for samarbeid og henvendelser.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground mb-4">
                    Koble til meg på LinkedIn for profesjonell nettverking.
                  </p>
                  <a
                    href="https://www.linkedin.com/in/chrisvjensen/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="gap-2">
                      <Linkedin className="w-4 h-4" />
                      Besøk LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-border rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-3">
                Tilgjengelig for prosjekter
              </h3>
              <p className="text-muted-foreground">
                Jeg er alltid interessert i spennende tekniske utfordringer og samarbeidsprosjekter. Ta kontakt så diskuterer vi mulighetene!
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
