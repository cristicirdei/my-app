import React from "react";

const ReviewBook = ({ data, onClick, setOpened }) => {
  return (
    <div
      className="review-book"
      onClick={(e) => {
        onClick();
        setOpened(data);
      }}
    >
      <img className="thumbnail" src={data.thumbnail} alt="thumbnail"></img>

      <div className="about-book">
        <h1>{data.title}</h1>
        <h2>{data.author}</h2>
      </div>
    </div>
  );
};
export default ReviewBook;
