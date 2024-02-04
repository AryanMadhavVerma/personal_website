import React from "react";
import { DarkModeToggle } from "@anatoliygatt/dark-mode-toggle";

const Header = ({ toggleTheme, mode }) => {
  return (
    <div className="header px-10 py-2 sm:px-20 md:px-60">
      <div className="logo">
        <p className="text-base md:text-lg">
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            aryanmadhavverma
          </a>
        </p>
      </div>
      <div>
        <div className="mt-2 ">
          <DarkModeToggle
            mode={mode}
            onClick={toggleTheme}
            dark=""
            light=""
            size="sm"
            inactiveTrackColor="#FCFCFC"
            inactiveTrackColorOnHover="#FCFCFC"
            inactiveTrackColorOnActive="#FCFCFC"
            activeTrackColor="#ff9400"
            activeTrackColorOnHover="#ff9400"
            activeTrackColorOnActive="#2C2C2C"
            inactiveThumbColor="#ff9400"
            activeThumbColor="#FCFCFC"
            onChange={toggleTheme}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
