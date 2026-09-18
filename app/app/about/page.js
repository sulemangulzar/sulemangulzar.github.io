"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackgroundLines from '@/components/BackgroundLines';

const focusGroups = [
  ['Build', 'Python · FastAPI · REST APIs · PostgreSQL'],
  ['Create', 'React · JavaScript · HTML · CSS · Tailwind CSS'],
  ['Reason', 'LLMs · Prompt Engineering · Structured Outputs'],
  ['Retrieve', 'RAG · Embeddings · Vector Databases · Reranking'],
  ['Orchestrate', 'LangChain · LangGraph · GraphRAG · AI Agents'],
  ['Listen', 'Voice Agents · Conversational AI Systems'],
];

export default function About() {
  const [darkMode, setDarkMode] = useState(() => typeof window !== 'undefined' && (window.localStorage.getItem('theme') === 'dark' || (!window.localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => { const savedTheme = window.localStorage.getItem('theme'); setDarkMode(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches); }, []);
  const toggleDarkMode = () => setDarkMode((current) => { const next = !current; window.localStorage.setItem('theme', next ? 'dark' : 'light'); return next; });

  return <div className={darkMode ? 'dark' : ''}><div className="min-h-screen bg-white text-neutral-900 transition-colors duration-500 dark:bg-neutral-900 dark:text-neutral-100"><BackgroundLines/><Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/><main className="relative z-10 mx-auto min-h-[calc(100vh-140px)] w-[calc(100%-40px)] max-w-[900px] py-10 sm:py-14">
    <section className="grid gap-10 md:grid-cols-[1.2fr_.8fr] md:items-center">
      <div><p className="mb-3 text-sm font-semibold uppercase tracking-[.16em] text-neutral-500 dark:text-neutral-400">A little about me</p><h1 className="mb-5 text-4xl font-bold tracking-[-.06em] sm:text-5xl">Building useful AI, one system at a time.</h1><p className="max-w-[600px] text-lg leading-[1.65] text-neutral-500 dark:text-neutral-400">I&apos;m a Computer Science student focused on building practical AI-powered applications and becoming a strong Full-Stack AI Engineer. I enjoy taking an idea from the backend and AI logic all the way to a usable frontend application.</p></div>
      <div className="mx-auto overflow-hidden rounded-full border-4 border-white bg-neutral-100 shadow-xl shadow-neutral-300/30 dark:border-neutral-800 dark:bg-neutral-800 dark:shadow-black/30"><Image src="/profile-pic-5.png" alt="Suleman Gulzar" width={640} height={800} className="h-64 w-64 object-cover object-center transition duration-500 hover:scale-105 sm:h-72 sm:w-72"/></div>
    </section>
    <section className="mt-20"><div className="mb-7 flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><p className="mb-2 text-sm font-semibold uppercase tracking-[.16em] text-neutral-500 dark:text-neutral-400">What I work with</p><h2 className="text-3xl font-bold tracking-[-.05em]">Technical focus</h2></div><p className="max-w-sm text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">From reliable APIs to tool-using agents, I care about making AI systems useful beyond the demo.</p></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{focusGroups.map(([title, tools], index) => <article key={title} className="rounded-xl border border-neutral-200 bg-white/60 p-4 cursor-[url('/cursor.svg')_16_16,_auto] transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-lg hover:shadow-neutral-200/50 dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-neutral-600 dark:hover:shadow-black/20"><span className="font-mono text-xs text-neutral-400">0{index + 1}</span><h3 className="mt-4 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{tools}</p></article>)}</div></section>
    <section className="mt-16 rounded-2xl bg-neutral-900 p-7 text-white sm:p-10 dark:bg-white dark:text-neutral-900"><div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><div><p className="mb-3 text-sm font-semibold uppercase tracking-[.16em] text-neutral-400 dark:text-neutral-500">Have an idea?</p><h2 className="max-w-lg text-3xl font-bold tracking-[-.05em] sm:text-4xl">Let&apos;s build something useful.</h2><p className="mt-3 max-w-md leading-relaxed text-neutral-400 dark:text-neutral-600">I&apos;m focused on improving my fundamentals, shipping production-oriented AI projects, and designing systems people can rely on.</p></div><a href="mailto:suleman_gulzar@icloud.com" className="inline-flex shrink-0 cursor-[url('/cursor.svg')_16_16,_auto] items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-bold text-neutral-900 transition hover:-translate-y-0.5 hover:bg-neutral-200 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-700">Start a conversation <span>↗</span></a></div></section>
  </main><Footer/></div></div>;
}
