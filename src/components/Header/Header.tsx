import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faStore, 
  faSearch, 
  faUser, 
  faHome, 
  faBoxOpen, 
  faHistory,
  faSignOutAlt,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
  
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [cartItems] = useState(3); // Simulação de itens no carrinho
    const [scrolled, setScrolled] = useState(false);
    const [userLoggedIn, setUserLoggedIn] = useState(true); // Simulação de usuário logado
    const userName = "Marcus Neto"; // Nome do usuário simulado

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (path: string) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/busca?q=${encodeURIComponent(searchQuery)}`);
            setSearchQuery('');
            setIsMenuOpen(false);
        }
    };

    const handleLogout = () => {
        setUserLoggedIn(false);
        navigate('/');
        setIsMenuOpen(false);
    };

    const handleLogin = () => {
        setUserLoggedIn(true);
        navigate('/login');
        setIsMenuOpen(false);
    };

    // Efeito para detectar scroll
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={`header-container ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-content">
                <div className="logo-section" onClick={() => handleNavigation('/')}>
                    <FontAwesomeIcon icon={faStore} className="logo-icon" />
                    <span className="logo-text">Loja Virtual</span>
                </div>
                
                <div className="search-container">
                    <form onSubmit={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                        <input
                            type="text"
                            className="search-input"
                            placeholder="Buscar produtos..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </form>
                </div>
                
                <nav className={`main-nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <a onClick={() => handleNavigation('/')} className="nav-link">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Início</span>
                    </a>
                    <a onClick={() => handleNavigation('/produtos/')} className="nav-link">
                        <FontAwesomeIcon icon={faBoxOpen} />
                        <span>Produtos</span>
                    </a>
                    
                    <div className="cart-icon-container" onClick={() => handleNavigation('/carrinho')}>
                        <a className="nav-link">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span>Carrinho</span>
                            {cartItems > 0 && (
                                <span className="cart-count">{cartItems}</span>
                            )}
                        </a>
                    </div>
                    
                    <div className="user-menu">
                        <div className="user-avatar">
                            {userName.charAt(0)}
                        </div>
                        <span className="user-name">{userName.split(' ')[0]}</span>
                        
                        <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={() => handleNavigation('/perfil')}>
                                <FontAwesomeIcon icon={faUser} />
                                <span>Meu Perfil</span>
                            </div>
                            <div className="dropdown-item" onClick={() => handleNavigation('/pedidos')}>
                                <FontAwesomeIcon icon={faHistory} />
                                <span>Meus Pedidos</span>
                            </div>
                            <div className="dropdown-divider"></div>
                            {userLoggedIn ? (
                                <div className="dropdown-item" onClick={handleLogout}>
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                    <span>Sair</span>
                                </div>
                            ) : (
                                <div className="dropdown-item" onClick={handleLogin}>
                                    <FontAwesomeIcon icon={faUser} />
                                    <span>Entrar</span>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>

                <div className="menu-icon" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </div>
            </div>
        </header>
    );
};

export default Header;