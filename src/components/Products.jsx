import React from "react";

const Products = () => {
    return (
        <section className="mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               
                <section>
                    <div className="bg-[#ffe366]">
                        <img className="mb-3 w-full relative left-3 top-3" src="https://f.nooncdn.com/mpcms/EN0002/assets/184ca7f5-53e5-4b7c-86a9-c5e861b7fbab.png" alt="sale img" />
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 p-3 md:p-3">
                            <img className="w-full h-ful" src="https://f.nooncdn.com/mpcms/EN0001/assets/58148da9-50f1-49b4-939a-c9e9ffe4b756.png" alt="product img" />
                            <img className="w-full h-ful" src="https://f.nooncdn.com/mpcms/EN0001/assets/8510520a-6a55-4871-8e30-00e624dc1218.png" alt="product img" />
                            <img className="w-full h-ful" src="https://f.nooncdn.com/mpcms/EN0001/assets/b2bf8759-55be-43c3-a300-260d9ec9540b.png" alt="product img" />
                            <img className="w-full h-ful" src="https://f.nooncdn.com/mpcms/EN0001/assets/abb6921f-7493-4427-889f-08f3a0e48f06.png" alt="product img" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="bg-[#ffe366]">
                        <img className="w-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/c28b8a63-e38b-4d80-916f-1a0bb79d57a3.png" alt="mega deal img" />
                        <div className="grid grid-cols-2 gap-2 p-3">
                            <img className="w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/58148da9-50f1-49b4-939a-c9e9ffe4b756.png" alt="product img" />
                            <img className="w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/8510520a-6a55-4871-8e30-00e624dc1218.png" alt="product img" />
                            <img className="w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/b2bf8759-55be-43c3-a300-260d9ec9540b.png" alt="product img" />
                            <img className="w-full h-full" src="https://f.nooncdn.com/mpcms/EN0001/assets/abb6921f-7493-4427-889f-08f3a0e48f06.png" alt="product img" />
                        </div>
                    </div>
                </section>

                <section className="bg-[#ffe366] p-2 md:col-span-2 lg:col-span-1">
                    <div>
                        <img className="mb-5 w-full relative left-3 top-2" src="https://f.nooncdn.com/mpcms/EN0002/assets/733bdc4a-5b38-459a-8b8d-79093afa0423.png" alt="product img" />
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <img className="w-full h-full md:col-span-2" src="https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-01.1742379011.5297742.png" alt="product img" />
                            <img className="w-full h-full md:col-span-2" src="https://f.nooncdn.com/ads/banner-410x410/en_dk_uae-top-02%20(5).1742205529.032372.png" alt="product img" />
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Products;
