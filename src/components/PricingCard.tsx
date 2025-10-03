import React from 'react';

interface PricingCardProps {
  title: string;
  duration: string;
  price: string;
  features: string[];
  featured?: boolean;
  onBookClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  duration, 
  price, 
  features, 
  featured = false,
  onBookClick 
}) => {
  return (
    <div className={`bg-white p-12 text-center transition-all duration-300 border-2 relative rounded-xl shadow-lg h-full flex flex-col ${
      featured 
        ? 'border-sky-400 transform scale-105 shadow-xl' 
        : 'border-gray-200 hover:-translate-y-2'
    }`}>
      {featured && (
        <div className="absolute -top-0.5 -left-0.5 -right-0.5 bg-sky-400 text-white py-3 text-xs font-bold tracking-wider rounded-t-xl">
          MOST POPULAR
        </div>
      )}
      
     <h3 className="font-serif text-2xl font-medium mb-4 text-gray-900 tracking-tight min-h-[4rem] flex items-center justify-center">{title}</h3>
      <div className="text-sm text-gray-600 mb-6 font-medium uppercase tracking-wider">{duration}</div>
      
      <div className="font-serif font-light text-sky-400 mb-8 tracking-tight leading-none text-5xl">
        {price}
      </div>
      
      <ul className="list-none p-0 mb-10 text-left flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start mb-6 text-sm leading-relaxed text-gray-900 min-h-[3rem]">
            <span className="inline-flex items-center justify-center w-5 h-5 bg-sky-400 text-white rounded-full text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
              ✓
            </span>
            <span className="flex-1 leading-6">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => window.open('https://www.halaxy.com/book/appointment/muscle-remedy-co/location/1324413', '_blank', 'noopener,noreferrer')}
        className={`w-full py-4 px-8 text-xs font-semibold uppercase tracking-wider transition-all rounded-md mt-auto ${
          featured
            ? 'bg-sky-400 text-white border-2 border-sky-400 hover:bg-blue-600 hover:border-blue-600'
            : 'bg-gray-900 text-white border-2 border-gray-900 hover:bg-transparent hover:text-gray-900 hover:-translate-y-1'
        }`}
      >
        Book Session
      </button>
    </div>
  );
};

export default PricingCard;