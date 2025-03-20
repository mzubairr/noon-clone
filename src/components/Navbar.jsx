import React from "react";

const Navbar = () => {
  return (
    <header className="w-full flex justify-between items-center px-6 md:px-20 h-16 bg-[#feef00] text-black">
      <div className="flex gap-4 items-center">
        <a href="#" className="logo">
          <img
            src="https://noon-322.web.app/static/media/noon-logo-en.262e312189039eb3bccb25d39ff5c78f.svg"
            alt="logo"
            className="h-6"
          />
        </a>

        <div className="hidden md:flex items-center gap-2 font-medium text-gray-800 cursor-pointer">
          <img
            src="https://f.nooncdn.com/s/app/com/common/images/flags/ae.svg"
            alt="country image"
          />
          <p className="leading-5">
            <span className="font-normal">Deliver To</span>
            <br />
            Dubai <i className="fa-solid fa-angle-down text-gray-400"></i>
          </p>
        </div>
      </div>

      <form className="hidden md:block mx-4 flex-1">
        <input
          type="text"
          placeholder="What are you looking for?"
          className="w-full h-9 p-3 bg-white rounded outline-gray-500 focus:outline"
        />
      </form>

      <div className="hidden md:flex gap-[1.4rem] items-center">
        <div className="language cursor-pointer">العربية</div>
        <div className="h-6 w-[0.5px] bg-[#a7a2a2]"></div>
        <div className="signin cursor-pointer">
          <p className="font-medium tracking-wide">
            Log in{" "}
            <i className="fa-regular text-[0.8rem] fa-user text-[#7e7878]"></i>
          </p>
        </div>
        <div className="h-6 w-[0.5px] bg-[#a7a2a2]"></div>
        <div className="flex gap-8 items-center text-lg">
          <div className="heart cursor-pointer">
            <i className="fa-regular fa-heart"></i>
          </div>
          <div className="cart cursor-pointer">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <button className="text-2xl cursor-pointer">
          <i className="fa fa-bars text-[#2f2e2e]"></i>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
