const steps = [
  {
    number: "01",
    title: "Diagnóstico Patrimonial",
    description: "Analisamos sua carteira atual, seus objetivos e sua tolerância a risco com profundidade.",
  },
  {
    number: "02",
    title: "Estratégia Personalizada",
    description: "Criamos um plano de alocação sob medida, combinando ativos locais e internacionais.",
  },
  {
    number: "03",
    title: "Implementação Assistida",
    description: "Executamos a estratégia com acompanhamento próximo e total transparência.",
  },
  {
    number: "04",
    title: "Monitoramento Contínuo",
    description: "Revisamos periodicamente o portfólio e ajustamos conforme o cenário de mercado evolui.",
  },
];

const MethodSection = () => {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Nossa Metodologia
          </p>
          <h2 className="mt-3 text-3xl text-foreground md:text-4xl">
            O Método Apu
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Um processo estruturado que combina análise rigorosa, visão global 
            e atendimento personalizado.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold">
                  {step.number}
                </span>
              </div>
              <div className="pt-1">
                <h3 className="text-lg font-serif text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
