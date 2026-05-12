# AssetForge MVP

AssetForge is a webinar-to-digital-asset multiplication engine. The MVP lets a user submit a webinar/video/transcript source, choose an output type and tone, and generate a structured content asset pack preview.

This repository is a production-oriented starter scaffold for a Next.js app. It includes:

- Landing page
- Magic demo workflow
- Job creation API route
- Mock AI pipeline
- Asset preview interface
- Product specifications
- Implementation roadmap
- Environment variable template

## MVP Positioning

AssetForge is not an "AI ebook generator." It is a content multiplication engine that turns existing expert knowledge into publishable downstream assets:

- Ebook
- Lead magnet
- Executive summary
- Blog series
- Email drip campaign
- FAQ page
- Course notes
- Sales enablement material
- White paper

## Fast Start

```bash
npm install
npm run dev
```

Then open:

```bash
http://localhost:3000
```

## Environment

Copy `.env.example` to `.env.local`.

```bash
cp .env.example .env.local
```

For the starter build, AI generation is mocked so the app runs immediately. Replace the mock pipeline in:

```bash
lib/pipeline.ts
```

with calls to OpenAI, Anthropic, Gemini, Deepgram, Whisper, Supabase, or your preferred services.

## Suggested Production Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase for database/auth/storage
- Stripe for checkout and credit packs
- OpenAI / Anthropic / Gemini for generation
- Deepgram or Whisper for transcription
- Vercel for deployment
- PostHog or Plausible for analytics

## MVP Build Order

1. Static landing page
2. Magic demo form
3. Transcript paste input
4. Mock output generation
5. Exportable Markdown
6. AI provider integration
7. PDF export
8. Authentication
9. Credit-based payments
10. Multi-source uploads
11. Human-in-the-loop editor
12. Versioned asset workspace
