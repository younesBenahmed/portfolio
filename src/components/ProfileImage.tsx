import { useState } from 'react';

interface ProfileImageProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ProfileImage({ size = 'lg', className = '' }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32', 
    lg: 'w-64 h-64'
  };

  const avatarSizes = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className={`relative ${className}`}>
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1`}>
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden">
          {!imageError ? (
            <img
              src="./src/assets/images/profile.png"
              alt="Younes Benahmed"
              className="w-full h-full object-cover rounded-full"
              onError={handleImageError}
            />
          ) : (
            <div className={`${sizeClasses[size]} rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center ${avatarSizes[size]}`}>
              👤
            </div>
          )}
        </div>
      </div>
      
      {/* Badge de statut */}
      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900">
        <span className="text-white text-sm">🎓</span>
      </div>
    </div>
  );
} 