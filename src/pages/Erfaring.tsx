import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Erfaring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="relative mb-12">
            <div className="aurora-glow" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Erfaring</h1>
            <p className="text-xl text-muted-foreground">
              Min profesjonelle bakgrunn og arbeidserfaring
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <h3 className="text-2xl font-bold mb-3">Teknisk/Ingeniør</h3>
              <p className="text-muted-foreground">
                Erfaring innen elektronikk, programmering og teknisk utvikling.
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                Innhold kommer snart...
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <h3 className="text-2xl font-bold mb-3">Ledelse og administrasjon</h3>
              <p className="text-muted-foreground">
                Lederroller og administrative oppgaver.
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                Innhold kommer snart...
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <h3 className="text-2xl font-bold mb-3">Diverse</h3>
              <p className="text-muted-foreground">
                Andre relevante erfaringer og verv.
              </p>
              <div className="mt-4 text-sm text-muted-foreground">
                Innhold kommer snart...
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Erfaring;
