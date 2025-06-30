import { useEffect, useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxSection({ children, speed = 0.5, className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calcul de la position relative à la fenêtre
      const scrollProgress = (scrolled - elementTop + windowHeight) / (elementHeight + windowHeight);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const yPos = -(scrolled - elementTop) * speed;
        element.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Exécution initiale

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`parallax ${className}`}>
      {children}
    </div>
  );
} 