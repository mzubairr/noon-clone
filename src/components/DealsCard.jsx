import React from "react";
import star from "../assets/staricon.svg";

const DealsCard = ({
  image,
  title,
  price,
  oldPrice,
  cartIcon,
  discount,
  tag,
}) => {
  return (
    <>
      <div className="min-h-[300px] rounded-[8px] overflow-hidden border-[1px] border-gray-300 cursor-pointer">
        <div>
          <div className="relative pb-5 bg-[#f8f8f8] rounded-[9px]">
            <img
              className="w-full h-full p-1 rounded-[11px]"
              src={image}
              alt="deals product"
            />
            <div className="absolute bottom-2 left-1 flex gap-1 items-center justify-center bg-white w-[70px] rounded-[4px]">
              <p>4.0</p>
              <img src={star} alt="star icon" />
              <p className="text-gray-400">(1)</p>
            </div>
            {cartIcon ? (
              <div className="absolute bottom-1.5 right-1">
                <img
                  className="bg-white p-1 rounded w-[50px]"
                  src="https://f.nooncdn.com/s/app/com/noon/icons/quick-atc-add-to-cart-grey.svg"
                  alt="cart icon"
                />
              </div>
            ) : null}
            <div className="bg-white">
              <img
                className="absolute bg-white p-1 rounded top-1 right-1"
                src="https://f.nooncdn.com/s/app/com/noon/icons/wishlist.svg"
                alt="heart icon"
              />
            </div>
          </div>
          <div>
            <p className="text-gray-600 font-semibold line-clamp-2 overflow-hidden pl-1">
              {title}
            </p>
          </div>
          <div>
            <p className="text-sm pl-1">
              AED <span className="font-bold text-[1.2rem]">{price}</span>{" "}
              <span className="line-through">{oldPrice}</span>{" "}
              <span className="font-bold text-[#409818]">{discount}%</span>
            </p>
          </div>
        </div>

        {tag ? (
          <div className="bg-[#2122b8] pt-1 pb-1 mb-2 text-xs justify-between items-center text-white flex w-full mt-5">
            <div className="flex items-center gap-2 ">
              <img
                className="w-[17%]"
                src="https://f.nooncdn.com/s/app/com/noon/icons/supermall-logo-transparent-vertical-v2.svg"
                alt="super mall tag"
              />
              <p>
                GET IN <span className="font-bold">1HR 3 MINS</span>
              </p>
            </div>
            <img
              src="https://f.nooncdn.com/s/app/com/noon/design-system/simpleicons/chevron-right.svg"
              alt="arrow icon"
            />
          </div>
        ) : (
          <div className="pl-1 mb-2 w-full mt-5">
            <img
              src="https://f.nooncdn.com/s/app/com/noon/images/fulfilment_express_v3-en.svg"
              alt="express tag"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DealsCard;
