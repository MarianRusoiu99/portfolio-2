import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import ProjectPage from './components/ProjectPage';

const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This ensures the preloader is shown for a minimum amount of time for a smooth experience.
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Minimum 2 seconds loading screen

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>
      
      <Router>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:projectId" element={<ProjectPage />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
