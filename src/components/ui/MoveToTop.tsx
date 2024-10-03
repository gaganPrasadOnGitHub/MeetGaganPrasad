import React from "react";
import { IoArrowUpCircleOutline } from "react-icons/io5";

export const MoveToTop: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="absolute right-8 bottom-20 md:right-4 md:bottom-28">
      <button
        onClick={scrollToTop}
        className=" flex flex-col items-center justify-center text-3xl text-[#a6a6a6] hover:text-[#f5f5f5] hover:scale-[1.1] transition-all border border-dashed rounded-full p-1"
      >
        <IoArrowUpCircleOutline />
      </button>
    </div>
  );
};
