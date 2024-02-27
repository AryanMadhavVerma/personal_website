import React, { useState, useEffect } from "react";

const Cat = ({ line }) => {
  const [type, setType] = useState(line.type);
  const [value, setValue] = useState(line.value);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setAnimationComplete(false);

    //simulating animation delay

    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 2000);

    return () => clearTimeout(animationTimeout);
  }, [line]);

  const DATA = {
    about:
      "software engineer with a year of experience building 0-1 products.\ncruising through life while getting paid to solve problems and build cool stuff",
    current_work:
      "building AI driven product analytics at Houseware, a b2b saas startup. im responsible to create, develop and maintain the service powering AI usecases",
    links: [
      {
        linkName: "Github",
        linkUrl: "https://github.com/AryanMadhavVerma",
      },
      {
        linkName: "Resume",
        linkUrl:
          "https://drive.google.com/file/d/1KGzHfYmA_Sw-36to7FfxT5gl18Cy3lss/view?usp=sharing",
      },
      {
        linkName: "Blog",
        linkUrl: "https://blog.aryanmadhavverma.com/",
      },
    ],
  };

  useEffect(() => {
    setType(line.type);
    setValue(line.value);
  }, [line]);

  useEffect(() => {
    setAnimationComplete(false);

    //simulating animation delay
    if (line.type === "cat" && line.value.includes("do_not_open")) {
      const animationTimeout = setTimeout(() => {
        setAnimationComplete(true);
      }, 2000);

      return () => clearTimeout(animationTimeout);
    } else {
      setAnimationComplete(false);
    }
  }, [line]);

  const handleAbout = () => <p className="result">{DATA.about}</p>;

  const handleCurrentWork = () => <p className="result">{DATA.current_work}</p>;

  const handleLinks = () => (
    <React.Fragment>
      {DATA.links.map((everyLink) => (
        <p className="result" key={everyLink.linkName}>
          {everyLink.linkName}
          <a href={everyLink.linkUrl} target="_blank" rel="noopener noreferrer">
            click to open
          </a>
        </p>
      ))}
    </React.Fragment>
  );

  const handleNewFile = () => {
    if (animationComplete) {
      return (
        <div className="pixel-animation">
          <p className="pixelart-to-css"></p>
          <p className="result">type clear to remove</p>
        </div>
      );
    } else {
      return <p className="result">Loading...</p>;
    }
  };

  const handleCd = () => {
    const navigation = value.split(" ")[1];
    if (navigation) {
      const lower = navigation.toLowerCase();
      switch (lower) {
        case "about":
        case "about.txt":
          return handleAbout();
        case "current_work":
        case "current_work.txt":
          return handleCurrentWork();
        case "links":
        case "links.txt":
          return handleLinks();
        case "do_not_open":
        case "do_not_open.txt":
          return handleNewFile();
        default:
          return <p className="result">Oops wrong input</p>;
      }
    } else {
      return <p className="result">Oops wrong input</p>;
    }
  };

  return (
    <React.Fragment>
      <p className="prompt"> {value} </p>
      {handleCd()}
    </React.Fragment>
  );
};

export default Cat;
