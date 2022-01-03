import React from "react";
import "./Home.css";
import Button from "../components/button/button";
import Logo from "../components/logo/logo";
import { useNavigate } from "react-router-dom";

const About = (props) => {
  const navigate = useNavigate();
  const ButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="Home">
      <div className="Home-header">
        <div className="Home-header-black-shade">
          <div className="Home-header-logo">
            <Logo />
          </div>
          <div className="Home-header-button">
            <div className="button-container">
              <Button onClick={ButtonClick}>HOME</Button>
              <Button active>ABOUT</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
