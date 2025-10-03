import React from 'react';
import Hero from '../components/Hero';
import Feature from '../components/Feature';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  return (
    <div className="pt-0">
      <Hero 
        onBookingClick={() => onPageChange('booking')}
        onServicesClick={() => onPageChange('services')}
      />
      
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="font-serif text-5xl lg:text-7xl font-light mb-6 tracking-tight">
              Built for Results
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-normal max-w-2xl mx-auto">
              Tailored care that combines proven techniques with a focus on your recovery and performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Feature
              icon="🎯"
              title="Targeted Treatment"
              description="Individualised treatment plans designed to address your specific concerns and support long term recovery"
            />
            <Feature
              icon="🏆"
              title="Expert Practitioners"
              description="Dedicated practitioner with specialised techniques in remedial massage, sports recovery, cupping, and dry needling - tailored to your needs"
            />
            <Feature
              icon="⚡"
              title="Performance Recovery"
              description="Hands on treatment to enhance performance, prevent injury, and speed up recovery time"
            />
            <Feature
              icon="🔬"
              title="Evidence Based"
              description="Treatments guided by proven methods and ongoing professional development in muscle recovery and performance care"
            />
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-900">
        <div className="container mx-auto px-10">
          <div className="text-center max-w-4xl mx-auto">
            <blockquote className="font-serif text-3xl lg:text-4xl font-light leading-relaxed mb-10 text-white italic tracking-tight">
              "The expertise and professionalism at Muscle Remedy Co. transformed my recovery process. Their targeted approach delivered results beyond my expectations."
            </blockquote>
            <cite className="text-sm font-semibold uppercase tracking-wider text-sky-400 not-italic">
              Celia Tran, Professional Athlete
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;