"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [emailPromptOpen, setEmailPromptOpen] = useState(false);
  const email = 'suleman_gulzar@icloud.com';

  return <>
    <footer className="relative z-10 border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex w-[calc(100%-40px)] max-w-[1100px] flex-col gap-3 py-4 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-neutral-800 dark:text-neutral-200">
          <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-neutral-900 font-serif text-[9px] font-bold tracking-[-.08em] text-neutral-900 dark:border-white dark:text-white">SG</span>
          <span>Suleman Gulzar</span>
        </Link>
        <p>© 2026 Suleman Gulzar. All rights reserved.</p>
        <div className="flex gap-2">
          <a href="https://x.com/isulemangulzar" target="_blank" rel="noopener noreferrer" aria-label="X" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-base transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">𝕏</a>
          <a href="https://www.linkedin.com/in/sulemangulzar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-sm font-bold transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">in</a>
          <button type="button" onClick={() => setEmailPromptOpen(true)} aria-label="Email" className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-base transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">✉</button>
        </div>
      </div>
    </footer>

    {emailPromptOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/40 px-5 backdrop-blur-sm" role="presentation" onClick={() => setEmailPromptOpen(false)}>
      <div role="dialog" aria-modal="true" aria-labelledby="email-dialog-title" className="w-full max-w-sm rounded-2xl border border-neutral-200 bg-white p-6 text-neutral-900 shadow-2xl dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100" onClick={(event) => event.stopPropagation()}>
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-neutral-900 text-lg text-white dark:bg-white dark:text-neutral-900">✉</div>
        <h2 id="email-dialog-title" className="text-lg font-bold">Open your email app?</h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">Your email app will open with a new message addressed to:</p>
        <p className="mt-2 break-all rounded-lg bg-neutral-100 px-3 py-2 text-sm font-semibold dark:bg-neutral-800">{email}</p>
        <div className="mt-5 flex justify-end gap-3">
          <button type="button" onClick={() => setEmailPromptOpen(false)} className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold transition hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800">Cancel</button>
          <button type="button" onClick={() => { window.location.href = `mailto:${email}`; setEmailPromptOpen(false); }} className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">Open Email</button>
        </div>
      </div>
    </div>}
  </>;
}
