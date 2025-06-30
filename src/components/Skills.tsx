import Section from './Section';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <Section id="skills" title="Compétences">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700"
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            {/* Icône */}
            <div className="text-center mb-4">
              <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
            </div>

            {/* Nom */}
            <h3 className="text-xl font-bold text-center mb-3 text-gray-900 dark:text-white">
              {skill.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm leading-relaxed">
              {skill.description}
            </p>

            {/* Barre de progression décorative */}
            <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse"
                style={{
                  width: `${85 + index * 5}%`,
                  animationDelay: `${index * 0.2}s`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Section d'apprentissage */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/20 rounded-full">
          <span className="text-2xl">📚</span>
          <span className="text-blue-700 dark:text-blue-300 font-medium">
            En apprentissage continu : React, TypeScript, DevOps
          </span>
        </div>
      </div>
    </Section>
  );
} 