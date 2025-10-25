'use client'
import React from 'react'
import { Poppins } from "next/font/google";

import './globals.css'
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}