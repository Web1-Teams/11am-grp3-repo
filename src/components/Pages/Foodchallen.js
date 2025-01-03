import React from "react";
import Footer from "../Footer";
import Hheadar from "../Hheadar";
import  BackToChallengesButton from "../BackToChallengesButton"
import TypesOfMeals from "../TypesOfMeals";
import FoodSnack from "../FoodSnack";
import SnackList from "../SnackList";
import Nav from "../Nav";
import Challengeee from "../Challengeee";


const Foodchallen = () => {
    return (
      <div>
      
        <Hheadar />
        <Nav />
         < BackToChallengesButton/> 
         <Challengeee cha="Food Challenge" />
         <Challengeee cha="Snack Challenge" className="container"/>


         <TypesOfMeals
    icon="bi bi-sun meal-icon"
    MealName="Breakfast"
    enterString="Enter Breakfast"
   />
   <TypesOfMeals
       icon="bi bi-sun-fill meal-icon"
       MealName="Lunch"
       enterString="Enter Lunch"
   />
   <TypesOfMeals
     icon="bi bi-moon meal-icon"
     MealName="Dinner"
     enterString="Enter Dinner"
   />

      
          <FoodSnack/>
          <SnackList/>
          
        <Footer />
      </div>
    );
  };
  
  export default Foodchallen;
  