import React from "react";
import person3 from "../assets/nfttrump1.png";

const About = () => {
  return (
    <section className="py-[250px] w-full relative">
      <div className="absolute top-40 left-5 text-white text-opacity-20 text-[128px] font-memeFont tracking-widest">
        O
      </div>
      <div className="text-white absolute bottom-10 right-0 text-opacity-20 text-[128px] font-memeFont tracking-widest">
        A
      </div>
      <div className="text-white absolute top-32 right-0 text-opacity-20 text-[128px] font-memeFont tracking-widest">
        H
      </div>
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-end items-center gap-14">
        {/* <img src={person3} alt="" className="lg:absolute left-0" /> */}
        <article className=""></article>
        <article className=" flex flex-col gap-6 w-full">
          <h1 className="font-Kavoon text-6xl md:text-7xl break-all">
            <span className="text-white  ">About </span>
            <span className="text-yellow-500  ">$TRUMPIUS </span>
          </h1>
          <div className=" text-white text-[16px] font-normal leading-loose tracking-wide">
            ALX was the one who created the Kekius profile for Elon and recommended him to use it. Now, he's hinting that Trump will do the same.
          </div>
          <a
            href=""
            target="_blank"
            className="w-[238px] h-[54px] font-Kavoon px-8 py-4 bg-white text-green-700 rounded shadow  border border-lime-400  justify-center items-center gap-[10px] inline-flex"
          >
            <a
              href=""
              target="_blank"
              className=" text-[16px] leading-snug uppercase"
            >
              buy on Pancakeswap
            </a>
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
