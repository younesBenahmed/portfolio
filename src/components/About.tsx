import Section from './Section';
import ProfileImage from './ProfileImage';
import { GraduationCap, Code, Shield, Award } from 'lucide-react';

export default function About() {
  return (
    <Section id="about" title="À propos de moi">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Photo */}
        <div className="flex justify-center lg:justify-start">
          <ProfileImage />
        </div>

        {/* Contenu */}
        <div className="space-y-6">
          {/* Formation */}
          <div className="flex items-start space-x-4 group">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-500 dark:from-blue-800 dark:to-blue-900 rounded-lg flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:animate-glow transition-all duration-300 border-2 border-blue-400/50 dark:border-blue-600/50">
              <GraduationCap className="w-6 h-6 text-blue-900 dark:text-blue-300 group-hover:animate-bounce" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded backdrop-blur-sm" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Formation</h3>
              <p className="text-gray-900 dark:text-gray-100 font-bold text-base bg-white/40 dark:bg-gray-800/40 p-2 rounded backdrop-blur-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                BUT Informatique à l'IUT Aix-Marseille
                <br />
                <span className="text-green-800 dark:text-green-200 font-bold bg-green-200/80 dark:bg-green-800/60 px-3 py-1 rounded-full border-2 border-green-400/50 dark:border-green-600/50 shadow-lg" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>S1 & S2 validés</span>
              </p>
            </div>
          </div>

          {/* Passion */}
          <div className="flex items-start space-x-4 group">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-300 to-purple-500 dark:from-purple-800 dark:to-purple-900 rounded-lg flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:animate-glow transition-all duration-300 border-2 border-purple-400/50 dark:border-purple-600/50">
              <Code className="w-6 h-6 text-purple-900 dark:text-purple-300 group-hover:animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded backdrop-blur-sm" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Passions</h3>
              <p className="text-gray-900 dark:text-gray-100 font-bold text-base bg-white/40 dark:bg-gray-800/40 p-2 rounded backdrop-blur-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                Algorithmes, réseaux, développement full-stack
                <br />
                Résolution de problèmes complexes
              </p>
            </div>
          </div>

          {/* Expérience professionnelle */}
          <div className="flex items-start space-x-4 group">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-300 to-green-500 dark:from-green-800 dark:to-green-900 rounded-lg flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:animate-glow transition-all duration-300 border-2 border-green-400/50 dark:border-green-600/50">
              <Shield className="w-6 h-6 text-green-900 dark:text-green-300 group-hover:animate-spin" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded backdrop-blur-sm" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Expérience professionnelle</h3>
              <p className="text-gray-900 dark:text-gray-100 font-bold text-base bg-white/40 dark:bg-gray-800/40 p-2 rounded backdrop-blur-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                Agent de sécurité - Ville de Marseille (2021)
                <br />
                <span className="text-base font-bold">Surveillance des espaces publics, gestion d'incidents</span>
                <br />
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="text-green-800 dark:text-green-200 font-bold bg-green-200/80 dark:bg-green-800/60 px-3 py-1 rounded-full border-2 border-green-400/50 dark:border-green-600/50 shadow-lg text-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>Rigueur</span>
                  <span className="text-green-800 dark:text-green-200 font-bold bg-green-200/80 dark:bg-green-800/60 px-3 py-1 rounded-full border-2 border-green-400/50 dark:border-green-600/50 shadow-lg text-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>Sang-froid</span>
                </div>
              </p>
            </div>
          </div>

          {/* Objectifs */}
          <div className="flex items-start space-x-4 group">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-300 to-orange-500 dark:from-orange-800 dark:to-orange-900 rounded-lg flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:animate-glow transition-all duration-300 border-2 border-orange-400/50 dark:border-orange-600/50">
              <Award className="w-6 h-6 text-orange-900 dark:text-orange-300 group-hover:animate-pulse" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded backdrop-blur-sm" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Objectifs</h3>
              <p className="text-gray-900 dark:text-gray-100 font-bold text-base bg-white/40 dark:bg-gray-800/40 p-2 rounded backdrop-blur-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                Alternance en administration réseaux & cybersécurité
                <br />
                <span className="text-base font-bold">Contribuer à la sécurisation des infrastructures</span>
                <br />
                <span className="text-orange-800 dark:text-orange-200 font-bold bg-orange-200/80 dark:bg-orange-800/60 px-3 py-1 rounded-full border-2 border-orange-400/50 dark:border-orange-600/50 shadow-lg" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>Ouvert aux opportunités de développement</span>
              </p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-200/90 via-purple-200/90 to-cyan-200/90 dark:from-blue-900/80 dark:via-purple-900/80 dark:to-cyan-900/80 rounded-lg border-l-4 border-blue-700 shadow-2xl backdrop-blur-sm border-2 border-blue-300/70 dark:border-blue-600/70">
            <p className="text-lg italic text-gray-900 dark:text-white font-bold" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
              "L'avenir appartient à ceux qui croient en la beauté de leurs rêves."
            </p>
            <p className="text-base text-gray-800 dark:text-gray-100 mt-2 font-bold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>- Eleanor Roosevelt</p>
          </div>

          {/* Technologies favorites */}
          <div className="mt-6">
            <h4 className="text-lg font-bold mb-4 text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 px-3 py-2 rounded-lg backdrop-blur-sm inline-block" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>Technologies préférées</h4>
            <div className="flex flex-wrap gap-3">
              {['Java', 'Python', 'SQL', 'Réseaux TCP/IP', 'Linux', 'Cybersécurité'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-blue-700 to-purple-800 dark:from-blue-600 dark:to-purple-700 text-white rounded-full shadow-2xl border-2 border-blue-300/50 dark:border-white/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 