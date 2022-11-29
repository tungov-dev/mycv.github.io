import { FC } from "react";

const About: FC = () => {
  return (
    <>
      <h1 style={{ alignContent: "center" }}>Hi 👋, I'm Tung Dev</h1>
      <h3 style={{ alignContent: "center" }}>
        A passionate frontend developer from Vietnam
      </h3>
      <p style={{ alignContent: "left" }}>
        {" "}
        <img
          src="https://komarev.com/ghpvc/?username=tungov-dev&label=Profile%20views&color=0e75b6&style=flat"
          alt="tungov-dev"
        />{" "}
      </p>
      <h3 style={{ alignContent: "left" }}>Connect with me:</h3>
      <p style={{ alignContent: "left" }}>
        <a
          href="https://linkedin.com/in/https://www.linkedin.com/in/tungov-dev/"
          target="blank"
        >
          <img
            style={{ alignContent: "center" }}
            src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
            alt="https://www.linkedin.com/in/tungov-dev/"
            height="30"
            width="40"
          />
        </a>
      </p>
      <h3 style={{ alignContent: "left" }}>Languages and Tools:</h3>
      <p style={{ alignContent: "left" }}>
        {" "}
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a href="https://postman.com" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="postman"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="typescript"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
      </p>
    </>
  );
};

export default About;
