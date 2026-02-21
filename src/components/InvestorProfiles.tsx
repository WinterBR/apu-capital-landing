import { Shield, BarChart3, Rocket } from "lucide-react";

const profiles = [
  {
    icon: Shield,
    title: "Conservador",
    description:
      "Prioriza a preservação do capital com baixa volatilidade. Ideal para quem busca previsibilidade e proteção contra a inflação.",
    allocation: "70% Renda Fixa · 20% Multimercado · 10% Internacional",
  },
  {
    icon: BarChart3,
    title: "Moderado",
    description:
      "Equilibra segurança e crescimento. Aceita volatilidade controlada em troca de retornos superiores no médio-longo prazo.",
    allocation: "40% Renda Fixa · 30% Multimercado · 30% Internacional",
  },
  {
    icon: Rocket,
    title: "Arrojado",
    description:
      "Foco em maximização de retorno no longo prazo. Aceita oscilações maiores buscando crescimento patrimonial acelerado.",
    allocation: "20% Renda Fixa · 30% Renda Variável · 50% Internacional",
  },
];

const InvestorProfiles = () => {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Perfis de Investidor
          </p>
          <h2 className="mt-3 text-3xl text-foreground md:text-4xl">
            Qual é o seu perfil?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Cada investidor tem objetivos, prazos e tolerância a risco diferentes. 
            Conheça os três perfis principais.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {profiles.map((profile, i) => (
            <div
              key={i}
              className="flex flex-col rounded-lg border border-border bg-card p-8 transition-all hover:border-gold/30 hover:shadow-md"
            >
              <profile.icon className="mb-4 h-8 w-8 text-gold" />
              <h3 className="text-xl font-serif text-foreground">{profile.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {profile.description}
              </p>
              <div className="mt-6 rounded-md bg-muted px-4 py-3">
                <p className="text-xs font-medium text-muted-foreground">
                  {profile.allocation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorProfiles;
