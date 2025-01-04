import Hheadar from "../Hheadar";
import Nav from "../Nav";
import Footer from "../Footer";
import Definition from "../Definition"
import Symptoms from "../Symptoms"
import '../Symptoms.css'
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