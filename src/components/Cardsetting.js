import React from "react";
import "./Cardsetting.css";
import ProfileSettings from "./ProfilSetting";
import PrImg from './PrImg';
import PrButton from "./PrButton";  
const Cardsetting = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="row w-100 border rounded p-4 shadow-lg profile-card">
<PrImg/>
        <ProfileSettings/>
        <PrButton/>
      </div>
    </div>
  );
};

export default Cardsetting;