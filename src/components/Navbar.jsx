import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="bg-slate-100 text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink
            to={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img
              src="images/letter-a.png"
              alt="Logo"
              className="w-10 h-10 text-white rounded-full"
            />
            <span className="ml-3 text-xl">Sarkara</span>
          </NavLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to={"/"}
              className="mr-5 font-semibold hover:text-gray-900"
            >
              {({ isActive }) => (
                <span
                  className={isActive ? "underline text-purple-600" : undefined}
                >
                  Home
                </span>
              )}
            </NavLink>
            <NavLink
              to={"/service"}
              className="mr-5 font-semibold hover:text-gray-900"
            >
              {({ isActive }) => (
                <span
                  className={isActive ? "underline text-purple-600" : undefined}
                >
                  Services
                </span>
              )}
            </NavLink>
            <NavLink
              to={"/about"}
              className="mr-5 font-semibold hover:text-gray-900"
            >
              {({ isActive }) => (
                <span
                  className={isActive ? "underline text-purple-600" : undefined}
                >
                  About
                </span>
              )}
            </NavLink>
            <NavLink
              to={"/contact"}
              className="mr-5 font-semibold hover:text-gray-900"
            >
              {({ isActive }) => (
                <span
                  className={isActive ? "underline text-purple-600" : undefined}
                >
                  Contact Us
                </span>
              )}
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
