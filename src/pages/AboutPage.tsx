import React from 'react';
import Card from '../components/Card';
import Feature from '../components/Feature';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-32">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl lg:text-7xl font-light mb-6 tracking-tight">
              About Muscle Remedy Co.
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 font-normal max-w-2xl mx-auto">
              Dedicated to excellence in therapeutic massage and performance recovery through expert care and personalized treatment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card
              title="Our Mission"
              description="To provide exceptional remedial massage therapy that enhances performance, accelerates recovery, and improves quality of life."
              imageUrl="https://8o52advn7f.ufs.sh/f/EQ0ijtkhs4Jl3aN3hR971KiqFT8vZMIluSncARHmUsjOLJ9f"
              overlay={true}
            />
            
            <Card
              title="Meet your therapist"
              description="Sarah is the owner and remedial massage therapist at Muscle Remedy Co. She completed her Diploma of Remedial Massage at Victoria University in 2024 and is trained in dry needling, cupping, lymphatic drainage, and taping. She has worked with a wide range of clients, including players from the AFL and AFLW Western Bulldogs, everyday people managing aches and pains, and elderly clients in aged care. Passionate about strength training, Sarah understands the importance of recovery and how even small aches and tightness can affect how the body feels and moves. She is committed to helping clients recover, move more freely, and feel their best through treatments tailored to their needs."
            />
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-6xl font-light mb-6 tracking-tight">
              Our Approach
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-normal max-w-2xl mx-auto">
              Evidence-based therapeutic techniques combined with personalized care for optimal results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <Feature
              icon="🎓"
              title="Recovery that lasts"
              description="Easing tightness, reducing aches, helping you move freely"
            />
            <Feature
              icon="🔍"
              title="Performance-focused care"
              description="Supporting sport, training, or everyday movement goals"
            />
            <Feature
              icon="📈"
              title="Tailored treatments"
              description="Adjusting every session to what your body needs to feel its best"
            />
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-900">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-6xl font-light mb-6 tracking-tight text-white">
              Why Choose Us
            </h2>
            <p className="text-lg leading-relaxed text-gray-400 font-normal max-w-2xl mx-auto">
              Commitment to therapeutic excellence and client satisfaction in every treatment session.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card
              title="Injury Recovery & Rehabilitation"
              description="Specialized treatment for sports injuries, workplace strains, and chronic pain conditions. Our targeted approach helps accelerate healing and restore function safely."
              className="bg-sky-300 text-gray-900"
            />
            <Card
              title="Performance Enhancement"
              description="Optimize your athletic performance and prevent injuries with our sports massage techniques. Perfect for athletes, gym enthusiasts, and active individuals."
              className="bg-sky-300 text-gray-900"
            />
            <Card
              title="Chronic Pain Management"
              description="Long-term relief for persistent muscle tension, headaches, and postural problems. We address the root causes, not just the symptoms."
              className="bg-sky-300 text-gray-900"
            />
            <Card
              title="Stress & Tension Relief"
              description="Combat the physical effects of stress and daily tension. Our therapeutic approach helps restore balance and promotes overall wellbeing."
              className="bg-sky-300 text-gray-900"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;