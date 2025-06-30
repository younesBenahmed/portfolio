import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`scroll-section fade-in-section ${className}`}
    >
      <div className="section-container">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white inline-block px-6 py-3 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-2xl border-2 border-blue-300/70 dark:border-blue-600/70 backdrop-blur-sm" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
              {title}
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
} 