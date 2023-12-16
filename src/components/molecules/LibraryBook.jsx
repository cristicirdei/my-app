import React from "react";

const read = require("../../resources/books thumbnails/example-read.png");
const unread = require("../../resources/books thumbnails/example-unread.png");
const nonfiction_read = require("../../resources/books thumbnails/nonfiction-read.png");
const nonfiction_unread = require("../../resources/books thumbnails/nonfiction-unread.png");
const fiction_read = require("../../resources/books thumbnails/fiction-read.png");
const fiction_unread = require("../../resources/books thumbnails/fiction-unread.png");
const poetry_read = require("../../resources/books thumbnails/poetry-read.png");
const poetry_unread = require("../../resources/books thumbnails/poetry-unread.png");

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

const LibraryBook = ({ data }) => {
  let image_src = unread;
  if (data.shelf === "read") {
    //image_src = read;

    data.genre === "fiction"
      ? (image_src = fiction_read)
      : data.genre === "nonfiction"
      ? (image_src = nonfiction_read)
      : data.genre === "poetry"
      ? (image_src = poetry_read)
      : (image_src = read);
  }
  if (data.shelf === "to-read") {
    //image_src = unread;
    data.genre === "fiction"
      ? (image_src = fiction_unread)
      : data.genre === "nonfiction"
      ? (image_src = nonfiction_unread)
      : data.genre === "poetry"
      ? (image_src = poetry_unread)
      : (image_src = unread);
  }

  let status = "";
  data.date_read.getFullYear() > 2000
    ? (status =
        "Read in " +
        months[data.date_read.getMonth()] +
        " " +
        data.date_read.getFullYear())
    : !(data.date_read.getFullYear() > 2000) &&
      data.date_added.getFullYear() > 2000
    ? (status =
        "Added in " +
        months[data.date_added.getMonth()] +
        " " +
        data.date_added.getFullYear())
    : (status = "");

  return (
    <div className="book">
      <img className="img" src={image_src} alt="book cover"></img>
      <div className="about-book">
        <div>
          <h1>{data.title}</h1>
          <h2>{data.author}</h2>
        </div>
        <div>
          {data.rating > 0 ? (
            <h3>
              {Array(data.rating)
                .fill(0)
                .map(() => "★")}
            </h3>
          ) : (
            ""
          )}
          <h4>{status}</h4>
        </div>
      </div>
    </div>
  );
};
export default LibraryBook;
