import React from 'react';
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa6"; // Standard back icon
import AppErrTemplate from "./AppErrTemplate";

const AppError = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center px-4 py-12 bg-white">
      
      {/* Error Content Container */}
      <div className="w-full max-w-lg text-center space-y-8">
        
        {/* The Error Template (Illustration/Text) */}
        <div className="transform transition-transform hover:scale-105 duration-500">
          <AppErrTemplate />
        </div>

        {/* Action Button */}
        <button
          onClick={() => navigate(-1)}
          className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 text-white font-semibold text-sm md:text-base rounded-full shadow-lg hover:bg-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Go Back Previous Page</span>
        </button>
        
      </div>
    </div>
  );
};

export default AppError;