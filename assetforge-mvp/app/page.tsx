import { HeroAnimation } from '@/components/HeroAnimation'
import { MagicDemo } from '@/components/MagicDemo'

const features = [
  ['Semantic restructuring', 'Clusters concepts, removes repetition, extracts implicit frameworks, and builds publishable narrative structure.'],
  ['Persona preservation', 'Converts long-form expertise into executive, academic, tactical, creator-friendly, or premium consulting tone.'],
  ['Multi-source synthesis', 'Combines webinars, transcripts, PDFs, slides, websites, notes, and supporting documents into one coherent asset.'],
  ['Human-in-the-loop editing', 'Lets users approve chapter splits, change tone, expand sections, and steer the final asset system.'],
]

const outputs = ['Ebook', 'Lead Magnet', 'Executive Summary', 'White Paper', 'Blog Series', 'Email Drip', 'FAQ Page', 'Sales Kit', 'Course Notes', 'Knowledge Base']

export default function Home() {
  return (
    <main className="relative z-10">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-7">
        <a href="#" className="flex items-center gap-3 text-lg font-black tracking-[-0.04em]">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan via-violet to-pink shadow-glow">
            ◈
          </span>
          AssetForge
        </a>
        <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
          <a href="#problem" className="hover:text-white">Problem</a>
          <a href="#engine" className="hover:text-white">Engine</a>
          <a href="#demo" className="hover:text-white">Demo</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#demo" className="rounded-full bg-gradient-to-r from-cyan to-mint px-5 py-3 font-black text-slate-950">Try Demo</a>
        </nav>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-96px)] max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_18px_rgba(125,255,191,.8)]" />
            Content multiplication for expert-led businesses
          </div>
          <h1 className="mt-7 max-w-4xl text-6xl font-black leading-[0.89] tracking-[-0.085em] md:text-8xl">
            Turn dead webinars into <span className="bg-gradient-to-r from-white via-cyan to-pink bg-clip-text text-transparent">revenue assets.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            AssetForge converts webinars, transcripts, slide decks, PDFs, websites, and expert notes into publishable ebooks,
            lead magnets, campaigns, sales enablement material, and knowledge-base assets.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#demo" className="rounded-full bg-gradient-to-r from-cyan to-mint px-6 py-4 font-black text-slate-950 shadow-glow">Launch Magic Demo →</a>
            <a href="#engine" className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-4 font-black text-white backdrop-blur-xl">View Engine</a>
          </div>
        </div>

        <HeroAnimation />
      </section>

      <section id="problem" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-cyan">The problem</div>
          <h2 className="text-4xl font-black leading-none tracking-[-0.07em] md:text-6xl">Most webinars contain valuable IP. Then they disappear.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Teams spend money on production, ad traffic, presenters, slides, and sales funnels. The replay gets uploaded, a few leads arrive, and the asset becomes dormant.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Replay archives do not compound', 'A webinar replay is usually a static artifact. It does not automatically create nurture assets, documentation, sales content, or lead magnets.'],
            ['Summaries are not products', 'The market does not need another shallow transcript summarizer. It needs structured transformation of expertise into commercial assets.'],
            ['The value already exists', 'The webinar already contains audience pain, solution framing, domain expertise, and conversion-oriented messaging. AssetForge unlocks it.'],
          ].map(([title, body]) => (
            <article key={title} className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-black tracking-[-0.05em]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="engine" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-cyan">The engine</div>
          <h2 className="text-4xl font-black leading-none tracking-[-0.07em] md:text-6xl">Built where generic AI writing tools fail.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The differentiator is not generation alone. The durable product advantage is semantic restructuring, deduplication, narrative architecture, and editorial control.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map(([title, body]) => (
            <article key={title} className="rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 shadow-2xl backdrop-blur-xl">
              <h3 className="text-xl font-black tracking-[-0.05em]">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{body}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] border border-white/15 bg-white/[0.07] p-7 shadow-2xl backdrop-blur-xl">
          <h3 className="text-2xl font-black tracking-[-0.05em]">Asset Pack Outputs</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {outputs.map((item) => (
              <span key={item} className="rounded-full border border-white/15 bg-black/20 px-4 py-3 text-sm font-black text-slate-100">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <MagicDemo />

      <section id="pricing" className="mx-auto max-w-7xl px-5 py-24">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-cyan">Pricing thesis</div>
          <h2 className="text-4xl font-black leading-none tracking-[-0.07em] md:text-6xl">Start with pay-per-export. Graduate into SaaS.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Transactional pricing is the fastest validation path. Once repeat usage is proven, convert the highest-LTV segments into recurring subscriptions.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {[
            ['Free Preview', '$0', 'Short sample, chapter map, and asset outline.'],
            ['Lead Magnet', '$9', 'Concise downloadable acquisition asset.'],
            ['Ebook Draft', '$19', 'Structured ebook draft with chapter architecture.'],
            ['Premium Pack', '$49+', 'Ebook, summary, campaign, FAQ, blogs, and sales kit.'],
          ].map(([name, price, desc], index) => (
            <article key={name} className={`rounded-[2rem] border border-white/15 p-7 shadow-2xl backdrop-blur-xl ${index === 2 ? 'bg-cyan/15' : 'bg-white/[0.07]'}`}>
              <h3 className="font-black">{name}</h3>
              <div className="my-4 text-4xl font-black tracking-[-0.07em]">{price}</div>
              <p className="leading-7 text-slate-300">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-white/15 px-5 py-10 text-sm text-slate-400 md:flex-row">
        <div>© 2026 AssetForge. Replace with your company name.</div>
        <div>Webinars → Expertise → Publishable Assets → Revenue</div>
      </footer>
    </main>
  )
}
