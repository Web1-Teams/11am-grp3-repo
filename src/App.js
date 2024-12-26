
import Button2 from "./components/Button2";
import Types from "./components/Types";
import Photo from "./components/Photo";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Hheadar from "./components/Hheadar";
import Titell21 from "./components/Titell21";
import NutritionCard from "./components/NutritionistCard";
import Footer from "./components/Footer";
import Definition from "./components/Definition";
import Button from "./components/Button";
import EmailPassword from "./components/Emailpassword";
import SocialIcon from "./components/SocialIcon";
import CardOptions from "./components/CardOptions";
import Inputlabel from './components/Inputlabel'
import Inputlabel2 from './components/Inputlabel2';
import Ways from './components/Ways'

import Buttonmunual from './components/Buttonmunual';
import Cardformunual from './components/Cardformunual';

 


function App() {
  return (
    <div className="App">

      {/* home page */}
      <Hheadar />
      <Nav />

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
        <Photo />
        <Card
          text="There are several ways to prevent diabetes. One of the most important methods is following a healthy diet,
          such as consuming foods rich in fiber, whole grains, vegetables, and reducing the intake of sugars and processed foods.
          Additionally, regular physical activity helps improve blood sugar levels and reduces the risk of developing diabetes.
          It is also recommended to maintain a healthy weight and avoid smoking to lower the risk of type 2 diabetes. "
          title="Diabetes Prevention"
          image="/photos/health.jpg"
          btn="Read More"
          view={true}
        />
        <Card
          text="The project idea is to create a website dedicated to people with diabetes,
          helping them organize their daily lives by providing a personalized sign-in account,
          a customized meal plan, and insulin dose reminders. After logging in,
          users input their health data, type of diabetes,
          and dietary needs. Based on this information,
          the website generates a daily meal plan that fits their health condition and sends reminders for insulin injections. 
          The goal of this project is to simplify the management of diabetes by providing tools to track health regularly
          and ensure adherence to proper treatment and nutrition."
          title="About Project"
          image="/photos/project.jpg"
          view={false}
        />
      </div>

      <Footer />
      {/* difintion page*/}

      {/* Definition Component */}
      <Definition />

      <Types />
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
    <Cardformunual  imgeitem={['/photoformunual/Untitled.jpg','/photoformunual/avocado.jpg','/photoformunual/cum.jpg','/photoformunual/tomato.jpg','/photoformunual/chesse.webp','/photoformunual/labaneh.jpg','/photoformunual/falafel.jpg','/photoformunual/corn-f.jpg','/photoformunual/milk.jpg']} headerm="The Breakfast" food ={ ['Beard', 'avocado', 'cucumber','Tomato','Cheese',  'labneh', 'falafel', 'corn flakes', 'milk' ]}/> 
    <Cardformunual  imgeitem={['/photoformunual/kabsa.jpg','/photoformunual/white rice.jpg','/photoformunual/peas.jpg','/photoformunual/molokhya.jpg','/photoformunual/mansaf.jpg','/photoformunual/maqlobeh.jpg','/photoformunual/pasta.jpg','/photoformunual/musakhan.jpg','/photoformunual/pizza.jpg']} headerm="The Lunch" food ={ [ 'Kabsa', 'white rice', 'peas', 'molokhiya', 'mansaf', 'maqlubuh', 'pasta', 'musakhan',  'pizza' ]}/>
    <Cardformunual  imgeitem={['/photoformunual/Untitled.jpg','/photoformunual/labaneh.jpg','/photoformunual/hummus.jpg','/photoformunual/tomato.jpg','/photoformunual/cum.jpg','/photoformunual/chesse.webp','/photoformunual/tuna.jpg','/photoformunual/zatter.jpg','/photoformunual/EG1.gif']} headerm="The Dinner " food ={ [ 'Bread', 'labaneh', 'hummus', 'tomato', 'cucumber', 'Cheese', 'tuna', 'zatter',  'egg' ]}/>

    </div>

  )
=======
      {/* tips page*/}
      <Titell21 />
      <Ways />
      {/* log in page*/}
      <EmailPassword />
      <SocialIcon />
      <Button titel="Log in" />
      {/* sign up page*/}

      <Inputlabel
        labeltitel="User name "
        labelfor="username"
        inputtype="text"
        inputname="txt"
        imagg="/photozeinad/icons8-name-48.png"
      />
      <Inputlabel
        labeltitel="Family name "
        labelfor="family name"
        inputtype="text"
        inputname="txt"
        imagg="/photozeinad/icons8-name-48.png"
      />
      <br />
      <Inputlabel
        labeltitel="Your Email "
        labelfor="your Email"
        inputtype="email"
        inputname="email"
        imagg="/photozeinad/icons8-email-48.png"
      />
      <Inputlabel
        labeltitel="Password "
        labelfor="password"
        inputtype="password"
        inputname="password"
        imagg="/photozeinad/icons8-password-48.png"
      />
      <br />
      <Inputlabel
        labeltitel="Phone No.: "
        labelfor="phone"
        inputtype="tel"
        inputname=" "
        imagg="/photozeinad/telephone.png"
      />
      <Inputlabel
        labeltitel="Birthday: "
        labelfor="birthday"
        inputtype="date"
        inputname="birthday"
        imagg="/photozeinad/date-of-birth.png"
      />
      <br />
      <Inputlabel2
        labeltitel="Length"
        labelfor="length"
        inputname="number"
        inputtype="number"
        min="0"
        step="1"
        imagg="/photozeinad/icons8-sewing-tape-measure-48.png"
      />
      <Inputlabel2
        labeltitel="Wight"
        labelfor="wight"
        inputname="number"
        inputtype="number"
        min="0"
        step="1"
        imagg="/photozeinad/icons8-scale-48.png"
      />
      <br />
      <Inputlabel
        labeltitel="when you wake up: "
        labelfor="appt1"
        inputtype="time"
        inputname="time"
        imagg="/photozeinad/icons8-wake-up-50.png"
      />
      <Inputlabel
        labeltitel="Set your bedtime: "
        labelfor="appt2"
        inputtype="time"
        inputname="time"
        imagg="/photozeinad/icons8-bedtime-32.png"
      />
      <br />
      <Inputlabel
        labeltitel="Select a time of breakfast: "
        labelfor="appt3"
        inputtype="time"
        inputname="time"
        imagg="/photozeinad/icons8-coffee-48.png"
      />
      <br />
      <Inputlabel
        labeltitel="Select a time of lunch: "
        labelfor="appt4"
        inputtype="time"
        inputname="time"
        imagg="/photozeinad/icons8-wrap-48.png"
      />
      <br />
      <Inputlabel
        labeltitel="Select a time of dinner "
        labelfor="appt5"
        inputtype="time"
        inputname="time"
        imagg="/photozeinad/icons8-cutlery-32.png"
      />
      <br />

      <Button titel="Sign up " />


      <div>
        <CardOptions
          showT={true}
          options="option 1:"
          choice=" If you want to choose your own meals 
              choose your own foods 
              and arrange your own nutritional schedule 
              for all meals (breakfast, lunch, dinner) "
             

          imgoption="/photos/Meal-Planning.jpg"
        />
        <CardOptions
          showT={false}
          options="option 2:"
          choice=" If you want us to give you a ready-made schedule 
                that includes a complete menu for breakfast lunch and dinner
                 suits your calories,"


          imgoption="/photos/meal.jpg"
        />
      </div>
 <div class="spacing">
        <Button text="Home" />
        <Button text="Table 1"/>
        <Button text="Table 2" />
        <Button text="Profile settings"/>
    </div>
    
    </div>
  );
}


export default App;