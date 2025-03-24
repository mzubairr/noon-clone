import React from "react";

const SectionCard = ({ image }) => {
  return (
    <section id="deals">
      <div className="bg-white mt-3 p-4">
        <div>
          <img className="w-full" src={image} alt="deal tag img" />
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
  );
};

export default SectionCard;
