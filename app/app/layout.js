'use client'
import React from 'react'
import DynamicFavicon from '../components/DynamicFavicon'

import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-sans" suppressHydrationWarning>
      <head>
        <title>Suleman Gulzar — Portfolio</title>
        <script dangerouslySetInnerHTML={{ __html: `(() => { try { const saved = localStorage.getItem('theme'); const dark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; if (dark) document.documentElement.classList.add('dark'); } catch (error) {} })()` }} />
      </head>
      <body className="cursor-[url('/cursor.svg')_16_16,_auto] font-sans">
        <DynamicFavicon text="SG" />
        {children}
      </body>
    </html>
  );
}