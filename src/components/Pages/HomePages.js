import Hheadar from "../Hheadar"
import Nav from "../Nav"
import Card from "../Card"
import Photo from "../Photo"
import Footer from "../Footer"

function HomePages(){

    return(
        <>
        <Hheadar/>
        <Nav/>
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
<Footer/>
        </>
    )
}

export default HomePages;