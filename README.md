# FORJA Digital — Landing Page Comercial

Landing page oficial da FORJA Digital, criada para apresentar a marca, demonstrar os três níveis de serviço e transformar visitas em conversas comerciais qualificadas.

## Tecnologias

- React 18
- Vite 6
- JavaScript
- CSS moderno e responsivo
- Lucide React para ícones

## Executar localmente

Requisitos: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Abra a URL indicada pelo Vite no terminal (normalmente `http://localhost:5173`).

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos otimizados serão gerados em `dist/`.

## Publicar na Vercel

1. Envie o projeto para um repositório Git ou importe a pasta pela Vercel CLI.
2. Na Vercel, selecione o framework **Vite**.
3. Use `npm run build` como comando de build.
4. Use `dist` como diretório de saída.
5. Publique e, se desejar, conecte um domínio próprio.

## Configurar o WhatsApp e demais contatos

Edite `src/config/site.js` e preencha `contact.whatsapp` apenas com código do país, DDD e número, sem símbolos. Exemplo de formato: `55DDDNÚMERO`.

Enquanto o campo estiver vazio, os botões exibem “WhatsApp em configuração” e nenhum link quebrado é criado. No mesmo arquivo podem ser configurados e-mail, Instagram, LinkedIn e a URL da FORJA Digital.

As mensagens pré-preenchidas também ficam centralizadas em `siteConfig.messages`.

## Configurar os projetos demonstrativos

As URLs ficam em `src/config/site.js`, dentro de `projects`:

- `vertice`: URL do VÉRTICE Auto Detail;
- `titan`: URL do Titan Fight Club;
- `mariana`: URL do Studio Mariana, já configurada.

URLs vazias produzem o estado “Demonstração em breve”.

## Substituir as imagens do portfólio

1. Salve imagens otimizadas (preferencialmente WebP) em `public/images/`.
2. Abra `src/data/projects.js`.
3. Preencha `previewImage` com o caminho público, por exemplo `/images/vertice.webp`.
4. Recomenda-se manter proporção aproximada de 1200 × 760 px.

Enquanto `previewImage` estiver vazio, o site mostra placeholders autorais claramente identificados como prévias em preparação.

## Alterar preços, recursos e planos

Edite `src/data/plans.js`. O arquivo concentra:

- preços e objetivos;
- recursos incluídos;
- observações de escopo;
- tabela comparativa.

Revise também as mensagens em `src/config/site.js` quando a oferta comercial mudar.

## Informações pendentes antes do lançamento

- Número comercial do WhatsApp;
- E-mail e redes sociais, se forem utilizados;
- URL oficial da FORJA Digital;
- URLs das demonstrações VÉRTICE e Titan;
- Screenshots finais dos três projetos;
- Definição comercial de domínio, hospedagem e eventuais serviços contínuos;
- Revisão final de textos, escopos e condições comerciais.

## Estrutura principal

```text
src/
  components/  Componentes de interface
  config/      Marca, contatos, URLs e mensagens
  data/        Planos, projetos e FAQ
  styles/      Estilos globais e dos componentes
  utils/       Geração segura do link do WhatsApp
```

O projeto é estático e não requer banco de dados ou backend nesta versão.
