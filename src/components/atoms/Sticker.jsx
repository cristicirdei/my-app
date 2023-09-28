import React from "react";
import trophy from "../../resources/trophy.svg";
import star from "../../resources/star-filled.svg";
import border_diamond from "../../resources/star-rings-diamond.svg";
import border_gold from "../../resources/star-rings-gold.svg";
import border_ from "../../resources/star-rings.svg";

const Sticker = ({ type, data }) => {
  const title =
    type === "atf"
      ? "All Time Favourite"
      : type === "yf"
      ? "Favourite of the Year"
      : "Re-Read";

  const img_src = type === "atf" ? trophy : type === "yf" ? star : "";
  const border_src =
    type === "atf" ? border_diamond : type === "yf" ? border_gold : border_;

  return (
    <div className={"hovertext sticker " + type} data-hover={title}>
      <img src={border_src} alt=""></img>
      <img src={border_src} alt=""></img>

      {type === "rr" ? data + "X" : <img src={img_src} alt=""></img>}
    </div>
  );
};
export default Sticker;
