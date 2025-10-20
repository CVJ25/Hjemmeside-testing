import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProsjekterTekniske = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="relative mb-12">
            <div className="aurora-glow" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Tekniske Prosjekter</h1>
            <p className="text-xl text-muted-foreground">
              Satellittarbeid, elektronikkutvikling, autonome systemer og mer
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 card-shadow">
              <h3 className="text-2xl font-bold mb-3">Prosjektdetaljer</h3>
              <p className="text-muted-foreground">
                Her kommer detaljert informasjon om tekniske prosjekter.
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

export default ProsjekterTekniske;
