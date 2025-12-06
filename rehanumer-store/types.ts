export type Category = 
  | 'All'
  | 'Mobiles'
  | 'Electronics'
  | 'Clothing'
  | 'Shoes'
  | 'Home & Kitchen'
  | 'Accessories'
  | 'Beauty'
  | 'General';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  currency: string;
  image: string;
  description: string;
  features: string[];
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
