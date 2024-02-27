import React, { useState, useEffect } from "react";

const Ls = ({ line, files }) => {
  const [type, setType] = useState(line.type);
  const [value, setValue] = useState(line.value);

  const style = {
    listStyleType: "none",
  };

  useEffect(() => {
    setType(line.type);
    setValue(line.value);
  }, [line]);

  return (
    <React.Fragment>
      <p className="prompt"> {type} </p>
      <ul style={style}>
        {files.map((l) => (
          <li key={l.id} className="result">
            {l.type}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Ls;
