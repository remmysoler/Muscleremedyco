import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ReviewsPage from './pages/ReviewsPage';
import PricingPage from './pages/PricingPage';
import BookingPage from './pages/BookingPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Update document title based on current page
  useEffect(() => {
    const titles = {
      'home': 'Muscle Remedy Co. | Professional Remedial Massage & Performance Recovery',
      'about': 'About Us | Professional Massage Therapists | Muscle Remedy Co.',
      'services': 'Therapeutic Services | Professional Remedial Massage | Muscle Remedy Co.',
      'reviews': 'Client Reviews | Testimonials | Muscle Remedy Co.',
      'pricing': 'Treatment Pricing | Professional Massage Therapy | Muscle Remedy Co.',
      'booking': 'Book Appointment | Schedule Your Appointment | Muscle Remedy Co.'
    };
    document.title = titles[currentPage as keyof typeof titles] || 'Muscle Remedy Co.';
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'pricing':
        return <PricingPage onBookingClick={() => setCurrentPage('booking')} />;
      case 'booking':
        return <BookingPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer onPageChange={setCurrentPage} />
    </div>
  );
}

export default App;