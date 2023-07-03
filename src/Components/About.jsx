import React from "react";
import person3 from "../assets/person3.png";

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
            <span className="text-yellow-500  ">$HARAMPEPE </span>
          </h1>
          <div className=" text-white text-[16px] font-normal leading-loose tracking-wide">
            Introducing Haram Pepe, the craziest crossover of memes and crypto!
            In a wild corner of the internet, where Harambe and Pepe hold court,
            this project has burst onto the scene with a mix of laughter and
            digital riches. It's like watching Harambe do the crypto cha-cha
            with Pepe, leaving everyone in stitches and counting their
            HaramCoins. Join the Haram Pepe revolution and witness the memetic
            madness unfold as Harambe and Pepe take the crypto world by storm.
            Get ready to laugh, hodl, and meme your way to the moon with Haram
            Pepe! It's meme-tastic, crypto-cool, and guaranteed to leave you
            shouting, "Harambe Pepe, take my money!"
          </div>
          <a
            href=""
            target="_blank"
            className="w-[238px] h-[54px] font-Kavoon px-8 py-4 bg-white text-green-700 rounded shadow  border border-lime-400  justify-center items-center gap-[10px] inline-flex"
          >
            <a
              href="https://app.uniswap.org/#/swap?outputCurrency=0x4B5707F91fabBF04C2A41E892B0A07E3aBaC75df"
              target="_blank"
              className=" text-[16px] leading-snug uppercase"
            >
              buy on uniswap
            </a>
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
