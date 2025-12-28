import React from 'react';
import { useNavigate } from 'react-router';
import { FaArrowLeftLong } from "react-icons/fa6"; // Standardizing icons
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';

const RouteError = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      
      {/* Navigation */}
      <NavBar />
      
      {/* Main Error Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-4 py-12 text-center">
        
        {/* Responsive Image Container */}
        <div className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[500px] mb-8">
          <img 
            src="../error-404.png" 
            alt="Page Not Found" 
            className="w-full h-auto object-contain drop-shadow-md opacity-90 hover:scale-[1.02] transition-transform duration-500" 
          />
        </div>

        {/* Text Section */}
        <div className="space-y-4 max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          
          <p className="text-base md:text-lg text-slate-500 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          {/* Action Button */}
          <div className="pt-4">
            <button
              onClick={() => navigate(-1)}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            >
              <FaArrowLeftLong className="transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Go Back Home</span>
            </button>
          </div>
        </div>

      </div>

      {/* Footer Section */}
      <div className="w-full">
        <Footer />
      </div>

    </div>
  );
};

export default RouteError;