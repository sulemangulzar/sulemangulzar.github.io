"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AllProjectsPage from '@/components/AllProjectsPage';

export default function ProjectsPage() {
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter(); // ✅ Now we use it below

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const goToHome = () => {
    router.push('/'); 
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <AllProjectsPage 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode} 
        goToHome={goToHome} 
      />
    </div>
  );
}