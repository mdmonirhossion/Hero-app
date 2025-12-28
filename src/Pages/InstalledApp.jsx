import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { ToastContainer } from "react-toastify";
import { FaSortAmountDown, FaSortAmountUp, FaBoxOpen } from "react-icons/fa"; // Added icons

import { getInstalledApps } from "../utility/addToLocalStorage";
import useAppHook from "../hooks/useAppHook/useAppHook";
import InstalledAppCard from "../Components/AppCard/InstalledAppCard";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpiner";

const InstalledApp = () => {
  const { apps: libraryApps } = useAppHook();
  
  // Unified State Management
  const [myApps, setMyApps] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(false); // To force re-render on uninstall

  // Load and Hydrate Data
  useEffect(() => {
    const hydrateApps = () => {
      setIsLoading(true);
      try {
        const localData = getInstalledApps() || [];
        
        // Match local IDs with full app details from the hook
        const hydratedData = localData
          .map((localItem) => libraryApps.find((a) => parseInt(a.id) === parseInt(localItem.id)))
          .filter(Boolean); // Remove undefined results

        // Simulate a small delay for smooth UX transition
        setTimeout(() => {
          setMyApps(hydratedData);
          setIsLoading(false);
        }, 800);
        
      } catch (err) {
        console.error("Error syncing installed apps:", err);
        setIsLoading(false);
      }
    };

    if (libraryApps.length > 0) {
      hydrateApps();
    }
  }, [libraryApps, refreshTrigger]);

  // Sorting Handler
  const handleSort = (direction) => {
    const sortedList = [...myApps].sort((a, b) => {
      return direction === "asc" 
        ? a.downloads_millions - b.downloads_millions 
        : b.downloads_millions - a.downloads_millions;
    });
    setMyApps(sortedList);
  };

  // Callback to remove item from UI immediately after uninstall
  const onUninstall = () => {
    setRefreshTrigger(!refreshTrigger);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20">
      <ToastContainer />
      
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* --- Header Section --- */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            My <span className="text-violet-600">Installed</span> Apps
          </h1>
          <p className="text-slate-500 text-lg">
            Manage your personal collection of tools and games.
          </p>
        </div>

        {/* --- Controls Bar --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-8">
          
          {/* Count Badge */}
          <div className="flex items-center gap-3">
            <div className="bg-violet-100 p-2 rounded-lg text-violet-600">
              <FaBoxOpen />
            </div>
            <h2 className="text-lg font-bold text-slate-700">
              Total Installed: <span className="text-slate-900">{myApps.length}</span>
            </h2>
          </div>

          {/* Sort Dropdown (Styled) */}
          <div className="dropdown dropdown-end w-full md:w-auto">
            <div 
              tabIndex={0} 
              role="button" 
              className="btn bg-slate-50 border border-slate-200 hover:bg-white hover:border-violet-300 text-slate-600 w-full md:w-48 flex justify-between"
            >
              <span>Sort Downloads</span>
              <FaSortAmountDown className="text-xs" />
            </div>
            <ul 
              tabIndex={0} 
              className="dropdown-content menu bg-white rounded-xl z-[1] w-full md:w-52 p-2 shadow-xl border border-slate-100 mt-2"
            >
              <li className="mb-1">
                <button 
                  onClick={() => handleSort("asc")}
                  className="hover:bg-violet-50 hover:text-violet-700 font-medium"
                >
                  <FaSortAmountUp /> Low to High
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSort("desc")}
                  className="hover:bg-violet-50 hover:text-violet-700 font-medium"
                >
                  <FaSortAmountDown /> High to Low
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* --- App List --- */}
        <div className="min-h-[300px]">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              {myApps.length > 0 ? (
                <ul className="space-y-4">
                  {myApps.map((app) => (
                    <li key={app.id} className="transition-all duration-300 hover:-translate-y-1">
                      <InstalledAppCard
                        app={app}
                        uninstalled={refreshTrigger} // Pass trigger to help dependency logic
                        setUninstalled={onUninstall} // Updated callback name
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                // Empty State
                <div className="flex flex-col items-center justify-center py-16 text-center opacity-70">
                   <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-slate-300 text-4xl">
                      <FaBoxOpen />
                   </div>
                   <h3 className="text-xl font-bold text-slate-600">No Apps Installed</h3>
                   <Link to="/apps" className="mt-4 text-violet-600 hover:underline font-semibold">
                      Browse Apps Library &rarr;
                   </Link>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default InstalledApp;