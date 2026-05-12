export type OutputType =
  | 'ebook'
  | 'lead_magnet'
  | 'executive_summary'
  | 'blog_series'
  | 'email_drip'
  | 'faq'
  | 'white_paper'
  | 'sales_enablement'
  | 'course_notes'

export type Tone =
  | 'executive'
  | 'academic'
  | 'creator'
  | 'tactical'
  | 'premium_consulting'
  | 'plain_english'

export type AssetRequest = {
  sourceType: 'url' | 'transcript' | 'notes'
  source: string
  outputType: OutputType
  tone: Tone
  audience: string
  goal: string
}

export type AssetResult = {
  title: string
  subtitle: string
  executiveSummary: string
  chapterMap: Array<{
    title: string
    purpose: string
    bullets: string[]
  }>
  extractedFrameworks: string[]
  assetPack: Array<{
    type: string
    description: string
  }>
  markdown: string
}
