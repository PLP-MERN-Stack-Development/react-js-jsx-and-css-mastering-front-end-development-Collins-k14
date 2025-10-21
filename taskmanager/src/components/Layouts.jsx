// Layout
import React, { useContext } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import { ThemeContext } from '../context/ThemeContext'; 

const Layout = ({ children }) => {
  //Dark/light theme
  useContext(ThemeContext); 

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <Navbar /> 
      <main className="flex-grow max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;