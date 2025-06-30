import { useRef } from 'react';
import Section from './Section';
import { projects } from '../data/projects';
import { ExternalLink, Github, CheckCircle } from 'lucide-react';

export default function Projects() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
  };

  return (
    <Section id="projects" title="Projets">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => { cardRefs.current[index] = el; }}
            className="group bg-white/80 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-200/30 dark:border-gray-700 overflow-hidden backdrop-blur-sm cursor-pointer"
            style={{
              animationDelay: `${index * 0.1}s`,
              transformStyle: 'preserve-3d',
            }}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => handleMouseLeave(index)}
            data-cursor="pointer"
          >
            {/* Image placeholder */}
            <div className="h-48 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center text-white">
                  <CheckCircle className="w-16 h-16 mx-auto mb-2 text-green-400" />
                  <p className="text-lg font-semibold">Terminé</p>
                </div>
              </div>
              {/* Motif de points décoratif */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
                <div className="grid grid-cols-4 gap-1">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenu */}
            <div className="p-6">
              {/* Badge statut */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {project.status === 'completed' ? 'Terminé' : project.status === 'in-progress' ? 'En cours' : 'Bientôt'}
                </span>
                <div className="text-gray-400 text-sm">
                  #{String(project.id).padStart(2, '0')}
                </div>
              </div>

              {/* Titre */}
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded backdrop-blur-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800 dark:text-gray-100 mb-4 leading-relaxed font-medium bg-gray-50/50 dark:bg-gray-700/30 p-2 rounded" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-bold bg-blue-200/80 dark:bg-blue-800/60 text-blue-800 dark:text-blue-200 rounded-full border border-blue-300/50 dark:border-blue-600/50 shadow-sm"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                {project.githubUrl && project.status === 'completed' ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-lg cursor-not-allowed"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </button>
                )}
                
                {project.liveUrl && project.status === 'completed' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 dark:bg-gray-700 rounded-lg cursor-not-allowed"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message d'encouragement */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-green-200/80 dark:bg-green-900/60 rounded-full shadow-xl border-2 border-green-300/50 dark:border-green-600/50">
          <span className="text-2xl">🎯</span>
          <span className="text-green-800 dark:text-green-100 font-bold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            Projets réalisés avec succès - Prêt pour de nouveaux défis !
          </span>
        </div>
      </div>
    </Section>
  );
} 