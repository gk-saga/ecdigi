import React, { useEffect, useState } from "react";
import WOW from "wowjs";
import "animate.css/animate.css";
import _ from "lodash";
import { mockdata } from "../../../utils/constant";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const currentPath = window.location.pathname;
  const [modal1Open, setModal1Open] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changebackground);

  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
    console.log(currentPath);
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn ${navbar ? "bg-white shadow" : ""
          }`}
        data-wow-delay="0.1s"
      >
        <a
          href="index.html"
          className="navbar-brand ms-2 me-2 ms-lg-0 w-sm-alt-50"
        >
          {/* <img className="w-75 img-fluid" src="assets/img/gvk-logo.png" /> */}
          <img
            className="img-fluid logo-size"
            src="assets/logo/footer-logo.png"
            style={{ maxWidth: "150px" }}
          />
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto p-4 p-lg-0">
            {mockdata.navs.map((item) => {
              return (
                <a
                  href={`${item.path}`}
                  className={`nav-item nav-link ${
                    // || (item.title === 'Home' && currentPath != item.path && !_.includes(currentPath, _.map(navs, nav => nav.path)))
                    item.path == currentPath ? "active" : ""
                    }`}
                >
                  {item.title}
                </a>
              );
            })}
          </div>
          <div className="mb-0 d-none d-md-block">
            <p className="mb-0">From ₹4,999 / Month</p>
          </div>
          <div className="ps-4 d-none d-md-block">
            <button
              className="btn btn-light"
            >
              Pay Now
            </button>
          </div>
          <div className="ps-4 d-none d-md-block">
            <button
              className="btn btn-primary"
            >
              Login
            </button>
          </div>


        </div>
      </nav>
      {/* <div className="ps-4 d-md-none">
        <button
          className="btn btn-primary rounded-0"

          style={{
            position: "fixed",
            top: "450px",
            transformOrigin: "top right 0",
            transform: " rotate(90deg)",
            right: "0",
          }}
        >
          <i class="fa fa-envelope pe-2" aria-hidden="true"></i>Get A Proposal
        </button>
      </div> */}
    </>
  );
};
