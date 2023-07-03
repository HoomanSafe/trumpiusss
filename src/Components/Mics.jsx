import React from "react";
import micsImg from "../assets/mics.png";
import person3 from "../assets/person2r.png";

const Mics = () => {
  return (
    <section className="py-[50px] w-full relative">
      <div className="text-white text-opacity-20 text-[128px] font-memeFont absolute -top-10 right-0 md:left-0 tracking-widest">
        H
      </div>
      <div className="text-white text-opacity-20 text-[128px] font-memeFont absolute -bottom-3 righleft-0 md:right-0 tracking-widest">
        I
      </div>
      <div className="">
        <img
          src={person3}
          alt=""
          className="absolute -bottom-40 left-0 w-[10rem] lg:w-auto"
        />
        <img
          src={person3}
          alt=""
          className="absolute -bottom-40 right-0 w-[10rem] lg:w-auto"
        />
      </div>
      <div className="container  grid lg:grid-cols-2 justify-between items-center gap-14">
        <article className="flex z-20 flex-col gap-5 font-Kavoon">
          <h1 className="font-Kavoon text-5xl uppercase md:text-7xl">
            Tekonomics
          </h1>
          <h2 className="text-2xl">Total Supply: 1, 000, 000, 000</h2>

          <div className="mt-10 flex flex-col gap-3">
            <article className="flex gap-5 items-center capitalize">
              <span className="w-10 h-[13px] relative bg-gradient-to-r from-lime-400 to-green-300 rounded-lg"></span>
              <h3 className="text-xl">0% buy tax</h3>
            </article>
            <article className="flex gap-5 items-center capitalize">
              <span className="w-10 h-[13px] relative bg-gradient-to-r from-green-400 to-green-300 rounded-lg" />{" "}
              <h3 className="text-xl">0% sell tax</h3>
            </article>
          </div>
        </article>
        <img src={micsImg} alt="" className="mx-auto" />
      </div>
    </section>
  );
};

export default Mics;
