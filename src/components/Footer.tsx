import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Contenu principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo et description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">YB</span>
              </div>
              <span className="font-semibold text-lg">Younes Benahmed</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Étudiant en BUT Informatique passionné par le développement et les réseaux. 
              Toujours prêt pour de nouveaux défis !
            </p>
          </div>

          {/* Navigation rapide */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  À propos
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Parcours
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Projets
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="md:col-span-1">
            <h4 className="font-semibold mb-4">Me suivre</h4>
            <div className="flex space-x-4">
              <a
                href="mailto:younes.benahmed.pro90@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                aria-label="M'envoyer un email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/younesBenahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                aria-label="Mon profil GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/younes-benahmed-9825b4233/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
                aria-label="Mon profil LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>© {currentYear} Younes Benahmed</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Fait avec</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>et React</span>
              </span>
            </div>

            {/* Bouton retour en haut */}
            <button
              onClick={scrollToTop}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1"
              aria-label="Retourner en haut de la page"
            >
              <span>Retour en haut</span>
              <span className="text-xs">↑</span>
            </button>
          </div>
        </div>

        {/* Message d'encouragement */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            🚀 Développé avec Vite + React + TypeScript + TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
} 