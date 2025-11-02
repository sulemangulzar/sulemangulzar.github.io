'use client'

import { useEffect } from 'react';

export default function DynamicFavicon({ text = 'SG' }) {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Clear background (transparent)
      ctx.clearRect(0, 0, 64, 64);
      
      // Create gradient for text
      const gradient = ctx.createLinearGradient(0, 0, 64, 64);
      gradient.addColorStop(0, '#9333ea'); // purple-600
      gradient.addColorStop(1, '#2563eb'); // blue-600
      
      // Add text with gradient
      ctx.fillStyle = gradient;
      ctx.font = 'bold 40px Poppins, Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 38, 38);
      
      // Set as favicon
      const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/png'; // Changed to PNG for transparency support
      link.rel = 'shortcut icon';
      link.href = canvas.toDataURL('image/png');
      document.head.appendChild(link);
    }
  }, [text]);
  
  return null;
}