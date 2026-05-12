# AssetForge Product Specification

## 1. Product Definition

AssetForge is a content multiplication platform that transforms long-form expert content into publishable downstream commercial assets.

The first wedge is webinar-to-ebook / webinar-to-asset-pack conversion. The larger platform opportunity is expert knowledge transformation across webinars, podcasts, workshops, sales calls, lectures, consulting sessions, and training libraries.

## 2. Core Positioning

Do not position the product as an "AI ebook generator."

Preferred positioning:

- Turn webinars into revenue assets
- Content multiplication engine
- Transform expert knowledge into publishable content
- Repurpose long-form expertise into marketable digital assets
- Convert dormant replays into acquisition, nurture, and sales infrastructure

## 3. Target Customers

Primary early targets:

1. B2B SaaS companies
2. Consultants and agencies
3. Enterprise training teams
4. Coaches and info-product businesses
5. Professional education providers
6. Compliance and enablement organizations

These customers already understand content ROI, lead capture, nurture funnels, sales enablement, and paid acquisition economics.

## 4. Initial MVP User Flow

1. User lands on marketing page
2. User clicks Magic Demo
3. User enters webinar URL or transcript
4. User selects output type
5. User selects tone/style
6. User defines target audience and goal
7. System generates preview
8. User sees:
   - Executive summary
   - Chapter architecture
   - Extracted frameworks
   - Asset pack recommendations
   - Exportable Markdown
9. User pays to export full asset

## 5. MVP Input Types

Phase 1:

- Manual transcript paste
- YouTube/webinar URL placeholder
- Expert notes paste

Phase 2:

- YouTube transcript extraction
- Audio/video upload
- PDF upload
- Slide deck upload
- Website ingestion

## 6. MVP Output Types

Phase 1:

- Ebook draft
- Lead magnet
- Executive summary
- Blog series
- Email drip campaign
- FAQ page

Phase 2:

- White paper
- Course notes
- Worksheets
- Sales enablement deck
- Knowledge-base articles
- Onboarding documents
- Study guides

## 7. Core Differentiators

### Semantic Restructuring

The system must identify conceptual clusters, repeated ideas, implicit models, signature frameworks, and theme hierarchy.

### Spoken-to-Written Transformation

The system must remove filler, false starts, repetition, webinar housekeeping, and Q&A noise while preserving substance.

### Chapter Architecture

The system must produce a coherent table of contents and section sequence rather than merely summarizing transcript chunks.

### Persona Preservation

The system must support tone modes such as executive, academic, tactical, creator-friendly, premium consulting, and plain English.

### Multi-Source Synthesis

Future versions should ingest transcripts, slides, PDFs, websites, notes, and documents to create a unified asset.

### Human-in-the-Loop Editing

The best experience is not fully automatic. Users should approve chapter splits, drag concepts, expand sections, change tone, and regenerate sections.

## 8. Data Model

### User

- id
- email
- name
- plan
- credit_balance
- created_at

### Project

- id
- user_id
- title
- status
- source_type
- output_type
- tone
- audience
- goal
- created_at
- updated_at

### Source

- id
- project_id
- source_type
- raw_text
- file_url
- metadata
- created_at

### GenerationJob

- id
- project_id
- status
- current_step
- error
- model_provider
- token_usage
- created_at
- completed_at

### Asset

- id
- project_id
- asset_type
- title
- markdown
- html
- pdf_url
- version
- created_at

### Payment

- id
- user_id
- stripe_session_id
- product_type
- amount
- credits_added
- created_at

## 9. AI Pipeline

### Step 1: Source Ingestion

- Accept source URL, transcript, notes, or uploaded file
- Transcribe if audio/video
- Extract text if PDF/slides/docs
- Normalize raw material

### Step 2: Segmentation

- Split content into semantic sections
- Identify speaker changes
- Remove housekeeping content
- Preserve Q&A separately

### Step 3: Concept Extraction

- Extract claims
- Extract examples
- Extract frameworks
- Extract repeated motifs
- Extract pain points
- Extract solution narratives

### Step 4: Deduplication

- Merge repeated ideas
- Retain strongest formulation
- Preserve unique examples
- Remove shallow repetitions

### Step 5: Chapter Planning

- Build table of contents
- Assign concepts to sections
- Define section purpose
- Identify missing connective tissue

### Step 6: Draft Generation

- Generate selected asset type
- Apply tone mode
- Preserve speaker expertise
- Build coherent narrative

### Step 7: Derivative Generation

- Generate asset pack variants
- Create email, FAQ, blogs, summaries
- Preserve consistent terminology

### Step 8: Export

- Markdown
- HTML
- PDF
- DOCX in future release

## 10. Prompt Orchestration

Recommended prompt chain:

1. Transcript cleanup prompt
2. Concept extraction prompt
3. Concept clustering prompt
4. Deduplication prompt
5. Chapter architecture prompt
6. Tone calibration prompt
7. Draft generation prompt
8. Editorial critique prompt
9. Revision prompt
10. Asset pack generation prompt

## 11. Pricing

Early validation pricing:

- Free Preview: $0
- Lead Magnet: $9
- Ebook Draft: $19
- Premium Export: $49
- Multi-Source Synthesis: $99+

Later SaaS pricing:

- Starter: $29/mo
- Pro: $99/mo
- Agency: $299/mo
- Enterprise: custom

## 12. Build Roadmap

### Sprint 1: Magic Demo

- Landing page
- Demo form
- Mock pipeline
- Preview output
- Markdown export

### Sprint 2: Real AI

- OpenAI/Anthropic provider abstraction
- Prompt orchestration
- Transcript paste workflow
- Job status tracking

### Sprint 3: Payment

- Stripe checkout
- Credit model
- Export gating

### Sprint 4: Storage

- Supabase auth
- Project storage
- Asset versioning

### Sprint 5: Multi-Source

- PDF upload
- Slide deck extraction
- URL ingestion
- Source management

### Sprint 6: Editor

- Chapter approval
- Section regeneration
- Tone rewrite
- Export final PDF
