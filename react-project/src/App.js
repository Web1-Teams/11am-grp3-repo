import NutritionCard from "./components/NutritionistCard";
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