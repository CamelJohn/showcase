import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RoutesProvider } from './routes';
import './index.css';

async function enableMocking() {
  if (import.meta.env.MODE !== 'development') {
    return;
  }
  const { worker } = await import('./mocks/browser.ts')
  console.log('starting mock service worker');
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesProvider />
  </StrictMode>
);

}).catch(console.error);