import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div class="lg:w-1/3 md:w-1/2 p-4 w-full">
        <div className="p-4 border-2 rounded-md shadow-lg">
          <Link class="block relative h-48 rounded overflow-hidden">
            <img
              alt="ecommerce"
              class="object-cover object-center w-full h-full block"
              src={props.img}
            />
          </Link>
          <div class="mt-4">
            <h2 class="text-gray-900 title-font text-lg font-medium">
              {props.name}
            </h2>
            <p class="mt-2">{props.description}</p>
            <a target={"_blank"} rel="noreferrer" href={props.link}>
              <button class="inline-flex mt-4 border-blue-500 bg-slate-100 border-2 text-indigo-500 rounded py-1 px-3 focus:outline-none hover:text-white hover:bg-indigo-500">
                Check Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
