import React from "react";
import { Link } from "react-router-dom";
import "./com.css";

const Common = (props) => {
  return (
    <>
      <div className=" lg:px-12">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
                {props.heading}
                <br className="hidden  lg:inline-block" />
                <span className="text-blue-500"> Sarkara</span>
              </h1>
              <p className="mb-8 text-lg leading-relaxed">
                We are team of talented developer making website.
              </p>
              <div className="flex justify-center">
                <Link to={"/contact"}>
                  <button /*className="inline-flex border-blue-500 bg-slate-100 border-2 text-indigo-500 rounded-3xl py-2 px-6 focus:outline-none hover:text-white hover:bg-indigo-600  text-lg"*/
                    className="btnstyl"
                  >
                    <span>Contact Here</span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="image lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover  object-center rounded"
                alt="hero"
                src={props.image}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Common;
