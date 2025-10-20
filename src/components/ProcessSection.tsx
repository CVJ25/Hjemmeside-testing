import { Search, Hammer, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Utforske",
      description: "Krav, miljø og risiko. Skisser arkitektur og velger teknologi som passer problemets virkelighet.",
    },
    {
      icon: Hammer,
      title: "Bygge",
      description: "Prototype raskt, iterer på elektronikk og programvare. Dokumenter beslutninger underveis.",
    },
    {
      icon: CheckCircle,
      title: "Validere",
      description: "Test i realistiske omgivelser, mål resultater og gjør det robust.",
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="aurora-glow" />
      
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Slik jobber jeg</h2>
          <p className="text-lg text-muted-foreground">
            Utforske → Bygge → Validere
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 card-shadow hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
