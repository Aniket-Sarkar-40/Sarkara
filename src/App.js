import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Common from "./Router/Common";
import Contact from "./Router/Contact";
import Service from "./Router/Service";
import Error from "./Router/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import User from "./components/User";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Common
                heading={"Grow Your Business With"}
                image={"images/home.png"}
              />
            }
          />
          <Route
            exact
            path="/about"
            element={
              <Common
                heading={"Welcome To About Page"}
                image={"images/about.png"}
              />
            }
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
