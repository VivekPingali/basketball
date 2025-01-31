import React from 'react';
import { Shield, Zap, Star, Trophy } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    description: 'Crafted with the finest materials for ultimate durability and performance'
  },
  {
    icon: Zap,
    title: 'Enhanced Grip',
    description: 'Advanced texture technology for superior ball control'
  },
  {
    icon: Star,
    title: 'Pro Approved',
    description: 'Tested and endorsed by professional athletes'
  },
  {
    icon: Trophy,
    title: 'Championship Level',
    description: 'Equipment designed for championship performance'
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Why Choose Our Gear?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our professional-grade basketball equipment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow
                transform hover:-translate-y-1 duration-300"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;