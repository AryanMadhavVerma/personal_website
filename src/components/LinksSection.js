// LinksSection.js

import React from "react";

const LinksSection = () => {
  return (
    <div className="links-section px-10 py-2 sm:px-20 md:px-60">
      <ul className="links-list text-sm">
        <li>
          <a
            href="https://github.com/AryanMadhavVerma"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aryanmadhavverma/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default LinksSection;
