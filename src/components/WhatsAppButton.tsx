import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá, gostaria de falar com um estrategista da Apu Capital.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6 text-card" />
    </a>
  );
};

export default WhatsAppButton;
