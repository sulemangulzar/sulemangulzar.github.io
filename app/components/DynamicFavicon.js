'use client'

import { useEffect } from 'react';

export default function DynamicFavicon({ text = 'SG' }) {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Draw the same monochrome monogram used by the site logo.
      ctx.clearRect(0, 0, 64, 64);
      ctx.strokeStyle = '#171717';
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.arc(32, 32, 27, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = '#171717';
      ctx.font = 'bold 25px Georgia, serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 32, 34);
      
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