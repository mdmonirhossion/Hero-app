import React from 'react';
import { FourSquare } from 'react-loading-indicators';

const LoadingSpinner = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center bg-slate-50/50">
            
            {/* Centered Card Container */}
            <div className="flex flex-col items-center justify-center gap-6 p-8 md:p-12 bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 max-w-sm w-full mx-4 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-100/50">
                
                {/* Spinner Component */}
                <div className="p-4 bg-indigo-50 rounded-2xl">
                    <FourSquare 
                        color="#4f46e5" /* Indigo-600 */
                        size="medium" 
                        text="" 
                        textColor="" 
                    />
                </div>

                {/* Text Indicator */}
                <div className="flex flex-col items-center space-y-1">
                    <h3 className="text-slate-800 font-bold text-xl tracking-tight">
                        Loading
                    </h3>
                    <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest animate-pulse">
                        Please Wait...
                    </p>
                </div>

            </div>
        </div>
    );
};

export default LoadingSpinner;