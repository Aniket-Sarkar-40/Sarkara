import React from "react";
import Card from "../components/Card";
import data from "../Api";

const Service = () => {
  // console.log(data);
  return (
    <>
      <section className="text-gray-600 lg:px-12 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {data.map((currElem, index) => {
              const { img, name, description, link } = currElem;

              return (
                <Card
                  img={img}
                  name={name}
                  description={description}
                  link={link}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
