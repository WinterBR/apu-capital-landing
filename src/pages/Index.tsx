import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EducationalSection from "@/components/EducationalSection";
import VideoSection from "@/components/VideoSection";
import InvestorProfiles from "@/components/InvestorProfiles";
import InternationalCards from "@/components/InternationalCards";
import MethodSection from "@/components/MethodSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <div className="fade-in">
        <HeroSection />
      </div>

      <div id="cenario" className="fade-in">
        <EducationalSection />
      </div>

      <div className="fade-in">
        <VideoSection />
      </div>

      <div id="perfis" className="fade-in">
        <InvestorProfiles />
      </div>

      <div className="fade-in">
        <InternationalCards />
      </div>

      <div id="metodo" className="fade-in">
        <MethodSection />
      </div>

      <div className="fade-in">
        <ContactForm />
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
