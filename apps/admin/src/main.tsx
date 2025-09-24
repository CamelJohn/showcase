import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RoutesProvider } from './routes';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesProvider />
  </StrictMode>
);
