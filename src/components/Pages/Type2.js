import Hheadar from "../Hheadar";
import Nav from "../Nav";
import Footer from "../Footer";
import Definition from "../Definition"
import Symptoms from "../Symptoms"
import '../Symptoms.css'
import TypeDef from "../TypeDef";
import NutritionCard from "../NutritionistCard";
const type2Symptoms = [
    "Excessive thirst and hunger",
    "Dehydration, usually around the mouth",
    "Frequent urination",
    "Blurred vision",
    "Weight loss",
    "Fatigue",
    "Increased infections, and you may notice that cuts/wounds may take longer to heal",
    "Tingling, pain, or numbness in the hands/feet",
]
const Type2 =()=>{
    return(
        <>
        <Hheadar/>
        <Nav/>
        <Definition
                image="/Images/Type2Patient.jpg"
                width="50%"
                title1="Type 2 diabetes"
                title2="To know what type 2 diabetes is and what its symptoms are"
                styles={{ containerStyle: "start_type1", textStyle: "title_type1" }}
                imagePosition="right"
            />
            <TypeDef
            text="Type 2 diabetes happens as a result of insulin resistance; where the body does not respond to insulin
                adequately/properly and
                can happen due to a decline in insulin production.
                Patients can manage their condition using medications or adapting a healthy lifestyle,
                but may later in life need insulin.

             risk increases with Genetic predisposition , Age , Being physical inactive , Being overweight/obese ,
                Unhealthy diet"
            />

           <Symptoms
                image="/Images/Type2_symptoms.jpg"
                width="50%"
                Title="Type 2 Diabetes Symptoms"
                SubTitle="These are the symptoms that a type 2 diabetic patient usually feels,  which requires a blood sugar test."
                data={type2Symptoms}
            />
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
            <Footer/>
            </>
    )
}
export default Type2    