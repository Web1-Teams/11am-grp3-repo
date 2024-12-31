import Definition from "../Definition";
import Types from "../Types";
import Nav from "../Nav";
import Hheadar from "../Hheadar";
import Footer from "../Footer";
import Symptoms from "../Symptoms";

    const type1Symptoms = ["Excessive thirst and hunger",
        "Dehydration, usually around the mouth",
        "Frequent urination",
        "Blurred vision",
        "Weight loss",
        "Fatigue",
        "Increased infections, and you may notice that cuts/wounds may take longer to heal"
    ]

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

const DiabetesDefinition =()=>{
    return (

        <>
            {/* <Hheadar /> */}
            <Nav />
            <Definition
                image="/Images/inDefinition.jpg"
                width={600}
                title1="What Is Diabetes?"
                title2=" What Is Insulin?"
                styles={{ containerStyle: "Head_of_def", textStyle: "what_is_diabetes" }}
                imagePosition="left"
            />
            <Types />

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
                //  height="20%"
                Title="Type 2 Diabetes Symptoms"
                SubTitle="These are the symptoms that a type 2 diabetic patient usually feels,  which requires a blood sugar test."
                data={type2Symptoms}
            />

            {/* <Footer/> */}
        </>


    )
}
export default DiabetesDefinition;