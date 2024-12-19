<<<<<<< HEAD
import NutritionCard from "./components/NutritionistCard";
=======


import Types from './components/Types';
import Definition from './components/Definition'; 
import "./App.css";
import Photo from './components/Photo';
import Card from "./components/Card";
import Nav from './components/Nav';
import Hheadar from './components/Hheadar';

>>>>>>> 6abf3f229b845047036c8ca528bdd19fd2a583d7
function App() {
  return (
    <div className="d-flex flex-row justify-content-around">
      <NutritionCard
        name="Hala Jadallah"
        description="Nutritionist She holds a bachelor’s degree from An-Najah National University. She has a professional practice degree and 4 years of experience in the field of nutrition."
        email="hala.23.jadallah@gmail.com"
      />
      <NutritionCard
        name="Jenan Hawawre"
        description="Bachelor’s degree in Nutrition and Food Processing with a cumulative grade point
                    average of (3.25/4) in the first place
                    Specialization: 43rd Harijin Regiment, General Secondary School, Silat Al-Dhahar
                    Secondary Girls School"

        email="jenanhawawreh7@gmail.com"
      />

<<<<<<< HEAD
      <NutritionCard
        name="Heba Dawod"
        description="Bachelor of Nutrition and Food Processing An-Najah National University | 2017-2021 Cumulative Average 3.59 from 4
                    Building the character and skills of the age of knowledge and green technology by focusing on
                    the opportunities available to youths in the food value chain, An-Najah National University and FAO, September 2020"

        email="hebadawod2017@gmail.com"
      />
    </div>

  );
}
export default App;
=======
      
    
    {/* definition*/}
      <Definition/>
    
      {/* Cards Section */}
      <div >
        {/* card 1 */}
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

        {/* card 2 */}
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

        {/* card 3 */}
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

      {/* Photo Section */}
      <Photo />
    </>

  );
}

export default App;

>>>>>>> 6abf3f229b845047036c8ca528bdd19fd2a583d7
