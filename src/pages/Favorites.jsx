import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import './Favorites.css'; // Importamos los estilos

const Favorites = () => {
  // 1. Consumimos el estado (favorites) y la función (clearFavorites) de nuestro Contexto
  const { favorites, clearFavorites } = useFavorites();

  return (
    <div className="container favorites-page">
      <h2 className="title">Mis Juegos Favoritos ❤️ ({favorites.length})</h2>

      {/* 2. Renderizado Condicional: Si el arreglo está vacío, mostramos el mensaje */}
      {favorites.length === 0 ? (
        <div className="empty-state">
          <p>Aún no has agregado ningún juego a tu lista.</p>
          <Link to="/" className="back-link">
            ⬅ Volver al catálogo para explorar
          </Link>
        </div>
      ) : (
        /* 3. Si hay elementos en el arreglo, mostramos la cuadrícula y el botón de vaciar */
        <>
          <div className="actions-header">
            <button className="btn-clear-favs" onClick={clearFavorites}>
              Vaciar Lista 💔
            </button>
          </div>

          <div className="favorites-grid">
            {favorites.map((game) => (
              <div key={game.id} className="favorite-card">
                <img
                  src={game.background_image}
                  alt={game.name}
                  className="favorite-image"
                />
                <div className="favorite-info">
                  <h3>{game.name}</h3>
                  <p className="rating">⭐ {game.rating}</p>

                  {/* Link para que puedan volver a ver los detalles del juego */}
                  <Link to={`/game/${game.id}`} className="btn-view-details">
                    Ver Detalles
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
