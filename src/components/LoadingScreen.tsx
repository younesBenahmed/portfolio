import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500);
          }, 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center space-y-8">
        {/* Logo animé */}
        <div className="relative">
          <div className="w-20 h-20 mx-auto">
            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ping" />
            <div className="absolute inset-2 border-4 border-purple-500/50 rounded-full animate-pulse" />
            <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">Y</span>
            </div>
          </div>
        </div>

        {/* Texte de chargement */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Younes Benahmed
          </h2>
          <p className="text-gray-300">
            Chargement du portfolio...
          </p>
        </div>

        {/* Barre de progression */}
        <div className="w-80 mx-auto">
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="mt-2 text-gray-400 text-sm">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Particules de fond */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 