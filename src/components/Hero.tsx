import { ChevronDown, MapPin, Calendar, Code2, Network } from 'lucide-react';
import TypewriterText from './TypewriterText';

export default function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center scroll-section pt-20 relative">
      <div className="section-container text-center relative z-10">
        <div className="space-y-8 animate-fade-up">
          {/* Badge d'introduction */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-full border-2 border-green-500/50 mb-8 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-100">
              Disponible pour alternance
            </span>
          </div>

          {/* Salutation principale */}
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-gray-800 dark:text-gray-100" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            Bonjour ! Je suis{' '}
            <TypewriterText 
              text="Younes Benahmed"
              delay={120}
              className="bg-gradient-to-r from-blue-600 via-purple-700 to-cyan-600 bg-clip-text text-transparent filter drop-shadow-sm"
            />
          </h1>

          {/* Sous-titre avec animations */}
          <div className="space-y-4 mb-8">
            <p className="text-xl lg:text-2xl xl:text-3xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
              Étudiant passionné en{' '}
              <span className="font-bold text-blue-700 dark:text-blue-300 bg-blue-100/50 dark:bg-blue-900/30 px-2 py-1 rounded-lg">BUT Informatique</span>
            </p>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-medium" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              Spécialisé en réseaux, cybersécurité et développement
            </p>
          </div>

          {/* Informations rapides */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm lg:text-base">
            <div className="flex items-center space-x-2 px-3 py-2 bg-white/70 dark:bg-gray-800/70 rounded-lg backdrop-blur-sm shadow-md">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span className="font-medium text-gray-800 dark:text-gray-100">Marseille, France</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-2 bg-white/70 dark:bg-gray-800/70 rounded-lg backdrop-blur-sm shadow-md">
              <Calendar className="w-4 h-4 text-purple-600" />
              <span className="font-medium text-gray-800 dark:text-gray-100">19 ans</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-2 bg-white/70 dark:bg-gray-800/70 rounded-lg backdrop-blur-sm shadow-md">
              <Code2 className="w-4 h-4 text-cyan-600" />
              <span className="font-medium text-gray-800 dark:text-gray-100">IUT Aix-Marseille</span>
            </div>
          </div>

          {/* Compétences highlights */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { icon: '🔐', label: 'Cybersécurité', color: 'from-red-600 to-red-700' },
              { icon: '🌐', label: 'Réseaux', color: 'from-blue-600 to-blue-700' },
              { icon: '💻', label: 'Développement', color: 'from-purple-600 to-purple-700' },
              { icon: '🛡️', label: 'Sécurité IT', color: 'from-green-600 to-green-700' }
            ].map((skill, index) => (
              <div
                key={skill.label}
                className={`flex items-center space-x-2 px-4 py-3 bg-gradient-to-r ${skill.color} text-white rounded-full text-sm font-bold shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-float cursor-pointer border-2 border-white/20 backdrop-blur-sm`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: `${6 + index * 0.5}s`,
                  textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                }}
                data-cursor="pointer"
              >
                <span className="text-lg filter drop-shadow-sm">{skill.icon}</span>
                <span className="filter drop-shadow-sm">{skill.label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToAbout}
              className="btn-primary group px-8 py-4 text-lg animate-glow"
              aria-label="En savoir plus sur moi"
              data-cursor="pointer"
            >
              Découvrir mon profil
              <ChevronDown className="ml-2 w-5 h-5 transition-transform group-hover:translate-y-1 group-hover:animate-bounce" />
            </button>
            
            <a
              href="#contact"
              className="btn-secondary px-8 py-4 text-lg group animate-shimmer"
              data-cursor="pointer"
            >
              <Network className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Me contacter
            </a>
          </div>

          {/* Stats en bas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: '2024', label: 'BUT Informatique' },
              { number: '3+', label: 'Projets réalisés' },
              { number: '5+', label: 'Technologies' },
              { number: '100%', label: 'Motivation' }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-4 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg border-2 border-blue-200/60 dark:border-gray-600/50 shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-1" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                  {stat.number}
                </div>
                <div className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator amélioré */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-blue-500/50 dark:border-blue-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">Scroll</span>
          </div>
        </div>
      </div>

      {/* Éléments décoratifs flottants */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-20 h-20 border border-blue-500/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 border border-purple-500/20 rounded-full animate-spin-reverse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-cyan-500/20 rounded-full animate-bounce"></div>
      </div>
    </section>
  );
} 