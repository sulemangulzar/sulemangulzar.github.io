import Link from 'next/link';

export default function Hero() {
  return <main className="relative z-10 mx-auto flex min-h-[calc(100vh-140px)] w-[calc(100%-40px)] max-w-[1100px] items-center">
    <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-20">
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[.16em] text-neutral-500 dark:text-neutral-400">AI Engineer · Full-Stack Builder</p>
        <h1 className="mb-4 max-w-[570px] text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.02] tracking-[-.07em]">Building intelligent systems for people.</h1>
        <p className="mb-6 max-w-[510px] text-lg leading-[1.55] text-neutral-500 dark:text-neutral-400">I build practical AI-powered products, intelligent workflows, and voice experiences with LLMs, RAG, agents, and modern web technologies.</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/projects" className="inline-flex items-center gap-3 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-neutral-900">View Projects <span>→</span></Link>
          <Link href="/about" className="inline-flex items-center gap-3 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-bold transition hover:-translate-y-0.5 dark:border-neutral-700">About Me <span>→</span></Link>
        </div>
      </div>
      <div className="flex justify-center md:justify-end">
        <svg viewBox="0 0 320 320" aria-label="Abstract artificial intelligence network" role="img" className="h-64 w-64 text-neutral-300 dark:text-neutral-700 sm:h-80 sm:w-80">
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="160" cy="160" r="108" strokeDasharray="3 9"/>
            <circle cx="160" cy="160" r="70"/>
            <path d="M160 50v40M160 230v40M50 160h40M230 160h40M82 82l28 28M210 210l28 28M238 82l-28 28M110 210l-28 28"/>
            <path d="M160 90v70M160 160v70M90 160h70M160 160h70M110 110l50 50M210 110l-50 50M110 210l50-50M210 210l-50-50"/>
          </g>
          <g fill="currentColor">
            <circle cx="160" cy="50" r="5"/><circle cx="160" cy="270" r="5"/><circle cx="50" cy="160" r="5"/><circle cx="270" cy="160" r="5"/>
            <circle cx="82" cy="82" r="4"/><circle cx="238" cy="82" r="4"/><circle cx="82" cy="238" r="4"/><circle cx="238" cy="238" r="4"/>
            <circle cx="160" cy="160" r="12"/>
          </g>
        </svg>
      </div>
    </div>
  </main>;
}
