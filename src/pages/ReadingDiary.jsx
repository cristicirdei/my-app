import React, { useState, useEffect } from "react";

import Header from "../components/molecules/Header";

//import { books } from "../utils/books";
import { books } from "../utils/diary";
import DiaryBook from "../components/molecules/DiaryBook";

import { IconContext } from "react-icons";
import { FaGoodreads, FaBook } from "react-icons/fa";

const ReadingDiary = () => {
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
  //const month_lengths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const get_day_of_year = (now) => {
    let start = new Date(now.getFullYear(), 0, 0);
    let diff =
      now -
      start +
      (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    return day;
  };

  const [calendarData, setCalendarData] = useState(Array(366).fill([0, 0]));
  useEffect(() => {
    const get_data = () => {
      let data = Array(366).fill([0, 0]);
      for (let i = 0; i < books.length; i++) {
        let type = books[i].diary[0].type;
        for (let j = 1; j < books[i].diary.length; j++) {
          let entry_day = get_day_of_year(new Date(books[i].diary[j].date));
          let day_diff =
            parseInt(books[i].diary[j].progress) -
            parseInt(books[i].diary[j - 1].progress) +
            1;

          if (type === "page") {
            data[entry_day - 1] = [
              data[entry_day - 1][0] + 1,
              data[entry_day - 1][1] + day_diff,
            ];
          } else {
            let day_prog = parseInt(
              (day_diff / 100) * parseInt(books[i].length)
            );
            data[entry_day - 1] = [
              data[entry_day - 1][0] + 1,
              data[entry_day - 1][1] + day_prog,
            ];
          }
        }
      }
      setCalendarData(data);
      console.log(data);
    };
    get_data();
    //console.log(calendarData);
    return () => {
      // Cleanup function to clear data
      setCalendarData(Array(366).fill([0, 0]));
    };

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header></Header>
      <div className="page">
        <div className="books-banner diary-banner">
          <h1 className="books-page-title">Reading Diary</h1>
          <div className="banner-links">
            <a className="banner-link" href="/books" rel="noreferrer">
              <p className="link-name">Books</p>
              <IconContext.Provider
                value={{
                  className: "icon",
                }}
              >
                <FaBook />
              </IconContext.Provider>
            </a>
            <a
              className="banner-link"
              href="https://goodreads.com/user/show/150642989"
              rel="noreferrer"
            >
              <p className="link-name">Goodreads</p>
              <IconContext.Provider
                value={{
                  className: "icon",
                }}
              >
                <FaGoodreads />
              </IconContext.Provider>
            </a>
          </div>
        </div>

        <h1 className="books-page-subtitle">Books</h1>

        <div className="content-container diary-container">
          {books.map((data, index) => (
            <DiaryBook data={{ book: data }} key={index}></DiaryBook>
          ))}
        </div>

        <h1 className="books-page-subtitle">Calendar</h1>
        <div className="calendar-container">
          <div className="calendar-head">
            <p></p>
            {months.map((m, index) => (
              <p key={index}>{m}</p>
            ))}
          </div>

          <div className="calendar-month">
            <div className="days">
              <p>Mon</p>
              <p>Wed</p>
              <p>Fri</p>
              <p>Sun</p>
            </div>
            {calendarData?.map((x, index) => (
              <div
                className={
                  x[1] === 0
                    ? "calendar-day level-one"
                    : x[1] < 10
                    ? "calendar-day level-two"
                    : x[1] > 10 && x[1] <= 25
                    ? "calendar-day level-three"
                    : x[1] > 25 && x[1] <= 50
                    ? "calendar-day level-four"
                    : x[1] > 50
                    ? "calendar-day level-five"
                    : "calendar-day"
                }
              ></div>
            ))}
          </div>
          <div className="calendar-month legend">
            <p>pages read</p> <div className="calendar-day level-one"></div>
            <p>0</p>
            <div className="calendar-day level-two"></div>
            <p>0-10</p>
            <div className="calendar-day level-three"></div>
            <p>10-25</p>
            <div className="calendar-day level-four"></div>
            <p>25-50</p>
            <div className="calendar-day level-five"></div>
            <p>50+</p>
          </div>
        </div>
        <div id="movies"></div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default ReadingDiary;
