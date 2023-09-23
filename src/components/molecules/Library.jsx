import React, { useEffect } from "react";
import $ from "jquery";

const Library = ({ data }) => {
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
    $(".month .book:nth-of-type(4n+0)")
      .css("background-color", "rgb(200, 86, 248)")
      .css("width", "0.6rem")
      .css("height", "3rem");

    $(".month .book:nth-of-type(4n+1)")
      .css("background-color", "rgb(178, 76, 222)")
      .css("width", "0.7rem")
      .css("height", "2.8rem");

    $(".month .book:nth-of-type(4n+2)")
      .css("background-color", "rgb(178, 86, 240)")
      .css("width", "0.7rem")
      .css("height", "3.2rem");

    $(".month .book:nth-of-type(4n+3)")
      .css("background-color", "rgb(178, 86, 222)")
      .css("width", "0.6rem")
      .css("height", "3rem");
  });

  const books_per_month = [];
  months.map((month, index) =>
    books_per_month.push({ month: index + 1, books: [] })
  );

  const books_of_the_year = data.books.filter((b) => b.title !== "");
  books_of_the_year.map((book, index) => {
    let mth = new Date(Date.parse(book.read.slice(-1)[0].end)).getMonth();
    books_per_month[mth].books.push(book);
  });

  return (
    <div className={data.class ? "display move-to-side" : "display"}>
      <div className="library">
        {months.map((month, index) => (
          <div className="month" key={index}>
            <p className="tag">{month}</p>
            <div className="books">
              {books_per_month[index].books.map((b, index) => (
                <p
                  key={index}
                  className="book hovertext"
                  onClick={(e) => data.on_click(b)}
                  data-hover={b.title}
                ></p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Library;
