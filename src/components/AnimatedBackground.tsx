import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth mouse following
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      // Update gradient position with theme-aware colors
      const isDark = document.documentElement.classList.contains('dark');
      
      if (isDark) {
        container.style.background = `
          radial-gradient(600px circle at ${currentX}px ${currentY}px, 
            rgba(59, 130, 246, 0.1), 
            rgba(147, 51, 234, 0.08), 
            rgba(6, 182, 212, 0.05),
            transparent 70%
          ),
          linear-gradient(135deg, 
            rgba(59, 130, 246, 0.03) 0%, 
            rgba(147, 51, 234, 0.02) 50%, 
            rgba(6, 182, 212, 0.03) 100%
          )
        `;
      } else {
        container.style.background = `
          radial-gradient(800px circle at ${currentX}px ${currentY}px, 
            rgba(59, 130, 246, 0.15), 
            rgba(147, 51, 234, 0.12), 
            rgba(6, 182, 212, 0.08),
            transparent 60%
          ),
          linear-gradient(135deg, 
            rgba(59, 130, 246, 0.08) 0%, 
            rgba(147, 51, 234, 0.06) 30%, 
            rgba(6, 182, 212, 0.08) 70%,
            rgba(16, 185, 129, 0.04) 100%
          )
        `;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Fond animé principal */}
      <div
        ref={containerRef}
        className="fixed inset-0 -z-10 transition-all duration-300 dark:opacity-60"
        style={{
          background: `
            radial-gradient(800px circle at 50% 50%, 
              rgba(59, 130, 246, 0.15), 
              rgba(147, 51, 234, 0.12), 
              rgba(6, 182, 212, 0.08),
              transparent 60%
            ),
            linear-gradient(135deg, 
              rgba(59, 130, 246, 0.08) 0%, 
              rgba(147, 51, 234, 0.06) 30%, 
              rgba(6, 182, 212, 0.08) 70%,
              rgba(16, 185, 129, 0.04) 100%
            )
          `
        }}
      />

      {/* Particules flottantes */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-500/30 dark:bg-blue-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Grille subtile */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.04] dark:opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Effets de lumière */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/8 dark:bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-emerald-500/6 dark:bg-emerald-500/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '6s' }} />
      </div>
    </>
  );
} 