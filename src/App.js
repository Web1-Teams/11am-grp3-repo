
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
import SocialIcon from './components/SocialIcon';
import Ways from './components/Ways'
import Table from './components/Table';
 


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

    <Table 
        title="*The table contains 1000 calories" 
        rows={[
          { meal: "Breakfast", food: "Half a small Samra cup + two tablespoons of labneh + a small tablespoon of olive oil + a cup of fresh vegetables /A piece of brown toast + a boiled egg + two spoons of avocado + a cup of fresh vegetables/Half a small brown bag + a square of cheese the size of a matchbox + a small spoon of olive oil + a cup of fresh vegetables", insulin: "1 units" },
          { meal: "Snack 1", food: "Medium banana + half a tablespoon of peanut butter /Medium apple + 10 pistachios /1 kiwi + 6 almonds", insulin: "1 unit" },
          { meal: "Lunch", food: "10 spoons of rice (2/3 cup) + half a grilled chicken breast without the skin + two scoops of molokhiya /15 tablespoons of bulgur (a cup) + two pieces of turkey meat the size of a matchbox + two scoops of green beans /15 spoons of freekeh + half a grilled chicken breast without the skin + a cup of salad + side vegetables", insulin: "3 units" },
          { meal: "Snack 2", food: "3 small dates + a cup of low-fat milk/coffee with milk (sugar-free)/Homemade shake (a cup of low-fat milk + a banana)/ A handful of berries + two-thirds of a cup of raw milk", insulin: "1 unit" },
          { meal: "Dinner", food: "3 spoons of chickpeas + cucumber and carrot sticks /Half a small cup + a square of cheese + vegetables /Half a cup of boiled beans + vegetables", insulin: "1 units" },
        ]}
      />
      <Table 
        title="*The table contains 1600 calories" 
        rows={[
          { meal: "Breakfast", food: "1 cup of milk + half a cup of oats + 1 apple./1 cup of milk + 1 crisp biscuit (without chocolate) + 1 apple./1 cup of milk + 1 slice of bread + 5 strawberries", insulin: "3 units" },
          { meal: "Snack 1", food: "A cup of corn or cob", insulin: "2 units" },
          { meal: "Lunch", food: "Grilled chicken breast + grilled vegetables (tomatoes, peppers, carrots, onions) + 3 slices of toast./3 kofta fingers + grilled vegetables (tomatoes, peppers, carrots, onions) + 3 slices of toast./ A cup of tuna fish + 3 slices of toast + vegetables", insulin: "3 units" },
          { meal: "Snack 2", food: "A handful of nuts, equivalent to 12 pieces.", insulin: "0 units" },
          { meal: "Dinner", food: "Manakish with oil and thyme, topped with small pieces of cheese + vegetables./2 tablespoons olive oil + thyme + 2 tablespoons labneh + 3 slices of toast./ Boiled egg + 2 tablespoons avocado + 3 slices of toast.", insulin: "3 units" },
        ]}
      />
      <Table 
        title="*The table contains 1800 calories" 
        rows={[
          { meal: "Breakfast", food: "1 small loaf of brown bread + 2 tablespoons avocado + 2 eggs fried with a tablespoon of olive oil + a plate of vegetables./1 small loaf of brown bread + 2 tablespoons of olive oil + thyme + 4 tablespoons of labneh + a plate of vegetables./ Half a loaf of small brown bread + 3 tablespoons of chickpeas + 1 tablespoon of olive oil + 2 cubes of cheese the size of a matchbox + a plate", insulin: "2 units" },
          { meal: "Snack 1", food: "1 cup of milk or yoghurt + 1 small banana + 10 pistachios./ 1 cup of milk or laban + 3 small dates + half a tablespoon of peanut butter./ 1 cup of milk + half a cup of pomegranate + 6 almonds or cashew nuts.", insulin: "2 units" },
          { meal: "Lunch", food: "A cup of kabsa rice or maqluba beans (7 to 8 tablespoons) + a whole chicken breast without fat + 2 cups of Arabic salad + 1 cup of yoghurt./ 1 small loaf of brown bread + a tray of potatoes (half a medium-sized potato + a whole chicken breast without fat) + 2 cups of Arabic salad + 1 cup of milk./ A cup of rice (7 to 8 tablespoons) or a loaf and a half of small brown bread + fajitas (cut whole fat-free chicken breast + mixed vegetables, peppers, corn, onions, tomatoes) + 1 cup of milk", insulin: "4 units" },
          { meal: "Snack 2", food: "Half a cup of balila (cooked chickpeas) or Qadma + 3 dates./ Half a cup of thermos + 1 small apple./Half a cup of cooked beans + 1 orange.", insulin: "2 units" },
          { meal: "Dinner", food: "1 small loaf of brown bread + 1 boiled egg + 2 tablespoons avocado + plate of vegetables./ 1 loaf of small brown bread + 2 tablespoons of labneh + 1 tablespoon of olive oil + thyme + a plate of vegetables./ 1 small loaf of brown bread + 2 cubes of cheese the size of a matchbox + 10 olives + a plate of vegetables.", insulin: "2 units" },
        ]}
      />
  
    </div>

  )

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
              for all meals (breakfast, lunch, dinner) 
             

          imgoption="/photos/Meal-Planning.jpg"
        />
        <CardOptions
          showT={false}
          options="option 2:"
          choice=" If you want us to give you a ready-made schedule 
                that includes a complete menu for breakfast lunch and dinner
                 suits your calories,


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
