import React, { useState, useEffect, useRef } from "react";

const NewLine = ({ line, handleCommand }) => {
  const [id, setId] = useState(line.id);
  const [value, setValue] = useState(line.value);
  const [displayInput, setDisplayInput] = useState(line.displayInput);
  const inputRef = useRef(null);

  useEffect(() => {
    setId(line.id);
    setValue(line.value);
    setDisplayInput(line.displayInput);
  }, [line]);

  useEffect(() => {
    if (displayInput) {
      inputRef.current.focus();
    }
  }, [displayInput]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handelEnter = (event) => {
    if (event.key === "Enter") {
      handleCommand(value, id);
    }
  };

  const badgeChange = () => {
    let badge = "prompt ";
    badge += displayInput ? "output new-output" : "";
    return badge;
  };

  const addNewLine = () => {
    setDisplayInput(true);
  };

  return (
    <React.Fragment>
      <p className={badgeChange()} onClick={addNewLine}>
        {displayInput && (
          <input
            type="text"
            className="here"
            ref={inputRef}
            value={value}
            onChange={handleChange}
            onKeyDown={handelEnter}
            autoFocus
          />
        )}
        {value}
      </p>
    </React.Fragment>
  );
};

export default NewLine;
