import React, { useEffect, useState } from "react";
import DonutChart from "./DonutChart";

const MoreStats = ({ data }) => {
  const books_of_the_year = data.books.filter((b) => b.title !== "");

  const lang = { ro: 0, eng: 0 };
  const form = { print: 0, digital: 0 };
  const pags = { min: 0, avg: 0, max: 0 };

  books_of_the_year.map((b) =>
    b.language === "Romanian"
      ? (lang.ro = lang.ro + 1)
      : (lang.eng = lang.eng + 1)
  );

  books_of_the_year.map((b) =>
    b.medium === "eBook"
      ? (form.digital = form.digital + 1)
      : (form.print = form.print + 1)
  );

  books_of_the_year.map((b) =>
    b.length < 300
      ? (pags.min = pags.min + 1)
      : b.length > 500
      ? (pags.max = pags.max + 1)
      : (pags.avg = pags.avg + 1)
  );

  const languages = {
    title: "Languages",
    labels: ["English", "Romanian"],
    dataset: {
      label: "nr. of books",
      data: [lang.eng, lang.ro],
      backgroundColor: ["#6e22e1", "#b495f7"],
      labelColor: ["#b495f7", "#6e22e1"],
      borderWidth: 1,
      weight: 0.2,
      cutout: "65%",
    },
  };

  const formats = {
    title: "Formats",
    labels: ["Digital", "Print"],
    dataset: {
      label: "nr. of books",
      data: [form.digital, form.print],
      backgroundColor: ["rgb(110, 34, 225)", "rgb(180, 149, 247)"],
      labelColor: ["#b495f7", "#6e22e1"],
      borderWidth: 1,
      weight: 0.2,
      cutout: "65%",
    },
  };

  const pages = {
    title: "Pages",
    labels: ["< 300", "300 - 500", "> 500"],
    dataset: {
      label: "nr. of books",
      data: [pags.min, pags.avg, pags.max],
      backgroundColor: [
        "rgb(110, 34, 225)",
        "rgb(93, 6, 144)",
        "rgb(180, 149, 247)",
      ],
      labelColor: [
        "rgb(180, 149, 247)",
        "rgb(110, 34, 225)",
        "rgb(93, 6, 144)",
      ],
      borderWidth: 1,
      weight: 0.2,
      cutout: "65%",
    },
  };

  return (
    <div className="stats-plus">
      <DonutChart data={languages}></DonutChart>
      <DonutChart data={formats}></DonutChart>
      <DonutChart data={pages}></DonutChart>
    </div>
  );
};
export default MoreStats;
