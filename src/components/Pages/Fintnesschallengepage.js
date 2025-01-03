import React from "react";
import Footer from "../Footer";
import Hheadar from "../Hheadar";
import BackToChallengesButton from "../BackToChallengesButton";
import Nav from "../Nav";
import FintnessChallenge from "../FintnessChallenge" 

const Fintnesschallengepage = () => {
    return (
      <div>
          <Nav />
        <Hheadar />
         <BackToChallengesButton/>
         <FintnessChallenge/>
        <Footer />
      </div>
    );
  };
  
  export default Fintnesschallengepage;
  