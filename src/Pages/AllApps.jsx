import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { FaSearch } from "react-icons/fa"; // Using react-icons for consistency
import useAppHook from "../hooks/useAppHook/useAppHook";
import AppCard from "../Components/AppCard/AppCard";
import AppErrTemplate from "../Error/AppErrorPage/AppErrTemplate";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpiner";

const AllApps = () => {
  const { apps, loading: initialLoading } = useAppHook();

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Search Logic Effect
  useEffect(() => {
    const handleSearch = () => {
      const query = searchTerm.trim().toLowerCase();

      if (!query) {
        setFilteredApps(apps);
        return;
      }

      setIsSearching(true);
      
      // Simulate search delay for UX
      const timeoutId = setTimeout(() => {
        const results = apps.filter((app) =>
          app.title.toLowerCase().includes(query)
        );
        setFilteredApps(results);
        setIsSearching(false);
      }, 800);

      return () => clearTimeout(timeoutId);
    };

    handleSearch();
  }, [searchTerm, apps]);

  // Sync initial apps when loaded
  useEffect(() => {
    if (!searchTerm) {
      setFilteredApps(apps);
    }
  }, [apps, searchTerm]);


  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">
            Our Application <span className="text-violet-600">Library</span>
          </h1>
          <p className="text-lg text-slate-500 leading-relaxed">
            Browse our complete collection of tools designed for millions. 
            Find the perfect app to boost your productivity today.
          </p>
        </div>

        {/* --- Controls Bar (Search & Count) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          
          {/* Result Count Badge */}
          <div className="flex items-center gap-2">
            <span className="text-slate-500 font-medium">Total Apps Found:</span>
            <span className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-bold">
              {filteredApps.length}
            </span>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaSearch className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 text-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/20 focus:border-violet-500 transition-all duration-300"
            />
          </div>
        </div>

        {/* --- Main Content Area --- */}
        <div className="min-h-[400px]">
          {initialLoading || isSearching ? (
            // Loading State
            <div className="flex justify-center items-center py-20">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              {filteredApps.length > 0 ? (
                // Grid Layout
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {filteredApps.map((app) => (
                    <div 
                      key={app.id}
                      className="transition-transform duration-300 hover:-translate-y-1"
                    >
                      <Link to={`/apps/${app.id}`}>
                        <AppCard app={app} />
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                // Empty State
                <div className="flex justify-center py-10">
                  <AppErrTemplate />
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default AllApps;