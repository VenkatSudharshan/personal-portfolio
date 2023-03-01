import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Venkat</h2>
        <div className="prompt">
          <p>A Software Developer passionate about creating clean and efficient code that solves complex problems.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Angular, HTML, CSS, NPM, BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End Frameworks and Technologies</h2>
            <span>
            Spring, Spring Boot, Node JS, RESTful API's, JPA, Hibernate, Postman, Swagger, 
            MySQL, Oracle SQL Developer, MongoDB 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python</span>
          </li>
          <li className="item">
            <h2>Other Skills</h2>
            <span>Docker, Azure App Services, Azure Kubernetes Services , Tableau, Weka</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
