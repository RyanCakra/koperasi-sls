import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Routes from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes />
      </AnimatePresence>
    </BrowserRouter>
  </StrictMode>
);
