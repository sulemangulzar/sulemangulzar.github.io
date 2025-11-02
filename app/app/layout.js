'use client'
import React from 'react'
import { Poppins } from "next/font/google";
import DynamicFavicon from '../components/DynamicFavicon'

import './globals.css'
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <title>- Portfolio</title>  {/* ← ADD THIS */}
      </head>
      <body>
        <DynamicFavicon text="SG" />
        {children}
      </body>
    </html>
  );
}