import React, { useEffect } from "react";

import { IconContext } from "react-icons";
import { BsChatRightFill, BsChatSquareQuoteFill } from "react-icons/bs";
import banner_src from "../resources/crowd.jpg";
import TableOfContents from "../components/organisms/TableOfContents";

function readingTime() {
  const text = document.getElementById("article")?.innerText;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  document.getElementById("time").innerText = time + " minutes read";
}

const BlogPost = ({ theme, content }) => {
  useEffect(() => {
    readingTime();
  }, []);

  const primaryColor = "#0a2a2a";
  const secondaryColor = "#a7ff05";
  const primaryColorText = "#d4d4d4";
  const secondaryColorText = "#000";

  const title = "Why the group does what it does";
  const subtitle = "An investigation";
  const preface =
    "What would you do if you learn that one thing is not what you thought it is in reality";

  return (
    <div className="page">
      <div className="blog-cover">
        <div className="banner">
          <img className="banner-img" alt="" src={banner_src}></img>
        </div>
        <div
          className="front-page"
          style={{ color: primaryColorText, backgroundColor: primaryColor }}
        >
          <div id="blog-title">
            <div id="title-line-one">
              <div
                id="badge"
                style={{
                  color: secondaryColorText,
                  backgroundColor: secondaryColor,
                }}
              >
                <IconContext.Provider
                  value={{
                    className: "bubble-icon",
                  }}
                >
                  <BsChatRightFill style={{ color: primaryColor }} />
                </IconContext.Provider>
              </div>
              <h1 className="title">{title.toLocaleUpperCase()}</h1>
            </div>

            <h2 className="subtitle">{subtitle.toLocaleUpperCase()}</h2>
          </div>
          <div id="preface">
            <div id="text">{preface}</div>
          </div>
        </div>
        <div
          className="details"
          style={{ color: secondaryColorText, backgroundColor: secondaryColor }}
        >
          <p id="time"></p>
        </div>
      </div>

      <div className="content">
        <div className="side">
          <TableOfContents></TableOfContents>
        </div>
        <div className="article" id="article">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h3 id="chapter">Chapter</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
          </p>

          <blockquote
            style={{ backgroundColor: "#fcfcfc", color: secondaryColor }}
          >
            <IconContext.Provider
              value={{
                className: "quote-icon",
              }}
            >
              <BsChatSquareQuoteFill style={{ color: secondaryColor }} />
            </IconContext.Provider>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. - marry
            jane
          </blockquote>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore
            <a
              className="footnote"
              style={{
                backgroundColor: secondaryColor,
                color: secondaryColorText,
              }}
              href="#fig-1"
            >
              {" 01 "}
            </a>{" "}
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>

          <figure
            id="fig-1"
            style={{ color: primaryColorText, backgroundColor: primaryColor }}
          >
            <img src={banner_src} alt=""></img>
            <figcaption>
              <span style={{ color: secondaryColor }}>01</span> - Trulli,
              Puglia, Italy.
            </figcaption>
          </figure>

          <h4 id="subchapter">SubChapter</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur
            <a
              className="footnote"
              style={{ backgroundColor: "black", color: "white" }}
              href="#footnote-1"
            >
              {" 01 "}
            </a>{" "}
            sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>

          <blockquote
            style={{ backgroundColor: "#fcfcfc", color: primaryColor }}
          >
            <IconContext.Provider
              value={{
                className: "quote-icon",
              }}
            >
              <BsChatSquareQuoteFill style={{ color: primaryColor }} />
            </IconContext.Provider>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. - marry
            jane
          </blockquote>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut{" "}
            <mark>enim ad minim veniam, quis nostrud exercitation ullamco</mark>{" "}
            laboris nisi ut aliquip ex ea commodo consequat.{" "}
            <cite>
              "Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur."
            </cite>{" "}
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <ol className="footnotes">
            <li id="footnote-1">Footnote 1</li>
            <li id="footnote-1">Footnote 2</li>
          </ol>
        </div>
        <div className="side-right"></div>
      </div>
    </div>
  );
};

export default BlogPost;
