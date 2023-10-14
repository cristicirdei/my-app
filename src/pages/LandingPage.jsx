import React from "react";

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
import { Link } from "react-router-dom";

const LandingPage = () => {
  /*const [media, setMedia] = useState(0);

  useEffect(() => {
    setMedia(window.matchMedia("(min-width: 768px)").matches);
  }, []);*/

  return (
    <>
      {/* <Header></Header>*/}

      <div className="page landing-padd" style={{ backgroundColor: "#000" }}>
        <div className="square">
          <div className="menu-links left-m">
            <div className="menu">
              <Link to="/books">
                <li className="item">
                  <IconContext.Provider
                    value={{
                      className: "icon",
                    }}
                  >
                    <FaBook />
                  </IconContext.Provider>
                  <p className="link-name">Books</p>
                </li>
              </Link>
            </div>
          </div>
          <div className="menu-links">
            <div className="menu">
              <li className="item">
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaLinkedin />
                </IconContext.Provider>
                <p className="link-name">LinkedIn</p>
              </li>
              <li className="item">
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaGithub />
                </IconContext.Provider>
                <p className="link-name">GitHub</p>
              </li>
            </div>
            <div className="menu">
              <li className="item">
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaInstagram />
                </IconContext.Provider>
                <p className="link-name">Instagram</p>
              </li>
              <li className="item">
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaGoodreads />
                </IconContext.Provider>
                <p className="link-name">Goodreads</p>
              </li>

              <li className="item">
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaUnsplash />
                </IconContext.Provider>
                <p className="link-name">Unsplash</p>
              </li>
              <li className="item">
                <Applemusic className="icon" />
                <p className="link-name">Apple Music</p>
              </li>
              <li className="item">
                <IconContext.Provider
                  value={{
                    className: "icon",
                  }}
                >
                  <FaLastfm />
                </IconContext.Provider>
                <p className="link-name">Last.fm</p>
              </li>
              <li className="item">
                <Letterboxd className="icon" />
                <p className="link-name">Letterboxd</p>
              </li>
            </div>
          </div>

          <div className="blob"></div>
          <h1 className="landingTitle">cristi cîrdei</h1>
          <p className="about-me">
            <em>hi!</em> and <em>welcome!</em> more about me soon-ish :)
          </p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" display={"none"}>
        <defs>
          <filter id="round">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="15"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default LandingPage;
