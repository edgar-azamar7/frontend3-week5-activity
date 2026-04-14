import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css'; // Importamos nuestra hoja de estilos limpio

// 1. IMPORTACIONES CORRECTAS: Cada Provider viene de su propio archivo
import { FavoritesProvider } from './context/FavoritesContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>
);
