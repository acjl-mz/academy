# SkillHub by ALINVEST

Plataforma moçambicana de formação prática de competências profissionais, com aprendizagem orientada a exercícios, acompanhamento de progresso e certificação verificável.

## Stack
- Next.js 15 App Router + React 19 + TypeScript
- Tailwind CSS 4 via PostCSS
- Supabase Auth, PostgreSQL e políticas de Row Level Security (RLS)
- Interface responsiva em português de Moçambique

## Configuração local
1. Instale Node.js 22 ou superior.
2. Copie `.env.example` para `.env.local`.
3. Configure `NEXT_PUBLIC_SUPABASE_URL` e `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` com os dados do projecto Supabase.
4. Configure `CONTACT_WEBHOOK_URL` com um endpoint HTTPS seguro para receber mensagens do formulário de contacto. Sem esta variável, o formulário apresenta uma mensagem explícita de indisponibilidade e não simula um envio bem-sucedido.
5. Instale as dependências com `npm install`.
6. Execute `npm run dev`.

## Verificação técnica
- `npm run typecheck`: verificação TypeScript.
- `npm run lint`: análise estática com ESLint.
- `npm run build`: build de produção.
- O workflow GitHub Actions em `.github/workflows/quality.yml` executa estas verificações em pull requests e em alterações à branch principal.

## Supabase
Antes de activar os fluxos de autenticação e inscrição:
1. Confirme que as tabelas e colunas existentes correspondem a `lib/supabase/database.types.ts`.
2. Revise e aplique `supabase/migrations/202610120001_platform_security.sql` ao projecto correcto.
3. Confirme no painel Supabase que RLS está activo e que as políticas resultantes correspondem aos papéis da organização.
4. Active confirmação de email e configure os URLs de redireccionamento autorizados para o domínio local e o domínio de produção.
5. Teste registo, confirmação, início de sessão, inscrição, consulta de certificados e verificação pública antes da publicação.

A migração cria perfis após o registo, protege campos de privilégio, aplica políticas de acesso e insere as seis competências iniciais. Não aplique a migração sem rever o esquema e os valores de estado já utilizados no projecto.

## Fluxos implementados
- Registo e início de sessão por email/palavra-passe via Supabase Auth.
- Protecção das rotas de participante e encerramento de sessão.
- Catálogo com pesquisa por texto e filtros por área e nível.
- Inscrição autenticada numa competência.
- Dashboard com inscrições, progresso e contagem de certificados do utilizador.
- Páginas de certificados e portfólio.
- Verificação pública através de uma função RPC que devolve apenas os campos necessários à verificação.
- Formulário de contacto validado no cliente e no servidor, com entrega via webhook configurável.

## Ainda requer implementação e validação
- Submissão de exercícios, upload privado de ficheiros e avaliação/feedback do mentor.
- Emissão de certificados após aprovação e fluxos administrativos de mentor/empresa.
- Integração de pagamentos, eventos com inscrições e notificações.
- Testes automatizados de interface e validação visual em navegadores/dispositivos.
- Aplicação real da migração, configuração das variáveis no Vercel e confirmação do build no ambiente de CI.

## Princípios de produto
- Aprendizagem orientada à prática.
- Feedback humano e accionável.
- Evidência de competência acima de consumo passivo de conteúdo.
- Certificação pública e verificável.
- Experiência simples para participantes e ferramentas robustas para mentores e empresas.
