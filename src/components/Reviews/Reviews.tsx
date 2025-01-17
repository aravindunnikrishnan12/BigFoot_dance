//reveiws.tsx

import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ author, date, rating, content, platform }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{author}</h3>
            {platform === 'Google' && (
              
              <img src="/src/assets/gogg.png" alt="Google" className="w-5 h-5" />
            )}
          </div>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

const ReviewsSection = () => {
  const platforms = [

    { name: 'Google Review', rating: '4.8' },
  
  ];

  const reviews = [
    {
      author: 'Adam Conway',
      date: '3 days ago',
      rating: 5,
      content: 'Two of the best docents I\'ve seen at a museum EVER. And it\'s _free_. What the heck even is this?',
      platform: 'Google'
    },
    {
      author: 'N Rajguru',
      date: '3 days ago',
      rating: 5,
      content: 'Sweeping views of los angeles and surrounding area with several educational exhibits inside. We went in on the Sunday',
      platform: 'Google'
    },
    {
      author: 'Lei Chen',
      date: '3 days ago',
      rating: 5,
      content: 'A great fusion of science and art!',
      platform: 'Google'
    },
    {
      author: 'KHANH PHAM',
      date: '3 days ago',
      rating: 5,
      content: 'A cool look the entire city of LA with Hollywood sign to take pic',
      platform: 'Google'
    }
  ];

  return (
    <div className="bg-[#f2a229]">
      <div className="container py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-dark">What our customers say</h2>
        
        {/* Platform ratings */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {platforms.map((platform) => (
            <div key={platform.name} className="flex items-center gap-2 text-white">
              {platform.name !== 'All Reviews' && (
               <img src="/src/assets/gogg.png" className="w-6 h-6 border border-gray-300 rounded-full" />

              )}
              <span className="font-medium">{platform.name}</span>
              <span className="font-bold">{platform.rating}</span>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="flex justify-between items-center mb-8">

          <button className="bg-white text-[#f2a229] px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            Write a review
          </button>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        {/* Navigation dots */}
        {/* <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
          <div className="w-2 h-2 rounded-full bg-white/50"></div>
        </div> */}
      </div>
    </div>
  );
};

export default ReviewsSection;