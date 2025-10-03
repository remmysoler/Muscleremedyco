import React from 'react';
import PricingCard from '../components/PricingCard';
import Card from '../components/Card';

interface PricingPageProps {
  onBookingClick: () => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ onBookingClick }) => {
  const pricingPlans = [
    {
      title: "Initial Consultation",
      duration: "60 mins",
      price: "$110",
      features: [
        "Your first appointment includes a full assessment and tailored treatment",
        "Techniques may include massage, cupping, dry needling, or other methods as needed"
      ]
    },
    {
      title: "Short Appointment",
      duration: "30 mins",
      price: "$80",
      features: [
        "Targeted treatment for specific areas",
        "Ideal for maintenance, sports recovery, or quick relief",
        "Includes a brief assessment and any techniques required"
      ]
    },
    {
      title: "Standard Appointment",
      duration: "60 mins",
      price: "$110",
      features: [
        "For returning clients",
        "Each session includes a short assessment and treatment",
        "Techniques suited to your needs"
      ]
    },
    {
      title: "Extended Appointment",
      duration: "90 mins",
      price: "$160",
      features: [
        "Comprehensive treatment for multiple areas or complex issues",
        "Includes full assessment and a range of techniques",
        "Perfect for those needing extra attention"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl lg:text-7xl font-light mb-6 tracking-tight">
              Investment in Wellness
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 font-normal max-w-2xl mx-auto">
              Transparent pricing for professional remedial massage therapy with flexible options to suit your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 justify-center">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                duration={plan.duration}
                price={plan.price}
                features={plan.features}
                featured={plan.featured}
                onBookClick={onBookingClick}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-6xl font-light mb-6 tracking-tight">
              Payment & Insurance
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-normal max-w-2xl mx-auto">
              We offer flexible payment options and work with most insurance providers to make quality care accessible.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <Card
              title="Health Rebates"
              description="All treatments are eligible for health fund rebates. We provide receipts for claiming through your private health insurance."
            />
            <Card
              title="Insurance Coverage"
              description="We accept most private health insurance plans and can assist with claims processing for your convenience."
            />
            <Card
              title="Payment Options"
              description="We accept all major credit cards including Visa, Mastercard, and American Express."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;