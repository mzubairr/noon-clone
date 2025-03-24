import React from "react";

const DiscountCard = ({ image }) => {
  return (
    <>
      <div>
        <div>
          <div>
            <img className="w-full h-full" src={image} alt="discount product" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountCard;
