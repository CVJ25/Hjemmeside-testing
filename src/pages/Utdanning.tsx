import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Award } from "lucide-react";

const Utdanning = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="relative mb-12">
            <div className="aurora-glow" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kurs, sertifikater & utdanning
            </h1>
            <p className="text-xl text-muted-foreground">
              Min akademiske bakgrunn og sertifiseringer
            </p>
          </div>

          <div className="space-y-8 max-w-4xl">
            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Bachelor i Elektroteknikk</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>UiT Norges arktiske universitet</strong> — (årstall)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Spesialisering innen elektronikk, programmering og embedded systemer.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Kurs og sertifikater</h3>
                  <p className="text-muted-foreground">
                    Diverse kurs og sertifiseringer innen teknologi, ledelse og utvikling.
                  </p>
                  <div className="mt-4 text-sm text-muted-foreground">
                    Innhold kommer snart...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Utdanning;
