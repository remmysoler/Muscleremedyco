import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
  overlay?: boolean;
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, className = '', overlay = false, style }) => {
  return (
    <div className={`bg-white transition-all duration-300 hover:-translate-y-2 ${className}`}>
      {imageUrl && (
        <div 
          className="h-96 bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: `url(${imageUrl})`, ...style }}
        >
          {overlay && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10 text-white z-10">
                <h3 className="font-serif text-3xl font-normal mb-4 tracking-tight">{title}</h3>
                <p className="leading-relaxed opacity-90">{description}</p>
              </div>
            </>
          )}
        </div>
      )}
      
      {!overlay && (
        <div className="p-12">
          <h3 className="font-serif text-3xl font-normal mb-4 tracking-tight">{title}</h3>
          <p className="text-base leading-relaxed text-gray-600 mb-6">{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;