
 import Hheadar from "../Hheadar"
 import Nav from "../Nav"
 import Footer from "../Footer"
 import CardOptions from "../CardOptions"
 




  const FoodPaths=()=>{
return(
    <div>
         <Hheadar/>
         <Nav/>
    <CardOptions
      showT={true}
      options="option 1:"
     choice=" If you want to choose your own meals 
         choose your own foods 
       and arrange your own nutritional schedule 
        for all meals (breakfast, lunch, dinner) "
         

       imgoption="/photos/Meal-Planning.jpg"
     />
     <CardOptions
      showT={false}
      options="option 2:"

     choice=" If you want us to give you a ready-made schedule 
       that includes a complete menu for breakfast lunch and dinner
        suits your calories,"



       imgoption="/photos/meal.jpg"

      choice=" If you want us to give you a ready-made schedule 
            that includes a complete menu for breakfast lunch and dinner
             suits your calories,"
      imgoption="/photos/meal.jpg"

    />
    <Footer/>
  </div>

 );
 }
 export default FoodPaths;
 