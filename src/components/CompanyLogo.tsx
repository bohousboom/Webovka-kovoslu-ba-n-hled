import React from 'react';

export interface CompanyLogoProps {
  className?: string;
  size?: number | string;
  withBadge?: boolean;
  title?: string;
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  className = 'w-10 h-10',
  size,
  withBadge = true,
  title = 'A.V. Kovoslužba s.r.o. - Servis televizorů a elektroniky',
}) => {
  const style = size ? { width: size, height: size } : undefined;

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 select-none ${className}`}
      style={style}
      aria-label={title}
      role="img"
    >
      <title>{title}</title>

      {/* 1. Square Badge background with rounded corners */}
      {withBadge && (
        <rect width="100" height="100" rx="22" ry="22" fill="#FABC00" />
      )}

      {/* 2. TV Antenna with ball tips */}
      <g stroke="#14213D" strokeWidth="4" strokeLinecap="round">
        <line x1="44" y1="27" x2="29" y2="13" />
        <line x1="44" y1="27" x2="57" y2="15" />
      </g>
      <circle cx="29" cy="13" r="2.5" fill="#14213D" />
      <circle cx="57" cy="15" r="2.5" fill="#14213D" />
      <circle cx="44" cy="27" r="3" fill="#14213D" />

      {/* 3. Left TV foot / stand */}
      <line x1="26" y1="71" x2="20" y2="80" stroke="#14213D" strokeWidth="4.5" strokeLinecap="round" />

      {/* 4. Main Retro TV Casing (Navy) */}
      <rect x="15" y="27" width="58" height="45" rx="9" fill="#14213D" />

      {/* 5. TV Screen Cutout (Amber #FABC00 matching badge) */}
      <rect x="21" y="33" width="34" height="29" rx="6" fill="#FABC00" />

      {/* 6. TV Controls on right panel (Amber #FABC00) */}
      <circle cx="63.5" cy="38.5" r="3" fill="#FABC00" />
      <circle cx="63.5" cy="47.5" r="3" fill="#FABC00" />
      <rect x="60" y="56" width="7" height="2.5" rx="1.25" fill="#FABC00" />

      {/* 7. Gear Cutout Halo to crisply separate gear from dark TV body */}
      <circle cx="70" cy="70" r="19" fill="#FABC00" />

      {/* 8. Gear (Navy #14213D) with 8 teeth overlapping bottom right */}
      <g fill="#14213D">
        {/* Teeth */}
        <rect x="65" y="52" width="10" height="36" rx="2.5" />
        <rect x="65" y="52" width="10" height="36" rx="2.5" transform="rotate(45 70 70)" />
        <rect x="65" y="52" width="10" height="36" rx="2.5" transform="rotate(90 70 70)" />
        <rect x="65" y="52" width="10" height="36" rx="2.5" transform="rotate(135 70 70)" />
        {/* Gear center body */}
        <circle cx="70" cy="70" r="13.5" />
      </g>

      {/* 9. Gear Center Hole / Bolt (Amber #FABC00) */}
      <circle cx="70" cy="70" r="5" fill="#FABC00" />
    </svg>
  );
};
