import React, { useEffect, useState, useRef } from "react";

const Timeline = ({ data }) => {
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

  Date.prototype.getWeek = function () {
    let date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    let week1 = new Date(date.getFullYear(), 0, 4);
    return (
      1 +
      Math.round(
        ((date.getTime() - week1.getTime()) / 86400000 -
          3 +
          ((week1.getDay() + 6) % 7)) /
          7
      )
    );
  };

  const getWeeks = (book) => {
    let s = new Date(Date.parse(book.read.slice(-1)[0].start)).getWeek();
    let e = new Date(Date.parse(book.read.slice(-1)[0].end)).getWeek();
    if (s > e) {
      s = 0;
    }
    return [s, e];
  };

  const books_of_the_year = data.books.filter((b) => b.title !== "");

  const [showTitles, setShowTitles] = useState(false);
  const windowSize = useRef([window.innerWidth, window.innerHeight]);

  const first_half = [];
  const second_half = [];
  books_of_the_year.map((book) =>
    getWeeks(book)[0] > 24 ? second_half.push(book) : first_half.push(book)
  );

  return windowSize.current[0] >= 840 ? (
    <table className={"timeline"}>
      <thead>
        <tr>
          {months.map((month, index) => (
            <th key={index} colSpan={4}>
              {month}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {books_of_the_year.map((book, index) => (
          <tr key={index}>
            {Array(48)
              .fill(0)
              .map((x, index) => (
                <td
                  key={index}
                  data-title={showTitles ? book.title : ""}
                  className={
                    index + 1 === getWeeks(book)[0] &&
                    index + 1 === getWeeks(book)[1]
                      ? "c-line line"
                      : index + 1 === getWeeks(book)[0]
                      ? "s-line line"
                      : index + 1 === getWeeks(book)[1]
                      ? "e-line line"
                      : index + 1 > getWeeks(book)[0] &&
                        index + 1 < getWeeks(book)[1]
                      ? "line"
                      : ""
                  }
                ></td>
              ))}
          </tr>
        ))}

        <tr>
          <td>
            <p id="show-titles" onClick={(e) => setShowTitles(!showTitles)}>
              Show titles
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  ) : (
    <>
      <table className={"timeline"}>
        <thead>
          <tr>
            {structuredClone(months)
              .splice(0, 6)
              .map((month, index) => (
                <th colSpan={4}>{month}</th>
              ))}
          </tr>
        </thead>

        <tbody>
          {first_half.map((book, index) => (
            <tr
              className={
                getWeeks(book)[1] > 12 && getWeeks(book)[1] <= 24
                  ? "title-to-left"
                  : ""
              }
            >
              {Array(24)
                .fill(0)
                .map((x, index) => (
                  <td
                    key={index}
                    className={
                      index + 1 === getWeeks(book)[0] &&
                      index + 1 === getWeeks(book)[1]
                        ? "c-line line"
                        : index + 1 === getWeeks(book)[0]
                        ? "s-line line"
                        : index + 1 === getWeeks(book)[1]
                        ? "e-line line"
                        : index + 1 > getWeeks(book)[0] &&
                          index + 1 < getWeeks(book)[1]
                        ? "line"
                        : ""
                    }
                  >
                    <p className="shown-title">
                      {showTitles &&
                      ((index + 2 === getWeeks(book)[0] &&
                        getWeeks(book)[1] > 12 &&
                        getWeeks(book)[1] <= 24) ||
                        (index === getWeeks(book)[1] &&
                          getWeeks(book)[1] <= 12))
                        ? book.title
                        : ""}
                    </p>
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>

      <table className={"timeline"}>
        <thead>
          <tr>
            {structuredClone(months)
              .splice(6)
              .map((month, index) => (
                <th colSpan={4}>{month}</th>
              ))}
          </tr>
        </thead>

        <tbody>
          {second_half.map((book, index) => (
            <tr
              className={
                getWeeks(book)[1] > 36 && getWeeks(book)[1] <= 48
                  ? "title-to-left"
                  : ""
              }
            >
              {Array(24)
                .fill(0)
                .map((x, index) => (
                  <td
                    key={index}
                    data-title={showTitles ? book.title : ""}
                    className={
                      index + 25 === getWeeks(book)[0] &&
                      index + 25 === getWeeks(book)[1]
                        ? "c-line line sh-tlt-af"
                        : index + 25 === getWeeks(book)[0]
                        ? "s-line line"
                        : index + 25 === getWeeks(book)[1]
                        ? "e-line line sh-tlt-af"
                        : index + 25 > getWeeks(book)[0] &&
                          index + 25 < getWeeks(book)[1]
                        ? "line"
                        : ""
                    }
                  >
                    <p className="shown-title">
                      {showTitles &&
                      ((index + 26 === getWeeks(book)[0] &&
                        getWeeks(book)[1] > 36 &&
                        getWeeks(book)[1] <= 48) ||
                        (index + 24 === getWeeks(book)[1] &&
                          getWeeks(book)[1] <= 36))
                        ? book.title
                        : ""}
                    </p>
                  </td>
                ))}
            </tr>
          ))}

          <tr>
            <td colSpan={48}>
              <p
                id="show-titles"
                style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}
                onClick={(e) => setShowTitles(!showTitles)}
              >
                Show titles
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Timeline;
