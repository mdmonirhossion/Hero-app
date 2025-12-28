import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAppHook from "../hooks/useAppHook/useAppHook";
import AppStatisticChart from "../Components/AppStatisticChart/AppStatisticChart";
import AppError from "../Error/AppErrorPage/AppError";
import Swal from "sweetalert2";
import setInstalledApps from "../utility/addToLocalStorage";
import { ToastContainer } from "react-toastify";
import LoadingSpiner from "../Components/LoadingSpinner/LoadingSpiner";

const AppDetails = () => {
  const { id } = useParams();
  const [installed, setInstalled] = useState(false);

  const { apps, error, loading } = useAppHook();
  const app = apps.find((app) => app.id === Number(id));

  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const isInstalled = installedApps.some(
      (installedApp) => parseInt(installedApp.id) === parseInt(id)
    );
    setInstalled(isInstalled);
  }, [id]);

  if (loading) return <LoadingSpiner />;
  if (error) return <p>Error loading app details.</p>;
  if (!app) return <AppError />;

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
  } = app || {};

  const handleInstall = () => {
    if (installed) return;

    Swal.fire({
      title: "Install App",
      text: "Do you want to install this app?",
      icon: "question",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Yes",
      denyButtonText: "Not now",
    }).then((result) => {
      if (result.isConfirmed) {
        setInstalledApps(id);
        setInstalled(true);
        Swal.fire(
          "Installed!",
          `The app ${title} has been installed.`,
          "success"
        );
      } else if (result.isDenied) {
        Swal.fire("The app's installation was canceled.", "", "info");
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <ToastContainer />

      {/* Top section */}
      <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start">
        <figure className="flex justify-center md:justify-start">
          <img
            src={image}
            alt={title}
            className="w-56 h-56 md:w-80 md:h-80 object-contain"
          />
        </figure>

        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-sm md:text-lg text-[#627382]">{description}</p>

          <div className="mt-4 text-xs md:text-base">
            <span className="font-semibold text-[#627382]">
              Developed by{" "}
            </span>
            <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">
              {companyName}
            </span>
          </div>

          <hr className="my-4 border-t border-gray-300" />

          {/* Stats row */}
          <div className="mt-2 flex flex-row gap-6 md:gap-10 text-xs md:text-lg">
            <div className="flex-1">
              <img src="../icon-downloads.png" alt="Downloads" />
              <p className="font-semibold text-[#001931] mt-1">Downloads</p>
              <p className="font-extrabold text-[1.8rem] md:text-[2.5rem]">
                {downloads_millions / 1000 >= 1
                  ? `${downloads_millions / 1000} B`
                  : `${downloads_millions / 100} M`}
              </p>
            </div>

            <div className="flex-1">
              <img src="../icon-ratings.png" alt="Rating" />
              <p className="font-semibold text-[#001931] mt-1">Rating</p>
              <p className="font-extrabold text-[1.8rem] md:text-[2.5rem]">
                {ratingAvg}
              </p>
            </div>

            <div className="flex-1">
              <img src="../icon-review.png" alt="Reviews" />
              <p className="font-semibold text-[#001931] mt-1">Reviews</p>
              <p className="font-extrabold text-[1.8rem] md:text-[2.5rem]">
                {reviews / 1000000} M
              </p>
            </div>
          </div>

          <button
            className="mt-6 btn w-full md:w-1/2 btn-success text-white border-none"
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? "Installed" : `Install Now ( ${size} MB )`}
          </button>
        </div>
      </div>

      <hr className="my-6 border-t border-gray-300" />

      {/* Ratings chart */}
      <div>
        <p className="font-semibold text-[#00193npm run dw=1] text-2xl mt-6 mb-4">
          Ratings
        </p>
        <AppStatisticChart />
      </div>

      <hr className="my-6 border-t border-gray-300" />

      {/* Description */}
      <div className="mt-6">
        <p className="font-semibold text-[#001931] text-2xl mb-4">
          Description
        </p>
        <p className="text-justify text-[#627382]">{largeDescription}</p>
      </div>
    </div>
  );
};

export default AppDetails;