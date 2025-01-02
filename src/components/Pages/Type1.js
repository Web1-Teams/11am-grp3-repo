import Hheadar from "../Hheadar";
import Nav from "../Nav";
import Footer from "../Footer";
import Definition from "../Definition"
import Symptoms from "../Symptoms"
import '../Symptoms.css'
import TypeDef from "../TypeDef";
const type1Symptoms = ["Excessive thirst and hunger",
    "Dehydration, usually around the mouth",
    "Frequent urination",
    "Blurred vision",
    "Weight loss",
    "Fatigue",
    "Increased infections, and you may notice that cuts/wounds may take longer to heal"
]
const Type1 =()=>{
    return(
        <>
        <Hheadar/>
        <Nav/>
        <Definition
                image="/Images/Type1Patient.jpg"
                width="50%"
                title1="Type 1 diabetes"
                title2="To know what type 1 diabetes is and what its symptoms are"
                styles={{ containerStyle: "start_type1", textStyle: "title_type1" }}
                imagePosition="left"
            />
            <TypeDef 
                text="Type 1 diabetes is a condition where the body doesn’t make insulin
                due to to an autoimmune damage to insulin-producing cells (called beta-cells) found in the pancreas.
                Patients require and rely on insulin injections or pumps.

                risk increases with Genetic predisposition Having a family history of type 1 diabetes
                
                If you have type 1 diabetes, you can live a long, healthy life by having a strong support system and managing it with your diabetes care team.
                The treatment plan you develop with your diabetes care team will include insulin, physical activity,
                and an eating plan to reach your health goals."
            />
            <Symptoms
                image="/Images/Type1Symptoms.jpg"
                width="40%"
                Title="Type 1 Diabetes Symptoms"
                SubTitle="These are the symptoms that a type 1 diabetic patient usually feels,  which requires a blood sugar test."
                data={type1Symptoms}
            />
            <Footer/>
            </>
    )
}
export default Type1