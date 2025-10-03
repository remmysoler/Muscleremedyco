import React from 'react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-serif text-xl font-normal mb-6 text-sky-400">
              About Us
            </h3>
            <p className="leading-relaxed text-white/70 text-sm">
              Professional remedial massage therapy for performance recovery and muscle rehabilitation. Licensed practitioners dedicated to your therapeutic wellness journey.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-normal mb-6 text-sky-400">Our Services</h3>
            <div className="space-y-3">
              <button 
                onClick={() => onPageChange('services')}
                className="block text-white/70 hover:text-sky-400 transition-colors text-sm hover:translate-x-1 duration-200"
              >
                Remedial Massage
              </button>
              <button 
                onClick={() => onPageChange('services')}
                className="block text-white/70 hover:text-sky-400 transition-colors text-sm hover:translate-x-1 duration-200"
              >
                Sports Massage
              </button>
              <button 
                onClick={() => onPageChange('services')}
                className="block text-white/70 hover:text-sky-400 transition-colors text-sm hover:translate-x-1 duration-200"
              >
                Dry Needling
              </button>
              <button 
                onClick={() => onPageChange('services')}
                className="block text-white/70 hover:text-sky-400 transition-colors text-sm hover:translate-x-1 duration-200"
              >
                Cupping Therapy
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-normal mb-6 text-sky-400">Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => onPageChange('home')}
                className="block text-white/70 hover:text-sky-400 transition-colors text-sm hover:translate-x-1 duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => onPageChange('about')}
                className="block text-white/70 hover:text-sky-400 transition-colors text-sm hover:translate-x-1 duration-200"
              >
                About
              </button>
              <button 
                onClick={() => onPageChange('pricing')}
                className="block text-white/70 hover:text-sky-400 transition-colors text-sm hover:translate-x-1 duration-200"
              >
                Pricing
              </button>
              <button 
                onClick={() => onPageChange('booking')}
                className="block text-white/70 hover:text-sky-400 transition-colors text-sm hover:translate-x-1 duration-200"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-12 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <img 
              src="https://8o52advn7f.ufs.sh/f/EQ0ijtkhs4JlKfv0vwxuA6kweajo08PZhBg5XrVqWYxmJDQM" 
              alt="Muscle Remedy Co. Logo" 
              className="h-24 w-auto"
            />
            <div>
              <p className="text-white/50 text-sm">
                &copy; 2024 Muscle Remedy Co. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;