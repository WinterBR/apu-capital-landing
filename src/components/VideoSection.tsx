const VideoSection = () => {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="container px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Conteúdo Exclusivo
          </p>
          <h2 className="mt-3 text-3xl text-cream md:text-4xl">
            Entenda nossa visão de mercado
          </h2>
          <p className="mt-4 text-base leading-relaxed text-cream/60">
            Assista ao nosso vídeo institucional e descubra como a Apu Capital 
            pode transformar a gestão do seu patrimônio.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg shadow-2xl">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/S9uPNppGsGo"
              title="Apu Capital - Visão de Mercado"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
