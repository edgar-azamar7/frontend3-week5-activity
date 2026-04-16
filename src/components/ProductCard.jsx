import { Link } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';

const ProductCard = ({ product }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === product.id);

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={product.image || '/placeholder.png'} 
          alt={product.name}
        />
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => toggleFavorite(product)}
          title={isFavorite ? 'Remover de wishlist' : 'Agregar a wishlist'}
        >
          ♥
        </button>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="category">{product.category}</p>
        <p className="description">{product.description}</p>
        
        <div className="product-footer">
          <span className="price">${product.price}</span>
          <Link 
            to={`/product/${product.id}`}
            className="btn-view"
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
