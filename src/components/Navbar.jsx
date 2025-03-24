import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="bg-[#feef00]">
        <div className="max-w-[90%] mx-auto flex justify-between items-center py-3">
          <div className="flex gap-4 items-center">
            <a href="#" className="logo">
              <img
                src="https://noon-322.web.app/static/media/noon-logo-en.262e312189039eb3bccb25d39ff5c78f.svg"
                alt="logo"
                className="h-6"
              />
            </a>

            <div className="hidden md:flex items-center gap-2 font-medium text-gray-800 ">
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
            <div className="language ">العربية</div>
            <div className="h-6 w-[0.5px] bg-[#a7a2a2]"></div>
            <div className="signin ">
              <p className="font-medium tracking-wide">
                Log in
                <i className="fa-regular text-[0.8rem] fa-user text-[#7e7878]"></i>
              </p>
            </div>
            <div className="h-6 w-[0.5px] bg-[#a7a2a2]"></div>
            <div className="flex gap-8 items-center text-lg">
              <div className="heart ">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="cart ">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-2xl ">
              <i className="fa fa-bars text-[#2f2e2e]"></i>
            </button>
          </div>
        </div>

        {/* Nav Section */}
        <nav className="shadow-sm bg-white">
          <div className="flex items-center md:py-2 py-1 max-w-[90%] mx-auto overflow-hidden">
            <div className="flex flex-wrap w-full items-center justify-center gap-1 lg:justify-between font-medium min-w-0">
              <a href="#" className=" truncate flex-shrink">
                Electronics
              </a>
              <a href="#" className=" truncate flex-shrink">
                Men's Fashion
              </a>
              <a href="#" className=" truncate flex-shrink">
                Women's Fashion
              </a>
              <a href="#" className=" truncate flex-shrink">
                Kids' Fashion
              </a>
              <a href="#" className=" truncate flex-shrink">
                Home & Kitchen
              </a>
              <a href="#" className=" truncate flex-shrink">
                Beauty & Fragrance
              </a>
              <a href="#" className=" truncate flex-shrink">
                Baby
              </a>
              <a href="#" className=" truncate flex-shrink">
                Toys
              </a>
              <a href="#" className=" truncate flex-shrink">
                Sports & Outdoors
              </a>
              <button className="border-2 border-red-400 p-0.5 md:p-1 rounded whitespace-nowrap flex-shrink-0">
                noon Free Delivery
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
