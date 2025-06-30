import Section from './Section';
import { experiences } from '../data/experiences';
import { Briefcase, Code, GraduationCap } from 'lucide-react';

const getIconForType = (type: 'work' | 'project' | 'education') => {
  switch (type) {
    case 'work':
      return <Briefcase className="w-5 h-5" />;
    case 'project':
      return <Code className="w-5 h-5" />;
    case 'education':
      return <GraduationCap className="w-5 h-5" />;
    default:
      return <Briefcase className="w-5 h-5" />;
  }
};

const getColorForType = (type: 'work' | 'project' | 'education') => {
  switch (type) {
    case 'work':
      return 'from-green-500 to-emerald-600';
    case 'project':
      return 'from-blue-500 to-purple-600';
    case 'education':
      return 'from-orange-500 to-red-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

export default function Experience() {
  return (
    <Section id="experience" title="Parcours">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Ligne verticale */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {/* Expériences */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Point sur la ligne */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10"></div>

                {/* Icône */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white z-20">
                  {getIconForType(experience.type)}
                </div>

                {/* Contenu */}
                <div
                  className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 p-6 rounded-xl shadow-2xl border-2 border-blue-200/50 dark:border-blue-700/50 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
                    {/* Année */}
                    <div className="flex items-center mb-3">
                      <span className={`inline-block px-3 py-1 text-sm font-medium text-white rounded-full bg-gradient-to-r ${getColorForType(experience.type)}`}>
                        {experience.year}
                      </span>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded backdrop-blur-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                      {experience.title}
                    </h3>

                    {/* Entreprise */}
                    <h4 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3 bg-blue-100/50 dark:bg-blue-900/30 px-2 py-1 rounded" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                      {experience.company}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-800 dark:text-gray-100 leading-relaxed font-medium bg-gray-50/50 dark:bg-gray-700/30 p-2 rounded" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                      {experience.description}
                    </p>
                  </div>
                </div>

                {/* Spacer pour l'autre côté en desktop */}
                <div className={`hidden md:block w-5/12 ${
                  index % 2 === 0 ? 'ml-auto pl-8' : 'mr-auto pr-8'
                }`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-orange-200/80 dark:bg-orange-900/60 rounded-full shadow-xl border-2 border-orange-300/50 dark:border-orange-600/50">
            <span className="text-2xl">🚀</span>
            <span className="text-orange-800 dark:text-orange-100 font-bold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              Prêt pour de nouveaux défis en alternance !
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
} 