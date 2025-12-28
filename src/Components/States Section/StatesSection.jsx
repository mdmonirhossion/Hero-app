import React from "react";
import useAppHook from "../../hooks/useAppHook/useAppHook";

const StatesSection = () => {
  const { apps } = useAppHook();
  
  // Logic maintained from original
  const totalDownloads = apps.reduce((total, app) => total + app.downloads_millions, 0) / 1000;
  const totalReviews = (apps.reduce((total, app) => total + app.reviews, 0) / 1000000000).toFixed(2);
  const activeApps = apps.length > 0 ? apps.length - 8 : 0; // Added safety check for initial load

  return (
    <section className="relative w-full py-20 bg-slate-900 overflow-hidden">
      
      {/* Background Decor - Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Trusted by Millions, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              Built for You
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Our numbers speak for themselves. We deliver high-quality, 
            performance-driven apps that users love.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          
          {/* Card 1: Downloads */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Total Downloads</p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
              {totalDownloads}
              <span className="text-3xl md:text-5xl text-violet-400 ml-1">B</span>
            </p>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
              <span>▲ 21%</span>
              <span>vs last month</span>
            </div>
          </div>

          {/* Card 2: Reviews */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Total Reviews</p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
              {totalReviews}
              <span className="text-3xl md:text-5xl text-fuchsia-400 ml-1">B</span>
            </p>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium">
              <span>▲ 46%</span>
              <span>vs last month</span>
            </div>
          </div>

          {/* Card 3: Active Apps */}
          <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Active Apps</p>
            <p className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
              {activeApps}
              <span className="text-3xl md:text-5xl text-indigo-400 ml-1">+</span>
            </p>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
              <span>🚀 31 more</span>
              <span>launching soon</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatesSection;