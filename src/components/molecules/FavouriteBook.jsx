import React from "react";

const FavouriteBook = ({ data }) => {
  return (
    <div className="favourite-book">
            <img
              className="img"
              src={data.cover}
              alt="book cover"
            ></img>
            <div className="about-book">
              <div>
                <h1>{data.title}</h1>
                <h2>{data.author}</h2>
              </div>
              <div>
                <h3>{data.genre}</h3>
                <h4>{data.read}</h4>
              </div>
            </div>
          </div>
  );
};
export default FavouriteBook;
