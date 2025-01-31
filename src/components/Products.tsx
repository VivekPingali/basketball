import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Pro Elite Basketball',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?auto=format&fit=crop&q=80',
    category: 'Basketballs'
  },
  {
    id: 2,
    name: 'Performance Court Shoes',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80',
    category: 'Footwear'
  },
  {
    id: 3,
    name: 'Premium Jersey Set',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&q=80',
    category: 'Apparel'
  },
  {
    id: 4,
    name: 'Training Equipment Set',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&q=80',
    category: 'Training'
  },
];

const Products = () => {
  return (
    <section className="py-24 bg-dark-900" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl text-orange-500 mb-4">
            New Arrivals
          </h2>
          <p className="text-dark-50/90 max-w-2xl mx-auto">
            Discover our latest collection of premium basketball gear
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="card-3d bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-dark-800 rounded-full shadow-md hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5 text-dark-50" />
                </button>
              </div>
              <div className="p-6">
                <div className="text-sm text-orange-500 font-semibold mb-2">
                  {product.category}
                </div>
                <h3 className="text-xl font-semibold text-dark-50 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-dark-50">
                    ${product.price}
                  </span>
                  <button className="p-2 bg-orange-500 text-dark-50 rounded-lg hover:bg-orange-600 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products