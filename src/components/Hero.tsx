import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-dark-900/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <Star className="w-8 h-8 text-orange-500 animate-bounce-soft" />
          </div>
          <h1 className="font-display text-6xl sm:text-8xl text-dark-50 mb-8 leading-tight animate-float">
            Elevate Your
            <span className="text-stroke block">Game</span>
          </h1>
          <p className="text-xl text-dark-50/90 mb-12 max-w-2xl mx-auto font-light">
            Premium basketball gear designed for champions. Experience the perfect blend of style, 
            comfort, and performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-dark-50 px-8 py-4 rounded-lg 
              font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2
              shadow-lg hover:shadow-xl">
              Shop Premium Gear
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-dark-50 text-dark-50 hover:bg-dark-50 hover:text-dark-900 
              px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              Join Team
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-900 to-transparent"></div>
    </div>
  );
};

export default Hero