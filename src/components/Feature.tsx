import React from 'react';

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-10">
      <div className="w-20 h-20 bg-sky-400 rounded-full mx-auto mb-8 flex items-center justify-center text-white text-3xl">
        {icon}
      </div>
      <h3 className="font-serif text-2xl font-normal mb-4">{title}</h3>
      <p className="text-base leading-relaxed text-gray-600">{description}</p>
    </div>
  );
};

export default Feature;