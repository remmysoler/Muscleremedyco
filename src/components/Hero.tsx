import React from 'react';

interface HeroProps {
  onBookingClick: () => void;
  onServicesClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick, onServicesClick }) => {
  return (
    <section className="h-screen relative flex items-center bg-gray-900 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/60 z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.4), rgba(26, 26, 26, 0.6)), url('https://8o52advn7f.ufs.sh/f/EQ0ijtkhs4JlRrLECrgRijAeP8kX79vlSdxy1qWY3bLp4cKD')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-10 relative z-20">
        <div className="text-white max-w-4xl">
          <h1 className="font-serif text-6xl lg:text-8xl font-light leading-none mb-8 tracking-tight">
            Remedial<br />Performance<br />Recovery
          </h1>
          <div className="text-sky-400 text-lg font-normal mb-10 uppercase tracking-wider">
            Muscle Remedy Co.
          </div>
          <p className="text-xl leading-relaxed mb-12 font-light max-w-2xl opacity-90">
            Expert massage therapy designed to restore, rejuvenate, and enhance your body's natural healing capabilities through targeted therapeutic treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://www.halaxy.com/book/appointment/muscle-remedy-co/location/1324413"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block py-5 px-10 bg-transparent text-white border-2 border-white font-semibold text-xs uppercase tracking-widest transition-all hover:bg-white hover:text-gray-900"
            >
              Book Appointment
            </a>
            <button
              onClick={onServicesClick}
              className="inline-block py-5 px-10 bg-transparent text-sky-400 border-2 border-sky-400 font-semibold text-xs uppercase tracking-widest transition-all hover:bg-sky-400 hover:text-white"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;