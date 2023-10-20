import React from "react";
import Sticker from "./Sticker";

import star from "../../resources/star.svg";
import star_filled from "../../resources/star-filled.svg";
import close from "../../resources/close.svg";

import book from "../../resources/book.svg";
import ebook from "../../resources/tablet.svg";
import Label from "./Label";
import Impression from "./Impression";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BookView = ({ data }) => {
  return (
    <div className="book-view-container">
      <div className="book-part-1">
        <div id="cover">
          <img
            src={require(`../../resources/book covers/` + data.book.cover)}
            alt=""
          ></img>
          <div className="shadow"></div>
          <div className="light"></div>
          <div className="light-2"></div>
          <div className="light-reverse"></div>
          <div className="shadow-2"></div>
          <div className="light-3"></div>
          <div className="light-comp"></div>
          <div className="mega-shadow"></div>
          <div className="mega-light"></div>
        </div>
        <div className="details">
          <h1>{data.book.title}</h1>
          {data.book.subtitle !== "" ? <h2>{data.book.subtitle}</h2> : ""}
          <h3>
            {data.book.authors.map((a, index) => (index > 0 ? ", " + a : a))}
          </h3>
          <h4>{data.book.description}</h4>
          <div className="info">
            <div>
              <p>Released</p>
              <h5>{new Date(Date.parse(data.book.released)).getFullYear()}</h5>
              <p>
                {new Date(Date.parse(data.book.released)).getDate() +
                  " " +
                  months[new Date(Date.parse(data.book.released)).getMonth()]}
              </p>
            </div>
            <div>
              <p>Language</p>
              <h5 className="language">
                {data.book.language.slice(0, 2).toUpperCase()}
              </h5>
              <p>{data.book.language}</p>
            </div>
            <div>
              <p>Length</p>
              <h5>{data.book.length}</h5>
              <p>Pages</p>
            </div>

            <div>
              <p>Format</p>
              {data.book.medium === "eBook" ? (
                <img src={ebook} className="details-icon" alt=""></img>
              ) : (
                <img src={book} className="details-icon" alt=""></img>
              )}

              <p>{data.book.medium}</p>
            </div>
          </div>
          <div className="genres">
            <h4>Genres: </h4>
            {data.book.genres.map((g) => (
              <Label type={g} />
            ))}
          </div>
        </div>
      </div>
      <div className="book-part-2">
        {data.book.honour || data.book.read.length > 1 ? (
          <div className="stickers-zone">
            {data.book.honour.length
              ? data.book.honour.map((h) => <Sticker type={h}></Sticker>)
              : ""}
            {data.book.read.length > 1 ? (
              <Sticker type="rr" data={data.book.read.length}></Sticker>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}

        <h1>Read</h1>
        <p>
          <span>Started: </span>
          {new Date(Date.parse(data.book.read.slice(-1)[0].start)).getDate() +
            " " +
            months[
              new Date(Date.parse(data.book.read.slice(-1)[0].start)).getMonth()
            ] +
            " " +
            new Date(
              Date.parse(data.book.read.slice(-1)[0].start)
            ).getFullYear()}
        </p>
        <p>
          <span>Finished: </span>{" "}
          {new Date(Date.parse(data.book.read.slice(-1)[0].end)).getDate() +
            " " +
            months[
              new Date(Date.parse(data.book.read.slice(-1)[0].end)).getMonth()
            ] +
            " " +
            new Date(Date.parse(data.book.read.slice(-1)[0].end)).getFullYear()}
        </p>
        <h1>Rating</h1>
        <div>
          {Array(data.book.rating)
            .fill(0)
            .map(() => (
              <img src={star_filled} className="star" alt="" />
            ))}
          {Array(5 - data.book.rating)
            .fill(0)
            .map(() => (
              <img src={star} className="star" alt="" />
            ))}
        </div>

        <h1>Review</h1>
        <p className="review">
          {data.book.review !== "" ? data.book.review : "No review yet"}
        </p>
        <h1>Impressions</h1>
        {data.book.impressions.map((i) => (
          <Impression type={i.toLowerCase()} />
        ))}
      </div>
      <div className="close">
        <img src={close} onClick={(e) => data.on_close()} alt="" />
      </div>
    </div>
  );
};
export default BookView;
