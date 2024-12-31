import Hheadar from "../Hheadar";
import Nav from "../Nav";
import Footer from "../Footer";
import Definition from "../Definition"
import Symptoms from "../Symptoms"
import '../Symptoms.css'
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
           <Symptoms
                image="/Images/Type2_symptoms.jpg"
                width="50%"
                Title="Type 2 Diabetes Symptoms"
                SubTitle="These are the symptoms that a type 2 diabetic patient usually feels,  which requires a blood sugar test."
                data={type2Symptoms}
            />
            <Footer/>
            </>
    )
}
export default Type2    