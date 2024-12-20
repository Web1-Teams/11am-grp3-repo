
import Types from './components/Types';
import Definition from './components/Definition'; 
import "./App.css";

import Card from "./components/Card";
import Nav from './components/Nav';
import Hheadar from './components/Hheadar';
import Title1 from './components/Title1';
import NutritionCard from "./components/NutritionistCard";
import "./App.css";
import Photo from './components/Photo';
import Card from "./components/Card";
import Footer from "./components/Footer";
import Definition from "./components/Definition"; 

function App() {
  return (
    <div className="App">
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

      {/* Definition Component */}
      <Definition/>

      {/* Cards Section */}
      <div>
        <Card
          text="Diabetes is a chronic disease that occurs due to a defect in the secretion or function of insulin, or both..."
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
        <Footer/>
        
      </div>

      {/* Photo Section */}
      <Photo />
      <Title1/>
    </>

        <Photo />
        <Footer />
      </div>
    </div>
  );
}

export default App;
