import React, { useEffect } from "react";

import { IconContext } from "react-icons";
import {
  FaInstagram,
  FaGoodreads,
  FaLinkedin,
  FaGithub,
  FaUnsplash,
  FaLastfm,
  FaBook,
} from "react-icons/fa";

const Header = () => {
  useEffect(() => {
    function changeCss() {
      var bodyElement = document.querySelector("body");
      var navElement = document.querySelector("#header");
      if (this.scrollY > 20) {
        /*navElement.style.marginTop = "1rem";
        navElement.style.width = "calc(100% - 2rem)";
        navElement.style.marginLeft = "1rem";
        navElement.style.borderRadius = "10px";
        navElement.style.paddingLeft = "1rem";*/
        navElement.classList.remove("header-down");
        navElement.classList.add("header-up");
      } else {
        /* navElement.style.marginTop = "0rem";
        navElement.style.marginLeft = "0rem";
        navElement.style.width = "100%";
        navElement.style.borderRadius = "0px";
        navElement.style.paddingLeft = "2rem";*/
        navElement.classList.remove("header-up");
        navElement.classList.add("header-down");
      }
    }

    window.addEventListener("scroll", changeCss, false);

    return () => {
      // Cleanup event listner
      window.removeEventListener("scroll", changeCss);
    };
  });

  return (
    <div className="header header-down" id="header">
      <a className="item" href="/" rel="noreferrer">
        <h1>cristi cîrdei</h1>
      </a>
    </div>
  );
};
export default Header;
