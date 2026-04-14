/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';

// 1. Creamos el contexto pero NO lo exportamos (se vuelve privado)
const FavoritesContext = createContext();

// 2. Exportamos el Proveedor (El componente que envuelve a la app)
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (product) => {
    // Evitamos duplicados de forma sencilla
    const exists = favorites.find((fav) => fav.id === product.id);
    if (exists) {
      alert('¡Este juego ya está en tus favoritos!');
      return;
    }

    alert('¡Juego agregado a favoritos ❤️!');
    setFavorites([...favorites, product]);
  };

  const clearFavorites = () => {
    alert('¡Lista de favoritos vaciada 💔!');
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

// 3. Creamos y exportamos un Custom Hook para consumir el contexto
export const useFavorites = () => {
  const context = useContext(FavoritesContext);

  // Buena práctica: Prevenir errores si intentan usar favoritos fuera del proveedor
  if (context === undefined) {
    throw new Error(
      'useFavorites debe ser utilizado dentro de un FavoritesProvider'
    );
  }

  return context;
};
