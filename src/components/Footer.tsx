const Footer = () => {
  return (
    <footer className="border-t border-border/20 bg-navy py-12">
      <div className="container px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <h3 className="text-xl font-serif text-cream">Apu Capital</h3>
          <p className="max-w-lg text-sm leading-relaxed text-cream/50">
            A Apu Capital atua como escritório credenciado da{" "}
            <strong className="text-cream/70">EQI Investimentos</strong>, com 
            custódia e liquidação pelo{" "}
            <strong className="text-cream/70">BTG Pactual</strong>, o maior banco 
            de investimentos da América Latina.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs font-medium uppercase tracking-wider text-cream/30">
              EQI Investimentos
            </span>
            <span className="h-4 w-px bg-cream/20" />
            <span className="text-xs font-medium uppercase tracking-wider text-cream/30">
              BTG Pactual
            </span>
          </div>
          <div className="mt-4 text-xs text-cream/30">
            © {new Date().getFullYear()} Apu Capital. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
