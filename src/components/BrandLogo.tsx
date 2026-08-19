import React from 'react';

export interface BrandLogoProps {
  name: string;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ name, className = 'h-6' }) => {
  const brandLower = name.toLowerCase();

  if (brandLower.includes('philips')) {
    return (
      <svg className={className} viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Philips">
        <text x="50%" y="26" textAnchor="middle" fill="#0B5FFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="24" letterSpacing="2">PHILIPS</text>
      </svg>
    );
  }

  if (brandLower.includes('thomson')) {
    return (
      <svg className={className} viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Thomson">
        <text x="50%" y="26" textAnchor="middle" fill="#D32F2F" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="23" letterSpacing="1.5">THOMSON</text>
      </svg>
    );
  }

  if (brandLower.includes('samsung')) {
    return (
      <svg className={className} viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Samsung">
        <text x="50%" y="26" textAnchor="middle" fill="#034EA2" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="23" letterSpacing="3">SAMSUNG</text>
      </svg>
    );
  }

  if (brandLower.includes('lg')) {
    return (
      <svg className={className} viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="LG">
        <circle cx="28" cy="18" r="14" fill="#A50034" />
        <circle cx="23" cy="15" r="2" fill="#FFFFFF" />
        <path d="M 28 10 A 8 8 0 0 0 20 18 A 8 8 0 0 0 28 26 L 34 26" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M 28 14 L 28 22 L 31 22" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <text x="54" y="26" fill="#A50034" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" letterSpacing="1">LG</text>
      </svg>
    );
  }

  if (brandLower.includes('sony')) {
    return (
      <svg className={className} viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Sony">
        <text x="50%" y="26" textAnchor="middle" fill="#000000" fontFamily="Georgia, serif" fontWeight="bold" fontSize="24" letterSpacing="3">SONY</text>
      </svg>
    );
  }

  if (brandLower.includes('panasonic')) {
    return (
      <svg className={className} viewBox="0 0 170 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Panasonic">
        <text x="50%" y="26" textAnchor="middle" fill="#00438F" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="21" letterSpacing="1">Panasonic</text>
      </svg>
    );
  }

  if (brandLower.includes('tcl')) {
    return (
      <svg className={className} viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="TCL">
        <text x="50%" y="26" textAnchor="middle" fill="#E60012" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="26" letterSpacing="3">TCL</text>
      </svg>
    );
  }

  if (brandLower.includes('hisense')) {
    return (
      <svg className={className} viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Hisense">
        <text x="50%" y="25" textAnchor="middle" fill="#009A96" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="23" letterSpacing="1.5">Hisense</text>
      </svg>
    );
  }

  if (brandLower.includes('gogen')) {
    return (
      <svg className={className} viewBox="0 0 140 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="GoGEN">
        <text x="50%" y="25" textAnchor="middle" fill="#E45900" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="23" letterSpacing="1">GoGEN</text>
      </svg>
    );
  }

  if (brandLower.includes('hyundai')) {
    return (
      <svg className={className} viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Hyundai">
        <text x="50%" y="25" textAnchor="middle" fill="#002C6C" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="21" letterSpacing="2">HYUNDAI</text>
      </svg>
    );
  }

  if (brandLower.includes('luxtronic')) {
    return (
      <svg className={className} viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Luxtronic">
        <text x="50%" y="25" textAnchor="middle" fill="#1E293B" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="20" letterSpacing="2">LUXTRONIC</text>
      </svg>
    );
  }

  return (
    <span className="font-bold text-slate-800 text-sm">{name}</span>
  );
};
