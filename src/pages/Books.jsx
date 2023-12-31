import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Modal from "react-modal";

import { IconContext } from "react-icons";
import { BsPen, BsXLg } from "react-icons/bs";

import data from "../resources/goodreads_library_export.csv";
import { favourites } from "../utils/favourites";
import { reviews } from "../utils/reviews";

import Header from "../components/molecules/Header";
import LibraryBook from "../components/molecules/LibraryBook";
import FavouriteBook from "../components/molecules/FavouriteBook";
import ReviewBook from "../components/molecules/ReviewBook";

const read = require("../resources/books thumbnails/example-read.png");
const unread = require("../resources/books thumbnails/example-unread.png");
const nonfiction = require("../resources/books thumbnails/nonfiction.png");
const fiction = require("../resources/books thumbnails/fiction.png");
const poetry = require("../resources/books thumbnails/poetry.png");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "25px",
    width: "90%",
    height: "80%",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "0px 2px 10px 5px rgba(193, 193, 193, 0.5)",
    border: "1px solid rgba(128, 128, 128, 0.168)",
    padding: "0",
    transition: "top 1s",
  },
};
Modal.setAppElement(document.getElementById("root"));

const Books = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  const [books, setBooks] = useState();
  const [displayBooks, setDisplayBooks] = useState();
  const [openedReview, setOpenedReview] = useState(null);
  const [filters, setFilters] = useState([]);

  const toggleFilter = (filter) => {
    filters?.some((f) => f === filter)
      ? setFilters(filters.filter((item) => item !== filter))
      : setFilters([...filters, filter]);
  };

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

            let shelves = entry["Bookshelves"]?.split(" ");

            if (shelves?.find((g) => g === "fiction")) {
              entry["Genre"] = "fiction";
            }

            if (shelves?.find((g) => g === "poetry")) {
              entry["Genre"] = "poetry";
            }

            if (shelves?.find((g) => g === "non-fiction")) {
              entry["Genre"] = "non-fiction";
            }

            return entry;
          });

          let books = data.sort((a, b) => b["Date Added"] - a["Date Added"]);
          setBooks(books);
          setDisplayBooks(books);
        },
      });
    };
    parceCSV();
    console.log(books);

    return () => {
      // Cleanup function to clear data
      setBooks([]);
    };

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let db = [];

    if (filters.includes("read") || filters.includes("to-read")) {
      db = books?.filter((b) => filters.includes(b["Exclusive Shelf"]));
    } else {
      db = structuredClone(books);
    }

    if (
      filters.includes("poetry") ||
      filters.includes("fiction") ||
      filters.includes("non-fiction")
    ) {
      db = db?.filter((b) => filters.includes(b["Genre"]));
    }

    db?.sort((a, b) => b["Date Added"] - a["Date Added"]);

    setDisplayBooks(db);

    console.log(displayBooks);

    /* return () => {
      setDisplayBooks([]);
    };*/

    // eslint-disable-next-line
  }, [filters]);

  return (
    <>
      <Header></Header>
      <div className="page">
        <div className="books-banner">
          <h1 className="books-page-title">Books</h1>
        </div>

        <h1 className="books-page-subtitle">Favourites</h1>
        <div className="content-container" id="favourite-books">
          {favourites?.map((fav_data, index) => (
            <FavouriteBook key={index} data={fav_data}></FavouriteBook>
          ))}
        </div>

        <h1 className="books-page-subtitle">Reviews</h1>
        <div className="content-container" id="review-books">
          {reviews?.map((rev_data, index) => (
            <ReviewBook
              key={index}
              data={rev_data}
              onClick={(e) => {
                openModal();
              }}
              setOpened={setOpenedReview}
            ></ReviewBook>
          ))}
        </div>

        <h1 className="books-page-subtitle">Library</h1>
        <div className="library-legend">
          <div className="legend-group">
            {/*<h1>Status</h1>*/}
            <div className="legend-element">
              <img className="img" src={unread} alt="book cover"></img>
              <p>To-Read</p>
            </div>
            <div className="legend-element">
              <img className="img" src={read} alt="book cover"></img>
              <p>Read</p>
            </div>
          </div>
          <h1>+</h1>
          <div className="legend-group">
            {/*<h1>Genre</h1>*/}

            <div className="legend-element">
              <img className="img" src={fiction} alt="book cover"></img>
              <p>Fiction</p>
            </div>
            <div className="legend-element">
              <img className="img" src={nonfiction} alt="book cover"></img>
              <p>Non-Fiction</p>
            </div>
            <div className="legend-element">
              <img className="img" src={poetry} alt="book cover"></img>
              <p>Poetry</p>
            </div>
          </div>
        </div>
        <div className="library-filters">
          <label className="check-container">
            To-Read
            <input
              type="checkbox"
              onClick={(e) => toggleFilter("to-read")}
            ></input>
            <span className="checkmark"></span>
          </label>
          <label className="check-container">
            Read
            <input
              type="checkbox"
              onClick={(e) => toggleFilter("read")}
            ></input>
            <span className="checkmark"></span>
          </label>
          <label className="check-container">
            Fiction
            <input
              type="checkbox"
              onClick={(e) => toggleFilter("fiction")}
            ></input>
            <span className="checkmark"></span>
          </label>
          <label className="check-container">
            Non-Fiction
            <input
              type="checkbox"
              onClick={(e) => toggleFilter("non-fiction")}
            ></input>
            <span className="checkmark"></span>
          </label>
          <label className="check-container">
            Poetry
            <input
              type="checkbox"
              onClick={(e) => toggleFilter("poetry")}
            ></input>
            <span className="checkmark"></span>
          </label>
          {/*<input type="text" placeholder="Search"></input>*/}
        </div>
        <p id="results">
          {displayBooks?.length > 0
            ? displayBooks?.length + " books"
            : "0 results"}
        </p>
        <div className="content-container" id="library-books">
          {displayBooks?.map((b, index) => (
            <LibraryBook
              key={index}
              data={{
                title: b["Title"],
                author: b["Author"],
                date_read: b["Date Read"],
                date_added: b["Date Added"],
                rating: b["My Rating"],
                pages: b["Number of Pages"],
                shelf: b["Exclusive Shelf"],
                genre: b["Genre"],
              }}
            ></LibraryBook>
          ))}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Modal"
        >
          <div className="modal-review">
            <div id="modal-cover">
              <div onClick={closeModal}>
                <IconContext.Provider
                  value={{
                    className: "close-modal",
                  }}
                >
                  <BsXLg />
                </IconContext.Provider>
              </div>
              <img
                className="thumbnail"
                alt=""
                src={openedReview?.thumbnail}
              ></img>
              <img className="cover" alt="" src={openedReview?.cover}></img>
              <div className="about-book">
                <h1>{openedReview?.title}</h1>

                <h2 id="rev-author">
                  <IconContext.Provider
                    value={{
                      className: "small-pencil",
                    }}
                  >
                    <BsPen />
                  </IconContext.Provider>
                  {openedReview?.author}
                </h2>

                {openedReview?.rating > 0 ? (
                  <h2>
                    {Array(openedReview?.rating)
                      .fill(0)
                      .map(() => "★")}
                  </h2>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div
              id="review-content"
              dangerouslySetInnerHTML={{ __html: openedReview?.review }}
            >
              {}
            </div>
          </div>
        </Modal>

        {/*
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
            </div>*/}
      </div>
    </>
  );
};

export default Books;
