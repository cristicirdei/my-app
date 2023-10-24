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
import { ReactComponent as Letterboxd } from "../resources/icons/letterboxed.svg";
import { ReactComponent as Applemusic } from "../resources/icons/apple-music.svg";

const LandingPage = () => {
  useEffect(() => {
    document.querySelector("a").addEventListener("click", function (e) {
      const self = this;
      /*const notif = document.createElement("h1");
      notif.classList = "link-notif";
      notif.innerHTML = "Going to " + self.href;
      document.appendChild(notif);*/
      setTimeout(function () {
        window.location.href = self.href;
      }, 2000);
    });
  }, []);

  return (
    <>
      {/* <Header></Header>*/}

      <div className="page landing-padd" style={{ backgroundColor: "#000" }}>
        <div className="square"></div>
        <div className="menu-links left-m">
          <div className="menu">
            <li className="item">
              <p className="link-name">Books</p>
              <IconContext.Provider
                value={{
                  className: "icon",
                }}
              >
                <FaBook />
              </IconContext.Provider>
            </li>
          </div>
        </div>
        <div className="menu-links">
          <div className="menu">
            <a
              className="item"
              href="https://linkedin.com/in/cristiancirdei"
              rel="noreferrer"
            >
              <li className="item">
                <p className="link-name">LinkedIn</p>
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaLinkedin />
                </IconContext.Provider>
              </li>
            </a>
            <a
              className="item"
              href="https://github.com/cristicirdei"
              rel="noreferrer"
            >
              <li className="item">
                <p className="link-name">GitHub</p>
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaGithub />
                </IconContext.Provider>
              </li>
            </a>
          </div>
          <div className="menu">
            <a
              className="item"
              href="https://instagram.com/cristi_cirdei"
              rel="noreferrer"
            >
              <li className="item">
                <p className="link-name">Instagram</p>
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaInstagram />
                </IconContext.Provider>
              </li>
            </a>
            <a
              className="item"
              href="https://goodreads.com/user/show/150642989"
              rel="noreferrer"
            >
              <li className="item">
                <p className="link-name">Goodreads</p>
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaGoodreads />
                </IconContext.Provider>
              </li>
            </a>
            <a
              className="item"
              href="https://unsplash.com/@cristi_cirdei?utm_source=unsplash&utm_campaign=unsplash-ios&utm_medium=referral&utm_content=credit-photographer"
              rel="noreferrer"
            >
              <li className="item">
                <p className="link-name">Unsplash</p>
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaUnsplash />
                </IconContext.Provider>
              </li>
            </a>
            <a
              className="item"
              href="https://music.apple.com/profile/cirdeicristi24"
              rel="noreferrer"
            >
              <li className="item">
                <p className="link-name">Apple Music</p>
                <Applemusic className="icon" />
              </li>
            </a>
            <a
              className="item"
              href="https://www.last.fm/user/cristi-c"
              rel="noreferrer"
            >
              <li className="item">
                <p className="link-name">Last.fm</p>
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaLastfm />
                </IconContext.Provider>
              </li>
            </a>
            <a className="item" href="https://boxd.it/3lD0f" rel="noreferrer">
              <li className="item">
                <p className="link-name">Letterboxd</p>
                <Letterboxd className="icon" />
              </li>
            </a>
          </div>
        </div>
        <div className="square-content">
          <div className="blob"></div>
          <h1 className="landingTitle">cristi cîrdei</h1>
          <p className="about-me">
            <em>hi!</em> and <em>welcome!</em> more about me soon-ish :)
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
