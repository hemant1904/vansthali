import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProgramsPage from './pages/ProgramsPage';
import TestimonialPage from './pages/TestimonialPage';
import StoriesPage from './pages/StoriesPage';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === '') {
      window.scrollTo(0, 0);
    }
    // else let the browser handle it, or we could handle it via smooth scroll
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-[#333333] bg-[#fdfdfd] overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <LanguageSwitcher />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/stories" element={<StoriesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
