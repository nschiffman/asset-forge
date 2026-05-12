'use client'

import { useState } from 'react'
import { AssetResult } from '@/lib/types'

export function MagicDemo() {
  const [source, setSource] = useState('Paste webinar URL, transcript, or expert notes here...')
  const [outputType, setOutputType] = useState('ebook')
  const [tone, setTone] = useState('premium_consulting')
  const [audience, setAudience] = useState('B2B SaaS companies, consultants, agencies, and expert-led businesses')
  const [goal, setGoal] = useState('Turn dormant webinar content into revenue-generating downstream assets')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AssetResult | null>(null)
  const [error, setError] = useState('')

  async function submit() {
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sourceType: source.startsWith('http') ? 'url' : 'transcript',
          source,
          outputType,
          tone,
          audience,
          goal,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Generation failed.')
        return
      }

      setResult(data.result)
    } catch {
      setError('Unable to reach the generation API.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="demo" className="mx-auto max-w-7xl px-5 py-24">
      <div className="mb-10 max-w-3xl">
        <div className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-cyan">Magic demo</div>
        <h2 className="text-4xl font-black leading-none tracking-[-0.07em] md:text-6xl">
          Paste expertise. Generate the asset system.
        </h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          This MVP uses a mock generation pipeline so the app runs immediately. Replace the pipeline with real AI orchestration when ready.
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl">
          <label className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-slate-400">Source</label>
          <textarea
            className="min-h-40 w-full rounded-2xl border border-white/15 bg-black/30 p-4 text-sm leading-6 text-white outline-none focus:border-cyan"
            value={source}
            onChange={(e) => setSource(e.target.value)}
          />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-slate-400">Output</label>
              <select className="w-full rounded-2xl border border-white/15 bg-black/30 p-4 text-white outline-none" value={outputType} onChange={(e) => setOutputType(e.target.value)}>
                <option value="ebook">Ebook</option>
                <option value="lead_magnet">Lead Magnet</option>
                <option value="executive_summary">Executive Summary</option>
                <option value="blog_series">Blog Series</option>
                <option value="email_drip">Email Drip</option>
                <option value="faq">FAQ</option>
                <option value="white_paper">White Paper</option>
                <option value="sales_enablement">Sales Enablement</option>
                <option value="course_notes">Course Notes</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-black uppercase tracking-[0.16em] text-slate-400">Tone</label>
              <select className="w-full rounded-2xl border border-white/15 bg-black/30 p-4 text-white outline-none" value={tone} onChange={(e) => setTone(e.target.value)}>
                <option value="executive">Executive</option>
                <option value="academic">Academic</option>
                <option value="creator">Creator Friendly</option>
                <option value="tactical">Tactical</option>
                <option value="premium_consulting">Premium Consulting</option>
                <option value="plain_english">Plain English</option>
              </select>
            </div>
          </div>

          <label className="mb-2 mt-4 block text-xs font-black uppercase tracking-[0.16em] text-slate-400">Audience</label>
          <input className="w-full rounded-2xl border border-white/15 bg-black/30 p-4 text-white outline-none" value={audience} onChange={(e) => setAudience(e.target.value)} />

          <label className="mb-2 mt-4 block text-xs font-black uppercase tracking-[0.16em] text-slate-400">Commercial Goal</label>
          <input className="w-full rounded-2xl border border-white/15 bg-black/30 p-4 text-white outline-none" value={goal} onChange={(e) => setGoal(e.target.value)} />

          <button
            onClick={submit}
            disabled={loading}
            className="mt-5 w-full rounded-full bg-gradient-to-r from-cyan to-mint px-6 py-4 font-black text-slate-950 shadow-glow transition hover:-translate-y-0.5 disabled:opacity-60"
          >
            {loading ? 'Generating...' : 'Generate Asset Preview'}
          </button>

          {error && <p className="mt-4 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200">{error}</p>}
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-[#f8f6ef] p-8 text-slate-900 shadow-2xl">
          {!result ? (
            <div className="flex min-h-[500px] flex-col justify-center">
              <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Preview</div>
              <h3 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-[-0.05em]">
                Your generated asset preview will appear here.
              </h3>
              <p className="mt-5 max-w-xl leading-7 text-slate-600">
                The preview will include an executive summary, chapter map, extracted frameworks, and asset pack recommendations.
              </p>
            </div>
          ) : (
            <div>
              <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Generated Asset</div>
              <h3 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.05em]">{result.title}</h3>
              <p className="mt-3 text-lg text-slate-600">{result.subtitle}</p>

              <div className="mt-7 rounded-2xl bg-slate-900/5 p-5">
                <h4 className="font-black">Executive Summary</h4>
                <p className="mt-2 leading-7 text-slate-700">{result.executiveSummary}</p>
              </div>

              <div className="mt-7">
                <h4 className="font-black">Chapter Architecture</h4>
                <div className="mt-3 grid gap-3">
                  {result.chapterMap.map((chapter, index) => (
                    <div key={chapter.title} className="rounded-2xl border border-slate-900/10 p-4">
                      <div className="text-sm font-black text-slate-500">0{index + 1}</div>
                      <div className="mt-1 font-black">{chapter.title}</div>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{chapter.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <h4 className="font-black">Recommended Asset Pack</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {result.assetPack.map((asset) => (
                    <span key={asset.type} className="rounded-full bg-slate-900 px-3 py-2 text-xs font-black text-white">
                      {asset.type}
                    </span>
                  ))}
                </div>
              </div>

              <details className="mt-7">
                <summary className="cursor-pointer font-black">Show Markdown Export</summary>
                <pre className="mt-3 max-h-72 overflow-auto rounded-2xl bg-slate-950 p-4 text-xs leading-5 text-slate-100">{result.markdown}</pre>
              </details>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
