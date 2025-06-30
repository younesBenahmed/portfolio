import { useEffect, useRef } from 'react';

export default function FloatingElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.floating-element');

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      elements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        const speed = 0.02 + (index * 0.01);
        const x = (clientX - centerX) * speed;
        const y = (clientY - centerY) * speed;

        htmlElement.style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.1}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0">
      {/* Géométrie flottante */}
      <div className="floating-element absolute top-20 left-20 w-20 h-20 border-2 border-blue-500/20 rotate-45 transition-transform duration-1000 ease-out" />
      <div className="floating-element absolute top-40 right-32 w-16 h-16 bg-purple-500/10 rounded-full transition-transform duration-1000 ease-out" />
      <div className="floating-element absolute bottom-32 left-40 w-12 h-12 border-2 border-cyan-500/20 rotate-12 transition-transform duration-1000 ease-out" />
      <div className="floating-element absolute bottom-20 right-20 w-24 h-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full transition-transform duration-1000 ease-out" />
      <div className="floating-element absolute top-1/3 left-1/4 w-8 h-8 border-2 border-emerald-500/20 rounded-full transition-transform duration-1000 ease-out" />
      <div className="floating-element absolute top-2/3 right-1/3 w-14 h-14 border border-orange-500/20 rotate-45 transition-transform duration-1000 ease-out" />
    </div>
  );
} 