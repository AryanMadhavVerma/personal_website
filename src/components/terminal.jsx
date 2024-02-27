import React, { useState } from "react";
import NewLine from "./newLine";
import Ls from "./ls";
import Cat from "./cat";

const Terminal = () => {
  const [numberOfLine, setNumberOfLine] = useState(0);
  const [terminalLines, setTerminalLines] = useState([
    { value: "", id: 0, displayInput: true, type: "line" },
  ]);

  const DATA = {
    name: "Aryan",
    commands: [
      { id: 10, type: "ls" },
      { id: 11, type: "cat" },
      { id: 12, type: "clear" },
      { id: 13, type: "cmd" },
      { id: 23, type: "help" },
    ],
    files: [
      { id: 14, type: "about.txt" },
      { id: 15, type: "current_work.txt" },
      { id: 16, type: "links.txt" },
      { id: 17, type: "do_not_open.txt" },
    ],
    help: [
      { id: 19, type: "cmd: List out all the commands" },
      { id: 20, type: "ls: List out all the files" },
      { id: 21, type: "cat <file>: Read the content of the file" },
      { id: 22, type: "clear: Clear the terminal" },
    ],
  };

  const handleCommand = (string_value, Tid) => {
    let res = string_value.split(" ");

    if (res[0] === "clear") {
      setNumberOfLine(0);
      setTerminalLines([
        { value: "", id: 0, displayInput: true, type: "line" },
      ]);
    } else {
      setTerminalLines((prevDisplay) => [
        ...prevDisplay.filter((l) => l.id !== Tid),
        {
          ...prevDisplay.find((l) => l.id === Tid),
          value: string_value,
          type: res[0],
        },
      ]);
      addNewLine();
    }
  };

  const addNewLine = () => {
    const num = terminalLines.length + 1;
    setNumberOfLine((prevNum) => prevNum + 1);
    setTerminalLines((prevDisplay) => [
      ...prevDisplay,
      { value: "", id: num, displayInput: true, type: "line" },
    ]);
  };

  return (
    <div className="container">
      <div className="terminal">
        <p className="prompt">
          my corner of the internet. explore by typing 'help'
        </p>

        {terminalLines.map((l) => {
          if (l.type === "line") {
            return (
              <NewLine
                key={l.id}
                handleCommand={handleCommand}
                line={l}
                displayInput={l.displayInput}
              />
            );
          } else if (l.type === "ls") {
            return <Ls key={l.id} line={l} files={DATA.files} />;
          } else if (l.type === "cmd") {
            return <Ls key={l.id} line={l} files={DATA.commands} />;
          } else if (l.type === "help") {
            return <Ls key={l.id} line={l} files={DATA.help} />;
          } else if (l.type === "cat") {
            return <Cat key={l.id} line={l} />;
          }
        })}
      </div>
    </div>
  );
};

export default Terminal;
