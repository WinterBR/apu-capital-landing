import { DollarSign, Building2, Landmark } from "lucide-react";

const opportunities = [
  {
    icon: DollarSign,
    title: "Renda Fixa Global",
    description:
      "Acesse títulos de dívida americanos e europeus com rendimentos em moeda forte. Proteção cambial e previsibilidade para seu portfólio.",
  },
  {
    icon: Building2,
    title: "REITs Internacionais",
    description:
      "Invista em imóveis de alta qualidade nos EUA e Europa sem sair do Brasil. Dividendos em dólar com gestão profissional.",
  },
  {
    icon: Landmark,
    title: "ETFs Globais",
    description:
      "Diversifique com fundos de índice que replicam os maiores mercados do mundo. Baixo custo, alta liquidez e exposição global.",
  },
];

const InternationalCards = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Oportunidades Internacionais
          </p>
          <h2 className="mt-3 text-3xl text-foreground md:text-4xl">
            O mundo além do CDI
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Explore as melhores oportunidades de investimento no exterior 
            com o suporte de uma equipe especializada.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {opportunities.map((opp, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg bg-navy p-8 transition-all hover:shadow-xl"
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-gold/5" />
              <opp.icon className="relative mb-4 h-8 w-8 text-gold" />
              <h3 className="relative text-xl font-serif text-cream">{opp.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-cream/60">
                {opp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalCards;
