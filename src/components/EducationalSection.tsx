import { TrendingUp, ShieldAlert, Globe } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: "13,2%",
    label: "Inflação acumulada nos últimos 2 anos no Brasil",
    description: "Quem ficou parado em renda fixa local pode ter perdido poder de compra real.",
  },
  {
    icon: ShieldAlert,
    value: "R$ 4,9 tri",
    label: "Volume em renda fixa no Brasil",
    description: "A maioria dos investidores brasileiros ainda concentra mais de 80% em ativos locais.",
  },
  {
    icon: Globe,
    value: "< 1%",
    label: "Alocação internacional do investidor brasileiro médio",
    description: "Enquanto investidores globais diversificam entre 20 a 40% em ativos no exterior.",
  },
];

const EducationalSection = () => {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Cenário Econômico
          </p>
          <h2 className="mt-3 text-3xl text-foreground md:text-4xl">
            Por que diversificar é urgente?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Os dados mostram que a concentração em ativos locais é um dos maiores riscos 
            para o patrimônio de longo prazo no Brasil.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-gold/30 hover:shadow-md"
            >
              <stat.icon className="mb-4 h-6 w-6 text-gold" />
              <p className="text-3xl font-bold text-foreground font-serif">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-foreground">{stat.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
