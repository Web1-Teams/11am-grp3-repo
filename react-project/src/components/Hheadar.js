import React from 'react'
import '../FirstComponents.css';
import logo from '../imges/logo-home.png'
const Hheadar = () => {
  return (
    <div className={"top"}>
      <img src={logo} class="homelogo" alt="logo"></img>
      <h1 className={"dianame "}>Diabetes Compass</h1>
      <button type="button" className={"btn"} id="sign"><strong>Sign In</strong></button>
    </div>
  );
};

export default Hheadar;