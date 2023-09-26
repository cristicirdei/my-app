import React, { useState, useEffect } from "react";

import Header from "../components/molecules/Header";
import BookView from "../components/atoms/BookView";
import Library from "../components/molecules/Library";

import { books } from "../utils/books";
import Timeline from "../components/molecules/Timeline";
import Genres from "../components/molecules/Genres";
import MoreStats from "../components/molecules/MoreStats";
import {
  getBooksPerMonth,
  getTotalPagesRead,
  getPagesPerMonth,
} from "../utils/utilFunctions";

import { LineChart } from "@mui/x-charts";

const Books = () => {
  const click_book = (book) => {
    setOpenedBook(true);
    setOpenedBookData(book);
  };

  const click_close = () => {
    setOpenedBook(null);
  };

  const [openedBook, setOpenedBook] = useState(null);
  const [openedBookData, setOpenedBookData] = useState(null);

  useEffect(() => {}, [openedBook]);

  return (
    <>
      <Header></Header>

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
              ></img>
              <div className="shadow"></div>
              <div className="light"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
