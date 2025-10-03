import React from 'react';

interface ReviewCardProps {
  stars: number;
  review: string;
  author: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ stars, review, author }) => {
  return (
    <div className="bg-white p-12 transition-all duration-300 hover:-translate-y-2">
      <div className="text-sky-400 text-xl mb-4">
        {'★'.repeat(stars)}
      </div>
      <blockquote className="font-serif text-lg font-light leading-relaxed mb-6 italic tracking-tight">
        "{review}"
      </blockquote>
      <cite className="text-sm font-semibold uppercase tracking-wider text-sky-400 not-italic">
        {author}
      </cite>
    </div>
  );
};

export default ReviewCard;