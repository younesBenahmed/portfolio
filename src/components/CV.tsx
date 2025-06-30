import Section from './Section';
import { Download, FileText, Eye } from 'lucide-react';

export default function CV() {
  const handleDownload = () => {
    // Pour l'instant, on simule le téléchargement
    // En production, il faudra placer le vrai CV dans le dossier public
    const link = document.createElement('a');
    link.href = '/YounesBenahmedCV.pdf';
    link.download = 'YounesBenahmed_CV.pdf';
    link.click();
  };

  const handlePreview = () => {
    // Ouvrir le CV dans un nouvel onglet pour prévisualisation
    window.open('/YounesBenahmedCV.pdf', '_blank');
  };

  return (
    <Section id="cv" title="Mon CV">
      <div className="max-w-2xl mx-auto text-center">
        {/* Icône du CV */}
        <div className="mb-8">
          <div className="w-32 h-40 mx-auto bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-2xl border-4 border-blue-200/50 dark:border-blue-600/50 relative overflow-hidden backdrop-blur-sm hover:scale-105 transition-transform duration-300">
            {/* Simulation d'un document */}
            <div className="absolute top-4 left-4 right-4">
              <div className="space-y-2">
                <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded"></div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
              </div>
            </div>
            <div className="absolute top-12 left-4 right-4">
              <div className="space-y-1">
                <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded w-3/5"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded w-4/5"></div>
              </div>
            </div>
            {/* Icône de fichier */}
            <div className="absolute bottom-4 right-4">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>

        {/* Titre et description */}
        <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm inline-block" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          Curriculum Vitae
        </h3>
        <p className="text-gray-800 dark:text-gray-100 mb-8 leading-relaxed font-medium text-lg bg-white/70 dark:bg-gray-800/70 p-4 rounded-lg shadow-md backdrop-blur-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
          Découvrez mon parcours complet, mes compétences techniques et mes expériences.
          <br />
          Document à jour et optimisé pour les recruteurs.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleDownload}
            className="btn-primary group shadow-2xl"
            aria-label="Télécharger mon CV en PDF"
            data-cursor="pointer"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Télécharger mon CV
          </button>
          
          <button
            onClick={handlePreview}
            className="btn-secondary group shadow-2xl"
            aria-label="Prévisualiser mon CV"
            data-cursor="pointer"
          >
            <Eye className="w-5 h-5 mr-2" />
            Aperçu
          </button>
        </div>

        {/* Informations complémentaires */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center justify-center space-x-2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-lg shadow-lg backdrop-blur-sm">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            <span className="text-gray-800 dark:text-gray-100 font-bold text-sm">Format PDF</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-lg shadow-lg backdrop-blur-sm">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
            <span className="text-gray-800 dark:text-gray-100 font-bold text-sm">Mis à jour</span>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-white/80 dark:bg-gray-800/80 p-3 rounded-lg shadow-lg backdrop-blur-sm">
            <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
            <span className="text-gray-800 dark:text-gray-100 font-bold text-sm">Optimisé ATS</span>
          </div>
        </div>

        {/* Note */}
        <div className="mt-8 p-6 bg-blue-100/90 dark:bg-blue-900/70 rounded-lg border-2 border-blue-300/50 dark:border-blue-600/50 shadow-xl backdrop-blur-sm">
          <p className="text-blue-800 dark:text-blue-100 font-bold text-base" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            💡 Mon CV est également disponible en version interactive sur cette page. 
            <br />
            Le PDF contient les détails complets et mes coordonnées.
          </p>
        </div>
      </div>
    </Section>
  );
} 