import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
  return (
    <section className="relative w-full bg-slate-50 overflow-hidden pt-12 pb-20 lg:pt-24 lg:pb-32">
      
      {/* Background Decor Elements - Unique Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-200 rounded-full blur-[80px] opacity-40 mix-blend-multiply"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200 rounded-full blur-[80px] opacity-40 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6 max-w-4xl">
            We Build{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600">
              Productive
            </span>{' '}
            Apps
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10">
            At HERO.IO, we craft innovative digital experiences designed to make everyday life 
            simpler and smarter. Turning complex ideas into intuitive solutions.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            
            {/* Google Play - Primary Style */}
            <Link
              to="https://play.google.com/store/apps"
              target="_blank"
              className="group relative flex items-center justify-center gap-3 px-8 py-3.5 bg-slate-900 text-white rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl w-full sm:w-auto min-w-[200px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <img
                  src="../PlayStore.png"
                  alt="Play Store"
                  className="w-6 h-6 object-contain"
                />
                <div className="text-left leading-none">
                  <p className="text-[10px] uppercase font-semibold text-slate-300 group-hover:text-white/90">Get it on</p>
                  <p className="text-sm font-bold">Google Play</p>
                </div>
              </div>
            </Link>

            {/* App Store - Outline Style */}
            <Link
              to="https://apps.apple.com/"
              target="_blank"
              className="group flex items-center justify-center gap-3 px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-xl transition-all duration-300 hover:border-violet-200 hover:shadow-lg hover:-translate-y-1 w-full sm:w-auto min-w-[200px]"
            >
              <img
                src="https://www.apple.com/v/app-store/c/images/overview/icon_appstore__ev0z770zyxoy_large.png"
                alt="App Store"
                className="w-6 h-6 object-contain"
              />
              <div className="text-left leading-none">
                <p className="text-[10px] uppercase font-semibold text-slate-500">Download on the</p>
                <p className="text-sm font-bold group-hover:text-violet-600 transition-colors">App Store</p>
              </div>
            </Link>
          </div>

          {/* Hero Image Section */}
          <div className="mt-16 sm:mt-20 relative w-full max-w-5xl">
            {/* Glow effect behind image */}
            <div className="absolute -inset-1 bg-gradient-to-b from-violet-100 to-white rounded-[2rem] blur-xl opacity-50 -z-10"></div>
            
            <img
              src="../hero.png"
              alt="App Showcase"
              className="w-full h-auto max-h-[500px] object-contain mx-auto drop-shadow-2xl hover:scale-[1.01] transition-transform duration-500 ease-out"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;