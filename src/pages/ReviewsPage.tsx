import React from 'react';
import ReviewCard from '../components/ReviewCard';
import Feature from '../components/Feature';

const ReviewsPage: React.FC = () => {
  const reviews = [
    {
      stars: 5,
      review: "Sarah is wonderful. She worked with my parents and was very gentle but effective. They felt comfortable and noticed a real difference afterwards.",
      author: "Client's Daughter"
    },
    {
      stars: 5,
      review: "Sarah was so caring and professional. She took the time to understand my needs, and I felt a noticeable improvement after her treatment.",
      author: "Client"
    },
    {
      stars: 5,
      review: "Great pressure, very professional, and effective. I left the session feeling much better in my movement and overall comfort.",
      author: "Client"
    },
    {
      stars: 5,
      review: "Fantastic treatment! I felt completely relaxed and in less pain afterwards. Thank you so much, Sarah.",
      author: "Client"
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h1 className="font-serif text-5xl lg:text-7xl font-light mb-6 tracking-tight">
              Client Reviews
            </h1>
            <p className="text-lg leading-relaxed text-gray-600 font-normal max-w-2xl mx-auto">
              Hear from our clients about their therapeutic journey and recovery experiences with Muscle Remedy Co.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {reviews.map((review, index) => (
              <ReviewCard
                key={index}
                stars={review.stars}
                review={review.review}
                author={review.author}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-6xl font-light mb-6 tracking-tight">
              Treatment Outcomes
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 font-normal max-w-2xl mx-auto">
              Real results from our comprehensive therapeutic approach and personalized care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Feature
              icon="95%"
              title="Client Satisfaction"
              description="Exceptional satisfaction rates from our comprehensive therapeutic treatments."
            />
            <Feature
              icon="85%"
              title="Pain Reduction"
              description="Significant pain reduction achieved within the first three treatment sessions."
            />
            <Feature
              icon="90%"
              title="Return Clients"
              description="High client retention rate demonstrating the effectiveness of our treatments."
            />
            <Feature
              icon="100%"
              title="Licensed Practitioners"
              description="All therapists maintain current licensing and continuing education requirements."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;