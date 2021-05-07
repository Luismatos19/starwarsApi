import React from 'react';
import { ImLinkedin, ImGithub } from 'react-icons/im';
import './Footer.css'

import './Footer.css';


const Footer = () => (
  <>
    <div className="footer">
      <p>Created by:</p>
      <div className="linkdin"><ImLinkedin /></div>
      <div className="git" ><ImGithub /> </div>
    </div>
  </>
);

export default Footer;
