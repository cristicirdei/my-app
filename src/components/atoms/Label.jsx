import React from "react";

const Label = ({ type }) => {
  return (
    <div className={"label " + type}>
      <p>{type}</p>
    </div>
  );
};
export default Label;
