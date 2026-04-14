import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFavorites } from '../context/FavoritesContext.jsx';

const GameDetails = () => {
  // 1. EL PARÁMETRO: Atrapamos el ID de la URL (ej. /game/5)
  const { id } = useParams();

  // 2. EL ESTADO LOCAL
  const [game, setGame] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 3. EL ESTADO GLOBAL: Extraemos la función para agregar al carrito
  const { addToFavorites } = useFavorites();

  // 4. EL EFECTO: Descargamos solo este producto
  useEffect(() => {
    const API_KEY = '2a3f6a90fc644427b42cddeff0bbe478';
    const fetchGame = async () => {
      try {
        // Inyectamos el ID dinámico en la URL de la API
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
        );
        if (!response.ok) throw new Error('Juego no encontrado');

        const data = await response.json();
        setGame(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGame();
  }, [id]); // 🚨 Dependencia: Si el ID cambia, vuelve a ejecutar el fetch

  // 5. RENDERS CONDICIONALES
  if (isLoading)
    return <h2 className="state-message">Cargando detalles... ⏳</h2>;
  if (error) return <h2 className="state-message error-text">{error} ❌</h2>;

  // 6. RENDERIZADO PRINCIPAL
  return (
    <div className="container details-container">
      <Link to="/" className="back-link">
        ⬅ Volver al catálogo
      </Link>

      <div className="game-layout">
        <img
          src={game.background_image}
          alt={game.name}
          className="details-image"
        />

        <div className="details-info">
          <h2>{game.name}</h2>
          <p className="category-badge">{game.genres[0].name}</p>
          <p className="description">{game.description}</p>
          <h3 className="rating">${game.rating}</h3>

          {/* Al hacer clic, enviamos el objeto 'product' completo al Contexto */}
          <button
            className="add-to-cart-btn"
            onClick={() => addToFavorites(game)}
          >
            Añadir a favoritos
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
