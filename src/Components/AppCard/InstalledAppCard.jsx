import React from "react";
import { FaStar } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router"; // Assuming React Router v7
import { removeInstalledApp } from "../../utility/addToLocalStorage";
import Swal from "sweetalert2";

const InstalledAppCard = ({ app, uninstalled, setUninstalled }) => {
  const { title, size, ratingAvg, downloads_millions, image, id } = app || {};

  const handleUninstall = (appId) => {
    Swal.fire({
      title: "Uninstall App?",
      text: `Are you sure you want to remove ${title}?`,
      icon: "warning", // Changed icon to warning for destructive action
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes, Uninstall",
      denyButtonText: "Cancel",
      confirmButtonColor: "#ef4444", // Red for confirm
      denyButtonColor: "#6b7280", // Gray for cancel
    }).then((result) => {
      if (result.isConfirmed) {
        removeInstalledApp(appId);
        setUninstalled(!uninstalled);
        Swal.fire({
          title: "Uninstalled!",
          text: `${title} has been removed.`,
          icon: "success",
          confirmButtonColor: "#3b82f6",
        });
      } else if (result.isDenied) {
        Swal.fire("Cancelled", "The app remains installed.", "info");
      }
    });
  };

  return (
    <div className="w-full md:w-11/12 lg:w-4/5 mx-auto my-3 px-2 md:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-center bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
        
        {/* Left Side: Clickable App Info */}
        <Link 
          to={`/apps/${id}`} 
          className="flex items-center gap-4 w-full sm:w-auto group"
        >
          {/* Image Container */}
          <div className="bg-gray-50 p-2 rounded-lg shrink-0 group-hover:bg-blue-50 transition-colors">
            <img
              src={image}
              alt={title}
              className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-md"
            />
          </div>

          {/* Text Details */}
          <div className="flex flex-col">
            <h3 className="text-gray-800 font-bold text-base md:text-lg leading-tight group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-1.5">
              {/* Downloads Badge */}
              <div className="flex items-center gap-1 text-xs md:text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <HiOutlineDownload />
                <span>
                  {downloads_millions / 1000 >= 1
                    ? `${downloads_millions / 1000} B`
                    : `${downloads_millions / 100} M`}
                </span>
              </div>

              {/* Rating Badge */}
              <div className="flex items-center gap-1 text-xs md:text-sm font-medium text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full">
                <FaStar />
                <span>{ratingAvg}</span>
              </div>

              {/* Size */}
              <span className="text-xs md:text-sm text-gray-400 font-medium ml-1">
                {size} MB
              </span>
            </div>
          </div>
        </Link>

        {/* Right Side: Uninstall Button */}
        <div className="mt-4 sm:mt-0 w-full sm:w-auto flex justify-end">
          <button
            onClick={(e) => {
                e.preventDefault(); // Stop link navigation if button clicked
                handleUninstall(id);
            }}
            className="btn btn-sm md:btn-md bg-red-50 hover:bg-red-100 text-red-600 border-none rounded-full px-6 font-semibold w-full sm:w-auto transition-colors"
          >
            Uninstall
          </button>
        </div>

      </div>
    </div>
  );
};

export default InstalledAppCard;