import React, { useState, useEffect } from "react";

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

const BooksReplay2023 = () => {
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

  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="dark col-12">
      <h1 className="replay-page-title one">Books Rewind '23</h1>

      <p className="about two">This year I've read some books.</p>

      {
        <div className={"year-books "}>
          <h1 className="title one">Books of 2023</h1>
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
      }
      {
        <ul>
          <li className="orange reveal">
            <h1>Goal</h1>
            <div className="goal one">
              <h2>30</h2>
              <h2>{">"}</h2>
              <h2>33</h2>
            </div>
            <p className="upper">3 books above set goal</p>
          </li>

          <li className="white reveal">
            <h1 className="pink-text">Pages Read</h1>
            <h2 className="total-pages black-text">
              <span>{parseInt(getTotalPagesRead(books) / 100)}</span>
              <span>{getTotalPagesRead(books) % 100}</span>
            </h2>
          </li>

          <li className="white reveal">
            <h1>Timeline</h1>
            <Timeline data={{ books: books }}></Timeline>
          </li>

          <li className="black reveal">
            <h1 className="pink-text">Genres</h1>
            <Genres data={{ books: books, type: "meta" }}></Genres>
          </li>

          <li className="pink reveal">
            <h1 className="black-text">Sub-Genres</h1>
            <Genres data={{ books: books, type: "sub" }}></Genres>
          </li>

          <li className="white reveal">
            <h1 className="orange-text">Languages</h1>
            <MoreStats data={{ books: books, type: "languages" }}></MoreStats>
          </li>

          <li className="no-background reveal">
            <h1 className="white-text">Pages</h1>
            <MoreStats data={{ books: books, type: "pages" }}></MoreStats>
          </li>

          <li className="orange reveal">
            <h1 className="black-text">Formats</h1>
            <MoreStats data={{ books: books, type: "formats" }}></MoreStats>
          </li>

          <li className="no-background shorten reveal">
            <h1>Books Over the Year</h1>
            <div className="content">
              <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
                series={[
                  {
                    data: getBooksPerMonth(books),
                  },
                ]}
                colors={["#fe318f", "#fd3c00"]}
                width={360}
                height={300}
                sx={{
                  "& .MuiLineElement-root": {
                    stroke: "#e5e4e2",
                  },

                  "& .MuiChartsAxis-tick": {
                    stroke: "#fe318f",
                  },
                  "& .MuiChartsAxis-line": {
                    stroke: "#fe318f",
                  },
                  "& .MuiChartsAxis-tickLabel": {
                    stroke: "#fe318f",
                  },
                }}
              />
            </div>
          </li>

          <li className="no-background shorten reveal">
            <h1 className="orange-text">Pages Over the Year</h1>
            <div className="content">
              <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
                series={[
                  {
                    data: getPagesPerMonth(books),
                  },
                ]}
                colors={["#fd3c00"]}
                width={360}
                height={300}
                sx={{
                  "& .MuiLineElement-root": {
                    stroke: "#fd3c00",
                  },

                  "& .MuiChartsAxis-tick": {
                    stroke: "#e5e4e2",
                  },
                  "& .MuiChartsAxis-line": {
                    stroke: "#e5e4e2",
                  },
                  "& .MuiChartsAxis-tickLabel": {
                    stroke: "#e5e4e2",
                  },
                }}
              />
            </div>
          </li>
        </ul>
      }

      {
        <ol>
          <li>
            <p className="pink-text">64 pages</p>
            <h1>
              Shortest Book <span className="pink-text">The Giving Tree</span>
            </h1>
            <h2>Shel Silverstein</h2>
          </li>

          <li>
            <p className="orange-text">555 pages</p>
            <h1>
              Longest Book{" "}
              <span className="orange-text">The Complete Stories</span>
            </h1>
            <h2>Flannery O'Connor</h2>
          </li>

          <li>
            <h1>
              Favourite Book
              <span className="orange-text">The New Age of Empire</span>
            </h1>
            <h2>Kehinde Andrews</h2>
          </li>

          <li>
            <h1>
              Least Favourite Book
              <span className="pink-text"> A Psalm for the Wild-Built</span>
            </h1>
            <h2>Becky Chambers</h2>
          </li>
        </ol>
      }
    </div>
  );
};

export default BooksReplay2023;
