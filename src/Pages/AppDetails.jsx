import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import { FaCloudDownloadAlt, FaCheck, FaBuilding } from "react-icons/fa"; // Added icons for better UX

import useAppHook from "../hooks/useAppHook/useAppHook";
import AppStatisticChart from "../Components/AppStatisticChart/AppStatisticChart";
import AppError from "../Error/AppErrorPage/AppError";
import LoadingSpinner from "../Components/LoadingSpinner/LoadingSpiner";
import setInstalledApps from "../utility/addToLocalStorage";

const AppDetails = () => {
  const { id } = useParams();
  const [isInstalled, setIsInstalled] = useState(false);
  const { apps, error, loading } = useAppHook();

  // Find specific app
  const currentApp = apps.find((app) => app.id === Number(id));

  // Check installation status on mount
  useEffect(() => {
    const installedList = JSON.parse(localStorage.getItem("installedApps")) || [];
    const status = installedList.some((item) => parseInt(item.id) === parseInt(id));
    setIsInstalled(status);
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center py-20 text-red-500">Failed to load application data.</div>;
  if (!currentApp) return <AppError />;

  const {
    title,
    companyName,
    description,
    size,
    reviews,
    ratingAvg,
    downloads_millions,
    image,
    largeDescription,
  } = currentApp;

  // Handle Install Action
  const handleInstallClick = () => {
    if (isInstalled) return;

    Swal.fire({
      title: "Install Application?",
      text: `Do you want to download and install ${title}?`,
      icon: "question",
      showCancelButton: true, // Use standard Cancel instead of Deny for cleaner UI
      confirmButtonText: "Yes, Install",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#0f172a", // Slate-900
      cancelButtonColor: "#94a3b8", // Slate-400
    }).then((result) => {
      if (result.isConfirmed) {
        setInstalledApps(id);
        setIsInstalled(true);
        Swal.fire({
          title: "Success!",
          text: `${title} is now installed on your device.`,
          icon: "success",
          confirmButtonColor: "#0f172a",
        });
      }
    });
  };

  // Helper to format numbers
  const formatDownloads = (num) => 
    num / 1000 >= 1 ? `${(num / 1000).toFixed(1)}B` : `${(num / 100).toFixed(1)}M`;
  
  const formatReviews = (num) => 
    `${(num / 1000000).toFixed(0)}M`;

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <ToastContainer />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-6xl">
        
        {/* --- Top Section: Header & Info --- */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden mb-8">
          <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 lg:gap-12">
            
            {/* App Icon / Image */}
            <div className="flex-shrink-0 flex justify-center md:justify-start">
              <div className="w-40 h-40 md:w-56 md:h-56 bg-slate-50 rounded-2xl p-4 border border-slate-100">
                <img 
                  src={image} 
                  alt={title} 
                  className="w-full h-full object-contain drop-shadow-sm" 
                />
              </div>
            </div>

            {/* App Details & Actions */}
            <div className="flex-grow flex flex-col justify-center text-center md:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-2">
                {title}
              </h1>
              
              <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 mb-4 font-medium text-sm md:text-base">
                <FaBuilding className="text-violet-500" />
                <span>Developed by</span>
                <span className="text-violet-600 font-bold">{companyName}</span>
              </div>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                {description}
              </p>

              {/* Install Button */}
              <div>
                <button
                  onClick={handleInstallClick}
                  disabled={isInstalled}
                  className={`
                    relative group overflow-hidden px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl w-full md:w-auto min-w-[240px] flex items-center justify-center gap-3
                    ${isInstalled 
                      ? "bg-emerald-50 text-emerald-600 cursor-default border border-emerald-100 shadow-none" 
                      : "bg-slate-900 text-white hover:-translate-y-1 hover:bg-slate-800"
                    }
                  `}
                >
                  {isInstalled ? (
                    <>
                      <FaCheck /> <span>Installed</span>
                    </>
                  ) : (
                    <>
                      <FaCloudDownloadAlt className="text-xl" /> 
                      <span>Install ({size} MB)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* --- Stats Strip --- */}
          <div className="bg-slate-50/50 border-t border-slate-100 p-6 md:p-8">
            <div className="grid grid-cols-3 gap-4 divide-x divide-slate-200">
              
              {/* Downloads Stat */}
              <div className="flex flex-col items-center justify-center text-center px-2">
                <div className="w-10 h-10 mb-2 opacity-80">
                  <img src="../icon-downloads.png" alt="" className="w-full h-full object-contain" />
                </div>
                <p className="text-2xl md:text-4xl font-black text-slate-900">
                  {formatDownloads(downloads_millions)}
                </p>
                <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">Downloads</p>
              </div>

              {/* Rating Stat */}
              <div className="flex flex-col items-center justify-center text-center px-2">
                <div className="w-10 h-10 mb-2 opacity-80">
                  <img src="../icon-ratings.png" alt="" className="w-full h-full object-contain" />
                </div>
                <p className="text-2xl md:text-4xl font-black text-slate-900">
                  {ratingAvg}
                </p>
                <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">Rating</p>
              </div>

              {/* Reviews Stat */}
              <div className="flex flex-col items-center justify-center text-center px-2">
                <div className="w-10 h-10 mb-2 opacity-80">
                  <img src="../icon-review.png" alt="" className="w-full h-full object-contain" />
                </div>
                <p className="text-2xl md:text-4xl font-black text-slate-900">
                  {formatReviews(reviews)}
                </p>
                <p className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-wider">Reviews</p>
              </div>

            </div>
          </div>
        </div>

        {/* --- Content Grid: Chart & Description --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left: Ratings Chart */}
          <div className="lg:col-span-1 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-amber-400 rounded-full"></span>
              Rating Analysis
            </h3>
            <div className="w-full -ml-4">
               <AppStatisticChart />
            </div>
          </div>

          {/* Right: Detailed Description */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
             <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-2 h-6 bg-violet-500 rounded-full"></span>
              About this App
            </h3>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-justify">
              {largeDescription}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AppDetails;