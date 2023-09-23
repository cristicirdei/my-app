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

        <div className={openedBook ? "year-books fade" : "year-books "}>
          <h1 className="title">Books of 2023</h1>
          <div className={"container"}>
            <Library
              data={{
                on_click: click_book,
                class: openedBook,
                books: books,
              }}
            ></Library>
            {openedBook ? (
              <BookView
                data={{
                  on_close: click_close,
                  class: openedBook,
                  book: openedBookData,
                }}
              ></BookView>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="stats">
          <div className="modular-content">
            <h2>Goal</h2>
            <div className="goal">
              <h1>30</h1>
              <h1>33</h1>
            </div>
            <p>+3 above set goal</p>
          </div>

          <div className="modular-content">
            <h2>Favourite Book</h2>
            <div className="f-book">
              <div className="favourite-year">
                <img
                  className="img"
                  src={require("../resources/book covers/the-new-age-of-empire.jpg")}
                ></img>
                <div className="shadow"></div>
                <div className="light"></div>
              </div>
              <li>
                <h3>The New Age of Empire</h3> <h2>Kehinde Andrews</h2>
              </li>
            </div>
          </div>

          <div className="modular-content">
            <h2>Least Favourite Book</h2>
            <div className="f-book">
              <div className="favourite-year">
                <img
                  className="img"
                  src={require("../resources/book covers/a-psalm-for-the-wild-built.jpg")}
                ></img>
                <div className="shadow"></div>
                <div className="light"></div>
              </div>
              <li>
                <h3>A Psalm for the Wild-Built</h3> <h2>Becky Chambers</h2>
              </li>
            </div>
          </div>

          <Timeline data={{ books: books }}></Timeline>

          <div className="modular-content smlr">
            <h2>Pages Read</h2>
            <h1 className="total-pages">{getTotalPagesRead(books)}</h1>
          </div>

          <Genres data={{ books: books, type: "meta" }}></Genres>
          <Genres data={{ books: books, type: "sub" }}></Genres>
          <MoreStats data={{ books: books }}></MoreStats>

          <div className="modular-content smlr upper">
            <h2>Shortest Book</h2>
            <div className="f-book">
              <div className="favourite-year">
                <img
                  className="img"
                  src={require("../resources/book covers/the-giving-tree.jpg")}
                ></img>
                <div className="shadow"></div>
                <div className="light"></div>
              </div>
              <li>
                <h3>The Giving Tree</h3> <h2>Shel Silverstein</h2>
                <p>64 pages</p>
              </li>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <h2>Longest Book</h2>
            <div className="f-book">
              <div className="favourite-year">
                <img
                  className="img"
                  src={require("../resources/book covers/the-complete-stories.jpg")}
                ></img>
                <div className="shadow"></div>
                <div className="light"></div>
              </div>
              <li>
                <h3>The Complete Stories</h3> <h2>Flannery O'Connor</h2>
                <p>555 pages</p>
              </li>
            </div>
          </div>

          <div className="modular-content up">
            <h2>Volume of Books Over the Year</h2>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
              series={[
                {
                  data: getBooksPerMonth(books),
                },
              ]}
              width={490}
              height={350}
              sx={{
                "& .MuiLineElement-root": {
                  // strokeDasharray: "10 5",
                  // strokeWidth: 4,
                  stroke: "#6d21d8",
                },

                "& .MuiMarkElement-root": {
                  stroke: "#6d21d8",
                },
                "& .MuiAreaElement-root": {
                  fill: "#6d21d8",
                  slots: "#6d21d8",
                },
              }}
            />
          </div>

          <div className="modular-content smlr up">
            <h2>Smth</h2>
          </div>

          <div className="modular-content up-two">
            <h2>Volume of Pages Over the Year</h2>
            <LineChart
              xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
              series={[
                {
                  curve: "natural",
                  data: getPagesPerMonth(books),
                },
              ]}
              width={494}
              height={350}
              sx={{
                "& .MuiLineElement-root": {
                  stroke: "#b495f7",
                },

                "& .MuiMarkElement-root": {
                  stroke: "#b495f7",
                },
                "& .MuiAreaElement-root": {
                  fill: "#6d21d8",
                  slots: "#6d21d8",
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
