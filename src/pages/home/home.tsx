import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faStar, 
  faShoppingCart, 
  faHeart, 
  faEye,
  faTruck,
  faExchangeAlt,
  faShieldAlt,
  faFire,
  faTag,
  faClock,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import type { Product } from '../../types/product';
import { mockProducts, categories } from '../../data/products';
import './home.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [favorites, setFavorites] = useState<number[]>(
    mockProducts.filter(p => p.isFavorite).map(p => p.id)
  );
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);

  useEffect(() => {
    // Produtos em destaque (os mais bem avaliados)
    const featured = [...mockProducts]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
    setFeaturedProducts(featured);

    // Novidades (últimos produtos)
    const arrivals = [...mockProducts]
      .filter(p => p.tags.includes('novidade'))
      .slice(0, 4);
    setNewArrivals(arrivals);
  }, []);

  const handleAddToCart = (product: Product) => {
    console.log('Adicionado ao carrinho:', product);
    // Aqui você pode implementar a lógica do carrinho
    alert(`${product.name} adicionado ao carrinho!`);
  };

  const handleToggleFavorite = (productId: number) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        return prev.filter(id => id !== productId);
      } else {
        return [...prev, productId];
      }
    });
  };

  const handleViewDetails = (product: Product) => {
    navigate(`/produto/${product.id}`);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Atualizar produtos com estado de favorito
  const productsWithFavorites = mockProducts.map(product => ({
    ...product,
    isFavorite: favorites.includes(product.id)
  }));

  const filteredProducts = selectedCategory === 'todos'
    ? productsWithFavorites
    : productsWithFavorites.filter(product => product.category === selectedCategory);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-subtitle">Tecnologia de Ponta</span>
            <h1 className="hero-title">
              Descubra os Melhores
              <span className="highlight"> Produtos Tech</span>
            </h1>
            <p className="hero-description">
              Encontre os últimos lançamentos em tecnologia com os melhores preços
              e condições especiais de pagamento.
            </p>
            <div className="hero-actions">
              <button 
                className="btn-primary"
                onClick={() => navigate('/produtos')}
              >
                Comprar Agora
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button 
                className="btn-secondary"
                onClick={() => navigate('/produtos?category=ofertas')}
              >
                Ver Ofertas
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card">
              <div className="floating-card-content">
                <span className="discount-badge">-30%</span>
                <h3>Smartphone Galaxy S24</h3>
                <p>Preço especial por tempo limitado</p>
                <div className="price">
                  <span className="current">{formatPrice(3499.99)}</span>
                  <span className="original">{formatPrice(4999.99)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faTruck} />
            </div>
            <h3>Frete Grátis</h3>
            <p>Para compras acima de R$ 200</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faExchangeAlt} />
            </div>
            <h3>30 Dias para Trocar</h3>
            <p>Devolução gratuita</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </div>
            <h3>Compra Segura</h3>
            <p>Seus dados protegidos</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h3>Suporte 24/7</h3>
            <p>Atendimento sempre disponível</p>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="categories-section">
        <div className="section-header">
          <h2>Categorias em Destaque</h2>
          <button 
            className="view-all"
            onClick={() => navigate('/produtos')}
          >
            Ver Todas
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div className="categories-grid">
          {categories.slice(0, 6).map(category => (
            <div 
              key={category.id}
              className="category-card"
              onClick={() => {
                setSelectedCategory(category.id);
                navigate('/produtos');
              }}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <p>{category.count} produtos</p>
            </div>
          ))}
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="featured-products">
        <div className="section-header">
          <h2>Produtos em Destaque</h2>
          <div className="section-badge">
            <FontAwesomeIcon icon={faFire} />
            <span>Mais Vendidos</span>
          </div>
        </div>
        <div className="products-grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="product-card-mini">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <button 
                  className={`favorite-btn ${product.isFavorite ? 'active' : ''}`}
                  onClick={() => handleToggleFavorite(product.id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                {product.originalPrice && (
                  <span className="discount-tag">
                    -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                )}
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon 
                        key={index}
                        icon={faStar}
                        className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                  <span>({product.reviews})</span>
                </div>
                <div className="product-price">
                  <span className="current">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="original">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                <button 
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner de Oferta */}
      <section className="offer-banner">
        <div className="offer-content">
          <div className="offer-text">
            <span className="offer-subtitle">Oferta Especial</span>
            <h2>Black Friday Tech</h2>
            <p>Até 50% de desconto em produtos selecionados</p>
            <div className="offer-timer">
              <div className="timer-item">
                <span>02</span>
                <small>Dias</small>
              </div>
              <div className="timer-item">
                <span>12</span>
                <small>Horas</small>
              </div>
              <div className="timer-item">
                <span>45</span>
                <small>Minutos</small>
              </div>
              <div className="timer-item">
                <span>30</span>
                <small>Segundos</small>
              </div>
            </div>
            <button 
              className="btn-primary"
              onClick={() => navigate('/produtos?category=ofertas')}
            >
              Aproveitar Oferta
            </button>
          </div>
          <div className="offer-image">
            <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=400&fit=crop" alt="Black Friday" />
          </div>
        </div>
      </section>

      {/* Novidades */}
      <section className="new-arrivals">
        <div className="section-header">
          <h2>Novidades</h2>
          <div className="section-badge">
            <FontAwesomeIcon icon={faTag} />
            <span>Lançamentos</span>
          </div>
        </div>
        <div className="products-grid">
          {newArrivals.map(product => (
            <div key={product.id} className="product-card-mini">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="new-tag">NOVO</span>
                <button 
                  className={`favorite-btn ${product.isFavorite ? 'active' : ''}`}
                  onClick={() => handleToggleFavorite(product.id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </button>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon 
                        key={index}
                        icon={faStar}
                        className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                  <span>({product.reviews})</span>
                </div>
                <div className="product-price">
                  <span className="current">{formatPrice(product.price)}</span>
                </div>
                <button 
                  className="add-to-cart"
                  onClick={() => handleAddToCart(product)}
                >
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <h2>Fique por Dentro das Ofertas</h2>
          <p>Inscreva-se para receber descontos exclusivos e novidades</p>
          <form className="newsletter-form">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail"
              className="newsletter-input"
            />
            <button type="submit" className="btn-primary">
              Inscrever-se
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;