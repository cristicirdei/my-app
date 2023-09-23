import React from "react";

const Impression = ({ type }) => {
  const text =
    type === "loved"
      ? "❤️ Loved"
      : type === "liked"
      ? "👍 Liked"
      : type === "disliked"
      ? "👎 Disliked"
      : "";

  return (
    <div className={"impression " + type}>
      <p>{text}</p>
    </div>
  );
};
export default Impression;
