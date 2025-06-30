export interface Experience {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  type: 'work' | 'project' | 'education';
}

export const experiences: Experience[] = [
  {
    id: 1,
    year: "2021",
    title: "Agent de sécurité",
    company: "Ville de Marseille",
    description: "Surveillance des espaces publics, gestion des incidents, développement du sens des responsabilités et du sang-froid au service de la collectivité.",
    type: "work"
  },
  {
    id: 2,
    year: "2024",
    title: "Première année BUT Informatique",
    company: "IUT Aix-Marseille",
    description: "Algorithmique et programmation, bases de données, architecture des ordinateurs, réseaux et télécommunications, gestion de projets informatiques.",
    type: "education"
  },
  {
    id: 3,
    year: "2025",
    title: "Alternance recherchée",
    company: "Réseaux & Cybersécurité / Développement",
    description: "À la recherche d'une alternance en administration réseaux et cybersécurité (préférence) ou développement logiciel. Motivé par la sécurisation des infrastructures IT.",
    type: "education"
  }
]; 