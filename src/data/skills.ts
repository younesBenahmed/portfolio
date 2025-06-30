export interface Skill {
  name: string;
  description: string;
  icon: string; // SVG string ou nom d'icône Lucide
}

export const skills: Skill[] = [
  {
    name: "Java",
    description: "Programmation orientée objet, développement d'applications",
    icon: "☕"
  },
  {
    name: "Python", 
    description: "Scripting, analyse de données, développement backend",
    icon: "🐍"
  },
  {
    name: "SQL",
    description: "Bases de données relationnelles, requêtes optimisées",
    icon: "🗃️"
  },
  {
    name: "Réseaux",
    description: "Configuration, sécurité, protocoles TCP/IP",
    icon: "🌐"
  }
]; 