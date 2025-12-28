import React from "react";
import { Link } from "react-router";
import useAppHook from "../../hooks/useAppHook/useAppHook";
import AppCard from "../AppCard/AppCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpiner"; // Fixed import name if needed

const TopAppsSection = () => {
  const { topApps, loading } = useAppHook();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 space-y-4">
          <span className="inline-block py-1 px-3 rounded-full bg-violet-50 text-violet-600 text-xs font-bold uppercase tracking-wider">
            Editor's Choice
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Trending Apps
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            Discover the most popular applications currently dominating the market. 
            Handpicked for performance and productivity.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {topApps.map((app) => (
            <div 
              key={app.id} 
              className="transform transition-transform duration-300 hover:-translate-y-1"
            >
              <Link to={`/apps/${app.id}`} className="block h-full">
                <AppCard app={app} />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            to="/apps"
            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>View All Apps</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TopAppsSection;