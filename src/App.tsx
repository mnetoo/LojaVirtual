import './App.css';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/home/home';
import Carrinho from './pages/carrinho/carrinho';
import Perfil from './pages/perfil/perfil';
import Produtos from './pages/produtos/produtos';
import Pedidos from './pages/pedidos/pedidos';
import Header from './components/Header/Header';


function App() {
  return ( 
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Carrinho" element={<Carrinho />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Produtos" element={<Produtos />} />
            <Route path="/Pedidos" element={<Pedidos />} />
          </Routes>
        </Router>
  );
}

export default App;