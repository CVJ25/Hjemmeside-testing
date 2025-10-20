import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Prosjekter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="relative mb-12">
            <div className="aurora-glow" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Prosjekter</h1>
            <p className="text-xl text-muted-foreground">
              Tekniske og kreative prosjekter jeg har arbeidet med
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Placeholder for projects */}
            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <h3 className="text-2xl font-bold mb-3">Tekniske prosjekter</h3>
              <p className="text-muted-foreground mb-4">
                Satellittarbeid, elektronikkutvikling, autonome systemer og mer.
              </p>
              <div className="text-sm text-muted-foreground">
                Innhold kommer snart...
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <h3 className="text-2xl font-bold mb-3">Kreative prosjekter</h3>
              <p className="text-muted-foreground mb-4">
                Design, media og andre kreative initiativ.
              </p>
              <div className="text-sm text-muted-foreground">
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

export default Prosjekter;
