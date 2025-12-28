import React from 'react';
import { FaStar } from "react-icons/fa6";
import { HiOutlineDownload } from "react-icons/hi";

const AppCard = ({ app }) => {
    const { title, image, ratingAvg, downloads_millions } = app;

    return (
        <div className="card bg-white w-full shadow hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden border border-slate-200">
            {/* Image Section - Changed to neutral slate background */}
            <div className="p-4">
                <figure className="bg-slate-100 h-36 rounded-lg flex items-center justify-center relative">
                    <img
                        src={image}
                        alt={title}
                        className="object-contain w-20 h-20 transition-transform duration-500 hover:rotate-3"
                    />
                </figure>
            </div>

            {/* Content Section */}
            <div className="card-body px-4 pb-4 pt-0">
                <h2 className="card-title text-slate-700 font-bold text-base truncate">
                    {title}
                </h2>

                <div className="card-actions flex items-center justify-between mt-2">
                    {/* Downloads Badge - Blue Theme, Pill Shape, Smaller Size */}
                    <div className="badge border-none px-3 py-2 bg-blue-100 text-blue-700 text-xs font-bold rounded-full flex gap-1.5">
                        <HiOutlineDownload className="text-sm" />
                        <span>
                            {downloads_millions / 1000 >= 1
                                ? `${downloads_millions / 1000} B`
                                : `${downloads_millions / 100} M`}
                        </span>
                    </div>

                    {/* Rating Badge - Orange Theme, Pill Shape, Smaller Size */}
                    <div className="badge border-none px-3 py-2 bg-orange-100 text-orange-700 text-xs font-bold rounded-full flex gap-1.5">
                        <FaStar className="text-sm" />
                        <span>{ratingAvg}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;