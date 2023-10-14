import React from "react";

const reWriteData = (data) => {
  let chart_data = data.dataset.data;
  let total = 0;
  chart_data.map((d) => (total = total + d));

  let new_ = [0];
  for (let i = 0; i < chart_data.length; i++) {
    new_.push(Math.round((chart_data[i] * 360) / total));
  }
  new_.sort((a, b) => a - b);
  new_.push(360);

  for (let i = 1; i <= chart_data.length; i++) {
    new_[i] = new_[i - 1] + new_[i];
  }
  new_ = new_.slice(0, -1);
  return new_;
};

const DonutChart = ({ data, animation }) => {
  const chart_data = reWriteData(data);

  let conic_gradient = "conic-gradient(";

  for (let i = 0; i < data.labels.length; i++) {
    conic_gradient =
      conic_gradient +
      data.dataset.backgroundColor[i] +
      " " +
      chart_data[i] +
      "deg" +
      " " +
      chart_data[i + 1] +
      (i !== data.labels.length - 1 ? "deg, " : "deg");
  }
  conic_gradient = conic_gradient + ")";

  return (
    <div className="pie-container">
      <div
        className={"donut " + animation}
        style={{
          background: conic_gradient,
        }}
      >
        <div
          className="inner-circle"
          style={{ backgroundColor: data.dataset.innerColor }}
        ></div>
      </div>
      <div id="legend">
        {data.labels.map((label, index) => (
          <p
            key={index}
            style={{
              color: data.dataset.labelColor[index],
            }}
          >
            {label + " · " + data.dataset.data[index]}
          </p>
        ))}
      </div>
    </div>
  );
};
export default DonutChart;
