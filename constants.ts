import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  'All',
  'Mobiles',
  'Electronics',
  'Clothing',
  'Shoes',
  'Home & Kitchen',
  'Accessories',
  'Beauty',
  'General'
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'UltraPhone X15 Pro',
    category: 'Mobiles',
    price: 999,
    currency: 'USD',
    image: 'https://picsum.photos/id/160/600/600',
    description: 'The latest flagship smartphone with AI camera and all-day battery life.',
    features: ['5G Capable', '256GB Storage', 'OLED Display'],
    rating: 4.8
  },
  {
    id: '2',
    name: 'NoiseCancel Headphones',
    category: 'Electronics',
    price: 199,
    currency: 'USD',
    image: 'https://picsum.photos/id/145/600/600',
    description: 'Immersive sound with industry-leading noise cancellation technology.',
    features: ['30h Battery', 'Wireless', 'Comfort Fit'],
    rating: 4.6
  },
  {
    id: '3',
    name: 'Classic Denim Jacket',
    category: 'Clothing',
    price: 59,
    currency: 'USD',
    image: 'https://picsum.photos/id/1027/600/600',
    description: 'Timeless denim jacket perfect for any casual occasion.',
    features: ['100% Cotton', 'Vintage Wash', 'Unisex'],
    rating: 4.5
  },
  {
    id: '4',
    name: 'Running Sprinters',
    category: 'Shoes',
    price: 89,
    currency: 'USD',
    image: 'https://picsum.photos/id/103/600/600',
    description: 'Lightweight running shoes designed for speed and stability.',
    features: ['Breathable Mesh', 'High Traction', 'Cushioned Sole'],
    rating: 4.7
  },
  {
    id: '5',
    name: 'Smart Coffee Maker',
    category: 'Home & Kitchen',
    price: 129,
    currency: 'USD',
    image: 'https://picsum.photos/id/1060/600/600',
    description: 'Brew your perfect cup from your phone via WiFi.',
    features: ['App Control', 'Keep Warm', 'Timer'],
    rating: 4.4
  },
  {
    id: '6',
    name: 'Leather Wallet',
    category: 'Accessories',
    price: 45,
    currency: 'USD',
    image: 'https://picsum.photos/id/1069/600/600',
    description: 'Genuine leather wallet with RFID protection.',
    features: ['Genuine Leather', 'Slim Profile', '8 Card Slots'],
    rating: 4.9
  },
  {
    id: '7',
    name: 'Hydrating Face Serum',
    category: 'Beauty',
    price: 35,
    currency: 'USD',
    image: 'https://picsum.photos/id/21/600/600',
    description: 'Rejuvenate your skin with our organic hydrating serum.',
    features: ['Organic', 'Vitamin C', 'Cruelty Free'],
    rating: 4.8
  },
  {
    id: '8',
    name: '4K Smart TV 55"',
    category: 'Electronics',
    price: 599,
    currency: 'USD',
    image: 'https://picsum.photos/id/214/600/600',
    description: 'Crystal clear picture quality with built-in streaming apps.',
    features: ['HDR10+', 'Voice Remote', 'Dolby Audio'],
    rating: 4.5
  },
  {
    id: '9',
    name: 'Minimalist Desk Lamp',
    category: 'Home & Kitchen',
    price: 49,
    currency: 'USD',
    image: 'https://picsum.photos/id/366/600/600',
    description: 'Adjustable brightness LED lamp for your workspace.',
    features: ['Touch Control', 'USB Charging Port', '3 Color Modes'],
    rating: 4.3
  },
  {
    id: '10',
    name: 'Canvas Backpack',
    category: 'General',
    price: 55,
    currency: 'USD',
    image: 'https://picsum.photos/id/1080/600/600',
    description: 'Durable backpack suitable for school, work, or travel.',
    features: ['Water Resistant', 'Laptop Sleeve', 'Ergonomic Straps'],
    rating: 4.6
  },
  {
    id: '11',
    name: 'Wireless Earbuds',
    category: 'Mobiles',
    price: 79,
    currency: 'USD',
    image: 'https://picsum.photos/id/250/600/600',
    description: 'Compact wireless earbuds with deep bass.',
    features: ['Touch Controls', 'Waterproof', 'Fast Charging'],
    rating: 4.2
  },
  {
    id: '12',
    name: 'Formal Leather Shoes',
    category: 'Shoes',
    price: 110,
    currency: 'USD',
    image: 'https://picsum.photos/id/296/600/600',
    description: 'Elegant leather shoes for business and formal events.',
    features: ['Genuine Leather', 'Non-slip Sole', 'Classic Design'],
    rating: 4.7
  }
];
