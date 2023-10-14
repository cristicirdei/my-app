import React, { useEffect, useState } from "react";
import Papa from "papaparse";

import data from "../resources/goodreads_library_export.csv";

import { IconContext } from "react-icons";
import { FaChevronRight } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();

  const [read_books, setReadBooks] = useState();
  const [tbr_books, setTBRBooks] = useState();

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    const parceCSV = () => {
      Papa.parse(data, {
        download: true,
        header: true,
        skipEmptyLines: true,
        dynamicTyping: true,
        complete: function (results) {
          let data = results.data;
          data.map((entry) => {
            entry["Date Added"] = new Date(entry["Date Added"]);
            entry["Date Read"] = new Date(entry["Date Read"]);
            return 0;
          });
          let read_books = data.filter((b) => b["Exclusive Shelf"] === "read");
          read_books = read_books.sort(
            (a, b) => b["Date Read"] - a["Date Read"]
          );
          setReadBooks(read_books);

          let tbr_books = data.filter(
            (b) => b["Exclusive Shelf"] === "to-read"
          );
          tbr_books = tbr_books.sort(
            (a, b) => b["Date Added"] - a["Date Added"]
          );
          setTBRBooks(tbr_books);
        },
      });
    };
    parceCSV();

    return () => {
      // Cleanup function to clear data
      setReadBooks([]);
      setTBRBooks([]);
    };
  }, []);

  const [isShown, setIsShown] = useState(false);
  const [isShownTBR, setIsShownTBR] = useState(false);
  const [shownBook, setShownBook] = useState(false);

  return (
    <>
      <div className="page">
        <h1 className="books-page-title">Books</h1>

        <div className="favourites">
          <h1>favourites</h1>
          <div className="container">
            <div
              className="favourite hoverfavourite"
              data-hover={"The Complete Stories"}
              data-hover-after={
                "by Flannery O'Connor · Southern Gothic · Read in 2023"
              }
            >
              <img
                className="img"
                src={require("../resources/book covers/the-complete-stories.jpg")}
                alt="book cover"
              ></img>
              <div className="shadow"></div>
              <div className="light"></div>
            </div>

            <div
              className="favourite hoverfavourite"
              data-hover={"The Heart Is a Lonely Hunter "}
              data-hover-after={
                "by Carson McCullers · Southern Gothic · Re-Read in 2023"
              }
            >
              <img
                className="img"
                src={require("../resources/book covers/the-heart-is-a-lonely-hunter.jpg")}
                alt="book cover"
              ></img>
              <div className="shadow"></div>
              <div className="light"></div>
            </div>

            <div
              className="favourite hoverfavourite"
              data-hover={"One Hundred Years of Solitude "}
              data-hover-after={
                "by Gabriel García Márquez · Magic Realism · Read in 2022"
              }
            >
              <img
                className="img"
                src={require("../resources/book covers/one-hundred-years-of-solitude.jpg")}
                alt="book cover"
              ></img>
              <div className="shadow"></div>
              <div className="light"></div>
            </div>
          </div>
        </div>

        <div
          className="banner-2023"
          onClick={() => navigate("/booksreplay2023")}
        >
          <div className="blob"></div> <div className="blob"></div>
          <div className="blob"></div>
          <h1 className="one">
            {"2023 Books Rewind "}
            <IconContext.Provider
              value={{
                className: "arrow",
              }}
            >
              <FaChevronRight />
            </IconContext.Provider>
          </h1>
        </div>

        {/*<div id="gr_updates_widget">
          <iframe
            sandbox="allow-scripts"
            id="iframe"
            src="https://goodreads.com/widgets/user_update_widget?height=470&num_updates=5&user=150642989&width=700"
            width="700"
            height="470"
            frameborder="0"
          ></iframe>
          <div id="gr_footer">
            <a href="https://www.goodreads.com/">
              <img
                alt="Goodreads: Book reviews, recommendations, and discussion"
                src="https://s.gr-assets.com/images/layout/goodreads_logo_140.png"
              />
            </a>
          </div>
            </div>*/}

        <div className="shelf">
          <h1>
            Read Books <span>{read_books?.length}</span>
          </h1>
          <div className="book-shelf">
            {read_books?.map((b, index) => (
              <div
                className="book"
                onMouseEnter={() => {
                  setIsShown(true);
                  setShownBook(b);
                }}
                onMouseLeave={() => {
                  setIsShown(false);
                  setShownBook(null);
                }}
              >
                <div className="book-cover"></div>
              </div>
            ))}
          </div>
          <div className="ticket">
            {isShown ? (
              <>
                <h1>{shownBook["Title"]}</h1>
                <h2>{shownBook["Author"]}</h2>

                <h3>
                  <span>{shownBook["Number of Pages"] + " pages"}</span>
                  {shownBook["Date Read"].getFullYear() > 2000 ? (
                    <span>
                      {" ⬩ Read " +
                        months[shownBook["Date Read"].getMonth()] +
                        " " +
                        shownBook["Date Read"].getFullYear()}
                    </span>
                  ) : (
                    ""
                  )}{" "}
                  {shownBook["My Rating"] > 0 ? (
                    <span>
                      {" ⬩ My rating " + shownBook["My Rating"] + "★"}
                    </span>
                  ) : (
                    ""
                  )}
                </h3>
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="shelf">
          <h1>
            To-Read Books <span>{tbr_books?.length}</span>
          </h1>
          <div className="book-shelf">
            {tbr_books?.map((b, index) => (
              <div
                className="book"
                onMouseEnter={() => {
                  setIsShownTBR(true);
                  setShownBook(b);
                }}
                onMouseLeave={() => {
                  setIsShownTBR(false);
                  setShownBook(null);
                }}
              >
                <div className="book-cover"></div>
              </div>
            ))}
          </div>
          <div className="ticket">
            {isShownTBR ? (
              <>
                <h1>{shownBook["Title"]}</h1>
                <h2>{shownBook["Author"]}</h2>

                <h3>
                  <span>{shownBook["Number of Pages"] + " pages"}</span>
                  {shownBook["Date Added"].getFullYear() > 2000 ? (
                    <span>
                      {" ⬩ Added " +
                        months[shownBook["Date Added"].getMonth()] +
                        " " +
                        shownBook["Date Added"].getFullYear()}
                    </span>
                  ) : (
                    ""
                  )}
                </h3>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
