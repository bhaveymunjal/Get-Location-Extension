import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin h-16 w-16"></div>
    </div>
  );
};

export default LoadingComponent;
