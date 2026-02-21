# Apu Capital — Landing Page (Desafio Técnico)

Landing page educativa sobre dolarização de carteira, desenvolvida com Lovable (frontend) + Supabase (backend)

# Supabase (RLS e Policies)

Foi criado o schema "apu" com a tabela "t_leads", contendo dados do lead e dois campos "jsonb" ("atributos" e "tracking").
RLS foi habilitado na tabela.

Policies configuradas:
- **INSERT permitido para `anon`** → permite envio do formulário público:
- create policy "Allow public insert"
- on "apu"."t_leads"
- to anon
- with check (
-     true
- );
- **SELECT permitido apenas para `authenticated`** → apenas usuários autenticados podem visualizar os leads:
- create policy "Allow select only for authenticated users"
- on "apu"."t_leads"
- to authenticated
- using (
-    true
- );

# Campos "atributos" e "tracking"

 **atributos (jsonb):**  
  Armazena dados complementares do lead.  
  Atualmente envia:
 - json
 - { "perfil_investidor": "Conservador | Moderado | Arrojado" }

 **tracking (jsonb):**
  Armazena dados de origem e navegação:

 - {
 - "utm_source": "...",
 - "utm_medium": "...",
 - "utm_campaign": "...",
 - "referrer": "...",
 - "user_agent": "..."
 - }

 # Como rodar/testar

1.Acessar na Vercel: 
 https://apu-capital-landing.vercel.app/#cenario

2.Baixar ou clonar o repositório:
 - git clone https://github.com/WinterBR/apu-capital-landing.git
 - npm install
 - npm run dev

 **detalhe importante**
Quando for preencher o CPF, use um CPF válido, seja um verdadeiro ou de um gerador de CPF, caso contrário ele não sera aceito
Os dados podem ser conferidos na tabela apu.t_leads no Supabase, foi mandado um invite para fazer parte do minha equipe no supabase.

 # O que faria diferente com mais tempo

 - 1.Edge Function para validação server-side
 - 2.Painel administrativo autenticado
 - 3.Testes com Jest
 - 4.Integração com microsserviços (Java, Python, C#)
