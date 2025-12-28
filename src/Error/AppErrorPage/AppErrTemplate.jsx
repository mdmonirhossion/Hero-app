import React from 'react';

const AppErrTemplate = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto px-6">
            
            {/* Image Container with responsive sizing */}
            <div className="w-full max-w-[250px] md:max-w-[320px] lg:max-w-[380px] mb-8">
                <img 
                    src="../App-Error.png" 
                    alt="App Not Found Illustration" 
                    className="w-full h-auto object-contain drop-shadow-sm opacity-90 hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* Text Content */}
            <div className="text-center space-y-3 md:space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                    Oops! <span className="text-indigo-600">App Not Found</span>
                </h1>
                
                <p className="text-base md:text-lg text-slate-500 max-w-md mx-auto leading-relaxed">
                    The app you are looking for doesn't exist or has been removed from our system.
                </p>
            </div>

        </div>
    );
};

export default AppErrTemplate;