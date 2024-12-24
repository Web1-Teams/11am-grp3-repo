
import Types from './components/Types';
import "./App.css";
import Photo from './components/Photo';
import Card from "./components/Card";
import Nav from './components/Nav';
import Hheadar from './components/Hheadar';
import Titell21 from './components/Titell21';
import NutritionCard from "./components/NutritionistCard";
import Footer from "./components/Footer";
import Definition from "./components/Definition"; 
import Button from './components/Button'
import EmailPassword from "./components/Emailpassword";
import Inputlabel from './components/Inputlabel'
import Inputlabel2 from './components/Inputlabel2';
import SocialIcon from './components/SocialIcon';
import Ways from './components/Ways'

 
function App() {
  return ( 
    <div className="App">
      

      {/* home page */}
      <Hheadar/>
      <Nav/>
      

    
      {/* Cards Section */}

      <div>
        
      <Card 
        text=" Diabetes is a chronic disease that occurs due to a defect in the secretion or function of insulin, or both. Insulin is a hormone produced by
          the pancreas that helps regulate blood glucose levels by enabling cells to absorb glucose for energy. In diabetes, either the body doesn’t
          produce enough insulin, as in Type 1 diabetes, or the cells become resistant to insulin, as in Type 2 diabetes. This defect leads to high 
          blood glucose levels, increasing the risk of serious health problems such as heart disease, nerve damage, and kidney disease."

          title="About Diabetes"
          image="/photos/db.jpg"
          btn="Read More"
          view={true}
        />
        <Card
          text="There are several ways to prevent diabetes. One of the most important methods is following a healthy diet..."
          title="Diabetes Prevention"
          image="/photos/health.jpg"
          btn="Read More"
          view={true}
        />
        <Card
          text="The project idea is to create a website dedicated to people with diabetes, helping them organize their daily lives..."
          title="About Project"
          image="/photos/project.jpg"
          view={false}

        />
        </div>
        <Photo />

        <Footer/>
        {/* difintion page*/}

       
             {/* Definition Component */}
      <Definition/>
        
<Types/>
{/* type2 page */}
      <div className="d-flex flex-row justify-content-around">
        <NutritionCard
          name="Hala Jadallah"
          description="Nutritionist She holds a bachelor’s degree from An-Najah National University. She has a professional practice degree and 4 years of experience in the field of nutrition."
          email="hala.23.jadallah@gmail.com"
        />
        <NutritionCard
          name="Jenan Hawawre"
          description="Bachelor’s degree in Nutrition and Food Processing with a cumulative grade point
                    average of (3.25/4) in the first place"
          email="jenanhawawreh7@gmail.com"
        />
        <NutritionCard
          name="Heba Dawod"
          description="Bachelor of Nutrition and Food Processing An-Najah National University | 2017-2021 Cumulative Average 3.59 from 4"
          email="hebadawod2017@gmail.com"
        />
      </div>

{/* tips page*/}
      <Titell21/>
      <Ways/>
{/* log in page*/}
      <EmailPassword/>
      <SocialIcon/>
    <Button titel="Log in"/>
{/* sign up page*/}
  
     
            
     
        <Inputlabel labeltitel="User name " labelfor="username" inputtype="text" inputname="txt" imagg="/photozeinad/icons8-name-48.png" />
    <Inputlabel labeltitel="Family name " labelfor="family name" inputtype="text" inputname="txt" imagg="/photozeinad/icons8-name-48.png" />
    <br/>
    <Inputlabel labeltitel="Your Email " labelfor="your Email" inputtype="email" inputname="email" imagg="/photozeinad/icons8-email-48.png" />
    <Inputlabel labeltitel="Password " labelfor="password" inputtype="password" inputname="password" imagg="/photozeinad/icons8-password-48.png" />
    <br/>
    <Inputlabel labeltitel="Phone No.: " labelfor="phone" inputtype="tel" inputname=" " imagg="/photozeinad/telephone.png" />
    <Inputlabel labeltitel="Birthday: " labelfor="birthday" inputtype="date" inputname="birthday" imagg="/photozeinad/date-of-birth.png" />
    <br/>
    <Inputlabel2  labeltitel="Length" labelfor="length" inputname="number" inputtype="number"   min="0"  step="1" imagg="/photozeinad/icons8-sewing-tape-measure-48.png"/>
    <Inputlabel2  labeltitel="Wight" labelfor="wight" inputname="number" inputtype="number"   min="0"  step="1" imagg="/photozeinad/icons8-scale-48.png"/>
    <br/>
    <Inputlabel labeltitel="when you wake up: " labelfor="appt1" inputtype="time" inputname="time" imagg="/photozeinad/icons8-wake-up-50.png" />
    <Inputlabel labeltitel="Set your bedtime: " labelfor="appt2" inputtype="time" inputname="time" imagg="/photozeinad/icons8-bedtime-32.png" />
    <br/>
    <Inputlabel labeltitel="Select a time of breakfast: " labelfor="appt3" inputtype="time" inputname="time" imagg="/photozeinad/icons8-coffee-48.png" />
    <br/>
    <Inputlabel labeltitel="Select a time of lunch: " labelfor="appt4" inputtype="time" inputname="time" imagg="/photozeinad/icons8-wrap-48.png" />
    <br/>
    <Inputlabel labeltitel="Select a time of dinner " labelfor="appt5" inputtype="time" inputname="time" imagg="/photozeinad/icons8-cutlery-32.png" />
    <br/>

    <Button titel="Sign up "/>
     
    </div>

  )

}




export default App;
