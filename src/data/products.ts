import type { Product, Category, Banner } from '../types/product';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: "Smartphone Galaxy S24",
    description: "Smartphone premium com tela AMOLED 6.2', 128GB, câmera tripla 50MP",
    price: 3499.99,
    originalPrice: 3999.99,
    category: "eletronicos",
    image: "https://images.unsplash.com/photo-1611791484670-ce19b801d192?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 342,
    inStock: true,
    isFavorite: false,
    tags: ["novidade", "oferta", "premium"],
    features: ["5G", "128GB", "Câmera Tripla", "À prova d'água"]
  },
  {
    id: 2,
    name: "Notebook Dell XPS 13",
    description: "Notebook ultrafino com processador i7, 16GB RAM, SSD 512GB",
    price: 6999.99,
    originalPrice: 7999.99,
    category: "computadores",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 189,
    inStock: true,
    isFavorite: true,
    tags: ["destaque", "premium"],
    features: ["i7 11ª Gen", "16GB RAM", "SSD 512GB", "Touchscreen"]
  },
  {
    id: 3,
    name: "Fone Bluetooth Sony WH-1000XM4",
    description: "Fone de ouvido com cancelamento de ruído ativo, 30h bateria",
    price: 1299.99,
    originalPrice: 1599.99,
    category: "acessorios",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 567,
    inStock: true,
    isFavorite: false,
    tags: ["oferta", "popular"],
    features: ["Cancelamento de Ruído", "30h Bateria", "Bluetooth 5.0"]
  },
  {
    id: 4,
    name: "Smartwatch Apple Watch Series 9",
    description: "Relógio inteligente com monitor cardíaco, GPS e iOS integrado",
    price: 2899.99,
    category: "wearables",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w-400&h=400&fit=crop",
    rating: 4.9,
    reviews: 421,
    inStock: true,
    isFavorite: true,
    tags: ["novidade", "premium"],
    features: ["Monitor Cardíaco", "GPS", "iOS", "Resistente à água"]
  },
  {
    id: 5,
    name: "Câmera Canon EOS R6",
    description: "Câmera mirrorless full-frame, 20MP, gravação 4K 60fps",
    price: 12999.99,
    category: "fotografia",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 89,
    inStock: true,
    isFavorite: false,
    tags: ["profissional", "premium"],
    features: ["Full-frame", "20MP", "4K 60fps", "Estabilização"]
  },
  {
    id: 6,
    name: "Console PlayStation 5",
    description: "Console de última geração com SSD 1TB e controle DualSense",
    price: 3899.99,
    originalPrice: 4499.99,
    category: "games",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 1023,
    inStock: false,
    isFavorite: true,
    tags: ["esgotando", "popular"],
    features: ["SSD 1TB", "4K 120fps", "Ray Tracing", "DualSense"]
  },
  {
    id: 7,
    name: "Tablet Samsung Galaxy Tab S9",
    description: "Tablet com tela 11', S Pen incluso, 256GB, 8GB RAM",
    price: 4299.99,
    category: "tablets",
    image: "https://images.unsplash.com/photo-1546054451-aa724c8292e7?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 234,
    inStock: true,
    isFavorite: false,
    tags: ["novidade"],
    features: ["Tela 11'", "S Pen", "256GB", "5G"]
  },
  {
    id: 8,
    name: "Monitor Gamer 27' 144Hz",
    description: "Monitor curvo, 144Hz, 1ms, FreeSync, resolução QHD",
    price: 1899.99,
    originalPrice: 2199.99,
    category: "perifericos",
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 456,
    inStock: true,
    isFavorite: true,
    tags: ["oferta", "gamer"],
    features: ["27' Curvo", "144Hz", "QHD", "FreeSync"]
  }
];

export const categories: Category[] = [
  { id: "todos", name: "Todos", icon: "📱", count: mockProducts.length },
  { id: "eletronicos", name: "Eletrônicos", icon: "📱", count: 2 },
  { id: "computadores", name: "Computadores", icon: "💻", count: 1 },
  { id: "acessorios", name: "Acessórios", icon: "🎧", count: 1 },
  { id: "wearables", name: "Wearables", icon: "⌚", count: 1 },
  { id: "fotografia", name: "Fotografia", icon: "📷", count: 1 },
  { id: "games", name: "Games", icon: "🎮", count: 1 },
  { id: "tablets", name: "Tablets", icon: "📱", count: 1 },
  { id: "perifericos", name: "Periféricos", icon: "🖥️", count: 1 }
];

export const banners: Banner[] = [
  {
    id: 1,
    title: "Black Friday Exclusive",
    subtitle: "Até 50% OFF em produtos selecionados",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&h=400&fit=crop",
    link: "/produtos",
    buttonText: "Ver Ofertas",
    backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    id: 2,
    title: "Novidades Tech 2024",
    subtitle: "Descubra os lançamentos do ano",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=400&fit=crop",
    link: "/produtos?category=novidades",
    buttonText: "Explorar",
    backgroundColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  }
];