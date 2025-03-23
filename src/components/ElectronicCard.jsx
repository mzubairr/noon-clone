import React from "react";
// 
const ELectronicCard = ({ tagName, image, title, price, oldPrice }) => {
    return (
        <>
            <div className="bg-[#ea4448] pr-0.5 pb-0.5 rounded-2xl">
                <h1 className="w-full p-1 text-[1.3rem] text-[#ffe727] text-center font-bold">{tagName}</h1>
                <div className="flex flex-col-reverse md:flex-row  items-center p-2 bg-white rounded-bl-2xl rounded-br-2xl">
                    <div>
                        <p className="font-bold text-[1.2rem] line-clamp-1 ">{title}</p>
                        <div className="flex items-center gap-2 md:flex-col md:items-start md:gap-0">
                            <p className="line-through decoration-[#da5254] text-[1.4rem] font-bold text-gray-600">{oldPrice}</p>
                            <p className="text-[#da5254] font-bold text-[1.6rem]">{price} AED</p>
                        </div>
                    </div>

                    <div className="h-auto md:w-full w-1/2">
                        <img className="h-auto w-full" src={image} alt="electronic img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ELectronicCard;