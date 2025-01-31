import React from 'react';
import { Trophy } from 'lucide-react';

const LegendSpotlight = () => {
  return (
    <section className="py-24 bg-dark-800 text-dark-50" id="legend">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1594623930572-300a3011d9ae?auto=format&fit=crop&q=80"
              alt="Basketball Legend"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 p-4 rounded-lg shadow-lg">
              <Trophy className="w-8 h-8" />
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-5xl mb-8 text-orange-500">
              Inspired by Greatness
            </h2>
            <p className="text-dark-50/90 text-lg mb-6 leading-relaxed">
              Our brand draws inspiration from basketball legends like LeBron James, 
              whose extraordinary journey from Akron, Ohio to becoming one of the 
              greatest players of all time embodies the spirit of excellence we 
              strive for.
            </p>
            <p className="text-dark-50/90 text-lg mb-6 leading-relaxed">
              With 4 NBA championships, 4 MVP awards, and 19 All-Star selections, 
              LeBron's legacy of perseverance, leadership, and continuous improvement 
              guides our commitment to creating premium basketball gear that helps 
              players reach their full potential.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-dark-700 rounded-lg">
                <div className="text-3xl font-bold text-orange-500">4x</div>
                <div className="text-sm text-dark-50/90">NBA Champion</div>
              </div>
              <div className="text-center p-4 bg-dark-700 rounded-lg">
                <div className="text-3xl font-bold text-orange-500">19x</div>
                <div className="text-sm text-dark-50/90">All-Star</div>
              </div>
              <div className="text-center p-4 bg-dark-700 rounded-lg">
                <div className="text-3xl font-bold text-orange-500">4x</div>
                <div className="text-sm text-dark-50/90">Season MVP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegendSpotlight