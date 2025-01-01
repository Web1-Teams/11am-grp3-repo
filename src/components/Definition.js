import React from 'react';
import './Definition.css';

const Definition = (props) => {
  return (
    <div className={props.styles.containerStyle}> 
    {props.imagePosition === "left" && <img src={props.image}  alt="" width={props.width}  />} 
      <div className={props.styles.textStyle}>
        <h1 id="title">{props.title1}</h1>
        <h1 id="subTitle">{props.title2}</h1>
      </div>
      {props.imagePosition === "right" && <img src={props.image}  alt="" width={props.width}  />}
    </div>
  );
};

export default Definition;
// "/Images/inDefinition.jpg"
// What Is Diabetes?
// What Is Insulin?
