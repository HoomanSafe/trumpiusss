import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Map from "./Components/Map";
import Footer from "./Components/Footer";

const App = () => {
  useEffect(() => {
    document.querySelectorAll("img").forEach((image) => {
      image.setAttribute("loading", "lazy");
    });
  }, []);
  return (
    <div className="min-h-screen w-full bg-[#33822A] text-white font-chauPhilomeneOne relative overflow-hidden">
      <div className="h-[290px] w-[290px] absolute bg-[#85FF6C] right-0 hero-overlay"></div>
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        
        {/* <Mics />*/}
         <Map />
        <Footer />
      </div>
    </div>
  );
};

export default App;
