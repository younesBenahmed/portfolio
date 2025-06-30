import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [data-cursor="pointer"]');
      setIsPointer(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Curseur principal */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'transform 0.1s ease-out',
          transform: isClicking ? 'scale(0.8)' : 'scale(1)',
        }}
      >
        <div className="w-4 h-4 bg-white rounded-full" />
      </div>

      {/* Curseur de suivi */}
      <div
        className="fixed pointer-events-none z-40"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transition: 'all 0.15s ease-out',
          transform: isPointer ? 'scale(1.5)' : 'scale(1)',
          opacity: isPointer ? 0.6 : 0.3,
        }}
      >
        <div className="w-10 h-10 border-2 border-blue-500 rounded-full" />
      </div>
    </>
  );
} 