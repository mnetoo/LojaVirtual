import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faStar, faEye } from '@fortawesome/free-solid-svg-icons';
import type { Product } from '../../types/product';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (productId: number) => void;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onToggleFavorite, 
  onViewDetails 
}) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };
  
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}>
      <div className="product-image-container">
        {imageError ? (
          <div className="product-image-placeholder">
            <FontAwesomeIcon icon={faShoppingCart} size="3x" />
          </div>
        ) : (
          <img 
            src={product.image} 
            alt={product.name}
            className="product-image"
            onError={handleImageError}
          />
        )}
        
        <div className="product-tags">
          {!product.inStock && (
            <span className="tag out-of-stock-tag">ESGOTADO</span>
          )}
          {discountPercentage > 0 && (
            <span className="tag discount-tag">-{discountPercentage}%</span>
          )}
          {product.tags.includes('novidade') && (
            <span className="tag new-tag">NOVO</span>
          )}
          {product.tags.includes('popular') && (
            <span className="tag popular-tag">POPULAR</span>
          )}
        </div>
        
        <button 
          className={`favorite-btn ${product.isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(product.id)}
          aria-label={product.isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        
        <div className="quick-actions">
          <button 
            className="quick-view-btn"
            onClick={() => onViewDetails(product)}
            aria-label="Visualizar detalhes"
          >
            <FontAwesomeIcon icon={faEye} />
            <span>Detalhes</span>
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-category">
          {product.category}
        </div>
        
        <h3 className="product-name">{product.name}</h3>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-features">
          {product.features.slice(0, 2).map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <FontAwesomeIcon 
                key={index}
                icon={faStar}
                className={`star ${index < Math.floor(product.rating) ? 'filled' : 'empty'}`}
              />
            ))}
            <span className="rating-number">{product.rating}</span>
          </div>
          <span className="reviews">({product.reviews})</span>
        </div>
        
        <div className="product-price">
          <div className="price-container">
            <span className="current-price">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="original-price">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
        </div>
        
        <button 
          className={`add-to-cart-btn ${!product.inStock ? 'disabled' : ''}`}
          onClick={() => product.inStock && onAddToCart(product)}
          disabled={!product.inStock}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;