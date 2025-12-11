export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  isFavorite: boolean;
  tags: string[];
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
}

export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  buttonText: string;
  backgroundColor: string;
}