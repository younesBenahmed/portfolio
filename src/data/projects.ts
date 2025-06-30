export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  status: 'coming-soon' | 'in-progress' | 'completed';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Bomberman - Jeu Multijoueur",
    description: "Reproduction du célèbre jeu Bomberman en Java avec modes multijoueurs, IA avancée, système de profils et gestion audio complète.",
    technologies: ["Java", "JavaFX", "POO", "Patterns"],
    githubUrl: "https://github.com/jeremywtp/BOMBERMAN",
    status: "completed"
  },
  {
    id: 2,
    title: "Création BD - Cahier des Charges",
    description: "Développement complet d'une base de données à partir d'un cahier des charges détaillé. Conception du modèle conceptuel, logique et physique avec interface utilisateur.",
    technologies: ["MySQL", "SQL", "UML", "Java", "JDBC"],
    status: "completed"
  },
  {
    id: 3,
    title: "Infrastructure Réseau Complète",
    description: "Mise en place d'un réseau avec 3 PC, configuration DNS, serveur de messagerie, routage et sécurisation. Administration système complète.",
    technologies: ["Linux", "DNS", "DHCP", "Mail Server", "Réseaux"],
    status: "completed"
  }
]; 