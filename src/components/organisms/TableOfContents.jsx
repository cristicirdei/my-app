import React, { useEffect, useState } from "react";

import { useHeadsObserver } from "../../utils/hooks";

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);
  const { activeId } = useHeadsObserver();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h3, h4, h5")).map(
      (elem) => ({
        id: elem.id,
        text: elem.innerText,
        level: Number(elem.nodeName.charAt(1)),
      })
    );
    setHeadings(elements);
  }, []);

  const getClassName = (level) => {
    switch (level) {
      case 2:
        return "head2";
      case 3:
        return "head3";
      case 4:
        return "head4";
      default:
        return null;
    }
  };

  console.log("activeId", activeId);

  return (
    <nav>
      <ul>
        <li>CONTENTS</li>
        {headings.map((heading) => (
          <li key={heading.id} className={getClassName(heading.level)}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: "smooth",
                });
              }}
              style={{
                fontWeight: activeId === heading.id ? "bold" : "normal",
                color: activeId === heading.id ? "black" : "gray",
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
