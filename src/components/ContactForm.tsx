import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";

const investorProfiles = [
  "Conservador",
  "Moderado",
  "Arrojado",
  "Não sei / Quero descobrir",
];


const validateCPF = (cpf: string) => {
  const cleanCpf = cpf.replace(/\D/g, "");

  if (cleanCpf.length !== 11 || /^(\d)\1+$/.test(cleanCpf)) return false;

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++)
    sum += parseInt(cleanCpf.substring(i - 1, i)) * (11 - i);

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++)
    sum += parseInt(cleanCpf.substring(i - 1, i)) * (12 - i);

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;

  return remainder === parseInt(cleanCpf.substring(10, 11));
};

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    perfil: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "cpf") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 11);

      const formatted = onlyNumbers
        .replace(/^(\d{3})(\d)/, "$1.$2")
        .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1-$2");

      setForm({ ...form, cpf: formatted });
      return;
    }

    if (name === "telefone") {
      const onlyNumbers = value.replace(/\D/g, "").slice(0, 11);

      const formatted = onlyNumbers
        .replace(/^(\d{2})(\d)/g, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");

      setForm({ ...form, telefone: formatted });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cleanCpf = form.cpf.replace(/\D/g, "");

    if (
      !form.nome.trim() ||
      !form.email.trim() ||
      !form.telefone.trim() ||
      !form.cpf.trim()
    ) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    if (!emailRegex.test(form.email)) {
      toast({
        title: "Email inválido",
        description: "Informe um email válido.",
        variant: "destructive",
      });
      return;
    }

    if (!validateCPF(form.cpf)) {
      toast({
        title: "CPF inválido",
        description: "Informe um CPF válido.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .schema("apu")
      .from("t_leads")
      .insert([
        {
          nome: form.nome,
          email: form.email,
          telefone: form.telefone.replace(/\D/g, ""),
          cpf: cleanCpf,
          atributos: {
            perfil_investidor: form.perfil,
          },
          tracking: {
            utm_source: new URLSearchParams(window.location.search).get("utm_source"),
            utm_medium: new URLSearchParams(window.location.search).get("utm_medium"),
            utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign"),
            referrer: document.referrer,
            user_agent: navigator.userAgent,
          },
        },
      ]);

    setLoading(false);

    if (error) {
      if (error.message.includes("unique_cpf")) {
        toast({
          title: "CPF já cadastrado",
          description: "Este CPF já foi registrado anteriormente.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Erro ao enviar",
          description: "Tente novamente.",
          variant: "destructive",
        });
      }
      return;
    }

    toast({
      title: "Mensagem enviada!",
      description: "Um estrategista entrará em contato em breve.",
    });

    setForm({
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      perfil: "",
    });
  };

  const inputClasses =
    "w-full rounded-md border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";

  return (
    <section id="formulario" className="bg-navy py-20 md:py-28">
      <div className="container px-6">
        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="mt-12 space-y-5">

            <input
              name="nome"
              placeholder="Nome completo"
              value={form.nome}
              onChange={handleChange}
              className={inputClasses}
            />

            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={inputClasses}
            />

            <input
              name="telefone"
              type="tel"
              inputMode="numeric"
              placeholder="(11) 99999-9999"
              value={form.telefone}
              onChange={handleChange}
              className={inputClasses}
              maxLength={15}
            />

            <input
              name="cpf"
              inputMode="numeric"
              placeholder="000.000.000-00"
              value={form.cpf}
              onChange={handleChange}
              className={inputClasses}
              maxLength={14}
            />

            <select
              name="perfil"
              value={form.perfil}
              onChange={handleChange}
              className={inputClasses}
            >
              <option value="">Perfil de investidor</option>
              {investorProfiles.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-gold px-8 py-4 text-sm font-semibold text-navy transition-all hover:bg-gold-light hover:shadow-lg disabled:opacity-60"
            >
              {loading ? "Enviando..." : "Enviar mensagem"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;