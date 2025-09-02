import {  Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
// import { AnimatePresence } from 'framer-motion';
// import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';

// Lazy load all pages for better initial bundle size
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));

function App() {

  return (
    <ThemeProvider>
      {/* <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence> */}
      
      <Router>
        <ScrollToTop />
        <Suspense fallback={null}>nly when you 
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
