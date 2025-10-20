import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Attester = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="relative mb-12">
            <div className="aurora-glow" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Attester</h1>
            <p className="text-xl text-muted-foreground">
              Anbefalinger og attester fra samarbeidspartnere
            </p>
          </div>

          <div className="grid gap-8 max-w-4xl">
            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <p className="text-muted-foreground italic mb-6">
                "Attester og anbefalinger vil vises her..."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">?</span>
                </div>
                <div>
                  <p className="font-semibold">Navn Navnesen</p>
                  <p className="text-sm text-muted-foreground">Stilling, Firma</p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <p className="text-muted-foreground">
                Flere attester kommer snart...
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Attester;
