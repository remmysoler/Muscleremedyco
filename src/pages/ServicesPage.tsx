import React from 'react';
import Card from '../components/Card';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl lg:text-7xl font-light mb-6 tracking-tight">
              Therapeutic Services
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 font-normal max-w-2xl mx-auto">
              Comprehensive remedial massage treatments tailored to your individual needs and performance objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card
              title="Remedial Massage"
              description="Therapeutic massage targeting specific muscle dysfunction and pain. Tailored treatment to restore optimal function and mobility."
              imageUrl="https://8o52advn7f.ufs.sh/f/EQ0ijtkhs4JloxXTEvZlnBkP5iSH42DwsrfRK76xTea9mh8A"
              overlay={true}
              style={{ backgroundPosition: 'center 53%' }}
            />
            <Card
              title="Sports Massage & Recovery"
              description="Specialized techniques for athletes focusing on performance enhancement and injury prevention."
              imageUrl="https://8o52advn7f.ufs.sh/f/EQ0ijtkhs4JlwKmlVRERBlZGfinMv5W8D0rOym3usYATNPK6"
              overlay={true}
              style={{ backgroundPosition: 'center 20%' }}
            />
            <Card
              title="Dry Needling"
              description="Precise treatment using fine needles to target trigger points, reduce muscle tension, and improve movement patterns."
              imageUrl="https://8o52advn7f.ufs.sh/f/EQ0ijtkhs4Jl367K2NV971KiqFT8vZMIluSncARHmUsjOLJ9"
              overlay={true}
            />
            <Card
              title="Cupping & Lymphatic Drainage"
              description="Traditional cupping therapy combined with lymphatic drainage techniques to reduce inflammation and promote healing."
              imageUrl="https://8o52advn7f.ufs.sh/f/EQ0ijtkhs4JlqpvrbAuN97LRv25ZmMlkuwKchrdI16U4b03E"
              overlay={true}
            />
            <Card
              title="Sports Taping"
              description="Professional sports taping available upon request to provide support, stability, and enhanced performance during activities."
              imageUrl="https://images.pexels.com/photos/5794058/pexels-photo-5794058.jpeg?auto=compress&cs=tinysrgb&w=800"
              overlay={true}
            />
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-6xl font-light mb-6 tracking-tight">
              Treatment Approach
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-normal max-w-2xl mx-auto">
              Our comprehensive methodology ensures optimal therapeutic outcomes through personalized care and advanced techniques.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <Card
              title="Assessment"
              description="Comprehensive evaluation of your condition, movement patterns, and therapeutic goals to develop a targeted treatment plan."
            />
            <Card
              title="Treatment"
              description="Application of specialized therapeutic techniques tailored to your specific needs and condition requirements."
            />
            <Card
              title="Recovery"
              description="Ongoing support and guidance to maintain therapeutic gains and prevent future issues from developing."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;