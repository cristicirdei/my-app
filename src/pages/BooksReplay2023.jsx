import React, { useState, useEffect } from "react";
import "../styles/BooksReplay.scss";

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
  getGenresPerMonth,
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

  const [data, setData] = useState({
    totalPages: 0,
    booksPerMonth: Array(12).fill(0),
    pagesPerMonth: Array(12).fill(0),
    genresPerMonth: Array(12)
      .fill(0)
      .map(() => Array(3).fill(0)),
  });
  useEffect(() => {
    setData({
      totalPages: getTotalPagesRead(books),
      booksPerMonth: getBooksPerMonth(books),
      pagesPerMonth: getPagesPerMonth(books),
      genresPerMonth: getGenresPerMonth(books),
    });
    return () => {
      // Cleanup function to clear data
      setData([]);
    };
  }, []);

  useEffect(() => {
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

    return () => {
      // Cleanup event listner
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div className="dark col-12">
      <h1 className="replay-page-title one">
        Reading Wrap-Up <br></br> '23
      </h1>

      <div className="about ">
        <h1>Year in Review</h1>
        <p>
          Another year has passed and in the meantime I have read a few books.
        </p>

        <h2>More Real Than Reality Itself</h2>
        <p>
          Of the many great creations of humanity, I hold literary fiction to a
          place of honour. Our ability to create whole new worlds and the
          intimate relationships between humans and stories will never cease to
          amaze me. Although this year’s selection of fiction was feeble, I
          still managed to find a few titles that I revelled in reading.
          Probably my favourite has been{" "}
          <span>Cloud Cuckoo Land • Anthony Doerr</span>. Other books I enjoyed
          include <span>At Night All Blood is Black • David Diop</span>,{" "}
          <span>The Song of Achilles • Madeline Miller</span>,{" "}
          <span>Of Mice and Men • John Steinbeck</span> and, on a different
          level of experience, <span>Anxious People • Fredrik Backman</span>.
        </p>

        <h2>Making Sense of It All</h2>
        <p>
          This year as well, I carried on in my pursuit of learning how to feel
          and be. Of how to make sense of <i>existence</i> and talk about it. In
          this endeavour I don’t know a better tool than poetry. Of the people
          who have graced my readings with their mastery of words are{" "}
          <span>Ocean Vuong</span>, <span>Jeffrey McDaniel</span>,{" "}
          <span>Pádraig O’Tuama</span> and not lastly <span>Kahlil Gibran</span>
          .
        </p>

        <h2>Getting Hit in the Face by Reality</h2>
        <p>
          <i>Pandora’s box has been opened. </i>Non-fiction has taken a
          significant amount of my reading time this year. If up until recently
          I have selected my non-fiction books according to my interests and
          subjects that I found utterly fascinating, like anthropology,
          astronomy, linguistics or ancient literature, this year I have, for no
          particular reason, focused on politics. In my unending journey of
          learning I touched subjects as race:{" "}
          <span>The Fire Next Time • James Baldwin</span>,{" "}
          <span>The New Age of Empire • Kehinde Andrews</span>; feminism:{" "}
          <span>The Will to Change • bell hooks</span>,{" "}
          <span>Feminism Is for Everybody • bell hooks</span>; the Palestinian
          Struggle: <span>Gaza in Crisis • Noam Chomsky & Ilan Pappé</span>
          {", "}
          <span>On Palestine • Noam Chomsky & Ilan Pappé</span>; political
          ideology: <span>The Principles of Communism • Friedrich Engels</span>,{" "}
          <span>How to Spot a Fascist • Umberto Eco</span>,{" "}
          <span>Profit Over People • Noam Chomsky</span>. While reading these
          books I have also extended my <i>to-be-read</i> list so in consequence
          I can only expect that my readings on politics and social issues will
          increase.
        </p>

        <h2>Wrapping It Up</h2>
        <p>
          In terms of books, 2023 has been a good year. I delighted in reading,
          I have learned and matured. I have gained insights into how to make
          the most out of my time spent reading and I can’t wait to employ them
          in the next year.
        </p>
        <br></br>
        <p>Too little time. Too many books to read. To 2024.</p>
      </div>

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

      {
        <ul className="replay">
          <li className="orange reveal">
            <h1>Goal</h1>
            <div className="goal one">
              <h2>30</h2>
              <h2>{">"}</h2>
              <h2>40</h2>
            </div>
            <p className="upper">10 books read above the set goal</p>
          </li>

          <li className="white reveal">
            <h1 className="pink-text">Pages Read</h1>
            <h2 className="total-pages black-text">
              <span>{parseInt(data?.totalPages / 100)}</span>
              <span>{data?.totalPages % 100}</span>
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
            <h1 className="black-text">Genres Over the Year</h1>
            <div className="g-y">
              {data?.genresPerMonth.map((g, index) => (
                <div className="g-m">
                  {g.map((s, index) => (
                    <div
                      className="g-seg"
                      style={{ height: s + (5 * s) / 10 + "rem" }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
            <p className="legend">
              <span>Fiction</span>
              <span>Poetry</span>
              <span>Non-Fiction</span>
            </p>
          </li>

          <li className="no-background reveal">
            <h1 className="white-text">Pages</h1>
            <MoreStats data={{ books: books, type: "pages" }}></MoreStats>
          </li>

          <li className="orange reveal">
            <h1 className="black-text">Formats</h1>
            <MoreStats data={{ books: books, type: "formats" }}></MoreStats>
          </li>

          <li className="white reveal">
            <h1 className="orange-text">Languages</h1>
            <MoreStats data={{ books: books, type: "languages" }}></MoreStats>
          </li>

          <li className="no-background shorten reveal">
            <h1>Books Over the Year</h1>
            <div className="content">
              <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] }]}
                series={[
                  {
                    data: data?.booksPerMonth,
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
                    data: data?.pagesPerMonth,
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
        <ol className="brp">
          <li style={{ backgroundColor: "#FD3C00", color: "#2B292A" }}>
            <h1>
              First Book
              <span className="r-ent white-text"> The Giving Tree</span>
            </h1>
            <h2>Shel Silverstein</h2>
          </li>

          <li style={{ backgroundColor: "#FE318F", color: "#2B292A" }}>
            <h1>
              Last Book
              <span className="l-ent white-text"> A Christmas Carol</span>
            </h1>
            <h2>Charles Dickens</h2>
          </li>

          <li>
            <p className="pink-text">7 pages</p>
            <h1>
              Shortest Book{" "}
              <span className="r-ent pink-text">Why Socialism</span>
            </h1>
            <h2>Albert Einstein</h2>
          </li>

          <li>
            <p className="orange-text">608 pages</p>
            <h1>
              Longest Book{" "}
              <span className="l-ent orange-text">Ereticii Dunei</span>
            </h1>
            <h2>Frank Herbert</h2>
          </li>

          <li>
            <h1>
              Favourite Book
              <span className="r-ent orange-text"> Cloud Cuckoo Land</span>
            </h1>
            <h2>Anthony Doerr</h2>
          </li>

          <li>
            <h1>
              Least Favourite Book
              <span className="l-ent pink-text">
                {" "}
                A Psalm for the Wild-Built
              </span>
            </h1>
            <h2>Becky Chambers</h2>
          </li>
        </ol>
      }

      <h1 className="replay-page-title one" style={{ marginTop: "5rem" }}>
        See you in 2024
      </h1>
    </div>
  );
};

export default BooksReplay2023;
