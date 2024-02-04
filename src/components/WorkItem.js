// WorkItem.js

import React from "react";

const WorkItem = ({
  title,
  subTitle,
  description,
  link,
  threadLink,
  toggleTheme,
  mode,
  dropDownToggle,
  onToggle,
}) => {
  return (
    <div className="work-item py-2">
      <p className="text-base md:text-lg font-bold py-2">
        {title}
        <span className="subp px-2 font-normal">{subTitle}</span>
      </p>
      <p className="text-base md:text-lg">{description}</p>
      <p className="text-base md:text-lg">
        For more details, check out the{" "}
        <a
          className="underliner"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title} thread
        </a>
      </p>
      {threadLink && (
        <p className="text-base md:text-lg">
          Discuss on Twitter:{" "}
          <a
            className="underliner"
            href={threadLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {title} thread
          </a>
        </p>
      )}
      <button onClick={onToggle}>
        {dropDownToggle ? (
          <div className="mx-2 highlight text-base md:text-lg">collapse</div>
        ) : (
          <div className="mx-2 highlight text-base md:text-lg">expand</div>
        )}
      </button>
      {dropDownToggle && (
        <div>{/* ... (additional content when expanded) */}</div>
      )}
    </div>
  );
};

export default WorkItem;
