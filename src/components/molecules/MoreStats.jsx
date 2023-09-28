import React from "react";
import DonutChart from "./DonutChart";

const MoreStats = ({ data }) => {
  const books_of_the_year = data.books.filter((b) => b.title !== "");

  const lang = { ro: 0, eng: 0 };
  const form = { print: 0, digital: 0 };
  const pags = { min: 0, avg: 0, max: 0 };
  let languages, formats, pages;

  if (data.type === "languages") {
    books_of_the_year.map((b) =>
      b.language === "Romanian"
        ? (lang.ro = lang.ro + 1)
        : (lang.eng = lang.eng + 1)
    );
    languages = {
      title: "Languages",
      labels: ["English", "Romanian"],
      dataset: {
        label: "nr. of books",
        data: [lang.eng, lang.ro],
        backgroundColor: ["#fd3c00", "#2b292a"],
        innerColor: "#e5e4e2",
        labelColor: ["#2b292a", "#fd3c00"],
        borderWidth: 1,
        weight: 0.2,
        cutout: "65%",
      },
    };
  }

  if (data.type === "formats") {
    books_of_the_year.map((b) =>
      b.medium === "eBook"
        ? (form.digital = form.digital + 1)
        : (form.print = form.print + 1)
    );
    formats = {
      title: "Formats",
      labels: ["Digital", "Print"],
      dataset: {
        label: "nr. of books",
        data: [form.digital, form.print],
        backgroundColor: ["#2b292a", "#e5e4e2"],
        labelColor: ["#e5e4e2", "#2b292a"],
        innerColor: "#fd3c00",
        borderWidth: 1,
        weight: 0.2,
        cutout: "65%",
      },
    };
  }
  if (data.type === "pages") {
    books_of_the_year.map((b) =>
      b.length < 300
        ? (pags.min = pags.min + 1)
        : b.length > 500
        ? (pags.max = pags.max + 1)
        : (pags.avg = pags.avg + 1)
    );
    pages = {
      title: "Pages",
      labels: ["< 300", "300 - 500", "> 500"],
      dataset: {
        label: "nr. of books",
        data: [pags.min, pags.avg, pags.max],
        backgroundColor: ["#fe318f", "#e5e4e2", "#fd3c00"],
        labelColor: ["#fd3c00", "#fe318f", "#e5e4e2"],
        innerColor: "#121212",
        borderWidth: 1,
        weight: 0.2,
        cutout: "65%",
      },
    };
  }

  return data.type === "languages" ? (
    <DonutChart data={languages} animation={".donut-animation-1"}></DonutChart>
  ) : data.type === "formats" ? (
    <DonutChart data={formats}></DonutChart>
  ) : (
    <DonutChart data={pages}></DonutChart>
  );
};
export default MoreStats;
