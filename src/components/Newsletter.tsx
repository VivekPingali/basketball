import React, { useState } from 'react';
import { X } from 'lucide-react';

const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>

        <h3 className="text-2xl font-bold text-navy-900 mb-4">
          Join the Team
        </h3>
        <p className="text-gray-600 mb-6">
          Subscribe to get exclusive offers, early access to new products, and basketball tips from the pros.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Subscribe Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;