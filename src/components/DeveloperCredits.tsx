/* eslint-disable react/react-in-jsx-scope */
import { Code2 } from 'lucide-react';

export const DEVELOPERS = [
  'Ing. Brayam Gilberto López Morales',
  'Ing. Arturo Darinel López Castillo',
] as const;

interface DeveloperCreditsProps {
  variant?: 'watermark' | 'footer' | 'compact';
  className?: string;
}

export function DeveloperCredits({ variant = 'watermark', className = '' }: DeveloperCreditsProps) {
  if (variant === 'watermark') {
    return (
    
      <div className={`flex items-center justify-center gap-1.5 py-1 opacity-40 hover:opacity-70 transition-opacity duration-300 ${className}`}>
        <Code2 className="w-3 h-3" style={{ color: '#206d8b' }} />
        <span className="text-xs" style={{ color: '#133f68' }}>
          {DEVELOPERS.join(' · ')}
        </span>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`text-xs opacity-40 hover:opacity-70 transition-opacity duration-300 ${className}`} style={{ color: '#070707' }}>
        <p className="font-medium mb-1">Desarrollado por:</p>
        {DEVELOPERS.map((dev, index) => (
          <p key={index}>{dev}</p>
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`text-xs text-center opacity-40 hover:opacity-70 transition-opacity duration-300 ${className}`} style={{ color: '#000000' }}>
        <p className="mb-1">Desarrollado por:</p>
        {DEVELOPERS.map((dev, index) => (
          <p key={index}>{dev}</p>
        ))}
      </div>
    );
  }

  return null;
}

export function useDevelopers() {
  return {
    developers: DEVELOPERS,
    developersString: DEVELOPERS.join(', '),
    developersArray: [...DEVELOPERS],
  };
}