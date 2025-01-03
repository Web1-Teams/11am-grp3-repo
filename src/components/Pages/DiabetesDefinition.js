import Definition from "../Definition";
import Hheadar from "../Hheadar";
import Nav from "../Nav";
import Footer from "../Footer";
import Types from "../Types";
import DibitesSection from "../DibitesSection";
// import Symptoms from "../Symptoms";

const DiabetesDefinition =()=>{
    return (

        <>
            <Hheadar />
            <Nav />
            <Definition
                image="/Images/inDefinition.jpg"
                width={600}
                title1="What Is Diabetes?"
                title2=" What Is Insulin?"
                styles={{ containerStyle: "Head_of_def", textStyle: "what_is_diabetes" }}
                imagePosition="left"
            />
            <DibitesSection />
            <Types />
            <Footer />
        </>


    )
}
export default DiabetesDefinition;