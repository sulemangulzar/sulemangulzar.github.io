"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, toggleDarkMode, mobileMenuOpen, setMobileMenuOpen }) {
  const pathname = usePathname();
  const links = [['Home','/'],['Projects','/projects'],['Posts','/posts'],['About','/about']];
  return <header className="relative z-20 mx-auto flex h-[76px] w-[calc(100%-40px)] max-w-[1100px] items-center justify-between">
    <Link href="/" className="flex items-center gap-2.5 text-[15px] font-bold tracking-[-.3px]"><span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-neutral-900 font-serif text-[11px] font-bold tracking-[-.08em] text-neutral-900 dark:border-white dark:text-white">SG</span><span>Suleman Gulzar</span></Link>
    <nav className="hidden items-center gap-6 font-mono text-[13px] font-medium uppercase tracking-[.08em] text-neutral-500 dark:text-neutral-400 md:flex">
      {links.map(([label, href]) => <Link key={href} href={href} className={`hover:text-neutral-950 dark:hover:text-white ${pathname === href ? 'text-neutral-950 dark:text-white' : ''}`}>{label}</Link>)}
      <button onClick={toggleDarkMode} className="ml-1 flex items-center gap-2 text-neutral-800 transition-colors duration-300 dark:text-neutral-100" aria-label="Toggle color mode"><span className="text-xl">{darkMode ? '☾' : '☼'}</span>{darkMode ? 'Night mode' : 'Day mode'}</button>
    </nav>
    <div className="flex items-center gap-3 md:hidden"><button onClick={toggleDarkMode} className="text-xl transition-transform duration-300 hover:rotate-12" aria-label="Toggle color mode">{darkMode ? <Sun size={19}/> : <Moon size={19}/>}</button><button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-md border border-neutral-300 p-2 dark:border-neutral-700" aria-label="Menu">{mobileMenuOpen ? <X size={18}/> : <Menu size={18}/>}</button></div>
    {mobileMenuOpen && <nav className="absolute left-0 right-0 top-[68px] rounded-xl border border-neutral-200 bg-white/95 p-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-900/95 md:hidden">{links.map(([label,href]) => <Link onClick={() => setMobileMenuOpen(false)} className="block border-b border-neutral-100 py-3 font-mono text-sm font-medium uppercase tracking-[.08em] last:border-0 dark:border-neutral-800" href={href} key={href}>{label}</Link>)}</nav>}
  </header>;
}
