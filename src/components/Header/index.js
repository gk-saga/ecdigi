import React, { Component, useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import WOW from "wowjs";
import "./Header.css";
import "animate.css/animate.css";

export const Header = () => {
  const [header, setHeader] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changebackground);

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <>
      <div
        className={`container-fluid fixed-top px-0 wow fadeIn header `}
        data-wow-delay="0.1s"
        style={{backgroundColor:'#ebeae8'}}
      >
       
        <Navbar />
      </div>
    </>
  );
};
