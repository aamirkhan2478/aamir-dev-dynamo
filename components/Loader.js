import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="border-t-4 border-blue-500 rounded-full w-5 h-5 animate-spin"></div>
    </div>
  );
};

export default Loader;
