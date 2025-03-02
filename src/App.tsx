import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './styles/theme';
import Layout from './components/layout/Layout';
import Home from './components/sections/Home';

// Lazy load other components
const About = React.lazy(() => import('./components/sections/About'));
const Portfolio = React.lazy(() => import('./components/sections/Portfolio'));
const Contact = React.lazy(() => import('./components/sections/Contact'));
const Pricing = React.lazy(() => import('./components/sections/Pricing'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/pricing" element={<Pricing />} />
            </Routes>
          </React.Suspense>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
