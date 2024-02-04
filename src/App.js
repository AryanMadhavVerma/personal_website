// App.js

import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import WorkItem from "./components/WorkItem";
import { lightTheme, darkTheme } from "./theme";

const App = () => {
  const workRef = useRef(null);
  const fitnessRef = useRef(null);
  const musicRef = useRef(null);
  const [theme, setTheme] = useState(lightTheme);
  const [mode, setMode] = useState("light");
  const [dropDownToggle1, setDropDownToggle1] = useState(false);
  const [dropDownToggle2, setDropDownToggle2] = useState(false);
  const [dropDownToggle3, setDropDownToggle3] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className =
      theme === lightTheme ? "light-theme" : "dark-theme";
  }, [theme]);

  return (
    <div
      className={`home ${theme === darkTheme ? "dark-theme" : "light-theme"}`}
    >
      <Header toggleTheme={toggleTheme} mode={mode} />
      <Section
        title="Hey there,"
        content="Welcome to my tiny corner of the internet. You can find me writing a little bit about myself, my "
        toggleTheme={toggleTheme}
        mode={mode}
      >
        You can find me writing a little bit about myself, my{" "}
        <a
          href="#"
          className="highlight"
          onClick={() =>
            workRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          work experience
        </a>
        , my thoughts around{" "}
        <a
          href="#"
          className="highlight"
          onClick={() =>
            fitnessRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          fitness
        </a>
        , and my inclination towards{" "}
        <a
          href="#"
          className="highlight"
          onClick={() =>
            musicRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          music.
        </a>
      </Section>

      <Section
        title="About me"
        content="I’m Aryan, an engineering student at BITS Pilani. Pursuing my degree as a side hustle, my interests revolve around software systems, startups, human psychology and fitness."
        toggleTheme={toggleTheme}
        mode={mode}
      >
        I’m Aryan, an engineering student at BITS Pilani. Pursuing my degree as
        a side hustle, my interests revolve around software systems, startups,
        human psychology and fitness.
      </Section>

      <Section
        title="Work"
        content="Check my resume for detailed work experience. For my open-source contributions, head over to github."
        toggleTheme={toggleTheme}
        mode={mode}
      >
        <WorkItem
          title="recaller.live"
          subTitle="personal project"
          description="recaller is a micro-app I created to cater to my need to get whatever I wrote directly on my email, in scheduled intervals of time."
          link="http://recaller.live"
          threadLink="https://twitter.com/aryanmadhaverma/status/1597903921787596800?s=20&t=fVqn8L6nWlF4WXbUXPOLbg"
          toggleTheme={toggleTheme}
          mode={mode}
          dropDownToggle={dropDownToggle1}
          onToggle={() => setDropDownToggle1((prev) => !prev)}
        />
        {/* ... (other work items) */}
      </Section>

      <Section
        title="Fitness"
        content="Seeing how the body is capable of immense strength under stress got me interested in testing my physical limits. I’m still a beginner in this journey who has just scratched the surface."
        toggleTheme={toggleTheme}
        mode={mode}
      >
        {/* ... (other content) */}
      </Section>

      <Section
        title="Music"
        content="Music has been a part of my life since childhood. I used to do gigs, go for competitions and sing in a choir during my high-school days. Its been half a decade since I’ve done any such activity."
        toggleTheme={toggleTheme}
        mode={mode}
      >
        {/* ... (other content) */}
      </Section>

      <Section
        title="Connect"
        content="I'm always up for a good conversation. Dm me on twitter or send me a mail."
        toggleTheme={toggleTheme}
        mode={mode}
      >
        <div className="float-left py-8">
          <p className="text-xs subp">Last updated @21-12-2022</p>
          <p className="text-xs subp">
            Made with react, hosted on github pages
          </p>
        </div>
        {/* ... (other content) */}
      </Section>
    </div>
  );
};

export default App;
