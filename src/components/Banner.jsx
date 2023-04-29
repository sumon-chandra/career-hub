import React from "react";

const Banner = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse gap-8 lg:gap-20 items-center justify-between pt-24 lg:pt-32">
      <div className="lg:w-1/2">
        <h2 className="text-2xl lg:text-5xl font-bold text-gray-700">
          Discover your next job opportunity on{" "}
          <span className="font-black text-black font-serif">Job Star</span>
        </h2>
        <p className="lg:pt-4 pt-2 lg:font-bold font-semibold lg:text-lg text-[14px] w-3/4">
          the free job search app designed to connect you with better work
          anytime, anywhere and more.
        </p>
        <button className="btn lg:mt-7 mt-2 border-none lg:btn-md btn-sm lg:text-lg text-sm bg-gradient-to-br from-bgPrimary to-bgSecondary border-0 normal-case text-gray-700 shadow-xl hover:shadow-md hover:bg-gradient-to-tl">
          Get Started
        </button>
      </div>
      <div className="lg:w-1/2 w-48">
        <img src="https://i.ibb.co/gwWMCzj/pngaaa-com-6562154.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
