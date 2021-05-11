import React from "react";
import { ImLinkedin, ImGithub } from "react-icons/im";
import "./Footer.css";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer">
      <p>Created by:</p>
      <div className="git">
        <a href="https://www.linkedin.com/in/luismatos19/" target="_blank">
          <ImLinkedin />
        </a>
        <a href="https://github.com/Luismatos19 " target="_blank">
          <ImGithub />{" "}
        </a>
      </div>
    </div>
  </>
);

export default Footer;
