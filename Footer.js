import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
       <GithubIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2022 Venkat.com</p>
    </div>
  );
}

export default Footer;
