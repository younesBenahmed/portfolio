import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import FloatingElements from './components/FloatingElements';
import ScrollReveal from './components/ScrollReveal';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'dark' : ''}`}>
      {/* Curseur personnalisé */}
      <CustomCursor />
      
      {/* Fond interactif */}
      <InteractiveBackground />
      
      {/* Éléments flottants */}
      <FloatingElements />
      
      {/* Fond animé */}
      <AnimatedBackground />
      
      {/* Header fixe */}
      <Header />

      {/* Toggle theme button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-40 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:scale-110"
        aria-label="Toggle theme"
        data-cursor="pointer"
      >
        {isDarkMode ? (
          <Sun className="w-5 h-5 text-yellow-500" />
        ) : (
          <Moon className="w-5 h-5 text-gray-700" />
        )}
      </button>

      {/* Contenu principal avec scroll snap */}
      <main className="scroll-container scrollbar-hide relative z-10">
        <Hero />
        <ScrollReveal direction="up" delay={200}>
          <About />
        </ScrollReveal>
        <ScrollReveal direction="left" delay={300}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal direction="right" delay={400}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={500}>
          <CV />
        </ScrollReveal>
        <ScrollReveal direction="fade" delay={600}>
          <Contact />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <ScrollReveal direction="up" delay={700}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

export default App;
