import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import portraitImage from "@/assets/portrait.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="aurora-glow" />
      
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr,0.8fr] gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hei, jeg er Chris
            </h1>
            
            <div className="space-y-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Hei! Jeg heter Chris Vebjørn Jensen og er født i Tromsø, formet i nord og stadig på vei videre. Jeg har alltid likt å skape, bygge og forstå hvordan ting henger sammen helt fra jeg kunne ta i en hammer. I dag jobber jeg med teknologi fordi jeg vil løse problemer i praksis, ikke bare i teorien.
              </p>
              
              <p>
                For meg er livet som en biltur: du velger veier, møter mennesker, havner i tunneler, får utsiktstopper og må noen ganger bare slippe gassen eller ta en u-sving. Men uansett hva som skjer, så går veien videre. Og det er du som sitter bak rattet. Den tanken har fulgt meg siden ungdomsskolen, og den har formet både arbeidsetikken, holdningene og valgene mine.
              </p>
              
              <p>
                Jeg er nysgjerrig, engasjert og praktisk. Jeg er en som lærer raskt, samarbeider godt og trives med ansvar. Gjennom prosjekter som satellittarbeid med Andøya Space og NASA, autonome farkoster, elektronikkutvikling og studentledelse har jeg fått erfare hvor mye man kan få til når man kombinerer struktur, kreativitet og gode folk rundt seg. Jeg drives av å bygge ting som fungerer, og av å utvikle meg som menneske og som ingeniør. Steg for steg, valg for valg, vei for vei.
              </p>
              
              <p className="font-medium text-foreground">
                Velkommen inn i mitt lille "kart" av prosjekter, erfaringer og stoppesteder.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/prosjekter">
                <Button size="lg" className="gap-2">
                  Se prosjekter
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button size="lg" variant="outline">
                  Ta kontakt
                </Button>
              </Link>
            </div>

            {/* Education Badge */}
            <div className="pt-8">
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-2xl card-shadow">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground">Utdanning</span>
                  <span className="text-sm text-muted-foreground">
                    <strong>UiT</strong> — Bachelor i Elektroteknikk (årstall).
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl" />
              <img
                src={portraitImage}
                alt="Chris V. Jensen"
                className="relative w-full max-w-md rounded-3xl border border-border card-shadow object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
