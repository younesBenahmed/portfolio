import { useState } from 'react';
import Section from './Section';
import { Mail, Send, User, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construire l'URL mailto
    const subject = encodeURIComponent(`Contact Portfolio - ${formData.nom}`);
    const body = encodeURIComponent(
      `Bonjour Younes,\n\n${formData.message}\n\nCordialement,\n${formData.nom}\n${formData.email}`
    );
    
    const mailtoLink = `mailto:younes.benahmed.pro90@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="contact" title="Me contacter">
      <div className="max-w-2xl mx-auto">
        {/* Introduction */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <p className="text-lg text-gray-800 dark:text-gray-100 leading-relaxed font-bold bg-white/50 dark:bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            Une question ? Un projet ? Une opportunité d'alternance ?
            <br />
            N'hésitez pas à me contacter, je vous répondrai rapidement !
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nom */}
          <div>
            <label htmlFor="nom" className="block text-sm font-bold text-gray-800 dark:text-gray-100 mb-2 bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded backdrop-blur-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              <User className="w-4 h-4 inline mr-2" />
              Nom complet
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              required
              minLength={2}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Votre nom et prénom"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-800 dark:text-gray-100 mb-2 bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded backdrop-blur-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              <Mail className="w-4 h-4 inline mr-2" />
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="votre.email@exemple.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-gray-800 dark:text-gray-100 mb-2 bg-white/50 dark:bg-gray-800/50 px-2 py-1 rounded backdrop-blur-sm" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              rows={6}
              className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-vertical"
              placeholder="Décrivez votre projet, votre question ou votre proposition d'alternance..."
            />
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            className="w-full btn-primary group"
            aria-label="Envoyer le message"
          >
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Envoyer le message
          </button>
        </form>

        {/* Informations de contact alternatives */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-200/80 dark:bg-gray-800/80 rounded-full shadow-lg border border-gray-300/50 dark:border-gray-600/50">
            <span className="text-sm text-gray-800 dark:text-gray-100 font-bold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              Ou contactez-moi directement :
            </span>
            <a
              href="mailto:younes.benahmed.pro90@gmail.com"
              className="text-blue-700 dark:text-blue-300 hover:underline font-bold bg-blue-100/50 dark:bg-blue-900/30 px-2 py-1 rounded"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              younes.benahmed.pro90@gmail.com
            </a>
          </div>
        </div>

        {/* Note sur la confidentialité */}
        <div className="mt-8 p-4 bg-green-200/80 dark:bg-green-900/60 rounded-lg border-2 border-green-300/50 dark:border-green-600/50 shadow-lg">
          <p className="text-green-800 dark:text-green-100 text-sm text-center font-bold" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
            🔒 Vos données restent privées. Ce formulaire utilise votre client mail par défaut.
          </p>
        </div>
      </div>
    </Section>
  );
} 