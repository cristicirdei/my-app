import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    function changeCss() {
      var navElement = document.querySelector("#header");
      if (this.scrollY > 20) {
        navElement.classList.remove("header-down");
        navElement.classList.add("header-up");
      } else {
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
