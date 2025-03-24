import React from "react";
//
const CategoryCard = ({ tagName, image, title, price, oldPrice }) => {
  return (
    <>
      <div className="bg-[#ea4448] pr-0.5 pb-0.5 rounded-2xl">
        <h1 className="w-full whitespace-nowrap p-1 text-[1rem] text-[#ffe727] text-center font-bold">
          {tagName}
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center p-2 bg-white rounded-bl-2xl rounded-br-2xl">
          <div>
            <p className="font-bold text-[1.2rem] line-clamp-2 ">{title}</p>
            <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-0">
              <p className="line-through decoration-[#da5254] text-[1.4rem] font-bold text-gray-600">
                {oldPrice}
              </p>
              <p className="text-[#da5254] font-bold text-[1.6rem]">
                {price} AED
              </p>
            </div>
          </div>

          <div className="w-[750px] h-[180px]">
            <img
              className="w-full h-full object-contain"
              src={image}
              alt="electronic img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
