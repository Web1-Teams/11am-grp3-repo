import React from "react";
import "./CardOptions.css";

const CardOptions = (props) => {
  const title = props.showT ? (
    <div className="title">
      <p>
        You have the following two paths to choose your final schedule <br />
        choose one of them:
      </p>
    </div>
  ) : null;
  return (
    <div>
      {title}
      <div className="text-box">
        <div className="text">
          <h2>{props.options}</h2>
          <p>
            <br /> {props.choice}
            <br />
            <b>click Continue.</b>
          </p>
          <button type="button" className="btn1">
            Continue
          </button>
        </div>
        <img src={props.imgoption} className="img1" alt="Meal Planning" />
      </div>
    </div>
  );
};

export default CardOptions;
