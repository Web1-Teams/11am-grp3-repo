import React from "react";
import Footer from "../Footer";
import Hheadar from "../Hheadar";
import Videocanva from "../Videocanva";
import ChallengeButton from "../ChallengeButton";
import Chooses from "../Chooses";
import Nav from "../Nav";


const Challengepage = () => {
  return (
    <div>
      
      <Hheadar />
      <Nav />
       <Videocanva/>
       <ChallengeButton />
        <Chooses/>
      <Footer />
    </div>
  );
};

export default Challengepage;
