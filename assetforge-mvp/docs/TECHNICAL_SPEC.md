# AssetForge Technical Specification

## 1. Architecture

The recommended architecture is a Next.js application with server-side API routes and a modular generation pipeline.

### Frontend

- Next.js App Router
- TypeScript
- Tailwind CSS
- React components
- Client-side generation form
- Server-rendered marketing page

### Backend

- Next.js API routes for MVP
- Later migration to background workers for long jobs
- Provider adapters for AI models
- Storage and auth through Supabase

### Infrastructure

- Vercel for hosting
- Supabase for database/auth/storage
- Stripe for payments
- PostHog/Plausible for analytics
- Resend for transactional email

## 2. API Routes

### POST /api/generate

Creates a generation job and returns a generated preview.

Request:

```json
{
  "sourceType": "url",
  "source": "https://example.com/webinar",
  "outputType": "ebook",
  "tone": "premium_consulting",
  "audience": "B2B SaaS companies",
  "goal": "Generate lead nurturing assets"
}
```

Response:

```json
{
  "result": {
    "title": "...",
    "subtitle": "...",
    "executiveSummary": "...",
    "chapterMap": [],
    "extractedFrameworks": [],
    "assetPack": [],
    "markdown": "..."
  }
}
```

## 3. Provider Abstraction

Create a model provider interface:

```ts
type ModelProvider = {
  generateText(prompt: string, options?: GenerationOptions): Promise<string>
  generateJson<T>(prompt: string, schema: unknown): Promise<T>
}
```

Implementations:

- OpenAIProvider
- AnthropicProvider
- GeminiProvider
- MockProvider

## 4. Transcription

Recommended options:

- Deepgram for fast production transcription
- Whisper for lower-cost direct processing
- YouTube transcript extraction when available

## 5. File Extraction

Recommended libraries/services:

- PDF text extraction
- PPTX text extraction
- HTML scraping
- Markdown conversion
- Object storage for raw uploads

## 6. Background Jobs

For real workloads, generation should not block API requests.

Recommended options:

- Inngest
- Trigger.dev
- BullMQ with Redis
- Supabase Edge Functions
- Vercel background functions where available

## 7. Database

Use Supabase Postgres.

Critical tables:

- users
- projects
- sources
- generation_jobs
- assets
- payments

## 8. Export Pipeline

Phase 1:

- Markdown
- HTML

Phase 2:

- PDF via Playwright or HTML-to-PDF
- DOCX via docx generation
- Branded templates

## 9. Security Controls

- Rate limit unauthenticated generation
- Do not expose API keys to client
- Sanitize URLs
- Validate file type and file size
- Store raw content securely
- Apply per-user authorization checks
- Log model usage and cost
- Prevent prompt injection from source documents by isolating source text from control prompts

## 10. Observability

Track:

- Source type
- Output type
- Conversion rate
- Preview generation completion
- Export purchase
- Generation cost
- Token usage
- Retry/failure rate
- Average generation time
