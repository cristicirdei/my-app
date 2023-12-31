import React from "react";

const Impression = ({ type }) => {
  const text =
    type === "loved"
      ? "❤️ Loved"
      : type === "liked"
      ? "👍 Liked"
      : type === "disliked"
      ? "👎 Disliked"
      : type === "mindblowing"
      ? "🤯 Mind-blowing"
      : type === "insightful"
      ? "💡 Insightful"
      : type === "cute"
      ? "💗 Cute"
      : type === "disappointed"
      ? "🫠 Disappointed"
      : "";

  return (
    <div className={"impression " + type}>
      <p>{text}</p>
    </div>
  );
};
export default Impression;
