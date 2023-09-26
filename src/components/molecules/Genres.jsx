import React, { useEffect, useState, useRef } from "react";

const Genres = ({ data }) => {
  const books_of_the_year = data.books.filter((b) => b.title !== "");

  // create a list of all the genres and the number of book of the specified genre
  const genres = [];
  books_of_the_year.map((b) => {
    b.genres.map((g) => {
      genres.find((item) => item.name === g)
        ? (genres.find((item) => item.name === g).number =
            genres.find((item) => item.name === g).number + 1)
        : genres.push({ name: g, number: 1, list: [] });
    });
  });

  // add to the genres list the titles of the books of a certain genre
  books_of_the_year.map((b) => {
    b.genres.map((g) => {
      genres.find((item) => item.name === g).list.push(b.title);
    });
  });

  // sort the genres list by the number of books of a certain genre
  genres.sort((a, b) => b.number - a.number);

  //separate the 3 main genres from the rest
  const meta_genres = [
    genres.find((g) => g.name === "Fiction"),
    genres.find((g) => g.name === "Non-Fiction"),
    genres.find((g) => g.name === "Poetry"),
  ];

  const diff_genres = genres.filter(
    (g) => !["Fiction", "Non-Fiction", "Poetry"].includes(g.name)
  );

  const [titles, setTitles] = useState([]);

  const showTitles = (genre) => {
    setTitles(genres.find((g) => g.name === genre).list);
  };

  //-----------------
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  //-----------------

  return data.type === "meta" ? (
    <div className="meta-genres">
      <div id="pipes">
        <div className="genre" id="fiction">
          <h2>Fiction</h2>
          <div
            className="pipe"
            data-number={meta_genres[0].number}
            style={{
              width:
                windowSize.current[0] >= 840
                  ? meta_genres[0].number + "rem"
                  : (meta_genres[0].number * 60) / 100 + "rem",
            }}
          ></div>
          <h2>{meta_genres[0].number}</h2>
        </div>
        <div className="genre" id="non-fiction">
          <h2>Non-Fiction</h2>
          <div
            className="pipe"
            style={{
              width:
                windowSize.current[0] >= 840
                  ? meta_genres[1].number + "rem"
                  : (meta_genres[1].number * 60) / 100 + "rem",
            }}
          ></div>
          <h2>{meta_genres[1].number}</h2>
        </div>

        <div className="genre" id="poetry">
          <h2>Poetry</h2>
          <div
            className="pipe"
            style={{
              width:
                windowSize.current[0] >= 840
                  ? meta_genres[2].number + "rem"
                  : (meta_genres[2].number * 60) / 100 + "rem",
            }}
          ></div>
          <h2>{meta_genres[2].number}</h2>
        </div>
      </div>
    </div>
  ) : (
    <div className="differential-genres">
      <div id="dif-genres">
        {diff_genres
          .filter((g) => g.number > 2)
          .map((g, index) => (
            <div className="genre-line" key={index}>
              <div
                className="line"
                style={{ width: g.number + 0 + "rem" }}
              ></div>
              <div className="g-name">{g.name}</div>
            </div>
          ))}
      </div>
    </div>
  );

  /*<div className="genre-line">
            <div className="g-name">Other genres</div>
            <div className="line" style={{ width: 19 + "rem" }}>
              {diff_genres
                .filter((g) => g.number <= 2)
                .map((g) => (
                  <p>{g.name}, </p>
                ))}
            </div>
          </div>*/

  /*<div className="all-genres">
        <h2>Titles</h2>
        <div className="g-labels">
          {genres.map((g) => (
            <p onClick={(e) => showTitles(g.name)}>{g.name}</p>
          ))}
        </div>
        <div className="g-labels" id="two">
          {titles.map((t) => (
            <p>{t}</p>
          ))}
        </div>
          </div>*/
};
export default Genres;
