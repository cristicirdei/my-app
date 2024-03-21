import React, { useState } from "react";

import { IconContext } from "react-icons";
import {
  BsBookHalf,
  BsInfoCircleFill,
  BsPlus,
  BsTranslate,
} from "react-icons/bs";

import { FaFile } from "react-icons/fa6";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getPercentageRead = (data, total) => {
  const type = data[0]?.type;
  const difference = data[data.length - 1]?.progress - data[0]?.progress;

  if (type === "percentage") {
    return difference;
  } else {
    return parseInt((difference * 100) / total);
  }
};

const DiaryBook = ({ data }) => {
  const progress_read = getPercentageRead(data.book.diary, data.book.length);

  const [formData, setFormData] = useState({
    date: null,
    note: null,
    progress: null,
    type: null,
    key: null,
  });

  const [opened, setOpened] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const toggleBar = () => {
    setOpened(!opened);
  };
  const toggleForm = () => {
    setOpenForm(!openForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      formData.date,
      formData.note,
      formData.progress,
      formData.type,
      formData.key
    );
  };

  return (
    <div className="diary-book">
      <div className="intro">
        <div className="binfo">
          <img className="img" src={data.book.cover} alt="book cover"></img>
          <div className="about-book">
            <div>
              <h1>{data.book.title}</h1>
              {data.subtitle !== "" ? <h2>{data.book.subtitle}</h2> : ""}
              <h3>
                {data.book.authors.map((a, index) =>
                  index > 0 ? ", " + a : a
                )}
              </h3>
            </div>
            <div>
              <h3>{}</h3>
              <h4>{}</h4>
            </div>
          </div>
        </div>

        <p className="labels">
          <span>
            <IconContext.Provider
              value={{
                className: "icon yellow-l",
              }}
            >
              <BsBookHalf />
            </IconContext.Provider>{" "}
            {data.book.medium}
          </span>
          <span>
            <IconContext.Provider
              value={{
                className: "icon orange-l",
              }}
            >
              <FaFile />
            </IconContext.Provider>{" "}
            {data.book.length + " pages"}
          </span>
          <span>
            <IconContext.Provider
              value={{
                className: "icon purple-l",
              }}
            >
              <BsTranslate />
            </IconContext.Provider>{" "}
            {data.book.language}
          </span>

          {data.book.genres.map((genre) => (
            <span>{genre}</span>
          ))}
        </p>
        {data.book.description.length ? (
          <p className="motivation">
            <IconContext.Provider
              value={{
                className: "icon",
              }}
            >
              <BsInfoCircleFill />
            </IconContext.Provider>
            {" " + data.book.description}
          </p>
        ) : (
          ""
        )}
      </div>

      <div className="reading-progress">
        <div className="progress-bar">
          <div className="bar">
            <div
              className="progress"
              style={{ width: progress_read + "%" }}
            ></div>
          </div>

          <p>{progress_read}%</p>
        </div>

        <div className={opened ? "opened-progress " : "closed-progress"}>
          <h1 className="extremity">
            Started on{" "}
            <b>
              {new Date(
                Date.parse(data.book.read.slice(-1)[0].start)
              ).getDate() +
                " " +
                months[
                  new Date(
                    Date.parse(data.book.read.slice(-1)[0].start)
                  ).getMonth()
                ] +
                " " +
                new Date(
                  Date.parse(data.book.read.slice(-1)[0].start)
                ).getFullYear()}
            </b>
          </h1>

          <div className="diary">
            {data.book.diary.slice(1).map((entry, index) => (
              <div className="entry" key={index}>
                <div className="p1">
                  <div className="dot"></div>
                  <p>
                    <span>
                      {entry.type === "percentage"
                        ? entry.progress + "%"
                        : "page " + entry.progress}
                    </span>{" "}
                    {new Date(Date.parse(entry.date)).getDate() +
                      " " +
                      months[new Date(Date.parse(entry.date)).getMonth()]}
                  </p>
                </div>
                <div className="p2">
                  <p>{entry.note}</p>
                </div>
              </div>
            ))}
          </div>

          {Date.parse(data.book.read.slice(-1)[0].end) ? (
            <h1 className="extremity">
              Finished on{" "}
              <b>
                {new Date(
                  Date.parse(data.book.read.slice(-1)[0].end)
                ).getDate() +
                  " " +
                  months[
                    new Date(
                      Date.parse(data.book.read.slice(-1)[0].end)
                    ).getMonth()
                  ] +
                  " " +
                  new Date(
                    Date.parse(data.book.read.slice(-1)[0].end)
                  ).getFullYear()}
              </b>
            </h1>
          ) : (
            ""
          )}

          {/*<div onClick={(e) => toggleForm()}>
            <IconContext.Provider
              value={{
                className: openForm ? "plus spin" : "plus",
              }}
            >
              <BsPlus />
            </IconContext.Provider>
          </div>

          <form
            className={
              openForm ? "add-container opened-add" : "add-container closed-add"
            }
            onSubmit={handleSubmit}
          >
            <div className="condensed">
              <div className="cell">
                <label>Progress</label>
                <input
                  type="number"
                  min="0"
                  onChange={(e) =>
                    setFormData({ ...formData, progress: e.target.value })
                  }
                ></input>
              </div>
              <div className="cell">
                <label>Type</label>
                <select name="type" id="type">
                  <option value="percentage">Percentage</option>
                  <option value="page">Page</option>
                </select>
              </div>
            </div>

            <label>Date</label>
            <input type="date"></input>
            <label>Note</label>
            <input type="text"></input>

            <label>Key</label>
            <input type="password"></input>
            <input type="submit" value="Add Entry"></input>
          </form>*/}
        </div>
      </div>

      <div className="toggle-bar" onClick={(e) => toggleBar()}></div>
    </div>
  );
};
export default DiaryBook;
