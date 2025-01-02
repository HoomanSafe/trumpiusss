import React from "react";
import personRight from "../assets/person-right.png";
import personLeft from "../assets/person-left.png";
import Logo from "../assets/trumpiuslogo1.jpg";

const Hero = () => {
  return (
    <section className="py-[50px] w-full relative h-auto">
      <div className="container flex justify-center items-center flex-col gap-7 text-center">
        <h1 className="text-5xl lg:text-8xl font-Kavoon uppercase">
          welcome to <br />
          <span className="text-yellow-500">TRUMPIUS</span>
        </h1>
        <p className="font-workSans text-xl">
         Trumpius Maximus - BNB 

I am the 2025 President of Memes and USA 

I am here to Make Memes Great Again and spark a new bull run!

        </p>
        <p
          className=" text-3xl font-Kavoon"
          onClick={async () => {
            await navigator.clipboard.writeText(
              "0x4B5707F91fabBF04C2A41E892B0A07E3aBaC75df"
            );
            alert("contract copied");
          }}
        >
          0x939Ed9AdF06683D3c0493102B1CC4dc56A73225b
        </p>
        {/* <a
          href="mailto:team@haram pepetoken.com"
          className=" text-3xl font-mono"
        >
          team@haram pepetoken.com
        </a> */}
        <a
          href=""
          target="_blank"
          className="w-[355px] h-[54px] uppercase px-8 py-4 bg-gradient-to-l from-yellow-500 to-rose-400 rounded shadow  border border-lime-400 justify-center items-center gap-[10px] text-white text-[16px] leading-snug font-Kavoon  hover:text-white"
        >
          buy haram pepe
        </a>
        <img src={Logo} alt="" />
        <div className="">
          <img
            src={personLeft}
            alt=""
            className="absolute -bottom-40 left-0 w-[10rem] lg:w-auto"
          />
          <img
            src={personRight}
            alt=""
            className="absolute -bottom-40 right-0 w-[10rem] lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
