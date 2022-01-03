import React from "react";
import "./Home.css";
import Button from "../components/button/button";
import Logo from "../components/logo/logo";
import { Navigate, useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  const ButtonClick = () => {
    navigate("/about");
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
              <Button active>HOME</Button>
              <Button onClick={ButtonClick}>ABOUT</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
