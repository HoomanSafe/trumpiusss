import React from "react";
import { LiaTelegramPlane } from "react-icons/lia";

const Header = () => {
  return (
    <header className="py-3 w-full font-Kavoon z-10 ">
      <nav className="container flex justify-between items-center">
        <a href="" className="text-4xl uppercase">
          haram pepe
        </a>
        <a
          href=""
          className="px-8 py-4 bg-secondary border border-light rounded-md shad font-anakeimDisplaySsiRegular hidden md:flex items-center gap-3 hover:bg-transparent uppercase max-w-full"
        >
          <LiaTelegramPlane /> telegram
        </a>
      </nav>
    </header>
  );
};

export default Header;
