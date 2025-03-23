import Navbar from "./components/Navbar";
import HeroSec from "./components/HeroSec";
import Products from "./components/Products";
import DealsCard from "./components/DealsCard";
import DiscountCard from "./components/DiscountCard";
import ELectronicCard from "./components/ElectronicCard";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-[90%] mx-auto">
        <HeroSec />

        <section id="products">
          <Products />
        </section>

        <section id="deals">
          <div className="bg-white mt-3 p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/8401822d-99d4-4db0-8c81-e28ffd8f118a.png"
                alt="deal tag img"
              />
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1">
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/Z54675AD920915E65F285Z/45/_/1698977750/11b4f91c-3c53-4d34-85d0-d606198660d0.jpg?format=jpg&width=240"
                }
                title={"Threadz by Ajooni Balloon Sleeve Laser Cut Dress "}
                price={"82"}
                oldPrice={"893"}
                discount={"80"}
                tag={true}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/Z7725DC31240B5CC03967Z/45/_/1709815671/a8ef4070-e85a-4969-bc23-0b4413a951fe.jpg?format=jpg&width=240"
                }
                title={"Threadz by Ajooni Bardot Sequin Dress "}
                price={"139"}
                oldPrice={"667"}
                discount={"80"}
                tag={true}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/Z53341677FE5FD7E263A6Z/45/_/1709815687/f29f7faa-e6ad-4849-9c9f-6cb4854fd302.jpg?format=jpg&width=240"
                }
                title={"Threadz by Ajooni Plisse Cape Sleeve Dress "}
                price={"90"}
                oldPrice={"614"}
                discount={85}
                tag={true}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/Z23BFE6311574E641EC56Z/45/_/1709816039/f42c66de-794a-470f-9a8d-eabfe9bca4b0.jpg?format=jpg&width=240"
                }
                title={"Threadz by Ajooni Shimmer Floral Print Dress "}
                price={"96"}
                oldPrice={"531"}
                discount={"85"}
                tag={true}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/ZA2F3EDFA3CBB0AA634B9Z/45/_/1742374051/4874d921-6abb-49c4-9d53-9afb6633a780.jpg?format=jpg&width=240"
                }
                title={"Threadz by Ajooni Plisse Puff Sleeve Dress "}
                price={"68"}
                oldPrice={"630"}
                discount={"89"}
                tag={true}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70009074V/45/_/1695994259/95fb6100-0541-406a-aa46-18c3bcc9c0a2.jpg?format=jpg&width=240"
                }
                title={
                  "BLACK+DECKER Glass Kettle, Heating, Double Wall Wrap Protection, Premium Stainless Steel Finish, Blue LED Illumination, 360° Cordless Base, Easy Pour, 1.7 L 2200 W GK220-B5 Silver "
                }
                price={"99"}
                oldPrice={"139"}
                discount={"28"}
                tag={true}
              />
            </div>
          </div>
        </section>

        <section id="Banner1">
          <div className="my-2">
            <img
              className="w-full"
              src="https://f.nooncdn.com/ads/banner-1440x1440/en_dk_uae-sfu-01.1741152511.1594114.png"
              alt="deal img"
            />
          </div>
        </section>

        <section id="recommended">
          <div className="bg-white mt-3 p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/1e06a839-ba31-4d5d-8638-29fed7d86d47.png"
                alt="recommended img"
              />
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1">
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70035265V/45/_/1712239189/479179d5-3f20-4b07-96bf-3ae9bca7b58e.jpg?format=png&width=240"
                }
                title={
                  "Galaxy S24 Ultra 5G Dual SIM Titanium Gray 12GB RAM 256GB - Middle East Version"
                }
                price={"3,289"}
                oldPrice={"4,949"}
                cartIcon={true}
                discount={"33"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70105592V/45/_/1726043633/aa2f8393-ed30-467b-b456-c8b10fad6e8f.jpg?format=jpg&width=240"
                }
                title={
                  "iPhone 16 Pro Max 256GB Desert Titanium 5G With FaceTime - Middle East Version"
                }
                price={"4,449"}
                oldPrice={"5,099"}
                cartIcon={true}
                discount={"12"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70106183V/45/_/1726043631/3064c465-3457-42ef-a234-0b6382365281.jpg?format=jpg&width=240"
                }
                title={
                  "iPhone 16 Pro Max 256GB Desert Titanium 5G With FaceTime - Middle East Version"
                }
                price={"4,449"}
                oldPrice={"5,099"}
                cartIcon={true}
                discount={"12"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=jpg&width=240"
                }
                title={
                  "iPhone 15 Pro Max 256GB Natural Titanium 5G With FaceTime - Middle East Version"
                }
                price={"3,999"}
                oldPrice={"5,099"}
                cartIcon={true}
                discount={"21"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/v1686137286/N53359914A_1.jpg?format=jpg&width=240"
                }
                title={
                  "iPad 2022 (10th Generation) 10.9-inch 64GB WiFi Blue - Middle East Version"
                }
                price={"1,095"}
                oldPrice={"1,849"}
                cartIcon={true}
                discount={"40"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N53374783A/45/_/1717586721/941992f0-dae7-4a62-830b-92a7fe485329.jpg?format=jpg&width=240"
                }
                title={
                  "Galaxy S23 Ultra 5G Dual SIM Phantom Black 12GB RAM 256GB - Middle East Version"
                }
                price={"2,540,"}
                oldPrice={"4,949"}
                cartIcon={true}
                discount={"48"}
                tag={false}
              />
            </div>
          </div>
        </section>

        <section id="previouslyViewed">
          <div className="bg-white mt-3 p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/7b95bdba-b471-4636-ab22-adc330a5029d.png"
                alt="previously browsed img"
              />
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1">
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/v1686137286/N53359914A_1.jpg?format=jpg&width=240"
                }
                title={
                  "iPad 2022 (10th Generation) 10.9-inch 64GB WiFi Blue - Middle East Version"
                }
                price={"1,095"}
                oldPrice={"1,849"}
                cartIcon={true}
                discount={"40"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70105592V/45/_/1726043633/aa2f8393-ed30-467b-b456-c8b10fad6e8f.jpg?format=jpg&width=240"
                }
                title={
                  "iPhone 16 Pro Max 256GB Desert Titanium 5G With FaceTime - Middle East Version"
                }
                price={"4,449"}
                oldPrice={"5,099"}
                cartIcon={true}
                discount={"12"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70106183V/45/_/1726043631/3064c465-3457-42ef-a234-0b6382365281.jpg?format=jpg&width=240"
                }
                title={
                  "iPhone 16 Pro Max 256GB Desert Titanium 5G With FaceTime - Middle East Version"
                }
                price={"4,449"}
                oldPrice={"5,099"}
                cartIcon={true}
                discount={"12"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=jpg&width=240"
                }
                title={
                  "iPhone 15 Pro Max 256GB Natural Titanium 5G With FaceTime - Middle East Version"
                }
                price={"3,999"}
                oldPrice={"5,099"}
                cartIcon={true}
                discount={"21"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70035265V/45/_/1712239189/479179d5-3f20-4b07-96bf-3ae9bca7b58e.jpg?format=png&width=240"
                }
                title={
                  "Galaxy S24 Ultra 5G Dual SIM Titanium Gray 12GB RAM 256GB - Middle East Version"
                }
                price={"3,289"}
                oldPrice={"4,949"}
                cartIcon={true}
                discount={"33"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N53374783A/45/_/1717586721/941992f0-dae7-4a62-830b-92a7fe485329.jpg?format=jpg&width=240"
                }
                title={
                  "Galaxy S23 Ultra 5G Dual SIM Phantom Black 12GB RAM 256GB - Middle East Version"
                }
                price={"2,540,"}
                oldPrice={"4,949"}
                cartIcon={true}
                discount={"48"}
                tag={false}
              />
            </div>
          </div>
        </section>

        <section id="Ramadan Essentials">
          <div className="bg-[#fef1ba] mt-3 p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/17d29404-5361-45da-a39e-6bcdefbd8a1e.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/a30c905a-4c97-488e-aeae-7f1b14b26732.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0002/assets/e51a27f7-6528-4f45-b80c-51cd49a1e94a.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/55b1226c-0eb2-4caf-866d-c54b5e50a052.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/8d26aab4-cfff-4769-9091-ebc8fd7c39d7.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/7ca559bb-edae-4a13-b92c-f3c9bfc3756c.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/a1cf9227-c4f5-4e6e-9273-10779069e659.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/a4fb0365-e21f-4028-abd1-9e124995b02c.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="Fashion Offer">
          <div className="bg-white mt-3 p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/a515fd40-da7d-4cbb-b690-fe0a71f4ff23.png"
                alt="previously browsed img"
              />
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1 mt-3">
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/Z0D46B1BF1F048F18B94FZ/45/_/1742374050/c43f0d25-2206-427f-baa5-e0fa3f936d4b.jpg?format=jpg&width=240"
                }
                title={"Threadz by Ajooni Button Detail Belted Dress"}
                price={"77"}
                oldPrice={"709"}
                cartIcon={true}
                discount={"89"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/Z841FC5ED8C0E8D8BE6FAZ/45/_/1722567636/37c4c87b-03a4-41b8-8c85-64aa7c077670.jpg?format=jpg&width=240"
                }
                title={
                  "Women Luxury Gold Embroidered Robe Maxi Dresses Stylish Abaya Square Collar Dress Middle East Arabic Banquet Wedding Party Dress Women's Festival Clothing Gold"
                }
                price={"76.20"}
                oldPrice={"175"}
                cartIcon={true}
                discount={"56"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/Z500663E7FB1AE2AB593EZ/45/_/1739960835/62c9b4c6-19c5-4722-8f9d-4979e12e72a7.jpg?format=jpg&width=240"
                }
                title={
                  "HANA & SARA UNIQUE LONG PRINTED WITH STYLISH MULTICOLOUR THREAD EMBROIDERY ELEGANT ARABIC KAFTAN JALABIYA DRESS"
                }
                price={"69"}
                oldPrice={"320"}
                cartIcon={true}
                discount={"78"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/Z19D05AC73E0513B679D2Z/45/_/1691413961/b4b043ed-44f0-464a-8fed-771915b15f67.jpg?format=jpg&width=240"
                }
                title={
                  "HANA & SARA PURE VISCOSE WITH PRINTED AND EMBROIDRED LIGHT BROWN ARABIC JALABIYA KAFTAN DRESS"
                }
                price={"80"}
                oldPrice={"320"}
                cartIcon={true}
                discount={"75"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/Z208B4C95545A14AF9C50Z/45/_/1737529254/11754ff3-1031-4a52-9949-5e2628d2ba31.jpg?format=jpg&width=240"
                }
                title={"Khizana Contrast Toned Abaya With Ruffled Sleeve"}
                price={"75"}
                oldPrice={"240"}
                cartIcon={true}
                discount={"68"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/Z0935019B1D0DFE78F1F6Z/45/_/1691824159/0e5d6da7-9596-4dd2-af9a-f0eaf0668e38.jpg?format=jpg&width=240"
                }
                title={
                  "HANA & SARA PINK COLOUR WITH EMBROIDERED AND PRINTED ARABIC JALABIYA DRESS"
                }
                price={"80"}
                oldPrice={"320"}
                cartIcon={true}
                discount={"75"}
                tag={false}
              />
            </div>
          </div>
        </section>

        <section id="Savings">
          <div className="bg-[#fef1ba] mt-3">
            <div className="p-4">
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/49ac3536-c024-41de-af5a-f6442cf82a97.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-2 p-4">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/62852ccd-2fc9-4868-9e81-ddc4905a4bdf.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/105288a6-c726-454e-ab65-e2ba1f598467.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/736988f6-6b74-4064-a61d-55492f5231b3.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/6df571b2-a340-4c2a-ac27-27e763a02204.png"
                }
              />
            </div>
            <div className="mt-4">
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/aa5f61a8-3ce7-43e3-b9ce-006988531586.gif"
                alt="sale banner"
              />
            </div>
          </div>
        </section>

        <section id="Electronics">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 bg-[#fefddd] p-3">
            <ELectronicCard
              tagName={"Appliances flash deals"}
              image={
                "https://f.nooncdn.com/p/pnsku/N41908229A/45/_/1740991977/dc2c6840-811f-4ba2-9f63-aeda7247e188.jpg?width=240"
              }
              title={
                "7 Kg Front Load Inverter Washing Machine, 1200 RPM, 16 Programs, ECO Cold Wash, 15' Quick Wash, LED Display, TW-H80S2A(SK) Silver"
              }
              price={"799"}
              oldPrice={"999"}
            />
            <ELectronicCard
              tagName={"Electronic flash deals"}
              image={
                "https://f.nooncdn.com/p/pnsku/N70063303V/45/_/1739967032/46a55577-5243-4b22-b6a8-b70f512f64d6.jpg?width=240"
              }
              title={
                "7 Kg Front Load Inverter Washing Machine, 1200 RPM, 16 Programs, ECO Cold Wash, 15' Quick Wash, LED Display, TW-H80S2A(SK) Silver"
              }
              price={"1999"}
              oldPrice={"2799"}
            />
            <ELectronicCard
              tagName={"Fashion flash deals"}
              image={
                "https://f.nooncdn.com/p/pzsku/ZE113E532FB1A4494C54CZ/45/_/1674807693/0ae83bbe-b48f-4b43-a114-6430b6aab4da.jpg?width=240"
              }
              title={
                "7 Kg Front Load Inverter Washing Machine, 1200 RPM, 16 Programs, ECO Cold Wash, 15' Quick Wash, LED Display, TW-H80S2A(SK) Silver"
              }
              price={"13"}
              oldPrice={"34"}
            />
            <ELectronicCard
              tagName={"Home flash deals"}
              image={
                "https://f.nooncdn.com/p/v1686645900/N53394640A_1.jpg?width=240"
              }
              title={
                "7 Kg Front Load Inverter Washing Machine, 1200 RPM, 16 Programs, ECO Cold Wash, 15' Quick Wash, LED Display, TW-H80S2A(SK) Silver"
              }
              price={"114"}
              oldPrice={"285"}
            />
            <ELectronicCard
              tagName={"Beauty flash deals"}
              image={
                "https://f.nooncdn.com/p/v1558694780/N22797920A_0.jpg?width=240"
              }
              title={
                "7 Kg Front Load Inverter Washing Machine, 1200 RPM, 16 Programs, ECO Cold Wash, 15' Quick Wash, LED Display, TW-H80S2A(SK) Silver"
              }
              price={"134"}
              oldPrice={"370"}
            />
            <ELectronicCard
              tagName={"Sports flash deals"}
              image={
                "https://f.nooncdn.com/p/pnsku/N41908229A/45/_/1740991977/dc2c6840-811f-4ba2-9f63-aeda7247e188.jpg?width=240"
              }
              title={
                "7 Kg Front Load Inverter Washing Machine, 1200 RPM, 16 Programs, ECO Cold Wash, 15' Quick Wash, LED Display, TW-H80S2A(SK) Silver"
              }
              price={"750"}
              oldPrice={"999"}
            />
          </div>
        </section>

        <section id="Limited Time Deals">
          <div className="bg-white mt-3 p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/60b99274-3294-4624-8c2a-04be04de9e45.png"
                alt="recommended img"
              />
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1">
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70004054V/45/_/1724658691/17c0ea9d-4d2e-4eff-a6c8-e2c3c787fcf6.jpg?format=jpg&width=240"
                }
                title={
                  "4L Air Fryer, Compact Design, Fast Crispy Cooking, Roast, Bake & Reheat, Adjustable Temperature & Timer 4 L 1600 W EVKA-AF3801B Black"
                }
                price={"79"}
                oldPrice={"199"}
                cartIcon={true}
                discount={"60"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N31867149A/45/_/1722515943/9d121018-4203-44e5-a122-32b786baa15a.jpg?format=jpg&width=240"
                }
                title={
                  "Garment Steamer, 2000W Vertical Steamer, GGS25022N | Portable, Fast Heat Clothes Steamer | Dual Steam Levels | Large Water Tank | Perfect For All Types Of Clothes 1.8 L 2000 W GGS25022N White,Violet"
                }
                price={"89"}
                oldPrice={"226"}
                cartIcon={true}
                discount={"60"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/v1690552905/N13090791A_1.jpg?format=jpg&width=240"
                }
                title={
                  "600L Gross/ 436L Net Capacity Side By Side Refrigerator-Freezer With Digital Control And Temperature Display, No-Frost, LED-light SGR710SBS Inox"
                }
                price={"1,379"}
                oldPrice={"2,199"}
                cartIcon={true}
                discount={"37"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/ZA9FD2265ED8EF1C8A4C2Z/45/_/1680025028/cefcd300-0f50-484f-bb8f-0b664a185931.jpg?format=jpg&width=240"
                }
                title={
                  "Portable Projector Pocket 5G WIFI Android11.0 Support 130 Inches Home Theater Full HD 1080P for Indoor Outdoor Home Birthday Gift Compatible with TV Stick/HDMI/USB/PS5/iOS/PS4"
                }
                price={"159"}
                oldPrice={"425"}
                cartIcon={true}
                discount={"62"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70102230V/45/_/1724399141/23d548ff-4b9a-4a92-9064-344442cc56b9.jpg?format=jpg&width=240"
                }
                title={
                  "V40 5G Dual SIM Nebula Purple 12GB RAM 256GB With Exclusive Gifts Earbuds, Smart Watch, 80W Charger And 24 Months Warranty + 1 Year Screen Replacement - Middle East Version"
                }
                price={"1,349"}
                oldPrice={"1,699"}
                cartIcon={true}
                discount={"20"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70049981V/45/_/1740992200/1be206ef-804a-4fd1-a1e9-2d2ca48125f0.jpg?format=jpg&width=240"
                }
                title={
                  "7 KG Front Load Washing Machine, 1200 RPM, 15 Programs,LED Display, Quick Wash, High Efficiency, Drum Clean, Delay Start, Child Lock 7 kg SGW7250NLED White"
                }
                price={"699"}
                oldPrice={"899"}
                cartIcon={true}
                discount={"22"}
                tag={false}
              />
            </div>
          </div>
        </section>

        <section id="deals in gaming">
          <div className="bg-white mt-3 p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/b23382ec-34b6-41fe-9e09-cc11913b2682.png"
                alt="recommended img"
              />
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1">
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70022609V/45/_/1699418409/a609e3fa-897b-4f59-b0e8-d6c8c9bf0794.jpg?format=jpg&width=240"
                }
                title={
                  "4L Air Fryer, Compact Design, Fast Crispy Cooking, Roast, Bake & Reheat, Adjustable Temperature & Timer 4 L 1600 W EVKA-AF3801B Black"
                }
                price={"79"}
                oldPrice={"199"}
                cartIcon={true}
                discount={"60"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/Z091AFC2122C5B50EBD4AZ/45/_/1720183204/b9d7c812-dc75-4b33-824c-d5cd0ad6337b.jpg?format=jpg&width=240"
                }
                title={
                  "Garment Steamer, 2000W Vertical Steamer, GGS25022N | Portable, Fast Heat Clothes Steamer | Dual Steam Levels | Large Water Tank | Perfect For All Types Of Clothes 1.8 L 2000 W GGS25022N White,Violet"
                }
                price={"89"}
                oldPrice={"226"}
                cartIcon={true}
                discount={"60"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N16659460A/45/_/1699043322/65b45167-8594-4c53-92d7-29640995c762.jpg?format=jpg&width=240"
                }
                title={
                  "600L Gross/ 436L Net Capacity Side By Side Refrigerator-Freezer With Digital Control And Temperature Display, No-Frost, LED-light SGR710SBS Inox"
                }
                price={"1,379"}
                oldPrice={"2,199"}
                cartIcon={true}
                discount={"37"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70095796V/45/_/1721996198/a664a18e-c6fe-40f6-8dae-922fe19ddded.jpg?format=jpg&width=240"
                }
                title={
                  "Portable Projector Pocket 5G WIFI Android11.0 Support 130 Inches Home Theater Full HD 1080P for Indoor Outdoor Home Birthday Gift Compatible with TV Stick/HDMI/USB/PS5/iOS/PS4"
                }
                price={"159"}
                oldPrice={"425"}
                cartIcon={true}
                discount={"62"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70089361V/45/_/1723115906/126a2d5f-f8c0-44e9-a9ab-3fc5662cdeb6.jpg?format=jpg&width=240"
                }
                title={
                  "V40 5G Dual SIM Nebula Purple 12GB RAM 256GB With Exclusive Gifts Earbuds, Smart Watch, 80W Charger And 24 Months Warranty + 1 Year Screen Replacement - Middle East Version"
                }
                price={"1,349"}
                oldPrice={"1,699"}
                cartIcon={true}
                discount={"20"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70082549V/45/_/1717403508/c1e6a192-823b-4c7e-bf32-b793e77d6e4b.jpg?format=jpg&width=240"
                }
                title={
                  "7 KG Front Load Washing Machine, 1200 RPM, 15 Programs,LED Display, Quick Wash, High Efficiency, Drum Clean, Delay Start, Child Lock 7 kg SGW7250NLED White"
                }
                price={"699"}
                oldPrice={"899"}
                cartIcon={true}
                discount={"22"}
                tag={false}
              />
            </div>
          </div>
        </section>

        <section id="beauty">
          <div className="bg-white p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/b5207924-51ef-4955-8008-3db7d7cf9c0b.png"
                alt="recommended img"
              />
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1">
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pzsku/ZF23DE5EC51560ADE2D7EZ/45/_/1738319731/2dac59cb-b30a-48f6-b1c2-104704afdda1.jpg?format=jpg&width=240"
                }
                title={
                  "4L Air Fryer, Compact Design, Fast Crispy Cooking, Roast, Bake & Reheat, Adjustable Temperature & Timer 4 L 1600 W EVKA-AF3801B Black"
                }
                price={"79"}
                oldPrice={"199"}
                cartIcon={true}
                discount={"60"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N15767824A/45/_/1729667199/bfeed356-dbce-4cc6-82d5-cfd49b5e9010.jpg?format=jpg&width=240"
                }
                title={
                  "Garment Steamer, 2000W Vertical Steamer, GGS25022N | Portable, Fast Heat Clothes Steamer | Dual Steam Levels | Large Water Tank | Perfect For All Types Of Clothes 1.8 L 2000 W GGS25022N White,Violet"
                }
                price={"89"}
                oldPrice={"226"}
                cartIcon={true}
                discount={"60"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/v1689229849/N53419974A_1.jpg?format=jpg&width=240"
                }
                title={
                  "600L Gross/ 436L Net Capacity Side By Side Refrigerator-Freezer With Digital Control And Temperature Display, No-Frost, LED-light SGR710SBS Inox"
                }
                price={"1,379"}
                oldPrice={"2,199"}
                cartIcon={true}
                discount={"37"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N23772548A/45/_/1737443401/d6655cd3-e53e-4bbd-9cfd-ca2f635c64a9.jpg?format=jpg&width=240"
                }
                title={
                  "Portable Projector Pocket 5G WIFI Android11.0 Support 130 Inches Home Theater Full HD 1080P for Indoor Outdoor Home Birthday Gift Compatible with TV Stick/HDMI/USB/PS5/iOS/PS4"
                }
                price={"159"}
                oldPrice={"425"}
                cartIcon={true}
                discount={"62"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/v1638784471/N33352458A_1.jpg?format=jpg&width=240"
                }
                title={
                  "V40 5G Dual SIM Nebula Purple 12GB RAM 256GB With Exclusive Gifts Earbuds, Smart Watch, 80W Charger And 24 Months Warranty + 1 Year Screen Replacement - Middle East Version"
                }
                price={"1,349"}
                oldPrice={"1,699"}
                cartIcon={true}
                discount={"20"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/v1658403180/N24234376A_1.jpg?format=jpg&width=240"
                }
                title={
                  "7 KG Front Load Washing Machine, 1200 RPM, 15 Programs,LED Display, Quick Wash, High Efficiency, Drum Clean, Delay Start, Child Lock 7 kg SGW7250NLED White"
                }
                price={"699"}
                oldPrice={"899"}
                cartIcon={true}
                discount={"22"}
                tag={false}
              />
            </div>
          </div>
        </section>

        <section id="banner2">
          <div>
            <img
              className="w-full"
              src="https://f.nooncdn.com/mpcms/EN0001/assets/6b0d562e-5450-4f4a-bd19-2a6b4a871ea4.png"
              alt="deal img"
            />
          </div>
        </section>

        <section id="home appliances">
          <div className="bg-white p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/f6f2e407-1111-46b6-96bb-169830bcf096.png"
                alt="recommended img"
              />
            </div>
            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-1">
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70004054V/45/_/1724658691/17c0ea9d-4d2e-4eff-a6c8-e2c3c787fcf6.jpg?format=jpg&width=240"
                }
                title={
                  "4L Air Fryer, Compact Design, Fast Crispy Cooking, Roast, Bake & Reheat, Adjustable Temperature & Timer 4 L 1600 W EVKA-AF3801B Black"
                }
                price={"79"}
                oldPrice={"199"}
                cartIcon={true}
                discount={"60"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N70117997V/45/_/1737904970/9b1d5943-ec49-4e32-9c72-083aef0ddc99.jpg?format=jpg&width=240"
                }
                title={
                  "Garment Steamer, 2000W Vertical Steamer, GGS25022N | Portable, Fast Heat Clothes Steamer | Dual Steam Levels | Large Water Tank | Perfect For All Types Of Clothes 1.8 L 2000 W GGS25022N White,Violet"
                }
                price={"89"}
                oldPrice={"226"}
                cartIcon={true}
                discount={"60"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N53390404A/45/_/1731583066/57d5b46a-cdf2-490f-a675-6245a6541738.jpg?format=jpg&width=240"
                }
                title={
                  "600L Gross/ 436L Net Capacity Side By Side Refrigerator-Freezer With Digital Control And Temperature Display, No-Frost, LED-light SGR710SBS Inox"
                }
                price={"1,379"}
                oldPrice={"2,199"}
                cartIcon={true}
                discount={"37"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/pnsku/N53403324A/45/_/1733722597/3f08ae7f-df13-4f2d-8ccc-dbebc2eeb29b.jpg?format=jpg&width=240"
                }
                title={
                  "Portable Projector Pocket 5G WIFI Android11.0 Support 130 Inches Home Theater Full HD 1080P for Indoor Outdoor Home Birthday Gift Compatible with TV Stick/HDMI/USB/PS5/iOS/PS4"
                }
                price={"159"}
                oldPrice={"425"}
                cartIcon={true}
                discount={"62"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/v1681384534/N32628523A_9.jpg?format=jpg&width=240"
                }
                title={
                  "V40 5G Dual SIM Nebula Purple 12GB RAM 256GB With Exclusive Gifts Earbuds, Smart Watch, 80W Charger And 24 Months Warranty + 1 Year Screen Replacement - Middle East Version"
                }
                price={"1,349"}
                oldPrice={"1,699"}
                cartIcon={true}
                discount={"20"}
                tag={false}
              />
              <DealsCard
                image={
                  "https://f.nooncdn.com/p/v1669040907/N38849954A_2.jpg?format=jpg&width=240"
                }
                title={
                  "7 KG Front Load Washing Machine, 1200 RPM, 15 Programs,LED Display, Quick Wash, High Efficiency, Drum Clean, Delay Start, Child Lock 7 kg SGW7250NLED White"
                }
                price={"699"}
                oldPrice={"899"}
                cartIcon={true}
                discount={"22"}
                tag={false}
              />
            </div>
          </div>
        </section>

        <section id="electronics offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/9bd4929d-438c-4ec5-b69f-f2a011713244.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/ba9c31da-10e9-47e9-bea1-d8d8f6aaf270.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/55b0f518-36d6-4036-9fa3-e1c457f71ae7.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/412fc52b-9508-4321-840b-4181a38d4f85.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/f25ae3cd-ee90-41a0-a705-b6485d1df630.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/7182354c-6cc3-4a86-ac5f-e8f3c38837c4.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/106a3951-0bc6-4da2-84eb-f075739e2319.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/5b41142e-2209-4cf2-acf1-9480b9e4de2d.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="mobiles accessories">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/8acf41d8-c265-4413-8a0b-06ed8bfb618f.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/50c9ef58-b65e-4ef2-b285-eba511547b80.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/280cf2f3-a966-479e-a696-135cb79e4baf.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/e880f3e5-9f05-40a7-bdb9-0582b77dd5d4.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/118e579b-8575-420b-a42d-566429d3ef0d.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/555f6fbc-0928-4001-bac2-bdb6a507d705.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/cd063911-1eea-4398-972f-85a0463ff34e.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/4dfec511-0559-4d23-8c93-64d81c88a79a.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="laptop accessories">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/c7d0d246-ff27-45e1-b0e8-fd5a365c0a19.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/879423cf-c831-49d3-ad33-53e55fa593fa.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/2f75b7f3-589d-4361-ab5a-c2ca37a1f474.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/83dbb5cc-2ab3-4802-85be-1cf107a1b392.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/2905b471-fe85-4334-8a02-9906320e0fd3.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/df0c99c5-91cf-416c-8dbd-59993f4cb6ed.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/4ce8daa4-2ec0-4bfe-a6b9-d4c4e8c52d61.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/b88ec5ca-3e8f-449e-8d27-575be63a0b4b.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="beauty offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/3c487ca0-c1d6-43a1-abbc-0e4d66efd06e.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/f70e89ba-2b9c-4ad6-8c1e-1883fbdf4256.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/bb751b42-ac06-4cd0-8b6c-b16086462620.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/e98b2427-d353-4801-97cb-b6b592f1ffa0.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/a1fee5fc-be68-4fed-bb1a-be828a2f524f.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/ece2771a-73f1-4c8c-b9bd-6174ffd74453.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/c61b0394-5158-4da9-8898-45c7c2a29782.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/5f74f539-35f2-4a1c-9cb5-336fbd31ecb3.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="fragnances offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/d40ddf4e-4b0d-4033-bd7b-574ba287dd3e.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/34589b75-5e27-4334-b1c7-cc02b1e584a3.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/d1fe70b4-59eb-4708-b4be-1b06e5a6a94c.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/64b2c011-9ede-46ca-b2cb-6d7eeba77e0d.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/635217be-054e-4446-a1b5-555fdcf4921e.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/0c09339a-f3f8-45aa-af0e-8353118efceb.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/2127eaf3-b6b6-4558-baa7-aa73771e58b8.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/176c102f-1d59-4791-8d8f-1714ccdbda40.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="home appliances offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/8526e8ec-f462-46fa-b4ee-d12c83b8d6dd.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/0e98db5e-f8d9-41ae-93ee-5b03c2e85105.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/a25ee8be-c188-46b7-a1c7-0f0d3ee6ec6d.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/9ddbbc64-e284-438e-aae7-c7f6330c12a9.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/7ca559bb-edae-4a13-b92c-f3c9bfc3756c.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/49c6e38e-35fe-4944-a802-b6a9927b13e1.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/799df7f5-f8ae-4bb3-8da1-b3d0c4d68aeb.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/5b29cb57-72f5-4a96-a3d5-3df67009b49b.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="home and kitchen offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0002/assets/4eb2aa0f-5c3e-4740-ae93-01bde9a0f0c9.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/bf564f8b-7290-4842-a285-e7ff7e874182.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/60f242a1-2333-48c8-ab64-3d259037cba6.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/8471044a-b3a0-4a88-9777-43203e463b07.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/659797c8-d854-4189-83df-2159a3b456a6.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/7aa77336-1ce1-4c62-9863-e919f98e46c0.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/b20bc01f-1cc1-4257-afbe-8885c88ecd85.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/2417d4ed-9d97-4419-ae7e-9eca4333b8b4.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="womens fashion offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/71f00ba3-8d8a-40b2-b852-08e589dd9ae6.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/5005173e-fe23-4287-94f7-a555d6c5cf56.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/849a523a-6114-42ed-b257-068194fd4ddd.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/798fc738-4981-4730-8a0a-c0e795673ab5.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/27c3932e-46fc-46e6-9933-d87bdeb7039d.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/9ad52322-b872-4d5e-a27c-bb956159b10b.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/ab69e9ad-ae95-4963-b26b-74fe02b9dfb2.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/a8e6e266-c0ef-4818-855c-bb9b19e60bfe.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="mens fashion offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/751cab83-5c7e-47ae-bb5e-1807a7f2c6c7.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/9f0d8a6b-f466-4b73-b43e-708c908c1324.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/deac2206-acb5-4175-8530-7248c9de0f7a.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/e16ff394-892c-4c76-9088-1add1ae8b932.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/7ba417b1-50c9-4944-a167-bb7b3c86e4e3.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/36bb0b0a-f963-4e4a-b9ee-8c28525d004e.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/bd9f8575-35c6-4b4f-acb7-e00f64409141.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/05fbbc93-c4b6-4c33-af1f-11ade378718e.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="kids fashion offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/0cbf5263-80ad-404c-b666-d0d49c2938fb.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/c72b04a4-1735-4d08-91b0-1d61c9edd3ad.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/574688df-b3e3-4bf4-badd-be7c8c5d4aa6.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/fd4b394d-14c4-4e43-9154-f59150d322db.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/fc13511d-7e7c-4582-b86f-9600ce0c44e3.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/afce9f73-e68f-4989-8066-f1f9940bc957.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/60f26703-2bf0-4093-9d4e-70fd4adf322f.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/eb0aa19d-a059-4d33-8d2c-2cb4cadd99dc.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="banner3">
          <div className="my-2">
            <img
              className="w-full"
              src="https://f.nooncdn.com/ads/banner-1440x1440/CL%20Ad%20Banner%201440x200px.1741772793.3124144.png"
              alt="deal img"
            />
          </div>
        </section>

        <section id="watches offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/7442ef7f-7aa3-42b7-8367-8ef4ac03a70e.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/53cc73ad-dda4-435a-bf0d-73a2b8bfbf7d.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/d5665ff9-221b-423d-9551-4bd5df13212e.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/1bffb639-84c1-411c-b20e-81e0cccb376d.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/b0a7d762-5f9f-4f25-92dd-e3d26b43c69d.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/de8e3778-0d87-4ef2-8adf-56aacc8a8056.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/35839249-19ed-44de-a207-da1c6da3a26e.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/a51423df-547b-49e3-b08c-416eb54dd20d.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="eyewear offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/d948ce5c-53ae-4b6e-b6da-e34c702cba06.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/e2ec1df3-da2a-4be0-bbf2-32558621d240.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/26f41dc9-5364-42cc-ba32-3c801daa89e0.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/e7df3653-4d4e-4718-98ce-cb47bacd17da.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/fff49c35-a04a-4a60-b8a4-95256e702c67.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/afdbd686-1b9e-459a-be49-6ae2e2d18b0b.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/c410024d-de3c-4ff8-bc20-f9412b09e417.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/792578fe-748a-4dbe-964f-044ab7ae3f8a.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="toys offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/44647965-6bb0-459a-a9d1-6e8fdc85441d.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/e695b912-0083-41a2-9d7d-d561cc7ad55e.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/96b4f466-a741-4a20-a1a6-f1e5bb49e9c3.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/07f28ecb-525e-4198-b1d7-268ba77918d4.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/6d174fe2-dce1-4b6a-8344-b3951f2353e9.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/4612db4d-f487-4210-879c-1c4a384be19a.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/f1a7836f-f276-4804-b51d-57b2b73e5564.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/70ca19b0-3f40-4cfa-8d8e-e93e724d9972.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="baby essentials offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/3499063d-bd13-497a-8afd-4f17eb67cc83.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/81709ae4-11e9-40c3-9058-1688149a4e0a.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/9b1f823e-9b79-43cd-8bed-0c963f5040f7.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/36301cd9-e630-4ed7-b995-3c16c275fcc3.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/2f220b8b-bda5-450f-9a86-3407515781d9.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/3de3e26d-eaf5-4c34-9e0c-7cd1eb1b3f95.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/7e49e852-4956-4783-84f7-7a20eed395c5.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/376986f6-5625-49fc-b053-6d5aa5b341cf.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="health offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/dfd55477-7019-476d-984f-93c45d7e522f.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/11672183-ec26-4269-ab55-52964a6835c1.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/8ad83f11-34fa-4b2c-836b-dcb3de97b673.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/15b959f4-7201-44fd-84e7-3c2ff51828c3.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/35785171-61bc-4792-a7a5-1d22b5ffec29.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/9262996d-6754-48ff-9831-7d7efe951dee.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/f9091828-bf43-4c31-967f-dc82e0e0ace3.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/5458490c-6af6-4d58-8689-b449af510e1f.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="furnitture offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/a29cbb03-e744-432b-9aee-2760feb1b283.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/f45bfe26-7c6f-4fb1-bd67-744cb191d009.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/6a19c1f1-8b75-4728-a0f3-87e02ac6b21e.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/6a19c1f1-8b75-4728-a0f3-87e02ac6b21e.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/cf6486e4-5379-45ee-a722-9f0ebf986bbc.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/b2a88657-91c5-4dc3-b269-cba8d21f76b0.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/349096f9-46d5-44ab-acb1-687a4bfb171e.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/3c63bf11-9833-4d56-a1c7-8541af772e53.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="sports offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/91430071-7522-43c7-b8fd-3c3615777d5a.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/ceb7e471-3fbd-49ba-9f1f-68d159a6aeb3.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/1f19ddee-21a5-4549-b98f-0aa2f1420fa1.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/01dbfb37-679c-4222-959f-30ffbb3ff730.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/4b9c6c65-9046-4051-ac5c-80a9deaf6d20.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/4ebac97b-9f95-471d-9326-af4bbdbc543e.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/71c61594-cab3-4db6-8707-311ed8d5fd3e.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/f9c68207-446a-47d9-89c0-675710214b19.png"
                }
              />
            </div>
          </div>
        </section>

        <section id=" stationery offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/33f03460-41f0-46c5-bf1c-e9767045c712.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/86542a7a-b3d1-48f3-a7e6-88923095d8e4.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/468996b7-8546-4b6f-b1b0-072185ef55a5.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/1364cb72-dffd-4fb7-8e77-8e2781c250ec.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/27aa07d8-8368-4fff-8da8-85875b7eb810.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/229a9615-a438-4a38-846b-2a51c0f75abe.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/6fb65f55-52a3-4e07-8f77-3de2521a9a78.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/c14104e9-514c-4329-a52e-dfe8e1a82202.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="automotive offer">
          <div className="bg-[#fef1ba] p-4">
            <div>
              <img
                className="w-full"
                src="https://f.nooncdn.com/mpcms/EN0001/assets/116abdd3-6951-4ef0-9a28-9dd6d3006497.png"
                alt="ramadan ssentials img"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-2">
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/f892b906-3821-46be-a38b-1823a9188d3c.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/3d0fc32d-2efb-4216-b918-87a94fa82b62.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/4266b45f-44d2-45dc-865e-7ac6c20f7645.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/5658e5c0-0faa-4f52-ad0b-ae9f4196e1a7.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/fc62ada0-07b4-4efa-aa52-f6710ce6e695.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/1085f7e1-897b-469e-87ef-94760d7fc2d4.png"
                }
              />
              <DiscountCard
                image={
                  "https://f.nooncdn.com/mpcms/EN0001/assets/6f76c946-c9c5-44ec-9e2b-9ef45372bf85.png"
                }
              />
            </div>
          </div>
        </section>

        <section id="Banner4">
          <div className="bg-white p-2">
            <img
              className="w-full"
              src="https://f.nooncdn.com/mpcms/EN0001/assets/c1073d7b-2c8b-49aa-a551-d065094cbeb8.png"
              alt="deal img"
            />
            <div className="p-2">
              <h1 className="font-bold mb-2">
                Superior online shopping in the UAE
              </h1>
              <p className="text-gray-500">
                As the leading destination for online shopping in the UAE, noon
                has everything you need under one roof. Whether you’re shopping
                for the latest electronic products, fashion, homeware, products
                for kids and babies, books and stationery, sports and health
                essentials, beauty products, or groceries, we have millions of
                products in the noon UAE store. As a customer-centric online
                store, we make it easier to buy online with flexible payment
                plans that help you save, along with regular sales across our
                extensive product range, gift cards, wishlists, our exclusive
                Mashreq VIP card, our easy-to-use shopping app, and so much
                more...
              </p>
              <h1 className="font-bold mb-2">
                Shop the best products & brands at noon UAE
              </h1>
              <p className="text-gray-500">
                You’ll find a massive variety of products from top brands at
                noon UAE. Our electronics department has the latest mobile
                phones, along with tablets, mobile accessories, laptops,
                wearable technology such as smartwatches and other wearable
                devices, headphones (in-ear, wireless and noise-cancelling),
                audiovisual gear, a selection of cameras, televisions, video
                game consoles such as PC and Xbox controllers, and video games.
                We have products from Samsung, Xiaomi, Sony, HP, Dell, Huawei,
                Lenovo, Apple, and many other leading tech brands...
              </p>
              <h1 className="font-bold mb-2">
                Hassle-free UAE online shopping
              </h1>
              <p className="text-gray-500">
                When you buy online at noon, you will always have peace of mind
                knowing that you are getting the best level of service. We take
                the hassle out of online shopping in Abu Dhabi and Dubai, with a
                number of features and flexible payment plans that make shopping
                simpler, faster, and better. Our Buy Now, Pay Later plans
                include Tabby, with orders split over 4 payments, and Tamara,
                with orders split over 3 payments. Both plans are interest-free.
                We accept credit cards and debit cards from Emirates NBD, FAB
                bank, Mashreq bank, ADCB, and ADIB, and cash on delivery. For
                even more convenience, we have a No-Cost EMI. We have a 15-day
                return policy that takes even more stress...
              </p>
            </div>
          </div>
        </section>
        <div className="flex items-center md:justify-between flex-wrap justify-center gap-2- px-8 py-5">
          <div>
            <h1 className="font-bold text-2xl mb-1">
              We're Always Here To Help
            </h1>
            <p className="text-gray-500">
              Reach out to us through any of these support channels
            </p>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex gap-2 items-center">
              <img
                className="bg-white p-2 rounded-[50%]"
                src="https://f.nooncdn.com/s/app/com/noon/images/support-help-center.svg"
                alt="icon img"
              />
              <div>
                <p className="text-gray-500">Help Center</p>
                <p className="font-semibold text-2xl mb-1">help.noon.com</p>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <img
                className="bg-white p-2 rounded-[50%]"
                src="https://f.nooncdn.com/s/app/com/noon/images/support-email.svg"
                alt="icon img"
              />
              <div>
                <p className="text-gray-500">Email Support</p>
                <p className="font-semibold text-2xl mb-1">care@noon.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-[90%] mx-auto">
          <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-7 p-7">
            <div>
              <h1 className="font-semibold">ELECTRONICS</h1>
              <div className="capitalize text-[0.9rem] flex flex-col gap-3 mt-2">
                <p>mobiles</p>
                <p>tablets</p>
                <p>laptops</p>
                <p>Home Appliances</p>
                <p>camera, photo & video</p>
                <p>televisions</p>
                <p>headphones</p>
                <p>video game</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold uppercase">fashion</h1>
              <div className="capitalize text-[0.9rem] flex flex-col gap-3 mt-2">
                <p>women's fashion</p>
                <p>men's fashion</p>
                <p>girls' fashion</p>
                <p>boys' fashion</p>
                <p>watches</p>
                <p>jewellery</p>
                <p>women's handbags</p>
                <p>men's eyewear</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold uppercase">home and kitchen</h1>
              <div className="capitalize text-[0.9rem] flex flex-col gap-3 mt-2">
                <p>bath</p>
                <p>home decor</p>
                <p>kitchen & dining</p>
                <p>Tools & Home Improvement</p>
                <p>audio & video</p>
                <p>furniture</p>
                <p>Patio, Lawn & Garden</p>
                <p>pet supplies</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold uppercase">beauty</h1>
              <div className="capitalize text-[0.9rem] flex flex-col gap-3 mt-2">
                <p>fragrance</p>
                <p>make-up</p>
                <p>haircare</p>
                <p> skincare </p>
                <p>Bath & Body</p>
                <p>Electronic beauty tools</p>
                <p>bmen's grooming</p>
                <p>Health Care Essentials</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold uppercase">Baby & Toys</h1>
              <div className="capitalize text-[0.9rem] flex flex-col gap-3 mt-2">
                <p>Diapering</p>
                <p>Baby Transport</p>
                <p>Nursing & Feeding</p>
                <p>Baby & Kids Fashion</p>
                <p>Baby & Toddler Toys</p>
                <p>Tricycles & Scooters</p>
                <p>Board Games & Cards</p>
                <p>Outdoor Play</p>
              </div>
            </div>

            <div>
              <h1 className="font-semibold uppercase">top brands</h1>
              <div className="capitalize text-[0.9rem] flex flex-col gap-3 mt-2">
                <p>Pampers</p>
                <p>apple</p>
                <p>nike</p>
                <p>samsung</p>
                <p>tefal</p>
                <p>L'Oréal Paris</p>
                <p>skechers</p>
                <p>BLACK+DECKER</p>
              </div>
            </div>
            <div>
              <h1 className="font-semibold uppercase">Discover Now</h1>
              <div className="capitalize text-[0.9rem] flex flex-col gap-3 mt-2">
                <p>noon Digest</p>
                <p>Brand Glossary</p>
                <p>Best mobile phones</p>
                <p>supermall</p>
                <p>Trending Searches</p>
                <p>Ramadan Sale</p>
                <p>Macbook Pro</p>
                <p>Macbook Air</p>
                <p>IPL Live Streaming</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
