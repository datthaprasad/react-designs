import React from "react";
import "./button.css";

const Button = (props) => {
  if (props.active) {
    return (
      <button className="button is-active" onClick={props.onClick}>
        {props.children}
      </button>
    );
  } else {
    return (
      <button className="button de-active" onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
};

export default Button;
