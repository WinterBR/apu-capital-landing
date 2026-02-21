import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá, gostaria de falar com um estrategista da Apu Capital.";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-navy/80" />
      
      <div className="container relative z-10 px-6 py-20 text-center md:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gold animate-fade-in-up">
          Apu Capital — Boutique Financeira
        </p>
        <h1 className="mx-auto max-w-4xl text-3xl leading-tight text-cream md:text-5xl lg:text-6xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Ser conservador não é evitar risco.{" "}
          <span className="text-gradient-gold">É evitar concentração.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          A verdadeira proteção patrimonial começa com diversificação inteligente, 
          alocação global e estratégias comprovadas por décadas de história econômica.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#formulario"
            className="inline-flex items-center gap-2 rounded-md bg-gold px-8 py-4 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg"
          >
            Falar com um estrategista
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-cream/30 px-8 py-4 text-sm font-medium text-cream transition-all hover:border-cream/60 hover:bg-cream/10"
          >
            Contato via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
