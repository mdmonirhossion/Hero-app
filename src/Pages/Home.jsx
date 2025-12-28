import React from "react";
import Banner from "../Components/Banner/Banner";
import StatesSection from "../Components/States Section/StatesSection";
import TopAppsSection from "../Components/Top Apps Section/TopAppsSection";

const Home = () => {
  return (
    <main className="flex flex-col w-full min-h-screen bg-slate-50 overflow-x-hidden">
      
      {/* Hero / Banner Section */}
      <section className="w-full">
        <Banner />
      </section>

      {/* Statistics Section */}
      <section className="w-full relative z-10">
        <StatesSection />
      </section>

      {/* Trending Apps Listing */}
      <section className="w-full pb-16">
        <TopAppsSection />
      </section>
      
    </main>
  );
};

export default Home;