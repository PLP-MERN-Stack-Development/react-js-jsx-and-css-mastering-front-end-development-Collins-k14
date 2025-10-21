import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 space-y-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 animate-bounce">
        Welcome to PLP Task Manager!
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 animate-pulse">
        Start by adding your tasks. Navigate to the Tasks page to manage them.
      </p>
    </div>
    
  );
};

export default Home;
