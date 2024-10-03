import React from "react";
import popcornBrand from "../../../assets/images/4700bc/4700bc.avif";
import popcorn from "../../../assets/images/4700bc/popcorn.avif";
import cholesterol from "../../../assets/images/4700bc/cholesterol.avif";
import gluten from "../../../assets/images/4700bc/gluten.avif";

export const PopcornBrandLogo: React.FC = () => {
  return (
    <div className="relative flex self-center justify-center items-center flex-1">
      <div className="relative">
        <svg
          className="w-[130px] h-[130px] animate-rotate-30s "
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="300px"
          height="300px"
          viewBox="0 0 300 300"
          enableBackground="new 0 0 300 300"
        >
          <defs>
            <path
              id="circlePath"
              d="M17.1,150C17.1,76.6,76.6,17.1,150,17.1S282.9,76.6,282.9,150S223.4,282.9,150,282.9 S17.1,223.4,17.1,150"
            ></path>
          </defs>
          <g>
            <use href="#circlePath" fill="none"></use>
            <text
              fill="#ffb948"
              className="text-2xl uppercase tracking-[2px]"
              style={{ wordSpacing: "60px" }}
            >
              <textPath href="#circlePath">
                Delightfully-Exotic Premium-Gifting Luxury
              </textPath>
            </text>
          </g>
        </svg>
        <img
          className="w-[90px] h-[90px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain inline-block"
          loading="lazy"
          src={popcornBrand}
          alt="4700BC"
        />
        <img
          className="w-[40px] absolute top-0 left-[-36px] animate-top-down"
          loading="lazy"
          src={popcorn}
          alt="Jumbo Popcorn"
        />
        <img
          className="w-[40px] absolute top-[-14px] right-[-30px] animate-top-down-reverse"
          loading="lazy"
          src={cholesterol}
          alt="No Cholesterol"
        />
        <img
          className="w-[25px] absolute bottom-[46px] right-[12px] animate-top-down-fast"
          loading="lazy"
          src={gluten}
          alt="Gluten Free"
        />
      </div>
    </div>
  );
};
