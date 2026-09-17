"use client";
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import BackgroundLines from '@/components/BackgroundLines';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

export default function Home() { const [darkMode,setDarkMode]=useState(()=>typeof window !== 'undefined' && (window.localStorage.getItem('theme') === 'dark' || (!window.localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches))); const [mobileMenuOpen,setMobileMenuOpen]=useState(false); useEffect(()=>{const savedTheme=window.localStorage.getItem('theme');setDarkMode(savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches)},[]); return <div className={darkMode?'dark':''}><div className="min-h-screen bg-white font-sans text-neutral-900 transition-colors duration-500 dark:bg-neutral-900 dark:text-neutral-100"><BackgroundLines/><Navbar darkMode={darkMode} toggleDarkMode={()=>setDarkMode(current=>{const next=!current;window.localStorage.setItem('theme',next?'dark':'light');return next})} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/><Hero/><Footer/></div></div>; }
