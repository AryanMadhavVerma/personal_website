// Section.js

import React from "react";

const Section = ({
  title,
  content,
  refs,
  dropDownToggle,
  setDropDownToggle,
  toggleTheme,
  mode,
}) => {
  return (
    <div
      className={`section px-10 py-4 sm:px-20 md:px-60 ${
        mode === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      <h2 className="text-xl pb-1">{title}</h2>
      <p className="text-base md:text-lg">{content}</p>
      <button onClick={() => setDropDownToggle((prev) => !prev)}>
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

export default Section;
