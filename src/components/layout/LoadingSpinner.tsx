
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-stories-dark flex items-center justify-center z-50">
      <div className="animate-pulse flex flex-col items-center">
        <img 
          src="https://res.cloudinary.com/dkuvvyaly/image/upload/v1742093718/STORIES_COFFEE_co_ya1q35.png" 
          alt="Stories Coffee" 
          className="h-24 animate-bounce" 
        />
        <div className="mt-4 text-stories-green">Loading...</div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
